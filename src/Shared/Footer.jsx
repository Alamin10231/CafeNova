export const Footer = () => {
  return (
    <div className="">
      <footer className="footer flex flex-col lg:flex-row mx-auto text-center items-start justify-between px-10 lg:px-20 text-white text-base-content py-10 gap-8">
        <nav>
          <h6 className="footer-title">Our Menu</h6>
          <a className="link link-hover">Espresso</a>
          <a className="link link-hover">Cappuccino</a>
          <a className="link link-hover">Latte</a>
          <a className="link link-hover">Desserts</a>
        </nav>
        <nav>
          <h6 className="footer-title">CafeNova</h6>
          <a className="link link-hover">Our Story</a>
          <a className="link link-hover">Gallery</a>
          <a className="link link-hover">Book a Table</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Return Policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Subscribe</h6>
          <fieldset className="form-control max-w-80 text-left">
            <label className="label py-1">
              <span className="label-text text-white">
                Get the latest updates
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="you@example.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item text-xs md:text-md">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <p className="text-center text-white pb-5 text-sm">
        © {new Date().getFullYear()} CafeNova. All rights reserved.
      </p>
    </div>
  );
};
