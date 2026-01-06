import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Heart, DollarSign, ShoppingCart } from 'lucide-react';

const industries = [
  {
    icon: Heart,
    name: 'Healthcare',
    solutions: 'Dental Insurance Verification & Compliance Automation',
    image: 'https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwMzc3MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: DollarSign,
    name: 'Financial Services',
    solutions: 'Risk Assessment & Compliance Intelligence',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjAzOTEzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce',
    solutions: 'Customer Intelligence & Personalization',
    image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2MDM2NDYwMHww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function IndustryFocus() {
  return (
    <section className="relative bg-zinc-950 min-h-screen flex items-center py-12 sm:py-16 md:py-20 snap-start snap-always">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6 px-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Industry-Specific
            <br />
            Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto px-4">
            Pre-built, specialized platforms designed for your industry's unique challenges
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="p-2 bg-zinc-800 rounded-lg flex-shrink-0">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <h3 
                      className="text-base sm:text-lg md:text-xl text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-400">{industry.solutions}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}