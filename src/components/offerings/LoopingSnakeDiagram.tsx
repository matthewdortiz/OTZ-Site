import React from 'react';
import { Database, Network, Brain, Cog, TrendingUp, RefreshCw, BarChart, MessageSquare, Users, Activity } from 'lucide-react';

interface DiagramNode {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const topRowNodes: DiagramNode[] = [
  {
    id: 1,
    title: 'Scattered Data',
    description: 'Disconnected systems and spreadsheets make it hard to see the full picture.',
    icon: <Database className="w-12 h-12" />
  },
  {
    id: 2,
    title: 'Unified Foundation',
    description: 'We connect everything into one source of truth for your business.',
    icon: <Network className="w-12 h-12" />
  },
  {
    id: 3,
    title: 'AI-Ready Context',
    description: 'Your data becomes structured, enriched, and understandable to AI.',
    icon: <Brain className="w-12 h-12" />
  }
];

const bottomRowNodes: DiagramNode[] = [
  {
    id: 4,
    title: 'Smart Assistants & Automation',
    description: 'AI tools built on your data automate work, answer questions, and reveal insights instantly.',
    icon: <Cog className="w-12 h-12" />
  },
  {
    id: 5,
    title: 'Intelligent Decisions',
    description: 'Teams act faster with insights that are always accurate and connected.',
    icon: <TrendingUp className="w-12 h-12" />
  },
  {
    id: 6,
    title: 'Continuous Learning Loop',
    description: 'As new data flows in, your system keeps getting smarter - turning every action into better insight.',
    icon: <RefreshCw className="w-12 h-12" />
  }
];

export default function LoopingSnakeDiagram() {
  return (
    <div className="mb-8 sm:mb-10 md:mb-12 relative">
      <h3
        className="text-white mb-16 text-center px-2 relative z-10"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        }}
      >
        What Becomes Possible
      </h3>

      {/* AI Tools Section */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Daily / weekly business alerts',
              description: 'Monitors your data and flags changes, trends, and issues automatically.',
              icon: <BarChart className="w-7 h-7" />
            },
            {
              title: 'Ask your business in plain English',
              description: 'Leadership can ask "Which locations were unprofitable last month?" and get an answer based on real data.',
              icon: <MessageSquare className="w-7 h-7" />
            },
            {
              title: 'Customer & feedback lens',
              description: 'Pulls reviews, tickets, chats, and emails into one view so you can spot churn before it happens.',
              icon: <Users className="w-7 h-7" />
            },
            {
              title: 'Efficiency finder',
              description: 'Surfaces overstaffing, slow processes, and wasted spend.',
              icon: <Activity className="w-7 h-7" />
            }
          ].map((deliverable, index) => (
            <div
              key={index}
              className="p-10 rounded-lg transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  border: '1.5px solid rgba(100, 100, 100, 0.15)',
                }}
              >
                <div style={{ color: '#4b5563' }}>
                  {deliverable.icon}
                </div>
              </div>
              <h4
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.375rem',
                  color: '#1f2937',
                }}
              >
                {deliverable.title}
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.0625rem',
                  lineHeight: '1.6',
                  color: '#4b5563',
                }}
              >
                {deliverable.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Two-Row Grid Layout */}
      <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 mt-64">
        {/* Connecting Lines SVG */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" 
          style={{ zIndex: 0 }}
          preserveAspectRatio="none"
        >
          <defs>
            {/* Subtle animated gradient for flow effect */}
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0)">
                <animate attributeName="offset" values="-0.1;0.9" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="5%" stopColor="rgba(255, 255, 255, 0.4)">
                <animate attributeName="offset" values="0;1" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="10%" stopColor="rgba(255, 255, 255, 0)">
                <animate attributeName="offset" values="0.1;1.1" dur="4s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          
          {/* Main connector path following the snake pattern: 1 → 2 → 3 → down → 4 → 5 → 6 */}
          <path 
            d="M 16.67%,20% L 50%,20% L 83.33%,20% L 83.33%,50% L 16.67%,50% L 16.67%,80% L 50%,80% L 83.33%,80%"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Animated flow line */}
          <path 
            d="M 16.67%,20% L 50%,20% L 83.33%,20% L 83.33%,50% L 16.67%,50% L 16.67%,80% L 50%,80% L 83.33%,80%"
            fill="none"
            stroke="url(#flowGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Top Row - Items 1-3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 mb-12" style={{ zIndex: 1 }}>
          {topRowNodes.map((node) => (
            <div
              key={node.id}
              className="flex flex-col items-center text-center relative"
            >
              {/* Circular Icon Container */}
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center mb-6 backdrop-blur-md relative"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05)',
                  zIndex: 2,
                }}
              >
                <div className="text-white">
                  {node.icon}
                </div>
              </div>

              {/* Title */}
              <h4
                className="text-white mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                }}
              >
                {node.title}
              </h4>

              {/* Description */}
              <p
                className="text-white/70"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                }}
              >
                {node.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row - Items 4-6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6" style={{ zIndex: 1 }}>
          {bottomRowNodes.map((node) => (
            <div
              key={node.id}
              className="flex flex-col items-center text-center relative"
            >
              {/* Circular Icon Container */}
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center mb-6 backdrop-blur-md relative"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05)',
                  zIndex: 2,
                }}
              >
                <div className="text-white">
                  {node.icon}
                </div>
              </div>

              {/* Title */}
              <h4
                className="text-white mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                }}
              >
                {node.title}
              </h4>

              {/* Description */}
              <p
                className="text-white/70"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                }}
              >
                {node.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}