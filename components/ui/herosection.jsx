import Link from "next/link";
import { Button } from "./button";

const Herosection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] bg-black overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-4">
          Your AI Career Coach for
          <br />
          Professional Success
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Advance your career with personalized guidance, interview prep, and AI-powered tools for job success.
        </p>
        <div className="flex gap-4">
          <Link href="/dashboard">
            <Button className="px-6 py-3 text-lg font-semibold">Get Started</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Herosection;