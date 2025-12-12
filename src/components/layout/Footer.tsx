export function Footer() {
    return (
      <footer className="border-t border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">TSUE.</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Tashkent State University of Economics.
                <br />
                Building leaders for the digital economy.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">Academics</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Undergraduate</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Graduate</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Business School</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">Research</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Labs</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Publications</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Innovation Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">Connect</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 border-t border-slate-100 pt-8 text-center text-xs text-slate-400">
            &copy; {new Date().getFullYear()} TSUE. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
