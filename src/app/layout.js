import { Inter, Roboto_Mono } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "Spencer Cowles | Software Engineer",
  description: "Software Engineer and Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="min-h-screen bg-white">
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="flex justify-between h-16 items-center">
              <a href="/" className="text-lg font-medium">
                Spencer Cowles
              </a>
              <div className="flex space-x-6">
                <a
                  href="/"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  home
                </a>
                <a
                  href="/projects"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  projects
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16 min-h-screen">{children}</main>
        <footer className="py-8 border-t">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Spencer Cowles
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
