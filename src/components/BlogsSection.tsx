import React from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/cbmData';
import { Clock, ArrowRight, User } from 'lucide-react';

interface BlogsSectionProps {
  onSelectBlog: (blog: BlogPost) => void;
}

export const BlogsSection: React.FC<BlogsSectionProps> = ({ onSelectBlog }) => {
  return (
    <section id="blogs" className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 block">
            Latest Industry Insights
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#072B57] tracking-tight">
            Blogs & Digital Strategy Guides
          </h2>
          <p className="text-[#64748B] text-base mt-3 leading-relaxed">
            Stay ahead with actionable insights on performance marketing, generative AI tools, SEO techniques, and career growth strategies.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((blog) => (
            <article
              key={blog.id}
              className="cbm-card overflow-hidden bg-white rounded-xl border border-[#E5E7EB] hover:border-[#072B57]/30 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden bg-[#F8FAFC]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#072B57] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6">
                  {/* Meta info */}
                  <div className="flex items-center justify-between text-xs font-semibold text-[#64748B] mb-3">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#FF6B00]" />
                      {blog.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#072B57]" />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#072B57] mb-2.5 leading-snug line-clamp-2 hover:text-[#FF6B00] transition-colors">
                    {blog.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#64748B] leading-relaxed mb-4 line-clamp-3">
                    {blog.shortDescription}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => onSelectBlog(blog)}
                  className="cbm-btn-secondary w-full py-2.5 text-xs font-bold justify-center"
                  id={`read-more-blog-${blog.id}`}
                >
                  Read More
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
