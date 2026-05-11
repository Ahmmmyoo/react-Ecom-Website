import PropTypes from 'prop-types';
import { formatCurrency } from '../utils/formatters';

function Cart({
  cartItems,
  subtotal,
  shipping,
  estimatedTax,
  orderTotal,
  freeShippingRemaining,
  updateQuantity,
  removeFromCart,
  clearCart,
}) {
  return (
    <aside id="cart" className="xl:sticky xl:top-28 xl:h-fit">
      <div className="glass-panel rounded-[30px] p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="section-label">Cart Summary</span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950">
              Review your order
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Update quantities, track the free shipping threshold, and preview
              the final order value at a glance.
            </p>
          </div>
          <div className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
            {cartItems.reduce((total, item) => total + item.quantity, 0)} items
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="mt-6 rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
            <p className="font-display text-xl font-semibold text-slate-950">
              Your cart is still empty.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Add a few products from the collection to see the checkout summary
              come to life.
            </p>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="rounded-[24px] border border-slate-200/80 bg-white/90 p-4"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-2xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                          {item.category}
                        </p>
                        <h3 className="mt-1 font-display text-lg font-semibold text-slate-950">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          {formatCurrency(item.price)}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="text-sm font-semibold text-rose-500 transition hover:text-rose-600"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 p-1">
                        <button
                          type="button"
                          className="flex h-9 w-9 items-center justify-center rounded-full text-lg text-slate-700 transition hover:bg-white"
                          aria-label={`Decrease quantity for ${item.name}`}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="min-w-10 text-center text-sm font-semibold text-slate-950">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          className="flex h-9 w-9 items-center justify-center rounded-full text-lg text-slate-700 transition hover:bg-white"
                          aria-label={`Increase quantity for ${item.name}`}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>

                      <p className="text-sm font-semibold text-slate-950">
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-6 rounded-[28px] bg-slate-950 p-5 text-white">
          <p className="text-sm text-slate-300">
            {cartItems.length === 0
              ? `Add products to unlock free shipping at ${formatCurrency(2500)}.`
              : freeShippingRemaining > 0
                ? `${formatCurrency(freeShippingRemaining)} away from free shipping.`
                : 'Free shipping unlocked for this order.'}
          </p>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex items-center justify-between text-slate-300">
              <span>Subtotal</span>
              <span className="font-semibold text-white">
                {formatCurrency(subtotal)}
              </span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>Shipping</span>
              <span className="font-semibold text-white">
                {shipping === 0 && cartItems.length > 0
                  ? 'Free'
                  : formatCurrency(shipping)}
              </span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>Estimated tax</span>
              <span className="font-semibold text-white">
                {formatCurrency(estimatedTax)}
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-3 text-base">
              <span className="font-semibold text-white">Order total</span>
              <span className="font-display text-2xl font-semibold text-white">
                {formatCurrency(orderTotal)}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
          <button
            type="button"
            className="mt-3 w-full rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={clearCart}
            disabled={cartItems.length === 0}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </aside>
  );
}

const cartItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
});

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(cartItemShape).isRequired,
  subtotal: PropTypes.number.isRequired,
  shipping: PropTypes.number.isRequired,
  estimatedTax: PropTypes.number.isRequired,
  orderTotal: PropTypes.number.isRequired,
  freeShippingRemaining: PropTypes.number.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
};

export default Cart;
