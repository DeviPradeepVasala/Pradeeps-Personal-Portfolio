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
    title: 'CityCare – Enterprise Healthcare Management System',
    summary:
      'Enterprise healthcare platform with patient management, appointments, billing, authentication, and role-based access control.',
    description:
      'Designed and developed a scalable healthcare management platform that enables hospitals and clinics to manage patient records, appointments, doctors, billing, prescriptions, and administrative operations through secure role-based dashboards.',
    role: 'Full Stack Developer',
    techStack: [
      'Next.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma ORM',
      'JWT',
      'Tailwind CSS'
    ],
    problem:
      'Healthcare organizations often rely on disconnected systems for appointments, billing, and patient records, making operations inefficient.',
    solution:
      'Built an integrated healthcare platform with secure authentication, RBAC, REST APIs, appointment scheduling, billing modules, and responsive dashboards.',
    results:
      'Developed 50+ REST APIs, implemented JWT authentication, RBAC, Prisma ORM, PostgreSQL integration, and responsive dashboards for administrators, doctors, and patients.',
    image: '/public/CityCare.png',
    githubUrl: 'https://github.com/DeviPradeepVasala',
    liveUrl: '',
    category: 'Enterprise Application',
  },

  {
    id: '2',
    title: 'MERN E-Commerce Platform',
    summary:
      'Full-stack e-commerce platform with authentication, payments, shopping cart, and order management.',
    description:
      'Developed a production-ready e-commerce application supporting product management, shopping cart, Stripe payments, authentication, RBAC, and order tracking.',
    role: 'Full Stack Developer',
    techStack: [
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Stripe',
      'Tailwind CSS',
      'JWT'
    ],
    problem:
      'Businesses require scalable online stores with secure authentication, payment processing, and efficient product management.',
    solution:
      'Built a complete e-commerce system with JWT authentication, Stripe integration, shopping cart, admin dashboard, and responsive UI.',
    results:
      'Implemented secure payment workflows, authentication, role-based access control, and complete order lifecycle management.',
    image: '/public/e-commerce.jpg',
    githubUrl: 'https://github.com/DeviPradeepVasala',
    liveUrl: '',
    category: 'Web Application',
  },

  {
    id: '3',
    title: 'AI Research Intelligence System',
    summary:
      'AI-powered platform for searching, summarizing, and comparing research papers using LLMs.',
    description:
      'Developed an AI research assistant that automates paper retrieval, PDF processing, summarization, comparison, and semantic search using LangChain and LangGraph.',
    role: 'AI Full Stack Developer',
    techStack: [
      'Python',
      'LangChain',
      'LangGraph',
      'Gemini',
      'OpenAI',
      'Gradio',
      'PyMuPDF'
    ],
    problem:
      'Researchers spend significant time searching, reading, and comparing academic papers manually.',
    solution:
      'Integrated Semantic Scholar API, PDF parsing, prompt engineering, and LLM workflows to automate literature review.',
    results:
      'Enabled automated paper retrieval, AI-powered summarization, comparison, and interactive research exploration.',
    image: '/public/ai-research.jpg',
    githubUrl: 'https://github.com/DeviPradeepVasala',
    liveUrl: '',
    category: 'AI Application',
  },

  {
    id: '4',
    title: 'Real-Time Logistics Intelligence Platform',
    summary:
      'Enterprise fleet management platform with real-time vehicle tracking, analytics, Kafka event streaming, and AI insights.',
    description:
      'Built an enterprise logistics platform supporting fleet monitoring, trip tracking, real-time GPS updates, analytics dashboards, and microservice architecture.',
    role: 'Software Engineer',
    techStack: [
      'Next.js',
      'NestJS',
      'Kafka',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Prisma'
    ],
    problem:
      'Fleet operators need centralized real-time visibility, analytics, and operational intelligence.',
    solution:
      'Implemented event-driven microservices using Kafka, WebSockets, PostgreSQL, Redis caching, and enterprise dashboards.',
    results:
      'Developed scalable backend services with real-time vehicle tracking, fleet analytics, trip history, and AI-ready architecture.',
    image: '/public/logistics.jpg',
    githubUrl: 'https://github.com/DeviPradeepVasala',
    liveUrl: '',
    category: 'Enterprise Application',
  },

  {
    id: '5',
    title: 'AI CRM for Healthcare Professionals',
    summary:
      'Enterprise CRM platform with AI-powered interactions, patient engagement, workflow automation, and analytics.',
    description:
      'Developed an AI-first CRM system enabling healthcare representatives to manage HCP interactions, engagement history, and AI-assisted insights.',
    role: 'Full Stack Developer',
    techStack: [
      'React',
      'Node.js',
      'PostgreSQL',
      'LangGraph',
      'OpenAI',
      'Docker'
    ],
    problem:
      'Healthcare sales teams need centralized HCP management with intelligent insights and interaction tracking.',
    solution:
      'Built dashboards, AI workflows, history tracking, analytics, and enterprise CRM features.',
    results:
      'Delivered AI-assisted CRM workflows, interaction management, analytics dashboards, and enterprise UI.',
    image: '/public/ai-crm.png',
    githubUrl: 'https://github.com/DeviPradeepVasala',
    liveUrl: '',
    category: 'Enterprise Application',
  },

  {
    id: '6',
    title: 'CNN-Based Malaria Parasite Detection',
    summary:
      'Deep learning application for malaria parasite detection using transfer learning.',
    description:
      'Built a medical image classification system using TensorFlow and VGG16 to detect malaria parasites from microscopic cell images.',
    role: 'Machine Learning Developer',
    techStack: [
      'Python',
      'TensorFlow',
      'VGG16',
      'Flask',
      'OpenCV'
    ],
    problem:
      'Manual malaria diagnosis is time-consuming and requires expert analysis.',
    solution:
      'Applied transfer learning with VGG16 and deployed prediction services using Flask.',
    results:
      'Achieved 96.2% test accuracy using transfer learning and data augmentation.',
    image: '/public/malaria.jpg',
    githubUrl: 'https://github.com/DeviPradeepVasala',
    liveUrl: '',
    category: 'AI / Machine Learning',
  }
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
