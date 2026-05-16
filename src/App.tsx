import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Gamepad2, 
  Globe, 
  Sparkles, 
  Zap, 
  Monitor, 
  Smartphone, 
  Apple,
  Heart,
  Twitter,
  Youtube,
  MessageCircle,
  Play,
  Users,
  Swords,
  Ghost,
  PartyPopper,
  TrendingUp
} from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    { 
      icon: Gamepad2, 
      title: '无限创造', 
      titleEn: 'Infinite Creation',
      desc: '数百万个游戏等着你', 
      descEn: 'Millions of games await you',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Globe, 
      title: '全球社交', 
      titleEn: 'Global Social',
      desc: '和世界各地的玩家一起玩', 
      descEn: 'Play with players worldwide',
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      icon: Sparkles, 
      title: '免费畅玩', 
      titleEn: 'Free to Play',
      desc: '永远免费，开始冒险', 
      descEn: 'Always free, start your adventure',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      icon: Zap, 
      title: '持续更新', 
      titleEn: 'Constant Updates',
      desc: '每天都有新内容', 
      descEn: 'New content every day',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const gameTypes = [
    { icon: TrendingUp, name: '冒险游戏', nameEn: 'Adventure', color: 'bg-gradient-to-br from-green-500 to-emerald-600' },
    { icon: Heart, name: '模拟游戏', nameEn: 'Simulation', color: 'bg-gradient-to-br from-pink-500 to-rose-600' },
    { icon: Users, name: '角色扮演', nameEn: 'Roleplay', color: 'bg-gradient-to-br from-purple-500 to-violet-600' },
    { icon: Swords, name: '竞技游戏', nameEn: 'Competitive', color: 'bg-gradient-to-br from-red-500 to-orange-600' },
    { icon: Ghost, name: '恐怖游戏', nameEn: 'Horror', color: 'bg-gradient-to-br from-gray-700 to-gray-900' },
    { icon: PartyPopper, name: '社交游戏', nameEn: 'Social', color: 'bg-gradient-to-br from-cyan-500 to-blue-600' }
  ];

  const platforms = [
    { 
      icon: Monitor, 
      name: 'Windows', 
      url: 'https://www.roblox.com/download',
      desc: 'PC端下载'
    },
    { 
      icon: Apple, 
      name: 'Mac', 
      url: 'https://www.roblox.com/download',
      desc: 'Mac下载'
    },
    { 
      icon: Smartphone, 
      name: 'iOS', 
      url: 'https://apps.apple.com/us/app/roblox/id451116550',
      desc: 'App Store'
    },
    { 
      icon: Play, 
      name: 'Android', 
      url: 'https://play.google.com/store/apps/details?id=com.roblox.client',
      desc: 'Google Play'
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen cyber-grid relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-30"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000 
            }}
            animate={{ 
              y: -100,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000) 
            }}
            transition={{ 
              duration: 15 + Math.random() * 10, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Scan Line Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20 animate-scan-line" />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 glass-strong"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="text-2xl font-bold text-gradient font-orbitron"
              whileHover={{ scale: 1.05 }}
            >
              ROBLOX
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['features', 'games', 'download'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white transition-colors relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-cyan-900/20" />
        
        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-black text-glow font-orbitron tracking-wider">
              <motion.span
                className="inline-block text-gradient"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
                    '0 0 40px rgba(34, 211, 238, 0.5), 0 0 80px rgba(34, 211, 238, 0.3)',
                    '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)',
                    '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ROBLOX
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-light mb-4 text-cyan-300">
              想象一个世界，在这里你就是你
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">
              Imagine a world where you're you
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://www.roblox.com/download"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                  '0 0 40px rgba(168, 85, 247, 0.8)',
                  '0 0 20px rgba(168, 85, 247, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Download className="w-6 h-6" />
              <span>免费下载 / Free Download</span>
            </motion.a>
          </motion.div>

          {/* Floating Icons */}
          <motion.div
            className="absolute top-1/4 left-10 text-6xl opacity-20"
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 10, -10]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🎮
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 right-10 text-6xl opacity-20"
            animate={{ 
              y: [0, 30, 0],
              rotate: [0, -10, 10]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            🌍
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-20 text-5xl opacity-15"
            animate={{ 
              y: [0, -20, 0],
              x: [0, 20, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            ⚡
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">特色功能</span>
            </h2>
            <p className="text-xl text-gray-400">Features</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass rounded-2xl p-8 card-hover"
              >
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 mx-auto`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 text-white text-center">
                  {feature.title}
                </h3>
                <p className="text-purple-400 text-center mb-2 font-medium">
                  {feature.titleEn}
                </p>
                <p className="text-gray-400 text-center">
                  {feature.desc}
                </p>
                <p className="text-gray-500 text-center text-sm">
                  {feature.descEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">游戏类型</span>
            </h2>
            <p className="text-xl text-gray-400">Game Types</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {gameTypes.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="glass rounded-2xl p-6 text-center card-hover cursor-pointer group"
              >
                <motion.div
                  className={`${game.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-2xl transition-shadow`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <game.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {game.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {game.nameEn}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Featured Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '200M+', label: '月活用户 / Monthly Users' },
              { value: '40M+', label: '游戏开发者 / Game Developers' },
              { value: '1000W+', label: '游戏数量 / Games' },
              { value: '180+', label: '覆盖国家 / Countries' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl md:text-6xl font-bold text-gradient mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">立即下载</span>
            </h2>
            <p className="text-xl text-gray-400">Download Now</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass rounded-2xl p-8 text-center card-hover group"
              >
                <motion.div
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <platform.icon className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {platform.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  {platform.desc}
                </p>
                <motion.div
                  className="flex items-center justify-center gap-2 text-purple-400 group-hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Download className="w-5 h-5" />
                  <span>下载 / Download</span>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-strong rounded-3xl p-12 md:p-20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10" />
            <div className="relative z-10">
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-6"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(168, 85, 247, 0.5)',
                    '0 0 40px rgba(34, 211, 238, 0.5)',
                    '0 0 20px rgba(168, 85, 247, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-gradient">开始你的冒险</span>
              </motion.h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Start Your Adventure
              </p>
              <motion.a
                href="https://www.roblox.com/download"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber inline-flex items-center gap-3 text-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(168, 85, 247, 0.5)',
                    '0 0 40px rgba(168, 85, 247, 0.8)',
                    '0 0 20px rgba(168, 85, 247, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Play className="w-6 h-6" />
                <span>立即加入 / Join Now</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 glass-strong mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">ROBLOX</h3>
              <p className="text-gray-400">
                想象、创造、探索<br />
                Imagine, Create, Explore
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4">快速链接 / Quick Links</h4>
              <div className="space-y-2">
                <a href="https://www.roblox.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">
                  官方网站 / Official Website
                </a>
                <a href="https://create.roblox.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">
                  开发者中心 / Developer Hub
                </a>
                <a href="https://devforum.roblox.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">
                  开发者论坛 / DevForum
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4">关注我们 / Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, href: 'https://twitter.com/roblox' },
                  { icon: Youtube, href: 'https://www.youtube.com/roblox' },
                  { icon: MessageCircle, href: 'https://discord.gg/roblox' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2026 Roblox Corporation. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              本网站仅供宣传目的 / For promotional purposes only
            </p>
          </div>
        </div>
      </footer>

      {/* Loading Screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="text-8xl"
            >
              🎮
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
