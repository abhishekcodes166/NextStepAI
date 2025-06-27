import "./globals.css";
import { ThemeProvider } from "@/components/ui/themeprovider";
import Header from "@/components/ui/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { shadesOfPurple } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextStepAI",
  description: "NextStepAI is a platform for AI-powered learning",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={
      {
        baseTheme:shadesOfPurple,
      }
    }>

    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${inter.variable} `}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/*header*/}
            <Header />
            <main className="min-h-screen">{children}</main>
            {/*footer*/}  
            <footer className="bg-muted/50 py-10">
              <div className="container mx-auto px-4 text-center text-muted-foreground">

                <p>made with Love by Abhishek</p>
              </div>
            </footer>
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
