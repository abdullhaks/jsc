import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, BookOpen, Calendar, Eye, FileCheck, Star } from 'lucide-react';

const downloads = [
  {
    id: 1,
    title: 'Mafaheemu yajibu an thusaha',
    link: 'https://ik.imagekit.io/aksWebSolutions/JSC/mafaheem.pdf?updatedAt=1754492501066',
    description: 'A comprehensive Arabic book that addresses common misconceptions within the Muslim Ummah in the modern era. It provides insightful analysis and clarifications on contemporary Islamic discourse.',
    category: 'books',
    type: 'PDF',
    size: '8.39 MB',
    pages: 322,
    downloads: 10,
    rating: 4.8,
    publishedDate: '2023',
    language: 'Arabic',
    featured: true,
    tags: ['Misconceptions', 'Modern Era', 'Islamic Discourse'],
  },
  // {
  //   id: 2,
  //   title: 'Islamic Education Guidelines',
  //   link: 'https://ik.imagekit.io/aksWebSolutions/JSC/mafaheem.pdf?updatedAt=1754492501066',
  //   description: 'Comprehensive resources and methodologies for Islamic education in contemporary settings. A practical guide for educators and students alike.',
  //   category: 'education',
  //   type: 'PDF',
  //   size: '1.8 MB',
  //   pages: 89,
  //   downloads: 1654,
  //   rating: 4.6,
  //   publishedDate: '2024',
  //   language: 'English',
  //   tags: ['Education', 'Teaching Methods', 'Curriculum'],
  // },
  // {
  //   id: 3,
  //   title: 'Sufi Practices Handbook',
  //   link: 'https://ik.imagekit.io/aksWebSolutions/JSC/mafaheem.pdf?updatedAt=1754492501066',
  //   description: 'A detailed guide to traditional Sufi practices and spiritual exercises. Perfect for those seeking to deepen their spiritual journey.',
  //   category: 'spirituality',
  //   type: 'PDF',
  //   size: '3.1 MB',
  //   pages: 203,
  //   downloads: 3291,
  //   rating: 4.9,
  //   publishedDate: '2023',
  //   language: 'Arabic/English',
  //   featured: true,
  //   tags: ['Sufism', 'Spiritual Practices', 'Meditation'],
  // },
  // {
  //   id: 4,
  //   title: 'Thareeqath Workshop Materials',
  //   link: 'https://ik.imagekit.io/aksWebSolutions/JSC/mafaheem.pdf?updatedAt=1754492501066',
  //   description: 'Complete workshop materials and study guides for understanding the principles and practices of Thareeqath.',
  //   category: 'workshops',
  //   type: 'PDF',
  //   size: '4.2 MB',
  //   pages: 278,
  //   downloads: 1876,
  //   rating: 4.7,
  //   publishedDate: '2024',
  //   language: 'Arabic',
  //   tags: ['Thareeqath', 'Workshop', 'Study Guide'],
  // },
  // {
  //   id: 5,
  //   title: 'Community Outreach Toolkit',
  //   link: 'https://ik.imagekit.io/aksWebSolutions/JSC/mafaheem.pdf?updatedAt=1754492501066',
  //   description: 'Resources and strategies for effective community engagement and outreach programs in Islamic centers.',
  //   category: 'community',
  //   type: 'PDF',
  //   size: '2.7 MB',
  //   pages: 134,
  //   downloads: 987,
  //   rating: 4.5,
  //   publishedDate: '2024',
  //   language: 'English',
  //   tags: ['Community', 'Outreach', 'Engagement'],
  // },
  // {
  //   id: 6,
  //   title: 'Digital Wellness Handbook',
  //   link: '#',
  //   description: 'Comprehensive guide to digital wellness.',
  //   category: 'handbook',
  //   type: 'PDF',
  //   size: '1.5 MB',
  //   pages: 120,
  //   downloads: 1200,
  //   rating: 4.8,
  //   publishedDate: '2023',
  //   language: 'English',
  //   tags: ['Health', 'Technology'],
  // },
  // {
  //   id: 7,
  //   title: 'Youth & Screen Time Report',
  //   link: '#',
  //   description: 'Insights on screen usage among youth.',
  //   category: 'report',
  //   type: 'PDF',
  //   size: '2.0 MB',
  //   pages: 95,
  //   downloads: 950,
  //   rating: 4.5,
  //   publishedDate: '2022',
  //   language: 'English',
  //   tags: ['Youth', 'Screen Time'],
  // },
  // {
  //   id: 8,
  //   title: 'Case Study: Digital Detox',
  //   link: '#',
  //   description: 'Real-life impact of digital detox programs.',
  //   category: 'case-study',
  //   type: 'PDF',
  //   size: '1.2 MB',
  //   pages: 50,
  //   downloads: 600,
  //   rating: 4.2,
  //   publishedDate: '2021',
  //   language: 'Hindi',
  //   tags: ['Case Study', 'Detox'],
  // },
];

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Books', value: 'books' },
  { label: 'Education', value: 'education' },
  { label: 'Spirituality', value: 'spirituality' },
  { label: 'Workshops', value: 'workshops' },
  { label: 'Community', value: 'community' },
  { label: 'Handbooks', value: 'handbook' },
  { label: 'Reports', value: 'report' },
  { label: 'Case Studies', value: 'case-study' },
];

const Downloads = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // const totalDownloads = downloads.reduce((sum, item) => sum + item.downloads, 0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="downloads"
      className="py-32 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50/30 to-teal-50/40"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-emerald-300/20 to-teal-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -60, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-emerald-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Dynamic pattern overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20L40 40L20 60L40 60L60 40L40 20L60 20L40 0L20 20Z' fill='%23059669'/%3E%3C/svg%3E")`,
        }}
        animate={{ backgroundPosition: ['0px 0px', '80px 80px'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
          >
            <Download className="w-6 h-6 text-emerald-600" />
            <span className="text-emerald-700 font-semibold">Resource Library</span>
          </motion.div>

          <motion.h2
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-800 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Downloads
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Access our comprehensive collection of literature, educational materials, and guides
          </motion.p>

          {/* Stats */}
          {/* <motion.div
            className="flex flex-wrap justify-center gap-8 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">{downloads.length}</div>
              <div className="text-gray-600 text-sm">Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">{totalDownloads.toLocaleString()}+</div>
              <div className="text-gray-600 text-sm">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{categories.length - 1}</div>
              <div className="text-gray-600 text-sm">Categories</div>
            </div>
          </motion.div> */}
        </motion.div>

        {/* Downloads Grid */}
        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {downloads.map((download, index) => (
              <motion.div
                key={download.id}
                variants={itemVariants}
                layout
                onHoverStart={() => setHoveredItem(download.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="group relative"
              >
                <motion.div
                  className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 h-full flex flex-col"
                  whileHover={{
                    y: -8,
                    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                  }}
                >
                  {/* Featured Badge */}
                  {download.featured && (
                    <motion.div
                      className="absolute top-4 left-4 z-10 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      ⭐ FEATURED
                    </motion.div>
                  )}

                  {/* File Icon Header */}
                  <div className="relative h-24 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                    >
                      <FileText className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* File Type Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                      <span className="text-xs font-bold text-emerald-600">{download.type}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category */}
                    <motion.span
                      className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-2 py-1 rounded-lg text-xs font-semibold mb-3 self-start"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FileText className="w-3 h-3" />
                      {categories.find((cat) => cat.value === download.category)?.label || download.category}
                    </motion.span>

                    {/* Title */}
                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {download.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">{download.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {download.tags?.slice(0, 3).map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md"
                          whileHover={{ scale: 1.1, backgroundColor: '#dbeafe' }}
                        >
                          #{tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        <span>{download.pages} pages</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{download.downloads.toLocaleString()}+ downloads</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileCheck className="w-3 h-3" />
                        <span>{download.size}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{download.publishedDate}</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(download.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{download.rating}</span>
                      <span className="text-xs text-gray-500">({download.language})</span>
                    </div>

                    {/* Download Button */}
                    <motion.a
                      href={download.link}
                      download
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg group mt-auto"
                    >
                      <Download className="w-4 h-4 mr-2 transition-transform group-hover:translate-y-1" />
                      Download Now
                      <motion.div
                        className="ml-2"
                        animate={{
                          y: hoveredItem === download.id ? [0, -2, 0] : 0,
                          rotate: hoveredItem === download.id ? [0, 10, -10, 0] : 0,
                        }}
                        transition={{ duration: 0.5, repeat: hoveredItem === download.id ? Infinity : 0 }}
                      >
                        <FileText className="w-4 h-4" />
                      </motion.div>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-emerald-50 to-teal-50 backdrop-blur-sm rounded-3xl p-8 border border-white/50"
            whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          >
            <h3 className="text-2xl font-bold text-gray-900">Need More Resources?</h3>
            <p className="text-gray-600 text-center max-w-md">
              Contact us if you're looking for specific materials or have suggestions for new resources
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-2xl font-semibold"
            >
              Request Resources
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Downloads;