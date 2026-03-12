'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const GoogleReviews = () => {
  const googleMapsPlaceUrl = 'https://maps.google.com/?q=Ruggeri+Electricidad+y+Mecanica';
  const fallbackReviews = [
    {
      author_name: 'Cliente',
      rating: 5,
      text: 'Excelente atención y muy buen servicio.',
      relative_time_description: 'hace poco',
    },
  ];

  const [reviews, setReviews] = useState(fallbackReviews);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews', { cache: 'no-store' });
        if (!response.ok) return;

        const data = await response.json();
        if (Array.isArray(data.reviews) && data.reviews.length > 0) {
          setReviews(data.reviews);
        }
      } catch {
      }
    };

    fetchReviews();
    const liveRefresh = setInterval(fetchReviews, 60000);

    return () => clearInterval(liveRefresh);
  }, []);

  const loopedReviews = useMemo(() => {
    const source = reviews.length > 0 ? reviews : fallbackReviews;
    return [...source, ...source];
  }, [reviews]);

  const marqueeDuration = useMemo(() => {
    const count = Math.max(reviews.length, 1);
    return Math.max(22, count * 7);
  }, [reviews.length]);

  return (
    <section className="relative py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
          <h3 className="text-base md:text-lg font-bold mb-3">Reseñas en vivo de Google Maps</h3>

          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/20 py-3">
            <motion.div
              className="flex items-stretch gap-4 w-max px-3"
              initial={{ x: '-50%' }}
              animate={{ x: '0%' }}
              transition={{
                duration: marqueeDuration,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
              }}
            >
              {loopedReviews.map((review, index) => (
                <article
                  key={`${review.author_name}-${review.relative_time_description || 'reciente'}-${index}`}
                  className="w-[280px] md:w-[320px] shrink-0 rounded-lg border border-white/15 bg-white/5 p-3"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <p className="text-sm font-semibold truncate text-white">{review.author_name}</p>
                    <div className="flex items-center gap-1 text-yellow-400 shrink-0">
                      {[...Array(Number(review.rating) || 5)].map((_, starIndex) => (
                        <FaStar key={starIndex} className="text-xs" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-200 line-clamp-3 min-h-[60px]">“{review.text}”</p>

                  <p className="text-xs text-gray-400 mt-2">{review.relative_time_description || 'Reseña reciente'}</p>
                </article>
              ))}
            </motion.div>
          </div>

          <a
            href={googleMapsPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-red-400 hover:text-red-500 text-sm"
          >
            Ver reseñas en Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
