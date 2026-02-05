import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  techStack: string[];
  problem: string;
  solution: string;
  results: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    summary: 'A modern, full-featured e-commerce solution with AI-powered recommendations.',
    description: 'Built a scalable e-commerce platform handling thousands of daily transactions with real-time inventory management and AI-powered product recommendations.',
    role: 'Full Stack Developer',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS'],
    problem: 'The client needed a scalable solution to replace their legacy system that couldn\'t handle peak traffic.',
    solution: 'Implemented a microservices architecture with caching layers and CDN optimization.',
    results: '300% increase in page load speed, 50% reduction in cart abandonment.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'Web App',
  },
  {
    id: '2',
    title: 'Finance and Expense Management System',
    summary: 'Real-time analytics dashboard with ML-powered insights and predictions.',
    description: 'Developed an analytics platform that processes millions of data points to provide actionable expense insights using machine learning models.',
    role: 'Frontend Lead & ML Integration',
    techStack: ['Next.js', 'Python', 'TensorFlow', 'D3.js', 'MongoDB'],
    problem: 'Business stakeholders needed real-time insights but data was scattered across multiple systems.',
    solution: 'Created a unified dashboard with ML models for predictive analytics and anomaly detection.',
    results: '40% faster decision-making, identified results in cost savings.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    liveUrl: 'https://example.com',
    category: 'Dashboard',
  },
  {
    id: '3',
    title: 'All-in-One Travel & Ticket Booking Platform',
    summary: 'Unified travel and hotel booking system with real-time search, pricing, and seat selection.',
    description: 'Developed a comprehensive travel booking platform that allows users to search, compare, and book flights, trains, buses, metro, and hotels in a single application with seamless payment and user experience.',
    role: 'Full Stack Developer',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'Stripe'],
    problem: 'Users had to rely on multiple apps for different travel modes and hotel bookings, leading to fragmented experience and inefficiencies.',
    solution: 'Built an integrated multi-modal travel booking system with real-time availability, dynamic pricing, secure payments, and centralized booking management.',
    results: '50% reduction in booking time, 80% increase in user engagement, 1000 active users in first month.',
    image: 'https://images.unsplash.com/photo-1542650742-d3150fb66298?w=800&q=80',
    githubUrl: 'https://github.com',
    category: 'Mobile & Web Application',
  },
];

const categories = ['All', 'Web App', 'Dashboard', 'Mobile'];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useScrollAnimation();

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-3xl" />

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
                My Work
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="section-heading mt-2"
              >
                Featured{' '}
                <span className="gradient-text">Projects</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="section-subheading"
              >
                A selection of projects that showcase my skills and passion for building great products.
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

            {/* Projects grid */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => setSelectedProject(project)}
                    className="project-card cursor-pointer group"
                  >
                    {/* Image */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.summary}
                      </p>
                      
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl"
            >
              {/* Modal image */}
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 glass-card rounded-full hover:bg-muted transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Modal content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {selectedProject.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {selectedProject.role}
                  </span>
                </div>
                
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {selectedProject.description}
                </p>
                
                {/* Problem / Solution / Results */}
                <div className="grid gap-4 mb-6">
                  <div className="p-4 bg-muted/50 rounded-xl">
                    <h4 className="font-semibold text-sm text-primary mb-2">Problem</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.problem}</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-xl">
                    <h4 className="font-semibold text-sm text-primary mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.solution}</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-xl">
                    <h4 className="font-semibold text-sm text-primary mb-2">Results</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.results}</p>
                  </div>
                </div>
                
                {/* Tech stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-muted text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium text-sm hover:shadow-lg transition-shadow"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border hover:border-primary/50 font-medium text-sm transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
