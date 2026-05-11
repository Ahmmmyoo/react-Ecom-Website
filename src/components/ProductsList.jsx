import PropTypes from 'prop-types';
import { formatCurrency } from '../utils/formatters';

function ProductsList({
  products,
  categories,
  activeCategory,
  onCategoryChange,
  onAddToCart,
  cartItemsById,
}) {
  return (
    <section className="space-y-6">
      <div className="glass-panel rounded-[28px] p-6 sm:p-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="section-label">Curated Collection</span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950 sm:text-4xl">
              High-end devices presented with more polish and context.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Filter the catalog by device family and surface richer product
              stories, stronger specs, and clearer purchase signals.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-lg shadow-slate-950/10'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-950'
                  }`}
                  onClick={() => onCategoryChange(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
        {products.map((product) => {
          const quantityInCart = cartItemsById[product.id] ?? 0;

          return (
            <article
              key={product.id}
              className="group glass-panel rounded-[30px] p-5 transition duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-[24px] bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/35 to-transparent" />
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    {product.category}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {product.tagline}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-950 px-3 py-2 text-sm font-semibold text-white">
                  {formatCurrency(product.price)}
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {product.description}
              </p>

              <dl className="mt-5 grid gap-3 rounded-[24px] bg-slate-50 p-4">
                {product.specs.map((specification) => (
                  <div
                    key={`${product.id}-${specification.label}`}
                    className="flex items-start justify-between gap-4 border-b border-slate-200/70 pb-3 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-sm font-medium text-slate-500">
                      {specification.label}
                    </dt>
                    <dd className="max-w-[14rem] text-right text-sm font-semibold text-slate-800">
                      {specification.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 flex flex-wrap gap-2">
                {product.highlights.map((highlight) => (
                  <span
                    key={`${product.id}-${highlight}`}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    {product.finish}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                    {product.availability}
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                  onClick={() => onAddToCart(product)}
                >
                  {quantityInCart > 0
                    ? `Add Another (${quantityInCart})`
                    : 'Add to Cart'}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      finish: PropTypes.string.isRequired,
      availability: PropTypes.string.isRequired,
      highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
      specs: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  cartItemsById: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default ProductsList;
