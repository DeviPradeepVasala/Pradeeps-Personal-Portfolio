  import { motion } from 'framer-motion';
  import { Trophy, Award, Star, Calendar } from 'lucide-react';
  import { useScrollAnimation } from '@/hooks/useScrollAnimation';

  interface Achievement {
    id: string;
    title: string;
    description: string;
    date: string;
    icon: 'trophy' | 'award' | 'star';
    type: string;
  }

  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'Google Developers Student Club Lead',
      description: 'Led a student developer community, organized workshops, hackathons, and study jams, and mentored students in Google Cloud, Web, and DevOps technologies while driving community growth and partnerships.',
      date: '2023 - 2024',
      icon: 'trophy',
      type: 'Leadership',
    },
    {
      id: '2',
      title: 'Microsoft Learn Student Ambassador',
      description: 'Conducted 50+ sessions on Azure, Cloud, and AI, promoted Microsoft technologies through workshops, and collaborated with mentors across the Microsoft ecosystem.',
      date: '2023 - 2024',
      icon: 'trophy',
      type: 'Community',
    },
    {
      id: '3',
      title: 'Freelance Software Engineer',
      description: 'Delivered end-to-end MERN stack solutions for global clients, handling requirements, development, deployment, and support while building scalable, secure, and performance-optimized applications.',
      date: '2024 - Present',
      icon: 'star',
      type: 'Experience',
    },
    {
      id: '4',
      title: 'Frontend Developer Intern — Technocolabs',
      description: 'Developed a responsive e-commerce web application using the MERN stack, integrated APIs, implemented real-time features, and delivered production-ready components in an Agile environment.',
      date: 'Nov 2023 - Jan 2024',
      icon: 'award',
      type: 'Internship',
    },
    {
      id: '5',
      title: 'Google Cloud Arcade Facilitator',
      description: 'Facilitated hands-on Generative AI learning sessions using Google Cloud, guided participants through labs and projects, and supported learners in building practical AI-powered solutions.',
      date: '2023',
      icon: 'star',
      type: 'AI & Cloud',
    },
    {
      id: '6',
      title: 'Future Skills Expert',
      description: 'Completed an internship under the Government of Andhra Pradesh and JNTUK, where I developed Python-based project modules and conducted technical training sessions on programming and AI concepts, helping peers strengthen their foundational and practical skills.',
      date: 'Jan 2024 - May 2024',
      icon: 'star',
      type: 'Internship',
    },
  ];

  const iconMap = {
    trophy: Trophy,
    award: Award,
    star: Star,
  };

  export const AchievementsSection = () => {
    const sectionRef = useScrollAnimation();

    return (
      <section id="achievements" className="py-24 md:py-32 relative overflow-hidden bg-muted/30">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4">
          <div ref={sectionRef} className="max-w-4xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-primary font-medium text-sm uppercase tracking-widest"
              >
                Milestones
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="section-heading mt-2"
              >
                Key{' '}
                <span className="gradient-text">Achievements</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="section-subheading"
              >
                Celebrating milestones and recognition along my journey as a developer.
              </motion.p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

              {achievements.map((achievement, index) => {
                const Icon = iconMap[achievement.icon];
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-start gap-6 mb-12 ${
                      isLeft ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Icon node */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div
                      className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                        isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-6 glass-card rounded-xl hover:border-primary/30 transition-all"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                            {achievement.type}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {achievement.date}
                          </span>
                        </div>
                        
                        <h3 className="font-display text-lg font-semibold mb-2">
                          {achievement.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  };
