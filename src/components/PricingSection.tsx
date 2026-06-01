// src/components/PricingSection.tsx
import { packages } from '../data/pricing';
import type { PricingPackage } from '../data/pricing';

interface PricingSectionProps {
  onContactClick: () => void;
}

export default function PricingSection({ onContactClick }: PricingSectionProps) {
  return (
    <section className="bg-transparent py-20 px-6 sm:px-12 lg:px-24" id="services">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Straightforward Pricing, No Hidden Fees
          </h2>
          <p className="text-lg text-slate-600">
            Helping businesses and individuals stay connected with premium web development and reliable technical solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg: PricingPackage, idx: number) => (
            <div 
              key={idx}
              className={`relative flex flex-col justify-between bg-white rounded-2xl p-8 shadow-sm border transition-all duration-200 hover:shadow-md ${
                pkg.isPopular 
                  ? 'border-cyan-500 ring-2 ring-cyan-500/10 scale-105 z-10' 
                  : 'border-slate-200/80'
              }`}
            >
              {/* Highlight Badge */}
              {pkg.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-semibold tracking-wider uppercase px-4 py-1 rounded-full shadow-sm">
                  Recommended
                </span>
              )}

              <div>
                {/* Package Name & Description */}
                <h3 className="text-xl font-bold text-slate-900 mb-1">{pkg.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{pkg.description}</p>

                {/* Pricing Display */}
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tight">{pkg.price}</span>
                  <span className="text-sm font-semibold text-slate-500 ml-2">
                    {pkg.type === 'one-time' ? '/project' : `/${pkg.type}`}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 border-t border-slate-100 pt-6">
                  {pkg.features.map((feature: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-start text-sm text-slate-600">
                      <svg 
                        className="h-5 w-5 text-cyan-500 shrink-0 mr-3" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button 
                onClick={onContactClick}
                className={`mt-8 w-full py-3 px-4 rounded-xl font-semibold text-sm transition-colors cursor-pointer ${
                  pkg.isPopular
                    ? 'bg-cyan-500 text-white hover:bg-cyan-600 shadow-sm'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                {pkg.type === 'hour' ? 'Book Support' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}