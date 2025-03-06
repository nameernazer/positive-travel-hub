
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DestinationType } from './DestinationTypes';

interface DestinationCardProps {
  destination: DestinationType;
  index: number;
}

export const DestinationCard = ({ destination, index }: DestinationCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link to={`/destinations/${destination.region}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-2xl aspect-[4/3] mx-4"
      >
        {/* Placeholder while image loads */}
        {!imageLoaded && (
          <div className="w-full h-full bg-gray-200 animate-pulse absolute inset-0"></div>
        )}
        <img 
          src={`${destination.image}?auto=format&w=600&q=75`} 
          alt={destination.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          draggable="false"
          loading={index < 2 ? "eager" : "lazy"}
          onLoad={() => setImageLoaded(true)}
          style={{opacity: imageLoaded ? 1 : 0}}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
          <h3 className="text-2xl font-bold text-white mb-2">{destination.title}</h3>
          <p className="text-white/90 mb-4">{destination.description}</p>
          <span className="text-white font-medium inline-flex items-center">
            Learn More
            <span className="ml-2">→</span>
          </span>
        </div>
      </motion.div>
    </Link>
  );
};
