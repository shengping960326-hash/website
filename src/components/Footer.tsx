export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-4">
          <span className="font-bold text-slate-200">Andrew.</span> © {new Date().getFullYear()} All rights reserved.
        </p>
        <p className="text-sm">
          航海科五專生個人網站作品集
        </p>
      </div>
    </footer>
  );
}
