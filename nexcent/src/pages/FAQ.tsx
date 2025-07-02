import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I get started with Nexcent?",
      answer:
        "Getting started is easy! Simply sign up for an account, complete your profile setup, and you'll be guided through our onboarding process.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Absolutely! We provide 24/7 customer support via email, live chat, and phone for all our customers.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we take data security seriously. All data is encrypted and stored in secure, compliant data centers.",
    },
    {
      question: "Can I integrate with other tools?",
      answer:
        "Yes, we offer extensive API access and integrations with popular business tools and platforms.",
    },
  ];

  return (
    <main className="min-h-screen bg-grey pt-24 pb-24">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our platform, services, and
            support.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is here to
              help.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="default"
                size={"default"}
                className=" text-base font-medium"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
