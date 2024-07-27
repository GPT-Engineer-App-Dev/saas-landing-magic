import { Button } from "@/components/ui/button";
import { MessageSquare, Bot, BarChart, Zap, Shield, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "AI-Powered Chat",
      description: "Engage with customers using our advanced AI chatbot, capable of understanding context and providing personalized responses."
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "Sales Assistant",
      description: "Let our AI assist your sales team by qualifying leads, answering product questions, and scheduling demos automatically."
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Analytics Dashboard",
      description: "Gain insights into customer interactions, sales performance, and conversion rates with our comprehensive analytics."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Real-time Suggestions",
      description: "Receive AI-powered suggestions for upselling and cross-selling opportunities during live chat sessions."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Secure Conversations",
      description: "Ensure the privacy and security of your sales conversations with end-to-end encryption and compliance features."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Team Collaboration",
      description: "Seamlessly hand off conversations between AI and human agents, with built-in team collaboration tools."
    }
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Powerful Features for AI-Driven Sales</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <section className="bg-gray-100 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>Integrate our AI chat widget into your website or app</li>
            <li>Customize the AI's knowledge base with your product information</li>
            <li>Let the AI handle initial customer inquiries and qualify leads</li>
            <li>Seamlessly transfer complex conversations to your human sales team</li>
            <li>Analyze performance and continuously improve your sales process</li>
          </ol>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Supercharge Your Sales?</h2>
          <p className="text-xl mb-8">Experience the power of AI-driven sales conversations today.</p>
          <Button size="lg">Start Your Free Trial</Button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Features;
