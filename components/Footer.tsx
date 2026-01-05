import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="font-bold text-lg">Knowurcraft</h3>
          <p className="mt-4 text-sm text-gray-600 max-w-xs">
            Crafting modern digital experiences with clarity, creativity, and
            purpose.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">Pages</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="https://wa.me/09129683677">Contact</Link></li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="font-semibold mb-4">Let’s work together</h4>
          <p className="text-sm text-gray-600">
            Have a project or idea? Let’s build something remarkable.
          </p>
          <Link
            href="https://wa.me/09129683677"
            className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-full text-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} Knowurcraft. All rights reserved.
      </div>
    </footer>
  );
}
