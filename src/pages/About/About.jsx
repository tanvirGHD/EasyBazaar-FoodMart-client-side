

const About = () => {
  return (
    <div className="about-container py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">About Us</h1>

        {/* Introduction Section */}
        <div className="introduction-section bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to Our Platform</h2>
          <p className="text-gray-600">
            We are a leading provider of high-quality products and services, dedicated to making your shopping experience seamless, enjoyable, and rewarding. Our team is passionate about delivering excellence and ensuring customer satisfaction.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mission-section bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to deliver the best products and services while maintaining a strong commitment to sustainability, innovation, and customer satisfaction. We believe in creating value for our customers and the communities we serve.
          </p>
        </div>

        {/* History Section */}
        <div className="history-section bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our History</h2>
          <p className="text-gray-600">
            Founded in 2010, our company started as a small family business with a vision to provide high-quality products at affordable prices. Over the years, we have grown into a trusted name in the industry, thanks to our dedication and the support of our loyal customers.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="values-section bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Core Values</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong>Customer Focus:</strong> We prioritize our customers' needs and strive to exceed their expectations.</li>
            <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
            <li><strong>Innovation:</strong> We continuously seek new ways to improve our products and services.</li>
            <li><strong>Sustainability:</strong> We are committed to environmentally friendly practices.</li>
          </ul>
        </div>

        {/* Team Section */}
        <div className="team-section bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 mb-6">
            We are a passionate team of professionals who are committed to excellence. Here are some of the key members of our team:
          </p>
          <div className="team-members grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="team-member text-center">
              <img
                src="https://i.ibb.co.com/C5R3BjMT/fashion-handsome-man-close-up.jpg"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="team-member text-center">
              <img
                src="https://i.ibb.co.com/rRyVCBvV/serious-man-formal-jacket-tie-standing-camera.jpg"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            <div className="team-member text-center">
              <img
                src="https://i.ibb.co.com/wqqTj6B/man-isolated-showing-facial-emotions.jpg"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Mike Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Our Customers Say</h2>
          <div className="testimonials grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="testimonial p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-600 italic">"The products are amazing and the service is top-notch. I highly recommend this platform!"</p>
              <p className="text-gray-800 font-semibold mt-4">- Sarah Lee</p>
            </div>
            <div className="testimonial p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-600 italic">"Great experience from start to finish. The team is very professional and responsive."</p>
              <p className="text-gray-800 font-semibold mt-4">- David Brown</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;