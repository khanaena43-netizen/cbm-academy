import React from 'react';
import { AI_TOOLS } from '../data/cbmData';
import { Bot, Sparkles, Cpu, Image, MessageSquare, Zap, Target, Search } from 'lucide-react';

export const AIToolsSection: React.FC = () => {
  const getToolIcon = (index: number) => {
    const icons = [
      <MessageSquare className="w-6 h-6 text-[#072B57]" key={1} />,
      <Bot className="w-6 h-6 text-[#072B57]" key={2} />,
      <Sparkles className="w-6 h-6 text-[#FF6B00]" key={3} />,
      <Image className="w-6 h-6 text-[#072B57]" key={4} />,
      <Zap className="w-6 h-6 text-[#FF6B00]" key={5} />,
      <Search className="w-6 h-6 text-[#072B57]" key={6} />,
      <Target className="w-6 h-6 text-[#072B57]" key={7} />,
      <Cpu className="w-6 h-6 text-[#072B57]" key={8} />,
    ];
    return icons[index % icons.length];
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 block">
            Integrated Tech Stack
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#072B57] tracking-tight">
            AI Tools You Will Master
          </h2>
          <p className="text-[#64748B] text-base mt-3 leading-relaxed">
            Hands-on training with industry-standard AI platforms to automate campaigns, scale ad copy, generate creative assets, and analyze data.
          </p>
        </div>

        {/* Clean Responsive Grid of Simple White Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {AI_TOOLS.map((tool, idx) => (
            <div
              key={tool.id}
              className="bg-white p-5 rounded-xl border border-[#E5E7EB] shadow-xs hover:border-[#072B57]/30 transition-all duration-200 flex flex-col items-center text-center group"
            >
              {/* Tool Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center mb-3 group-hover:bg-[#072B57]/5 transition-colors">
                {getToolIcon(idx)}
              </div>

              {/* Tool Name */}
              <h3 className="text-sm font-bold text-[#072B57] tracking-tight">
                {tool.name}
              </h3>

              {/* Category */}
              <span className="text-[11px] text-[#64748B] font-medium mt-1 leading-tight">
                {tool.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
