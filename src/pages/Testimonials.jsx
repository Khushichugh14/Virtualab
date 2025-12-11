import { useEffect, useState } from "react";
import { testimonials } from "../constants/siteData";

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
        >
          <path d="M12 .587l3.668 7.431L23.5 9.748l-5.75 5.6L19.336 24 12 19.897 4.664 24l1.586-8.652L.5 9.748l7.832-1.73L12 .587z" />
        </svg>
      );
    })}
  </div>
);

const TestimonialsPage = () => {
  const [index, setIndex] = useState(0); // carousel index
  const [modalData, setModalData] = useState(null);

  // autoplay every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const active = testimonials[index];

  return (
    <main className="px-6 pt-28 pb-20 bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          What our users say
        </h1>
        <p className="text-neutral-400 mb-12">
          Trusted by teams, loved by professionals.
        </p>

        {/* Carousel Card */}
        <div className="relative w-full max-w-3xl mx-auto">
          <div
            className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl transition-all duration-500"
            key={active.id}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
                src={active.avatar}
                alt={active.name}
                className="w-20 h-20 rounded-full object-cover border border-neutral-700"
              />

              <div className="text-left">
                <h3 className="text-xl font-semibold">{active.name}</h3>
                <p className="text-sm text-neutral-400 mb-2">{active.role}</p>

                <StarRow rating={active.rating} />

                <p className="text-neutral-300 mt-4 line-clamp-4">
                  {active.quote}
                </p>

                <button
                  onClick={() => setModalData(active)}
                  className="mt-4 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm"
                >
                  Show More
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700"
          >
            ›
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                i === index ? "bg-white w-5" : "bg-neutral-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setModalData(null)}
        >
          <div
            className="bg-neutral-900 p-8 rounded-2xl max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalData(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              ✕
            </button>

            <div className="flex items-center gap-4">
              <img
                src={modalData.avatar}
                className="w-20 h-20 rounded-full border border-neutral-700"
              />
              <div>
                <h3 className="text-xl font-semibold">{modalData.name}</h3>
                <p className="text-neutral-400 text-sm">{modalData.role}</p>
                <div className="mt-2">
                  <StarRow rating={modalData.rating} />
                </div>
              </div>
            </div>

            <p className="text-neutral-300 mt-6 leading-relaxed">
              {modalData.quote}
            </p>

            <p className="text-neutral-600 text-sm mt-4">
              Verified user • {modalData.rating}/5 rating
            </p>

            <button
              onClick={() => setModalData(null)}
              className="mt-6 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default TestimonialsPage;
