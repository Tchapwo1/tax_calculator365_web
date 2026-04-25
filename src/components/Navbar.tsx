import Link from 'next/link';
import { ShieldCheck, Calculator, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-2">
            <ShieldCheck className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold tracking-tight text-slate-900">
              TaxCalculator<span className="text-blue-600">365</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/self_assessment_guide_2026" className="hover:text-blue-600 transition-colors">Self Assessment</Link>
            <Link href="/side_hustle_tax_uk_guide_2026" className="hover:text-blue-600 transition-colors">Side Hustle</Link>
            <Link href="/crypto_tax_uk" className="hover:text-blue-600 transition-colors">Crypto Tax</Link>
            <button className="premium-button flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Tax Calculator
            </button>
          </div>
          
          <div className="md:hidden">
            <Search className="w-6 h-6 text-slate-400" />
          </div>
        </div>
      </div>
    </nav>
  );
}
