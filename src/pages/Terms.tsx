const TermsOfService = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Terms of Service
        </h1>
        <p className="text-gray-700 mb-8">Effective Date: 24/November/2024</p>
        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            1. Introduction
          </h2>
          <p className="text-gray-700 mb-6">
            These Terms of Service ("Terms") govern your access and use of our
            website and services. By accessing or using our website, you agree
            to be bound by these Terms and our Privacy Policy.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            2. User Accounts
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>You must be at least 13 years old to use our services.</li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account and password.
            </li>
            <li>
              You are responsible for all activities that occur under your
              account.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            3. Prohibited Conduct
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>
              You may not use our services for any illegal or unauthorized
              purpose.
            </li>
            <li>
              You may not interfere with or disrupt the integrity or performance
              of our services.
            </li>
            <li>
              You may not attempt to gain unauthorized access to our services or
              systems.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            4. Intellectual Property
          </h2>
          <p className="text-gray-700 mb-6">
            Our website and services, including all content and functionality,
            are owned by us and are protected by copyright, trademark, and other
            intellectual property laws.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            5. Termination
          </h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to suspend or terminate your access to our
            services at any time for any reason, including if we reasonably
            believe you have violated these Terms.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-6">
            We will not be liable for any indirect, special, incidental, or
            consequential damages arising out of or related to your use of our
            services.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            7. Changes to these Terms
          </h2>
          <p className="text-gray-700 mb-6">
            We may update these Terms from time to time. You can find the most
            current version on our website at{" "}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              www.example.com/terms
            </a>
            .
          </p>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            8. Contact Us
          </h2>
          <p className="text-gray-700 mb-6">
            If you have any questions or concerns about these Terms, please
            contact us at{" "}
            <a
              href="mailto:support@example.com"
              className="text-blue-500 hover:text-blue-700"
            >
              support@example.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
