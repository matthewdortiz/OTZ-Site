import { Clock, Users, Code, Building2, LucideIcon } from 'lucide-react';

interface Spec {
  icon: 'duration' | 'team' | 'stack' | 'industry';
  label: string;
  value: string;
}

interface SpecRowProps {
  specs: Spec[];
}

const iconMap: Record<string, LucideIcon> = {
  duration: Clock,
  team: Users,
  stack: Code,
  industry: Building2,
};

export function SpecRow({ specs }: SpecRowProps) {
  return (
    <div className="space-y-6">
      <div className="uppercase tracking-wider" style={{ fontSize: '11px', color: '#71717a', letterSpacing: '0.05em' }}>
        Project Specs
      </div>
      
      {specs.map((spec, index) => {
        const Icon = iconMap[spec.icon];
        return (
          <div key={index} className="flex gap-3">
            <div className="flex-shrink-0 pt-1">
              <Icon className="w-5 h-5" style={{ color: 'var(--navy)' }} aria-label={spec.label} />
            </div>
            <div>
              <div style={{ 
                fontSize: '12px',
                color: '#71717a',
                marginBottom: '2px'
              }}>
                {spec.label}
              </div>
              <div style={{ 
                fontSize: '14px',
                lineHeight: '22px',
                color: 'var(--ink)'
              }}>
                {spec.value}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
