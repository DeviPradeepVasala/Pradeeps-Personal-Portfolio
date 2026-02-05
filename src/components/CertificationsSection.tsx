import { motion } from 'framer-motion';
import { ExternalLink, Download, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
  badgeImage: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    id: '1',
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'April 2023',
    credentialId: 'E0C891D39D6D1B70',
    verificationUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/20A31A1261-4308/E0C891D39D6D1B70?sharingId=studentamb_199518',
    badgeImage: '/az-900.png',
    skills: ['Cloud Concepts','Azure Core Services','Azure Security','Cloud Pricing & Support'],
  },
  {
    id: '2',
    title: 'Google Cloud Digital Leader',
    issuer: 'Google Cloud',
    date: 'March 2024',
    credentialId: '16142ef0-e1e6-48bb-91c5-f1ddd377f78e',
    verificationUrl: 'https://www.credly.com/earner/earned/badge/16142ef0-e1e6-48bb-91c5-f1ddd377f78e',
    badgeImage: '/gcp-cdl.png',
    skills: ['Cloud Fundamentals', 'Google Cloud Services','Cloud Security Basics','Data & AI Concepts',],
  },
  {
    id: '3',
    title: 'Azure Developer Associate',
    issuer: 'Microsoft',
    date: 'April 2024',
    credentialId: 'B511CC133EBF8D9',
    verificationUrl: 'https://learn.microsoft.com/en-us/users/20a31a1261-4308/credentials/b511cc133ebf8d9',
    badgeImage: '/az-204.png',
    skills: ['Azure Functions','REST APIs','Azure Storage','App Deployment'],
  },
  {
    id: '4',
    title: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: 'June 2023',
    credentialId: '61edb98d-552f-4b5f-b859-c0bd4420243a',
    verificationUrl: 'https://www.credly.com/earner/earned/badge/61edb98d-552f-4b5f-b859-c0bd4420243a',
    badgeImage: '/aws-cloud.png',
    skills: ['EC2 & S3', 'AWS Networking', 'IAM Security','Cloud Architecture Basics'],
  },
];

export const CertificationsSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="certifications" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-secondary/5 rounded-full blur-3xl" />

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
              Credentials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="section-heading mt-2"
            >
              Professional{' '}
              <span className="gradient-text">Certifications</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="section-subheading"
            >
              Industry-recognized certifications validating my expertise and continuous learning.
            </motion.p>
          </div>

          {/* Certifications grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <div className="flex gap-5">
                  {/* Badge image */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted">
                      <img
                        src={cert.badgeImage}
                        alt={`${cert.title} badge`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display text-lg font-semibold truncate">
                        {cert.title}
                      </h3>
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-1">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-xs text-muted-foreground mb-3">
                      Issued {cert.date} • ID: {cert.credentialId}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Verify
                      </a>
                      <button className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                        <Download className="w-3 h-3" />
                        PDF
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
