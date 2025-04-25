const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-8">Effective Date: 24/November/2024</p>
        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Information We Collect
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Demographic information</li>
            <li>Usage data</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>To provide and improve our services</li>
            <li>To communicate with you</li>
            <li>For marketing and advertising purposes</li>
            <li>To comply with legal obligations</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Sharing Your Information
          </h2>
          <p className="text-gray-700 mb-6">
            We may share your information with third-party service providers,
            partners, and affiliates. We do not sell your personal information
            to third parties.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Rights</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Access your personal information</li>
            <li>Correct or update your personal information</li>
            <li>Delete your personal information</li>
            <li>Opt-out of certain data processing activities</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Changes to this Privacy Policy
          </h2>
          <p className="text-gray-700 mb-6">
            We may update this privacy policy from time to time. You can find
            the most current version on our website at{" "}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              www.example.com/privacy
            </a>
            .
          </p>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions or concerns about our privacy policy,
            please contact us at{" "}
            <a
              href="mailto:privacy@example.com"
              className="text-blue-500 hover:text-blue-700"
            >
              privacy@example.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
