import React from 'react';
import { BlogPost } from '../types';
import { X, Clock, Calendar, User, ArrowLeft } from 'lucide-react';

interface BlogReaderModalProps {
  blog: BlogPost | null;
  onClose: () => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#072B57]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-xl w-full max-w-3xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#072B57] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <span className="bg-[#FF6B00] text-white px-2 py-0.5 rounded text-[10px] uppercase">
              {blog.category}
            </span>
            <span>Published {blog.publishDate}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            id="close-blog-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#072B57] leading-tight">
            {blog.title}
          </h2>

          {/* Author info */}
          <div className="flex items-center gap-3 pb-4 border-b border-[#E5E7EB]">
            <div className="w-10 h-10 rounded-full bg-[#072B57]/10 flex items-center justify-center text-[#072B57] font-bold">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#072B57]">{blog.author}</p>
              <p className="text-[11px] text-[#64748B]">{blog.authorRole}</p>
            </div>
            <div className="ml-auto text-xs text-[#64748B] flex items-center gap-1 font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
              {blog.readTime}
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden border border-[#E5E7EB] h-60 sm:h-72">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Body Content */}
          <div className="prose prose-slate max-w-none text-sm text-[#1E293B] leading-relaxed whitespace-pre-line space-y-4 font-normal">
            {blog.content}
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#F8FAFC] p-4 border-t border-[#E5E7EB] flex items-center justify-between">
          <button
            onClick={onClose}
            className="cbm-btn-secondary text-xs py-2 px-4"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            Back to Articles
          </button>

          <span className="text-[11px] font-medium text-[#64748B]">
            CBM Academy Thought Leadership Series
          </span>
        </div>

      </div>
    </div>
  );
};
