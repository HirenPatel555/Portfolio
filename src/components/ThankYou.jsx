import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="fixed inset-0 w-full h-full bg-[#000000] z-50 flex flex-col justify-center items-center px-6 text-center select-none">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,242,254,0.06)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Glow Backdrop */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-accent-blue/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md w-full space-y-8 glass-panel p-8 md:p-10 border border-[#00F2FE]/20 bg-[#0A0A0A]/90 shadow-[0_12px_40px_rgba(0,242,254,0.1)]">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.1, 1], opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="p-4 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/30 text-[#00F2FE] shadow-[0_0_20px_rgba(0,242,254,0.2)]">
            <CheckCircle className="w-12 h-12 stroke-[1.5]" />
          </div>
        </motion.div>

        {/* Text Details */}
        <div className="space-y-3">
          <motion.h1
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white text-2xl md:text-3xl font-extrabold tracking-tight"
          >
            Thank You!
          </motion.h1>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-text-gray text-sm md:text-base leading-relaxed"
          >
            Your message has been sent successfully. I will read through your notes and get back to you soon.
          </motion.p>
        </div>

        {/* Redirect Progress indicator */}
        <div className="space-y-2 pt-2">
          <div className="w-full bg-white/5 h-[3px] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 3.5, ease: "linear" }}
              className="bg-[#00F2FE] h-full rounded-full shadow-[0_0_8px_#00F2FE]"
            />
          </div>
          <span className="text-[10px] text-text-gray/50 font-mono tracking-wider uppercase block">
            Redirecting to Home Page
          </span>
        </div>
      </div>
    </div>
  );
}
