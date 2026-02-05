import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 70, category: 'Frontend' },
  { name: 'TypeScript', level: 70, category: 'Frontend' },
  { name: 'Next.js', level: 70, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 70, category: 'Frontend' },
  { name: 'Java', level: 70, category: 'Backend' },
  { name: 'JavaScript', level: 80, category: 'Frontend' },
  // Backend
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Python', level: 80, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Backend' },
  { name: 'MongoDB', level: 80, category: 'Backend' },
  { name: 'GraphQL', level: 80, category: 'Backend' },
  { name: 'REST APIs', level: 80, category: 'Backend' },
  // Tools/AI
  { name: 'Git/GitHub', level: 90, category: 'Tools/AI' },
  { name: 'DS & Algo', level: 70, category: 'Backend' },
  { name: 'Figma', level: 70, category: 'Tools/AI' },
  { name: 'VS Code', level: 90, category: 'Tools/AI' },
  // DevOps
  { name: 'Docker', level: 70, category: 'DevOps' },
  { name: 'AWS', level: 70, category: 'DevOps' },
  { name: 'CI/CD', level: 70, category: 'DevOps' },
  { name: 'Linux', level: 70, category: 'DevOps' },
];

const categories = ['All', 'Frontend', 'Backend', 'Tools/AI', 'DevOps'];

const getSkillLevel = (level: number) => {
  if (level >= 90) return 'Expert';
  if (level >= 75) return 'Advanced';
  if (level >= 60) return 'Intermediate';
  return 'Beginner';
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useScrollAnimation();

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-muted/30">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-primary font-medium text-sm uppercase tracking-widest"
            >
              My Skills
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="section-heading mt-2"
            >
              Technologies I{' '}
              <span className="gradient-text">Work With</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="section-subheading"
            >
              A comprehensive toolkit for building modern web applications from concept to deployment.
            </motion.p>
          </div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground'
                    : 'glass-card hover:border-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Skills grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-5 glass-card rounded-xl hover:border-primary/30 transition-all group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-display font-semibold">{skill.name}</h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {getSkillLevel(skill.level)}
                    </span>
                  </div>
                  
                  {/* Skill bar */}
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                  
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">{skill.category}</span>
                    <span className="text-xs font-medium">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
