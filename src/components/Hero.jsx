import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => (
  <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-12 bg-bgDark text-bgLight overflow-hidden relative">

    {/* Animated Background Circles */}
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.2, 1], opacity: 0.25 }}
      transition={{ duration: 2 }}
      className="absolute -top-20 -left-20 md:left-0 md:-top-24 w-[500px] h-[500px] bg-gradient-to-tr from-secondary to-accentPurple rounded-full blur-[130px]"
    />

    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.2, 1], opacity: 0.2 }}
      transition={{ duration: 2, delay: 0.3 }}
      className="absolute -bottom-32 -right-32 md:right-20 md:-bottom-32 w-[600px] h-[600px] bg-gradient-to-tr from-accentBlue to-highlight rounded-full blur-[140px]"
    />

    {/* Left Content */}
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="z-10 md:w-1/2 text-center md:text-left space-y-8"
    >
      <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
        Hello! I'm <br />
        <span className="text-secondary">[Your Name]</span>
      </h1>

      <p className="text-xl md:text-2xl font-semibold text-highlight">
        Senior Full Stack Developer & UI/UX Expert
      </p>

      {/* Animated Typing Code Snippet */}
      <div className="inline-block font-mono bg-primary text-left rounded-xl shadow-xl p-5">
        <TypeAnimation
          sequence={[
            `def about_me():`,
            1000,
            `def about_me():\n    name = "[Your Name]"`,
            1000,
            `def about_me():\n    name = "[Your Name]"\n    skills = ["Python", "React", "UI/UX"]`,
            1000,
            `def about_me():\n    name = "[Your Name]"\n    skills = ["Python", "React", "UI/UX"]\n    experience = "8+ Years 🚀"`,
            3000,
          ]}
          speed={60}
          cursor={true}
          repeat={Infinity}
          wrapper="pre"
        />
      </div>

      {/* CTA Buttons */}
      <div className="flex justify-center md:justify-start gap-5">
        <a href="#projects" className="px-7 py-3 rounded-full bg-gradient-to-r from-secondary to-accentBlue hover:from-accentPurple hover:to-secondary text-bgDark font-semibold transition duration-300">
          🚀 Projects
        </a>
        <a href="#contact" className="px-7 py-3 border-2 border-secondary rounded-full hover:bg-secondary hover:text-bgDark font-semibold transition duration-300">
          📬 Contact Me
        </a>
      </div>
    </motion.div>

    {/* Right SVG Illustration with Float Animation */}
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: [30, -10, 30], opacity: 1 }}
      transition={{ duration: 6, repeat: Infinity }}
      className="z-10 mt-16 md:mt-0 md:w-1/2 flex justify-center"
    >
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/coding-4379418-3639058.png"
        alt="Full Stack Developer Illustration"
        className="max-w-full md:max-w-xl drop-shadow-xl"
      />
    </motion.div>

    {/* Scroll Indicator */}
    <motion.div
      animate={{ y: [0, 15, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 text-highlight font-medium"
    >
      ▼ Scroll Down ▼
    </motion.div>
  </section>
);

export default Hero;
