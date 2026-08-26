import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#080808] text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">

        {/* Top Section */}
        <div className="mb-12 flex flex-col justify-between gap-8 border-b border-gray-800 pb-10 md:flex-row md:items-center">

          <div>
            <h2 className="text-3xl font-bold tracking-wide text-white">
              <img src="/logo.jpg.jpg" alt="logo" className="w-32 h-10 cursor-pointer brightness-150" />
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              Your destination for movies, TV shows, entertainment,
              trailers and everything you love to watch.
            </p>
          </div>

          

        </div>

        {/* Contact */}
        <div className="mb-10">
          <p className="text-sm text-gray-500">
            Questions?{" "}
            <span className="cursor-pointer text-gray-300 underline underline-offset-4 transition hover:text-white">
              Contact us
            </span>
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4">

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="cursor-pointer transition hover:text-white">About Us</li>
              <li className="cursor-pointer transition hover:text-white">Investor Relations</li>
              <li className="cursor-pointer transition hover:text-white">Jobs</li>
              <li className="cursor-pointer transition hover:text-white">Media Center</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Support
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="cursor-pointer transition hover:text-white">FAQ</li>
              <li className="cursor-pointer transition hover:text-white">Help Center</li>
              <li className="cursor-pointer transition hover:text-white">Account</li>
              <li className="cursor-pointer transition hover:text-white">Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="cursor-pointer transition hover:text-white">Privacy</li>
              <li className="cursor-pointer transition hover:text-white">Cookie Preferences</li>
              <li className="cursor-pointer transition hover:text-white">Terms of Use</li>
              <li className="cursor-pointer transition hover:text-white">Legal Notices</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="cursor-pointer transition hover:text-white">Ways to Watch</li>
              <li className="cursor-pointer transition hover:text-white">Speed Test</li>
              <li className="cursor-pointer transition hover:text-white">Only on Cinevo</li>
              <li className="cursor-pointer transition hover:text-white">Gift Cards</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-gray-800 pt-6 text-xs text-gray-600 sm:flex-row">

          <p>
            © 2026 Cinevo. All rights reserved.
          </p>

          <div className="flex gap-5">
            <span className="cursor-pointer transition hover:text-gray-400">
              Privacy
            </span>

            <span className="cursor-pointer transition hover:text-gray-400">
              Terms
            </span>

            <span className="cursor-pointer transition hover:text-gray-400">
              Cookies
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;