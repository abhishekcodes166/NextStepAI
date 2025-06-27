import { Briefcase, ClipboardList, LineChart, FileText } from "lucide-react";

const features = [
  {
    icon: <Briefcase className="w-10 h-10 mb-4" />,
    title: "AI-Powered Career Guidance",
    desc: "Get personalized career advice and insights powered by advanced AI technology.",
  },
  {
    icon: <ClipboardList className="w-10 h-10 mb-4" />,
    title: "Interview Preparation",
    desc: "Practice with role-specific questions and get instant feedback to improve your performance.",
  },
  {
    icon: <LineChart className="w-10 h-10 mb-4" />,
    title: "Industry Insights",
    desc: "Stay ahead with real-time industry trends, salary data, and market analysis.",
  },
  {
    icon: <FileText className="w-10 h-10 mb-4" />,
    title: "Smart Resume Creation",
    desc: "Generate ATS-optimized resumes with AI assistance.",
  },
];

const FeaturesSection = () => (
  <section className="w-full py-20 bg-black flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12 text-center">
      Powerful Features for Your Career Growth
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl px-4">
      {features.map((feature, idx) => (
        <div
          key={feature.title}
          className={`bg-zinc-900 border border-zinc-700 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 ${idx === 1 ? 'border-2 border-white' : ''}`}
        >
          <div className="text-white">{feature.icon}</div>
          <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
          <p className="text-zinc-300 text-base">{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection; 