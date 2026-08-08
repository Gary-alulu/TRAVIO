"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  tags: string[];
}

interface FormattedBlogPost extends BlogPost {
  formattedDate: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "A Journey Through the Alps",
    excerpt: "Experience the breathtaking beauty of the Alps through the eyes of a seasoned traveler.",
    image: "/hero1.jpg",
    author: "Jane Doe",
    date: "2024-06-01",
    tags: ["Adventure", "Culture"],
  },
  {
    id: 2,
    title: "Cultural Wonders of Kyoto",
    excerpt: "Discover the traditions, temples, and tastes that make Kyoto unforgettable.",
    image: "/culture 1.jpg",
    author: "John Smith",
    date: "2024-05-20",
    tags: ["Culture", "Guides"],
  },
  {
    id: 3,
    title: "Tips for Solo Travelers",
    excerpt: "Navigate the world with confidence using these essential solo travel tips.",
    image: "/culture 2.jpg",
    author: "Alex Lee",
    date: "2024-05-10",
    tags: ["Tips", "Adventure"],
  },
  // Add more posts as needed
];

const categories = ["All", "Tips", "Destinations", "Culture", "Guides"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const postsWithFormattedDates = useMemo<FormattedBlogPost[]>(() => {
    return blogPosts.map(post => ({
      ...post,
      formattedDate: new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }));
  }, []);

  const filteredPosts = useMemo<FormattedBlogPost[]>(() => {
    const searchLower = search.toLowerCase();
    return postsWithFormattedDates.filter(
      (post) =>
        (activeCategory === "All" || post.tags.includes(activeCategory)) &&
        (post.title.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower))
    );
  }, [postsWithFormattedDates, activeCategory, search]);

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#3E2C23] font-['Poppins']">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/hero1.jpg"
          alt="Travel Stories Hero"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
        <motion.div
          className="relative z-20 flex flex-col items-center justify-center w-full px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-center tracking-tight font-['Playfair_Display']">
            Stories That Move You
          </h1>
          <p className="text-lg sm:text-xl text-[#E6D5B8] mb-6 text-center max-w-2xl font-['Poppins']">
            Travel insights, guides, culture, and inspiration curated by experts and explorers.
          </p>
          {/* Search Bar */}
          <div className="w-full max-w-md mt-2">
            <label htmlFor="search" className="sr-only">Search blog posts</label>
            <input
              id="search"
              type="search"
              role="searchbox"
              aria-label="Search blog posts"
              placeholder="Search blog posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl px-4 py-2 bg-white/80 text-[#3E2C23] placeholder-[#A08B6D] focus:outline-none focus:ring-2 focus:ring-[#E6D5B8] shadow-md"
            />
          </div>
        </motion.div>
      </section>

      {/* Category Filters */}
      <div className="sticky top-0 z-30 bg-[#FFF8F0] py-3 px-4 flex gap-2 overflow-x-auto border-b border-[#E6D5B8]">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            aria-label={`Filter by ${cat} category`}
            className={`rounded-full px-4 py-2 font-medium transition-colors duration-200 border border-[#E6D5B8] focus:outline-none focus:ring-2 focus:ring-[#E6D5B8] ${activeCategory === cat ? "bg-[#3E2C23] text-[#FFF8F0]" : "bg-[#FFF8F0] text-[#3E2C23] hover:bg-[#E6D5B8]/60"}`}
            layout
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Blog Grid Section */}
      <main className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredPosts.slice(0, visibleCount).map((post, idx) => (
            <motion.div
              key={post.id}
              className="bg-[#E6D5B8]/70 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-105 hover:brightness-110 transition-transform duration-300 aspect-[16/9]"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center rounded-t-2xl"
                  sizes="100vw"
                />
              </div>
              <div className="flex-1 flex flex-col p-5">
                <div className="flex gap-2 mb-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${tag === "Adventure" ? "bg-[#A08B6D] text-white" : tag === "Culture" ? "bg-[#E6D5B8] text-[#3E2C23]" : tag === "Tips" ? "bg-[#3E2C23] text-[#FFF8F0]" : "bg-[#FFF8F0] text-[#3E2C23] border border-[#A08B6D]"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-serif text-2xl font-bold mb-2 group-hover:underline transition-colors font-['Playfair_Display']">
                  <a href={`/blog/${post.id}`} className="outline-none focus:underline" aria-label={`Read ${post.title}`}>
                    {post.title}
                  </a>
                </h2>
                <p className="text-sm text-[#5A4633] mb-4 flex-1 font-['Poppins']" aria-label="Article excerpt">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-[#A08B6D]" role="contentinfo">
                  <span aria-label="Author">By {post.author}</span>
                  <time dateTime={post.date} aria-label="Publication date">{post.formattedDate}</time>
                </div>
                <a 
                  href={`/blog/${post.id}`}
                  className="mt-4 text-[#3E2C23] font-semibold hover:underline hover:text-[#A08B6D] transition-colors text-left inline-flex items-center gap-1 group focus:outline-none focus:underline"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More
                  <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </main>

      {/* Load More Button */}
      {visibleCount < filteredPosts.length && (
        <div className="flex justify-center pb-10">
          <motion.button
            onClick={() => setVisibleCount((c) => c + 6)}
            className="px-8 py-3 rounded-xl bg-[#3E2C23] text-[#FFF8F0] font-semibold shadow-lg hover:bg-[#A08B6D] transition-colors"
            whileTap={{ scale: 0.97 }}
          >
            Load More
          </motion.button>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}