import Right from "@/assets/icons/Right";
import { Button } from "@/components/ui/button";

const Product = () => {
  return (
    <main className="min-h-screen bg-grey pt-24 pb-24">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our innovative product suite designed to transform your
            business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Analytics Pro</h3>
            <p className="text-gray-600 mb-4">
              Advanced analytics platform with real-time insights and predictive
              modeling.
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="link"
                size={"sm"}
                className=" text-base font-medium"
              >
                Learn More{" "}
                <span>
                  <Right />
                </span>
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Mobile App</h3>
            <p className="text-gray-600 mb-4">
              Cross-platform mobile application for seamless business
              management.
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="link"
                size={"sm"}
                className=" text-base font-medium"
              >
                Learn More{" "}
                <span>
                  <Right />
                </span>
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Security Suite</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive security solutions to protect your business data.
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="link"
                size={"sm"}
                className=" text-base font-medium"
              >
                Learn More{" "}
                <span>
                  <Right />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
