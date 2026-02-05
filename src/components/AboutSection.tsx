import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from "next/image";


export const AboutSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Avatar side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-20 blur-2xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl p-1">
                  <div className="w-full h-full bg-background rounded-3xl overflow-hidden relative">
                    <div className="text-8xl font-display font-bold gradient-text">
                       <img
                       src="/profile.png"
                       alt="Profile"
                       className="object-cover"
                       />         
                    </div>
                  </div>
                </div>
                
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 px-4 py-2 glass-card rounded-full text-sm font-medium"
                >
                  🚀 Full Stack
                </motion.div>
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 px-4 py-2 glass-card rounded-full text-sm font-medium"
                >
                  ✨ DevOps
                </motion.div>
              </div>
            </motion.div>

            {/* Text content side */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-medium text-sm uppercase tracking-widest">
                  About Me
                </span>
                <h2 className="section-heading mt-2">
                  Turning Ideas Into{' '}
                  <span className="gradient-text">Digital Reality</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                I'm a passionate full-stack developer who builds modern, fast, and user-friendly web applications. 
                With over 3 years hands-on experience, I use technologies like React, Next.js, Node.js, and cloud platforms
                to create scalable and reliable solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                My goal is to build products that not only look great but also deliver real value to users. 
                I focus on clean, maintainable code, good design practices, and continuous learning to stay 
                up to date with the latest technologies in web development.
              </motion.p>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 pt-6"
              >
                {[
                  { icon: '💻', label: 'Frontend Dev', desc: 'React, TypeScript, Next.js' },
                  { icon: '⚙️', label: 'Backend Dev', desc: 'Node.js, Python, APIs' },
                  { icon: '🎨', label: 'UI/UX Design', desc: 'Figma, Tailwind, Motion' },
                  { icon: '☁️', label: 'Cloud & DevOps', desc: 'Azure, Docker, CI/CD' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 glass-card rounded-xl hover:border-primary/30 transition-colors"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <h4 className="font-display font-semibold mt-2">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
