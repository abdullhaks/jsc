import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Sparkles, BookOpen, Heart, Star, Calendar } from 'lucide-react';
import jsc_logo2 from '../assets/jsc_logo2.png';

const Hero = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const y = useTransform(scrollY, [0, 1000], [0, -300]);
  const opacity = useTransform(scrollY, [0, 2000], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    opacity: Math.random() * 0.3 + 0.1,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Animated Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Main Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
        
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)`,
          }}
          animate={{
            background: [
              `radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)`,
              `radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)`,
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Islamic Pattern Background */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M60 0L75 45H45L60 0Z M60 120L75 75H45L60 120Z M0 60L45 75V45L0 60Z M120 60L75 75V45L120 60Z M60 60L75 75L60 90L45 75L60 60Z' /%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{ 
            backgroundPosition: ['0px 0px', '120px 120px'],
            rotate: [0, 360]
          }}
          transition={{ 
            backgroundPosition: { duration: 60, repeat: Infinity, ease: 'linear' },
            rotate: { duration: 120, repeat: Infinity, ease: 'linear' }
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [particle.opacity, 0, particle.opacity],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Light Rays */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 left-1/2 w-1 bg-gradient-to-b from-yellow-400/20 via-transparent to-transparent origin-top"
              style={{
                height: '100%',
                transformOrigin: 'top center',
                transform: `translateX(-50%) rotate(${(i * 60) - 30}deg)`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scaleY: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-35 lg:px-12">
        <motion.div
          className="text-center space-y-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Logo Section */}
          
          <motion.div
            className="relative mx-auto w-fit"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            />
            <motion.img
              src={jsc_logo2}
              alt="Jeelani Studies Centre"
              className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-2xl shadow-2xl object-cover border-4 border-white/50"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              initial={{ scale: 0 }}
              animate={{ 
                scale: 1,
                rotate: [0, 360],
              }}
              transition={{ 
                scale: { delay: 1, duration: 0.5 },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
            >
              <Star className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.div className="space-y-6">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="block bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-800 bg-clip-text text-transparent">
                Jeelani Studies
              </span>
              <motion.span 
                className="block bg-gradient-to-r from-teal-600 via-emerald-700 to-teal-800 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Centre
              </motion.span>
            </motion.h1>

            {/* Subtitle with Icons */}
            <motion.div
              className="flex items-center justify-center space-x-4 text-lg md:text-xl text-gray-600 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <BookOpen className="w-6 h-6 text-emerald-600" />
                <span>Islamic Education</span>
              </motion.div>
              <span className="text-gray-400">•</span>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="w-6 h-6 text-teal-600" />
                <span>Spiritual Excellence</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Quranic Verse */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-2xl px-8 py-6 shadow-xl">
                <motion.p
                  className="text-2xl md:text-3xl font-bold text-emerald-800 mb-3 arabic-text"
                  style={{ 
                    fontFamily: "'Amiri', 'Times New Roman', serif",
                    direction: 'rtl',
                    unicodeBidi: 'embed'
                  }}
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(34, 197, 94, 0.3)',
                      '0 0 20px rgba(34, 197, 94, 0.5)',
                      '0 0 10px rgba(34, 197, 94, 0.3)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-600 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  "And We sent you not except as a mercy to the worlds" (Qur'an 21:107)
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {t('hero_description') || 'Dedicated to preserving and spreading the authentic teachings of Islam through education, research, and spiritual guidance. Join us in our journey towards knowledge and enlightenment.'}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('upcomingEvents')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Explore Programs</span>
              </span>
            </motion.button>

            <motion.button
              className="group flex items-center space-x-2 px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-5 h-5" />
              <span>Get Started</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-emerald-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
        }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => document.getElementById('leaders')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            className="p-2 rounded-full border-2 border-emerald-600/30 hover:border-emerald-600 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>

    </motion.section>
  );
};

export default Hero;