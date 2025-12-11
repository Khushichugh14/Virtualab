// src/pages/TestimonialsPage.jsx
import { useState } from "react";
import { testimonials } from "../constants/siteData";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Optional: keep your fadeIn animation in global CSS as earlier
// @keyframes fadeIn { from {opacity:0; transform:translateY(12px) scale(.995);} to {opacity:1; transform:translateY(0) scale(1);} }

const StarRow = ({ rating }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => {
      const filled = i < rating;
      return (
        <svg
          key={i}
          className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-neutral-600"}`}
          viewBox="0 0 24 24"
          fill={filled ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d="M12 .587l3.668 7.431L23.5 9.748l-5.75 5.6L19.336 24 12 19.897 4.664 24l1.586-8.652L.5 9.748l7.832-1.73L12 .587z" />
        </svg>
      );
    })}
  </div>
);

// Simple Modal (no portal, accessible close with ESC could be added later)
const TestimonialModal = ({ open, onClose, testimonial }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`More about ${testimonial?.name}`}
      onClick={onClose} // click backdrop to close
    >
      <div
        className="max-w-2xl w-full bg-neutral-900 rounded-2xl p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-neutral-400 hover:text-white"
        >
          ✕
        </button>

        <div className="flex items-center gap-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-neutral-800"
          />
          <div>
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-neutral-400">{testimonial.role}</p>
            <div className="mt-2">
              <StarRow rating={testimonial.rating} />
            </div>
          </div>
        </div>

        <div className="mt-6 text-neutral-300 leading-relaxed">
          {/* here we show the full testimonial. You can expand the object to include more fields */}
          <p>{testimonial.quote}</p>
          <p className="mt-4 text-sm text-neutral-500">
            Verified user • {testimonial.rating} / 5
          </p>
        </div>

        {/* Add any extra details — company, tenure, or case study link */}
        <div className="mt-6 flex gap-3">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-sm px-3 py-2 rounded-md border border-neutral-800 text-neutral-200 hover:bg-neutral-800"
          >
            View case study
          </a>
          <button
            onClick={onClose}
            className="text-sm px-3 py-2 rounded-md bg-neutral-800 hover:bg-neutral-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const TestimonialsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  const openModalFor = (t) => {
    setActiveTestimonial(t);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveTestimonial(null);
  };

  return (
    <main className="px-6 pt-28 pb-12 bg-black min-h-screen text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">What our users say</h1>
        <p className="text-neutral-400 max-w-2xl mb-8">
          Real teams are shipping faster, collaborating better, and shipping with confidence.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: true }}
          loop
          breakpoints={{
            768: { // md+
              slidesPerView: 2,
              spaceBetween: 28,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 36,
            },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={t.id}>
              <article
                className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col gap-4 hover:shadow-xl transform transition-all duration-300"
                style={{
                  animation: "fadeIn 0.7s ease forwards",
                  animationDelay: `${idx * 0.08}s`,
                  opacity: 0,
                }}
                aria-label={`Testimonial from ${t.name}`}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-16 w-16 rounded-full object-cover flex-shrink-0 border-2 border-neutral-800"
                    loading="lazy"
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-lg">{t.name}</h4>
                        <p className="text-sm text-neutral-400">{t.role}</p>
                      </div>

                      <div className="hidden sm:block">
                        <StarRow rating={t.rating} />
                      </div>
                    </div>

                    <p className="text-neutral-300 mt-4 leading-relaxed line-clamp-3">
                      {t.quote}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-neutral-500">
                        Verified user • {t.rating} / 5
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openModalFor(t)}
                          className="text-sm px-3 py-1 rounded-md bg-neutral-800 hover:bg-neutral-700"
                        >
                          Show more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      <TestimonialModal
        open={modalOpen}
        onClose={closeModal}
        testimonial={activeTestimonial}
      />
    </main>
  );
};

export default TestimonialsPage;
