import Link from "next/link";
import { Button } from "./button";

const CTASection = () => (
  <section className="w-full flex justify-center items-center py-16 px-4">
    <div className="w-full max-w-4xl rounded-2xl bg-gradient-to-b from-gray-200/80 to-gray-400/40 dark:from-[#23272f] dark:to-[#18181b] shadow-xl flex flex-col items-center text-center py-14 px-6">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
        Ready to Accelerate Your Career?
      </h2>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl">
        Join thousands of professionals who are advancing their careers with AI-powered guidance.
      </p>
      <Link href="/sign-up">
        <Button className="px-8 py-4 text-lg font-semibold">
          Start Your Journey Today <span className="ml-2">&rarr;</span>
        </Button>
      </Link>
    </div>
  </section>
);

export default CTASection; 