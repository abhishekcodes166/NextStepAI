import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center pt-32">
      <div className="text-7xl mb-4 select-none">🚫</div>
      <h1 className="text-3xl font-bold mb-2 text-foreground">404 - Page Not Found</h1>
      <p className="mb-6 text-muted-foreground max-w-md">
        Oops! The page you are looking for does not exist or has been moved.<br/>
        Please check the URL or return to the homepage.
      </p>
      <Link href="/">
        <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/80 transition">
          Go Home
        </button>
      </Link>
    </div>
  );
}
