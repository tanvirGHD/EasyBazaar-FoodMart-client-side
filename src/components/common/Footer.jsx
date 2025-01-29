import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-50 text-gray-800">
      {/* Top Features */}
      <div className="container mx-auto py-6 flex flex-wrap justify-center gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center bg-yellow-300 rounded-full">🚚</div>
          <p className="mt-2 font-medium">Free delivery</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center bg-yellow-300 rounded-full">💰</div>
          <p className="mt-2 font-medium">Cash on delivery</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center bg-yellow-300 rounded-full">🔄</div>
          <p className="mt-2 font-medium">30 days returns</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center bg-yellow-300 rounded-full">📞</div>
          <p className="mt-2 font-medium">Online support</p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="w-9/12 mx-auto">
      <div className="mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-green-600">Vegist</h2>
          <p className="mt-2 text-sm">Lorem ipsum is a dummy text of the printing industry.</p>
        </div>
        <div>
          <h3 className="font-semibold text-yellow-600">Address</h3>
          <p className="text-sm">38 Block Street, Sydney, Australia</p>
        </div>
        <div>
          <h3 className="font-semibold text-yellow-600">Get in Touch</h3>
          <p className="text-sm">(+800) 1234 5678 90</p>
          <p className="text-sm">support@demo.com</p>
        </div>
      </div>

      {/* Links Section */}
      <div className="container mx-auto px-4 pb-10 grid md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-semibold text-yellow-600">Top Categories</h3>
          <ul className="text-sm space-y-2">
            <li>Fresh fruits</li>
            <li>Organic wine</li>
            <li>Organic juice</li>
            <li>Dairy & Cheese</li>
            <li>Fresh meat</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-yellow-600">Services</h3>
          <ul className="text-sm space-y-2">
            <li>About Vegist</li>
            <li>FAQ’s</li>
            <li>Contact us</li>
            <li>News</li>
            <li>Store Location</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-yellow-600">Privacy & Terms</h3>
          <ul className="text-sm space-y-2">
            <li>Payment Policy</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>Shipping Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-yellow-600">My Account</h3>
          <ul className="text-sm space-y-2">
            <li>My Account</li>
            <li>My Cart</li>
            <li>Order History</li>
            <li>My Wishlist</li>
            <li>My Address</li>
          </ul>
        </div>
      </div>
      </div>



      {/* Social Media & Payment */}
      <div className="bg-yellow-300">
        <div className="w-10/12 mx-auto text-center py-6 md:flex justify-between items-center md:space-y-0 space-y-6">
          <div>
            <p className="text-center mt-4 text-sm">Copyright © 2025 spacingtech all rights reserved</p>
          </div>
          <div className="flex justify-center gap-4 text-xl">
            <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF /></a>
            <a href="#" className="text-sky-500 hover:text-sky-700"><FaTwitter /></a>
            <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
            <a href="#" className="text-red-600 hover:text-red-800"><FaPinterestP /></a>
            <a href="#" className="text-red-500 hover:text-red-700"><FaYoutube /></a>
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="w-12 h-8" />
            <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="w-12 h-8" />
            <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" className="w-12 h-8" />
            <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" className="w-12 h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
