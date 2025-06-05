import { motion } from 'framer-motion';
import { AnimatedButton } from '../ui/animated-button';
import JapaneseText from '../ui/JapaneseText';

const elegantEasing = [0.25, 0.1, 0.25, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: elegantEasing
    }
  }
};

export default function HeroContent() {
  return (
    <motion.div 
      className="relative z-10 container text-center text-gray-800 section-padding px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        {/* Main heading */}
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-heading"
          variants={itemVariants}
        >
          地域とつながる、<br className="sm:hidden" />
          <span className="text-accent">未来をつくる</span>
        </motion.h1>
        
        {/* Subheading */}
        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700"
          variants={itemVariants}
        >
          ひとつじゃない、いくつもの「はたらく」を
        </motion.p>
        
        {/* Description */}
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600"
          variants={itemVariants}
        >
          <JapaneseText className="block">
            川西町マルチワーク事業協同組合「わにまる」は、<wbr />季節に応じた様々な仕事を組み合わせることで、<wbr />一年を通じて安定した収入と地域とのつながりを実現します。
            <br className="my-2" />
            春は田植え、夏は草刈り、秋は収穫、冬は除雪...<wbr />あなたも地域と一緒に働きませんか？
          </JapaneseText>
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <AnimatedButton 
            asChild
            variant="default" 
            size="lg"
            animationType="lift"
            className="bg-accent hover:bg-accent-dark text-white font-bold shadow-xs transition-all text-lg px-8 py-3 font-heading rounded-full"
          >
            <a href="/join">参加する</a>
          </AnimatedButton>
          
          <AnimatedButton 
            asChild
            variant="outline" 
            size="lg"
            animationType="glow"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-all text-lg px-8 py-3 font-heading rounded-full"
          >
            <a href="/about">わにまるについて</a>
          </AnimatedButton>
        </motion.div>
      </div>
    </motion.div>
  );
}