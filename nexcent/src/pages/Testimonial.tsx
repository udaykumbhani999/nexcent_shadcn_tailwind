const Testimonial = () => {
  return (
    <main className="min-h-screen bg-grey pt-24 pb-24">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Customer Testimonials
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with our
            platform and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-primary font-semibold">JD</span>
              </div>
              <div>
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-sm text-gray-500">CEO, TechCorp</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Nexcent has transformed our business operations. The analytics
              insights have helped us make data-driven decisions."
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-primary font-semibold">JS</span>
              </div>
              <div>
                <h4 className="font-semibold">Jane Smith</h4>
                <p className="text-sm text-gray-500">
                  Marketing Director, GrowthCo
                </p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The automation features have saved us countless hours. Our team
              can now focus on strategic initiatives."
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-primary font-semibold">MJ</span>
              </div>
              <div>
                <h4 className="font-semibold">Mike Johnson</h4>
                <p className="text-sm text-gray-500">CTO, StartupXYZ</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Excellent customer support and a robust platform. Highly
              recommended for any growing business."
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonial;
