const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4 md:mb-0">
          <h3 className="text-white mb-4">INFORMATION</h3>
          <ul className="text-white">
            <li className="mb-2">Delivery Information</li>
            <li className="mb-2">Discount</li>
            <li className="mb-2">Sitemap</li>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">My Account</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4 md:mb-0">
          <h3 className="text-white mb-4">MY ACCOUNT</h3>
          <ul className="text-white">
            <li className="mb-2">Sign In</li>
            <li className="mb-2">View Cart</li>
            <li className="mb-2">My Wishlist</li>
            <li className="mb-2">Check Out</li>
            <li className="mb-2">Track My Order</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4 md:mb-0">
          <h3 className="text-white mb-4">HELP</h3>
          <ul className="text-white">
            <li className="mb-2">F.A.Q</li>
            <li className="mb-2">Shipping</li>
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Track My Order</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 px-4">
          <h3 className="text-white mb-4">CONTACT US</h3>
          <p className="text-white mb-2">1234 Your Address, Country</p>
          <p className="text-white mb-2">+1 234 5678 9999</p>
          <p className="text-white">mail@domain.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
