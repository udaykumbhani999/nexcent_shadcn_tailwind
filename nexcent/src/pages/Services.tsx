const Services = () => {
  return (
    <main className="min-h-screen bg-grey pt-24 pb-24">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to help your
            business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
            <p className="text-gray-600">
              Comprehensive digital marketing solutions to boost your online
              presence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-gray-600">
              Custom web applications and websites built with modern
              technologies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Consulting</h3>
            <p className="text-gray-600">
              Expert consulting services to optimize your business processes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
