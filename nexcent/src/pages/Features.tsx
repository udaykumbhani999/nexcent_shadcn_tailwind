const Features = () => {
  return (
    <main className="min-h-screen bg-grey pt-24 pb-24">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Features</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the powerful features that make our platform the perfect
            solution for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Advanced Analytics</h3>
            <p className="text-gray-600 mb-4">
              Get detailed insights into your business performance with our
              advanced analytics dashboard.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li> Real-time data tracking</li>
              <li> Custom reports</li>
              <li> Performance metrics</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Automation Tools</h3>
            <p className="text-gray-600 mb-4">
              Streamline your workflow with powerful automation features that
              save time and increase efficiency.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li> Workflow automation</li>
              <li> Scheduled tasks</li>
              <li> Smart notifications</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Features;
