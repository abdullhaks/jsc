import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Sparkles, BookOpen, Heart, Star, Calendar, Book, Compass, Clock, Users, Mic, GraduationCap, MapPin } from 'lucide-react';

import jsc_logo2 from '../assets/jsc_logo2.png'
// Mock logo component since we can't import the actual image
const LogoPlaceholder = () => (
  <div className="w-28 h-28 md:w-36 md:h-36 lg:w-52 lg:h-52 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-2xl border-4 border-white/50">
    <img src={jsc_logo2} className="w-16 h-16 md:w-28 md:h-28 text-white" />
  </div>
);

const Hero = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFloatingButton, setActiveFloatingButton] = useState(null);
  
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

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 2,
    opacity: Math.random() * 0.4 + 0.2,
    duration: Math.random() * 4 + 3,
  }));

  const floatingButtons = [
    { icon: Book, label: 'Quran', color: 'from-emerald-500 to-teal-500', position: { top: '20%', left: '8%' } },
    { icon: Compass, label: 'Qibla', color: 'from-blue-500 to-indigo-500', position: { top: '35%', right: '10%' } },
    { icon: Clock, label: 'Prayer Times', color: 'from-purple-500 to-pink-500', position: { bottom: '30%', left: '6%' } },
    { icon: Users, label: 'Community', color: 'from-orange-500 to-red-500', position: { top: '60%', right: '8%' } },
    { icon: Mic, label: 'Dhikr', color: 'from-teal-500 to-cyan-500', position: { bottom: '20%', right: '12%' } },
  ];

  // Islamic geometric pattern SVG
  const IslamicPattern = () => (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="islamicPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15">
            {/* 8-pointed star pattern */}
            <path d="M60,20 L70,40 L90,30 L80,50 L100,60 L80,70 L90,90 L70,80 L60,100 L50,80 L30,90 L40,70 L20,60 L40,50 L30,30 L50,40 Z" />
            <circle cx="60" cy="60" r="25" />
            <path d="M35,35 L85,85 M85,35 L35,85" />
            {/* Geometric grid */}
            <path d="M0,60 L120,60 M60,0 L60,120" strokeWidth="0.3" />
            <circle cx="0" cy="60" r="10" strokeWidth="0.3" />
            <circle cx="120" cy="60" r="10" strokeWidth="0.3" />
            <circle cx="60" cy="0" r="10" strokeWidth="0.3" />
            <circle cx="60" cy="120" r="10" strokeWidth="0.3" />
          </g>
        </pattern>
        
        <pattern id="arabesque" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.1">
            <path d="M80,20 Q100,40 120,20 Q140,40 160,60 Q140,80 120,100 Q100,120 80,140 Q60,120 40,100 Q20,80 0,60 Q20,40 40,20 Q60,40 80,20 Z" />
            <circle cx="80" cy="80" r="30" />
            <path d="M50,50 Q80,20 110,50 Q80,80 110,110 Q80,140 50,110 Q80,80 50,50 Z" />
          </g>
        </pattern>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#islamicPattern)" className="text-emerald-600" />
      <rect width="100%" height="100%" fill="url(#arabesque)" className="text-teal-600" />
    </svg>
  );

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Main Gradient Background with Islamic colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50  to-amber-50" />
        
        {/* Animated Islamic Pattern Background */}
        <motion.div
          className="absolute inset-0"
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ 
            rotate: { duration: 300, repeat: Infinity, ease: 'linear' }
          }}
        >
          <IslamicPattern />
        </motion.div>

        {/* Secondary pattern layer */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 400, repeat: Infinity, ease: 'linear' },
            scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <g fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.6">
                  <polygon points="40,10 60,25 60,55 40,70 20,55 20,25" className="text-teal-500" />
                  <circle cx="40" cy="40" r="15" className="text-emerald-500" />
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexPattern)" />
          </svg>
        </motion.div>
        
        {/* Dynamic Gradient Overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.2) 0%, rgba(20, 184, 166, 0.1) 30%, transparent 60%)`,
          }}
          animate={{
            background: [
              `radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.2) 0%, rgba(20, 184, 166, 0.1) 30%, transparent 60%)`,
              `radial-gradient(circle at 75% 25%, rgba(20, 184, 166, 0.2) 0%, rgba(34, 197, 94, 0.1) 30%, transparent 60%)`,
              `radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.15) 0%, rgba(34, 197, 94, 0.1) 30%, transparent 60%)`,
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Enhanced Floating Particles with Islamic motifs */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
            }}
            animate={{
              y: [-30, -120, -30],
              x: [-10, 10, -10],
              opacity: [particle.opacity, 0, particle.opacity],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            <div 
              className="bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 rounded-full"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
            />
          </motion.div>
        ))}

        {/* Mystical Light Rays */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 bg-gradient-to-t from-transparent via-amber-300/30 to-transparent origin-bottom"
              style={{
                height: '60%',
                transformOrigin: 'bottom center',
                transform: `translateX(-50%) translateY(50%) rotate(${(i * 45)}deg)`,
              }}
              animate={{
                opacity: [0.1, 0.6, 0.1],
                scaleY: [0.5, 1.3, 0.5],
                scaleX: [0.5, 2, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Floating crescent moons */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-300/20"
            style={{
              left: `${20 + i * 30}%`,
              top: `${15 + i * 25}%`,
              fontSize: `${20 + i * 10}px`,
            }}
            animate={{
              y: [-20, -40, -20],
              rotate: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          >
            ☪
          </motion.div>
        ))}
      </div>

      {/* Floating Navigation Buttons */}
      {floatingButtons.map((button, index) => (
        <motion.div
          key={index}
          className="absolute z-20 hidden lg:block"
          style={button.position}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2 + index * 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => setActiveFloatingButton(index)}
          onHoverEnd={() => setActiveFloatingButton(null)}
        >
          <motion.button
            className={`relative p-4 bg-gradient-to-r ${button.color} rounded-full shadow-2xl backdrop-blur-sm border border-white/20 group`}
            whileTap={{ scale: 0.95 }}
            animate={activeFloatingButton === index ? { 
              boxShadow: ['0 8px 32px rgba(0,0,0,0.1)', '0 12px 48px rgba(0,0,0,0.2)', '0 8px 32px rgba(0,0,0,0.1)'],
            } : {}}
            transition={{ duration: 0.3 }}
          >
            <button.icon className="w-6 h-6 text-white" />
            <motion.div
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: activeFloatingButton === index ? 1 : 0,
                y: activeFloatingButton === index ? 0 : -10
              }}
              transition={{ duration: 0.2 }}
            >
              {button.label}
            </motion.div>
            
            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              animate={activeFloatingButton === index ? {
                scale: [0, 2],
                opacity: [0.3, 0],
              } : {}}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:px-12">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Enhanced Logo Section */}
          <motion.div
            className="relative mx-auto w-fit"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              className="absolute -inset-6 bg-gradient-to-r from-emerald-500/30  via-amber-500/20 to-emerald-500/30 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            
            {/* Decorative rings around logo */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute inset-${i * 2 + 2} border-2 border-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full`}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 15 + i * 5, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{
                  borderImage: 'linear-gradient(45deg, rgba(34, 197, 94, 0.3), rgba(20, 184, 166, 0.3)) 1',
                }}
              />
            ))}
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <LogoPlaceholder />
            </motion.div>
            
            <motion.div
              className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white"
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
              <Star className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>

          {/* Enhanced Main Title */}
          <motion.div className="space-y-2">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span 
                className="block bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-800 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ 
                  backgroundSize: '300% 300%',
                  textShadow: '0 0 30px rgba(34, 197, 94, 0.3)',
                }}
              >
                Jeelani Studies
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-800 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
                }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{ 
                  backgroundSize: '300% 300%',
                  textShadow: '0 0 30px rgba(20, 184, 166, 0.3)',
                }}
              >
                Centre
              </motion.span>
            </motion.h1>

            {/* Enhanced Subtitle with Icons */}
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-lg md:text-xl text-gray-600 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.div
                className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-emerald-200/50"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <BookOpen className="w-6 h-6 text-emerald-600" />
                <span>Islamic Education</span>
              </motion.div>
              <span className="hidden md:block text-emerald-400">•</span>
              <motion.div
                className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-teal-200/50"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Heart className="w-6 h-6 text-teal-600" />
                <span>Spiritual Excellence</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Quranic Verse */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              className="relative inline-block max-w-4xl"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20  via-amber-400/20 to-emerald-400/20 rounded-3xl blur-2xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              
              <div className="relative bg-white/90 backdrop-blur-md border-2 border-gradient-to-r from-emerald-200/60 via-teal-200/60 to-amber-200/60 rounded-3xl px-8 py-8 shadow-2xl">
                <motion.p
                  className="text-2xl md:text-4xl font-bold text-emerald-800 mb-4"
                  style={{ 
                    fontFamily: "'Amiri', 'Times New Roman', serif",
                    direction: 'rtl',
                    unicodeBidi: 'embed',
                    lineHeight: '1.8',
                  }}
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(34, 197, 94, 0.4)',
                      '0 0 40px rgba(20, 184, 166, 0.6)',
                      '0 0 20px rgba(245, 158, 11, 0.4)',
                      '0 0 20px rgba(34, 197, 94, 0.4)'
                    ]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ
                </motion.p>
                <motion.p 
                  className="text-lg md:text-xl text-gray-700 italic font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  "And We sent you not except as a mercy to the worlds" (Qur'an 21:107)
                </motion.p>
                
                {/* Decorative elements */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-emerald-400/50 rounded-tl-lg" />
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-teal-400/50 rounded-tr-lg" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-amber-400/50 rounded-bl-lg" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-emerald-400/50 rounded-br-lg" />
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium bg-white/30 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/40 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {t('hero_description') || 'Dedicated to preserving and spreading the authentic teachings of Islam through education, research, and spiritual guidance. Join us in our journey towards knowledge and enlightenment in the light of the Quran and Sunnah.'}
          </motion.p>

          {/* Islamic App Icons Section */}
          <motion.div
            className="pt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.h3
              className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Islamic Resources
              </span>
            </motion.h3>
            
          <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl">
              {/* Quran App Icon */}
              <motion.div
                className="group relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      boxShadow: [
                        '0 10px 40px rgba(34, 197, 94, 0.3)',
                        '0 15px 60px rgba(34, 197, 94, 0.5)',
                        '0 10px 40px rgba(34, 197, 94, 0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <Book className="relative w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-3" />
                  <h4 className="relative text-white font-bold text-sm md:text-base text-center">Quran</h4>
                  <p className="relative text-emerald-100 text-xs text-center mt-1 opacity-90">Read & Listen</p>
                  
                  {/* App-like indicator dot */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-white text-xs font-bold">●</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Prayer Times App Icon */}
              <motion.div
                className="group relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      boxShadow: [
                        '0 10px 40px rgba(59, 130, 246, 0.3)',
                        '0 15px 60px rgba(59, 130, 246, 0.5)',
                        '0 10px 40px rgba(59, 130, 246, 0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                  <Clock className="relative w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-3" />
                  <h4 className="relative text-white font-bold text-sm md:text-base text-center">Prayer</h4>
                  <p className="relative text-blue-100 text-xs text-center mt-1 opacity-90">Times</p>
                </div>
              </motion.div>

              {/* Qibla Direction App Icon */}
              <motion.div
                className="group relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      boxShadow: [
                        '0 10px 40px rgba(147, 51, 234, 0.3)',
                        '0 15px 60px rgba(147, 51, 234, 0.5)',
                        '0 10px 40px rgba(147, 51, 234, 0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Compass className="relative w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-3" />
                  </motion.div>
                  <h4 className="relative text-white font-bold text-sm md:text-base text-center">Qibla</h4>
                  <p className="relative text-purple-100 text-xs text-center mt-1 opacity-90">Direction</p>
                </div>
              </motion.div>

              {/* Dhikr App Icon */}
              <motion.div
                className="group relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 p-6 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      boxShadow: [
                        '0 10px 40px rgba(20, 184, 166, 0.3)',
                        '0 15px 60px rgba(20, 184, 166, 0.5)',
                        '0 10px 40px rgba(20, 184, 166, 0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Mic className="relative w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-3" />
                  </motion.div>
                  <h4 className="relative text-white font-bold text-sm md:text-base text-center">Dhikr</h4>
                  <p className="relative text-teal-100 text-xs text-center mt-1 opacity-90">Aurad</p>
                </div>
              </motion.div>

              {/* Islamic Education App Icon */}
              {/* <motion.div
                className="group relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative bg-gradient-to-br from-amber-500 to-orange-600 p-6 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      boxShadow: [
                        '0 10px 40px rgba(245, 158, 11, 0.3)',
                        '0 15px 60px rgba(245, 158, 11, 0.5)',
                        '0 10px 40px rgba(245, 158, 11, 0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  />
                  <GraduationCap className="relative w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-3" />
                  <h4 className="relative text-white font-bold text-sm md:text-base text-center">Learn</h4>
                  <p className="relative text-amber-100 text-xs text-center mt-1 opacity-90">Islamic</p>
                </div>
              </motion.div> */}

              {/* Community App Icon */}
              <motion.div
                className="group relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative bg-gradient-to-br from-red-500 to-rose-600 p-6 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-red-400 to-rose-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      boxShadow: [
                        '0 10px 40px rgba(239, 68, 68, 0.3)',
                        '0 15px 60px rgba(239, 68, 68, 0.5)',
                        '0 10px 40px rgba(239, 68, 68, 0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
                  />
                  <Users className="relative w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-3" />
                  <h4 className="relative text-white font-bold text-sm md:text-base text-center">Community</h4>
                  <p className="relative text-red-100 text-xs text-center mt-1 opacity-90">Connect</p>
                  
                  {/* Online indicator */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.7)', '0 0 0 6px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Additional row for mobile - shows more apps */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mt-6 lg:hidden">
              {/* Hadith App */}
              {/* <motion.div
                className="group relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 p-6 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm">
                  <BookOpen className="relative w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="relative text-white font-bold text-sm text-center">Hadith</h4>
                  <p className="relative text-green-100 text-xs text-center mt-1 opacity-90">Collection</p>
                </div>
              </motion.div> */}

              {/* Islamic Calendar */}
              {/* <motion.div
                className="group relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative bg-gradient-to-br from-violet-500 to-purple-600 p-6 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm">
                  <Calendar className="relative w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="relative text-white font-bold text-sm text-center">Calendar</h4>
                  <p className="relative text-violet-100 text-xs text-center mt-1 opacity-90">Islamic</p>
                </div>
              </motion.div> */}

              {/* Mosque Finder */}
              {/* <motion.div
                className="group relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm">
                  <MapPin className="relative w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="relative text-white font-bold text-sm text-center">Mosque</h4>
                  <p className="relative text-cyan-100 text-xs text-center mt-1 opacity-90">Finder</p>
                </div>
              </motion.div> */}

              {/* Dua Collection */}
              {/* <motion.div
                className="group relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative bg-gradient-to-br from-pink-500 to-rose-600 p-6 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm">
                  <Heart className="relative w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="relative text-white font-bold text-sm text-center">Dua</h4>
                  <p className="relative text-pink-100 text-xs text-center mt-1 opacity-90">Collection</p>
                </div>
              </motion.div> */}


            </div>
            </div>

            {/* Islamic quote or inspiration */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.p
                className="text-sm md:text-base text-gray-600 italic bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-full px-6 py-3 border border-emerald-200/50 inline-block"
                animate={{
                  boxShadow: [
                    '0 4px 20px rgba(34, 197, 94, 0.1)',
                    '0 8px 40px rgba(20, 184, 166, 0.2)',
                    '0 4px 20px rgba(34, 197, 94, 0.1)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                "Seek knowledge from the cradle to the grave" - Prophet Muhammad (ﷺ)
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Enhanced Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.button
              className="group relative px-10 py-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 text-white font-bold rounded-2xl shadow-2xl overflow-hidden border border-white/20"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('upcomingEvents')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <span className="relative flex items-center space-x-3 text-lg">
                <Calendar className="w-6 h-6" />
                <span>Explore Programs</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </span>
            </motion.button>

            <motion.button
              className="group flex items-center space-x-3 px-10 py-5 border-3 border-emerald-600 text-emerald-600 font-bold rounded-2xl hover:bg-emerald-600 hover:text-white transition-all duration-500 shadow-lg bg-white/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-6 h-6" />
              <span className="text-lg">Get Started</span>
              <motion.div
                className="w-2 h-2 bg-current rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
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
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-3 cursor-pointer group"
          onClick={() => document.getElementById('leaders')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm font-semibold bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-emerald-200/50 group-hover:bg-emerald-50 transition-colors duration-300">
            Scroll to explore
          </span>
          <motion.div
            className="p-3 rounded-full border-3 border-emerald-600/40 hover:border-emerald-600 bg-white/60 backdrop-blur-sm transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 197, 94, 0.1)' }}
            animate={{
              boxShadow: [
                '0 4px 20px rgba(34, 197, 94, 0.2)',
                '0 8px 30px rgba(34, 197, 94, 0.4)',
                '0 4px 20px rgba(34, 197, 94, 0.2)'
              ]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>

    </motion.section>
  );
};

export default Hero;