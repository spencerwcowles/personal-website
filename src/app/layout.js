import { Inter, Roboto_Mono } from "next/font/google";
import ThemeToggle from "../components/ThemeToggle";
import Providers from "../components/Providers";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "Spencer Cowles Portfolio",
  description: "Software Engineer and Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-colors">
        <Providers>
          <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex space-x-6">
                  <a
                    href="/"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  >
                    home
                  </a>
                  <a
                    href="/projects"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  >
                    projects
                  </a>
                </div>
                <ThemeToggle />
              </div>
            </div>
          </nav>
          <main className="pt-16 min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
