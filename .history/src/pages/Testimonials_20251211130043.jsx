// src/pages/TestimonialsPage.jsx
import { testimonials } from "../constants/siteData";

const StarRow = ({ rating }) => {
  // renders 5 stars: filled for rating, muted for the rest
  return (
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
};

const TestimonialsPage = () => {
  return (
    <main className="px-6 pt-28 pb-12 bg-black min-h-screen text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">What our users say</h1>
        <p className="text-neutral-400 max-w-2xl mb-10">
          Real teams are shipping faster, collaborating better, and shipping with confidence.
        </p>

        {/* Grid - 2 columns on md+ */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <article
              key={t.id}
              className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex gap-4 hover:shadow-xl transform transition-all duration-300"
              style={{
                // staggered fade-in
                animation: "fadeIn 0.7s ease forwards",
                animationDelay: `${idx * 0.12}s`,
                opacity: 0,
              }}
              aria-label={`Testimonial from ${t.name}`}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="h-16 w-16 rounded-full object-cover flex-shrink-0 border-2 border-neutral-800"
                loading="lazy"
              />

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-lg">{t.name}</h4>
                    <p className="text-sm text-neutral-400">{t.role}</p>
                  </div>
                  <div className="ml-4">
                    <StarRow rating={t.rating} />
                  </div>
                </div>

                <p className="text-neutral-300 mt-4 leading-relaxed">{t.quote}</p>

                {/* subtle meta row */}
                <div className="mt-4 text-xs text-neutral-500">
                  <span>Verified user</span>
                  <span className="mx-2">•</span>
                  <span>{t.rating} / 5</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TestimonialsPage;
