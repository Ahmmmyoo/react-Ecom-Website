import { useMemo, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import products from './data/products';
import { formatCurrency } from './utils/formatters';

const FREE_SHIPPING_THRESHOLD = 2500;
const ESTIMATED_TAX_RATE = 0.08;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...new Set(products.map((product) => product.category))],
    []
  );

  const featuredProducts = useMemo(
    () => products.filter((product) => product.featured).slice(0, 3),
    []
  );

  const visibleProducts = useMemo(() => {
    if (activeCategory === 'All') {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const cartLookup = useMemo(
    () => Object.fromEntries(cartItems.map((item) => [item.id, item.quantity])),
    [cartItems]
  );

  const itemCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );

  const shipping = cartItems.length === 0
    ? 0
    : subtotal >= FREE_SHIPPING_THRESHOLD
      ? 0
      : 24;
  const estimatedTax = subtotal * ESTIMATED_TAX_RATE;
  const orderTotal = subtotal + shipping + estimatedTax;
  const freeShippingRemaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);

  const addToCart = (product) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find((item) => item.id === product.id);

      if (existingItem) {
        return previousItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, nextQuantity) => {
    if (nextQuantity <= 0) {
      setCartItems((previousItems) =>
        previousItems.filter((item) => item.id !== id)
      );
      return;
    }

    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id ? { ...item, quantity: nextQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((previousItems) => previousItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen text-slate-900">
      <Header cartCount={itemCount} />

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <section
          id="home"
          className="hero-grid fade-up rounded-[32px] border border-white/60 bg-white/70 p-6 shadow-[0_30px_120px_rgba(15,23,42,0.08)] backdrop-blur xl:p-8"
        >
          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <span className="section-label">
                Premium Apple Commerce Experience
              </span>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Curated storefront for modern retail teams
                </p>
                <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-slate-950 sm:text-5xl xl:text-6xl">
                  Showcase flagship devices with a storefront that feels ready
                  for launch.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Luma Storefront combines editorial product storytelling,
                  polished cart interactions, and premium visual design into a
                  single responsive React project built for presentation-grade
                  demos.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#collection"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Explore Collection
                </a>
                <a
                  href="#cart"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400"
                >
                  Review Cart
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="metric-card">
                <p className="text-3xl font-bold text-slate-950">24h</p>
                <p className="mt-2 text-sm text-slate-600">
                  Dispatch promise on in-stock devices.
                </p>
              </div>
              <div className="metric-card">
                <p className="text-3xl font-bold text-slate-950">4.9/5</p>
                <p className="mt-2 text-sm text-slate-600">
                  Average experience rating across premium support requests.
                </p>
              </div>
              <div className="metric-card">
                <p className="text-3xl font-bold text-slate-950">2500+</p>
                <p className="mt-2 text-sm text-slate-600">
                  Orders configured with white-glove onboarding every quarter.
                </p>
              </div>
            </div>
          </div>

          <div className="spotlight-card fade-up-delay rounded-[28px] p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
                  Featured Lineup
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                  Built for premium merchandising
                </h2>
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200">
                {visibleProducts.length} live products
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {featuredProducts.map((product) => (
                <article
                  key={product.id}
                  className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/6 p-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-20 w-20 rounded-2xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                          {product.category}
                        </p>
                        <h3 className="mt-1 font-display text-lg font-semibold text-white">
                          {product.name}
                        </h3>
                      </div>
                      <span className="text-sm font-semibold text-white">
                        {formatCurrency(product.price)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {product.tagline}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-4 rounded-[24px] border border-white/10 bg-white/8 p-5 sm:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                  Order Snapshot
                </p>
                <p className="mt-3 text-3xl font-bold text-white">
                  {itemCount.toString().padStart(2, '0')}
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  items currently configured in the cart.
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                  Current Subtotal
                </p>
                <p className="mt-3 text-3xl font-bold text-white">
                  {formatCurrency(subtotal)}
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Free shipping unlocks at {formatCurrency(FREE_SHIPPING_THRESHOLD)}.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="glass-panel rounded-[28px] p-6">
            <p className="section-label">Precision Catalog</p>
            <h2 className="mt-4 font-display text-2xl font-semibold text-slate-950">
              Editorial product content
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Each card combines positioning, specs, availability, and feature
              chips so the catalog feels curated instead of mechanical.
            </p>
          </article>

          <article className="glass-panel rounded-[28px] p-6">
            <p className="section-label">Flexible Checkout</p>
            <h2 className="mt-4 font-display text-2xl font-semibold text-slate-950">
              Clear pricing signals
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The cart now supports quantity changes, shipping thresholds, tax
              estimates, and a cleaner order summary for believable demos.
            </p>
          </article>

          <article className="glass-panel rounded-[28px] p-6">
            <p className="section-label">Responsive System</p>
            <h2 className="mt-4 font-display text-2xl font-semibold text-slate-950">
              Built to present well anywhere
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Large-screen merchandising, mobile-friendly navigation, and
              cohesive spacing make the project feel polished across breakpoints.
            </p>
          </article>
        </section>

        <section
          id="collection"
          className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_24rem]"
        >
          <ProductsList
            products={visibleProducts}
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            onAddToCart={addToCart}
            cartItemsById={cartLookup}
          />

          <Cart
            cartItems={cartItems}
            subtotal={subtotal}
            shipping={shipping}
            estimatedTax={estimatedTax}
            orderTotal={orderTotal}
            freeShippingRemaining={freeShippingRemaining}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        </section>

        <section
          id="about"
          className="grid gap-8 rounded-[32px] bg-slate-950 px-6 py-8 text-white shadow-[0_24px_90px_rgba(15,23,42,0.22)] md:grid-cols-[1.2fr_0.8fr] md:px-8"
        >
          <div className="space-y-5">
            <span className="section-label border-white/20 bg-white/10 text-slate-200">
              Why It Feels Professional
            </span>
            <h2 className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
              A cleaner structure, sharper visual system, and stronger
              interaction model lift this from demo to portfolio piece.
            </h2>
            <p className="max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              The project now tells a fuller story: premium brand language,
              intentional sectioning, richer product data, and a believable
              cart workflow that makes the experience feel complete.
            </p>
          </div>

          <div className="grid gap-4">
            <article className="rounded-[24px] border border-white/10 bg-white/8 p-5">
              <h3 className="font-display text-lg font-semibold">
                Premium first impression
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                New typography, gradients, glassmorphism, and spacing rules give
                the app a stronger visual identity.
              </p>
            </article>
            <article className="rounded-[24px] border border-white/10 bg-white/8 p-5">
              <h3 className="font-display text-lg font-semibold">
                Better code ergonomics
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Shared pricing helpers, clearer product fields, and focused
                component responsibilities make the code easier to extend.
              </p>
            </article>
            <article className="rounded-[24px] border border-white/10 bg-white/8 p-5">
              <h3 className="font-display text-lg font-semibold">
                Stronger demo narrative
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Metrics, feature messaging, and a more complete order summary
                help the storefront present well in interviews or portfolios.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="border-t border-slate-200/70 bg-white/75 backdrop-blur"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-display text-lg font-semibold text-slate-950">
              Luma Storefront
            </p>
            <p className="mt-1">
              Professional React e-commerce UI focused on premium device retail.
            </p>
          </div>
          <p>
            Built with React, Vite, Tailwind CSS, and a refined component-based
            architecture.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
