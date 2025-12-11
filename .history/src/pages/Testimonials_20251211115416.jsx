// src/pages/TestimonialsPage.jsx
import { testimonials } from "../constants/siteData";

const TestimonialsPage = () => {
  return (
    <main className="px-6 pt-28 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-3">What our users say</h1>
        <div className="mt-8 space-y-6">
          {testimonials.map(t => (
            <div key={t.id} className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 flex gap-4">
              <img src={t.avatar} alt={t.name} className="h-16 w-16 rounded-full object-cover" />
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-sm text-neutral-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-neutral-300 mt-3">{t.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TestimonialsPage;
