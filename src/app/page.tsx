import Navbar from '@/components/Navbar';
import { ArrowRight, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8">
            <ShieldCheck className="w-4 h-4" />
            Expert-Led Authority Guide 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
            Master Your UK Taxes <br />
            <span className="text-blue-600">With Institutional Rigor</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Simplified guides and proprietary tools for income tax, side hustles, and digital assets. 
            Built on over 14 professional SOPs to ensure 100% compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/self_assessment_guide_2026" className="premium-button flex items-center justify-center gap-2">
              Start Free Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="px-6 py-3 rounded-2xl border border-slate-200 bg-white font-semibold text-slate-900 hover:bg-slate-50 transition-all">
              View Tax Calculator
            </button>
          </div>
        </div>
      </section>

      {/* Cluster Map Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Browse Authority Clusters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Self Assessment Cluster */}
          <div className="institutional-card p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Self Assessment</h3>
            <p className="text-slate-600 mb-6">Everything you need to navigate the 2026 tax season without penalties.</p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center gap-2 text-slate-500">
                <div className="w-1 h-1 bg-blue-400 rounded-full" />
                2026 Filing Deadlines
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <div className="w-1 h-1 bg-blue-400 rounded-full" />
                Allowable Expenses Guide
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <div className="w-1 h-1 bg-blue-400 rounded-full" />
                Registration & UTR
              </li>
            </ul>
            <Link href="/self_assessment_guide_2026" className="text-blue-600 font-semibold flex items-center gap-1 hover:underline">
              Enter Cluster <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Side Hustle Cluster */}
          <div className="institutional-card p-8">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Side Hustle Tax</h3>
            <p className="text-slate-600 mb-6">Expert tax planning for creators, freelancers, and casual sellers.</p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center gap-2 text-slate-500">
                <div className="w-1 h-1 bg-green-400 rounded-full" />
                Platform Reporting Rules
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <div className="w-1 h-1 bg-green-400 rounded-full" />
                Trading Allowances
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <div className="w-1 h-1 bg-green-400 rounded-full" />
                Airbnb & eBay Tax
              </li>
            </ul>
            <Link href="/side_hustle_tax_uk_guide_2026" className="text-green-600 font-semibold flex items-center gap-1 hover:underline">
              Enter Cluster <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Crypto Cluster */}
          <div className="institutional-card p-8">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Crypto & Digital Assets</h3>
            <p className="text-slate-600 mb-6">Deep technical guides for staking, DeFi, and Capital Gains.</p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center gap-2 text-slate-500">
                <div className="w-1 h-1 bg-purple-400 rounded-full" />
                Staking Yield Tax
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <div className="w-1 h-1 bg-purple-400 rounded-full" />
                DeFi & NFT Compliance
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <div className="w-1 h-1 bg-purple-400 rounded-full" />
                HMRC Crackdown 2026
              </li>
            </ul>
            <Link href="/crypto_tax_uk" className="text-purple-600 font-semibold flex items-center gap-1 hover:underline">
              Enter Cluster <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
