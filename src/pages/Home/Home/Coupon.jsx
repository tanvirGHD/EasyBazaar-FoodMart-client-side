import offer1 from "../../../assets/cou2.jpg";

const Coupon = () => {
  return (
    <div
      className="relative bg-green-50 p-6 h-64 bg-center"
      style={{ backgroundImage: `url(${offer1})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div>
          <h2 className="text-lg font-semibold">Fresh fruit, vegetable</h2>
          <p className="text-gray-600">on our product</p>
          <div className="join">
            <div>
              <label className="input validator join-item">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <button className="btn btn-neutral join-item">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
