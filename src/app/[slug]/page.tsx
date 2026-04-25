import { getPostData, getAllPosts } from '@/lib/content';
import Navbar from '@/components/Navbar';
import { ShieldCheck, User, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default async function AuthorityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  const allPosts = getAllPosts();
  
  // Find other posts in the same cluster (simulated for now)
  const clusterSiblings = allPosts.filter(p => p.slug !== slug).slice(0, 5);

  return (
    <div className="min-h-screen pb-20">
      <Navbar />
      
      {/* Article Header */}
      <header className="bg-white border-b border-slate-200 pt-12 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold mb-4 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            TaxCalculator365 Authority Node
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6 capitalize">
            {slug.replace(/_/g, ' ')}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <User className="w-5 h-5 text-slate-400" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Dr. James Thornton</p>
                <p>Tax Strategist & Author</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
              Expert Reviewed
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Sidebar: Table of Contents / Cluster Links */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-32">
            <h4 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-widest">In this Cluster</h4>
            <ul className="space-y-1">
              {clusterSiblings.map((p) => (
                <li key={p.slug}>
                  <Link 
                    href={`/${p.slug}`}
                    className="flex items-center gap-2 p-3 rounded-xl hover:bg-slate-50 text-sm font-medium text-slate-600 hover:text-blue-600 transition-all"
                  >
                    <div className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="capitalize">{p.slug.replace(/-/g, ' ')}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 p-6 bg-blue-600 rounded-3xl text-white">
              <h4 className="font-bold mb-2">Need Help?</h4>
              <p className="text-sm text-blue-100 mb-6">Our automated tax calculator can estimate your 2026 liability in 2 minutes.</p>
              <button className="w-full py-3 bg-white text-blue-600 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all">
                Run Calculator
              </button>
            </div>
          </div>
        </aside>

        {/* Center: Article Content */}
        <article className="lg:col-span-6 bg-white institutional-card p-8 md:p-12">
          <div 
            className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
          
          <div className="mt-16 pt-8 border-t border-slate-100">
            <h4 className="text-xl font-bold mb-6">Sources & Legal Notice</h4>
            <p className="text-sm text-slate-500 italic">
              Disclaimer: This guide is for informational purposes only and does not constitute professional tax advice. Always consult with a certified accountant for your specific circumstances. All data reflects HMRC rules as of April 2026.
            </p>
          </div>
        </article>

        {/* Right Sidebar: Quick Actions */}
        <aside className="lg:col-span-3">
          <div className="sticky top-32 space-y-6">
            <div className="institutional-card p-6 border-blue-100 bg-blue-50/50">
              <h4 className="font-bold text-slate-900 mb-4">Authority Checklist</h4>
              <ul className="space-y-4">
                {[
                  "Self Assessment Registration",
                  "Allowable Expenses List",
                  "Payment on Account Prep"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="mt-1 w-4 h-4 rounded-full border border-blue-200 bg-white flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="institutional-card p-6 overflow-hidden relative">
               <div className="absolute top-0 right-0 p-2 opacity-10">
                 <ShieldCheck className="w-20 h-20" />
               </div>
               <h4 className="font-bold text-slate-900 mb-2">Verified Content</h4>
               <p className="text-sm text-slate-500 mb-4">This article has been audited for compliance with the 2026 UK Tax Code.</p>
               <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                 <Clock className="w-3 h-3" />
                 LAST UPDATED: APRIL 2026
               </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
