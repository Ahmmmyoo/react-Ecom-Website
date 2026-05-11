import PropTypes from 'prop-types';
import { useState } from 'react';
import logo from '../assets/ECOM-Logo.png';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Collection', href: '#collection' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Header({ cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-full border border-white/70 bg-white/78 px-4 py-3 shadow-[0_16px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 shadow-lg shadow-slate-950/15">
              <img src={logo} alt="Luma Storefront logo" className="h-7 w-7 object-contain" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-slate-950">
                Luma Storefront
              </p>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                Premium device retail
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#cart"
              className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <span>Open Cart</span>
              <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-white/15 px-2 text-xs">
                {cartCount}
              </span>
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((previousState) => !previousState)}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.75 6.75h16.5" />
              <path d="M3.75 12h16.5" />
              <path d="M10.75 17.25h9.5" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 rounded-[28px] border border-slate-200 bg-white p-4 shadow-lg md:hidden">
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cart"
                className="mt-2 inline-flex items-center justify-between rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Open Cart</span>
                <span className="rounded-full bg-white/15 px-2 py-1 text-xs">
                  {cartCount}
                </span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Header;
