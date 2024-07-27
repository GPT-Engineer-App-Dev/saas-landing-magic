import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Revolutionize Your Workflow</h1>
        <p className="text-xl mb-8">Streamline your business with our cutting-edge SaaS solution</p>
        <Button size="lg">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Seamless Integration", "Real-time Analytics", "Advanced Security"].map((feature) => (
            <div key={feature} className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Basic", "Pro", "Enterprise"].map((plan) => (
            <div key={plan} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">{plan}</h3>
              <p className="text-3xl font-bold mb-6">${plan === "Enterprise" ? "Custom" : plan === "Pro" ? "49" : "19"}<span className="text-sm font-normal">/month</span></p>
              <ul className="mb-8">
                <li className="mb-2">Feature 1</li>
                <li className="mb-2">Feature 2</li>
                <li className="mb-2">Feature 3</li>
              </ul>
              <Button variant={plan === "Pro" ? "default" : "outline"} className="w-full">
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied customers and transform your business today.</p>
        <Button size="lg">
          Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
