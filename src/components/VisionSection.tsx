
import { motion } from 'framer-motion';
import { Heart, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: "Personalized Service",
    description: "We craft unique travel experiences tailored to your preferences and dreams."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our team is always available to assist you throughout your journey."
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description: "Benefit from our years of experience and local knowledge worldwide."
  }
];

export default function VisionSection() {
  return (
    <section className="section-padding bg-white" id="vision">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider">Our Vision</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Creating Memories That Last a Lifetime
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            At Positive Travel and Holidays, we believe in transforming your travel dreams into reality
            through exceptional service and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl text-center slide-up"
            >
              <feature.icon className="w-12 h-12 text-primary mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
