

const About = () => {
  return (
    <div className="about-container py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
          About Us
        </h1>

        {/* Introduction Section */}
        <div className="introduction-section bg-white p-8 rounded-2xl shadow-lg mb-12 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Our Platform</h2>
          <p className="text-gray-600 leading-relaxed">
            We are a leading provider of high-quality products and services,
            dedicated to making your shopping experience seamless, enjoyable,
            and rewarding. Our team is passionate about delivering excellence
            and ensuring customer satisfaction.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mission-section bg-white p-8 rounded-2xl shadow-lg mb-12 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to deliver the best products and services while
            maintaining a strong commitment to sustainability, innovation, and
            customer satisfaction. We believe in creating value for our
            customers and the communities we serve.
          </p>
        </div>

        {/* History Section */}
        <div className="history-section bg-white p-8 rounded-2xl shadow-lg mb-12 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our History</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2010, our company started as a small family business with
            a vision to provide high-quality products at affordable prices. Over
            the years, we have grown into a trusted name in the industry, thanks
            to our dedication and the support of our loyal customers.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="values-section bg-white p-8 rounded-2xl shadow-lg mb-12 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Core Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
            <li>
              <strong className="text-gray-800">Customer Focus:</strong> We
              prioritize our customers' needs and strive to exceed their
              expectations.
            </li>
            <li>
              <strong className="text-gray-800">Integrity:</strong> We conduct
              our business with honesty and transparency.
            </li>
            <li>
              <strong className="text-gray-800">Innovation:</strong> We
              continuously seek new ways to improve our products and services.
            </li>
            <li>
              <strong className="text-gray-800">Sustainability:</strong> We are
              committed to environmentally friendly practices.
            </li>
          </ul>
        </div>

        {/* Team Section */}
        <div className="team-section bg-white p-8 rounded-2xl shadow-lg mb-12 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We are a passionate team of professionals who are committed to
            excellence. Here are some of the key members of our team:
          </p>
          <div className="team-members grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "CEO & Founder",
                image:
                  "https://i.ibb.co.com/C5R3BjMT/fashion-handsome-man-close-up.jpg",
              },
              {
                name: "Jane Smith",
                role: "Head of Operations",
                image:
                  "https://i.ibb.co.com/rRyVCBvV/serious-man-formal-jacket-tie-standing-camera.jpg",
              },
              {
                name: "Mike Johnson",
                role: "Lead Developer",
                image:
                  "https://i.ibb.co.com/wqqTj6B/man-isolated-showing-facial-emotions.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="team-member text-center group transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-transparent group-hover:border-blue-500 transition-all duration-300"
                />
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            What Our Customers Say
          </h2>
          <div className="testimonials grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The products are amazing and the service is top-notch. I highly recommend this platform!",
                author: "Sarah Lee",
              },
              {
                quote:
                  "Great experience from start to finish. The team is very professional and responsive.",
                author: "David Brown",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="testimonial p-6 bg-gray-50 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="text-gray-800 font-semibold mt-4">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;