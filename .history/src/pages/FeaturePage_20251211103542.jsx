// src/pages/FeaturePage.jsx
import features from "../constants/features";
import { Link } from "react-router-dom";

const FeaturePage = () => {
  return (
    <main className="px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">All Features</h1>
        <p className="text-center text-neutral-400 mb-8 max-w-2xl mx-auto">
          Explore everything we offer — click a card to see more details.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <Link to={f.link} key={f.id} className="group block">
              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 h-full hover:shadow-lg transition">
                <div className="flex items-center">
                  <div className="h-14 w-14 flex items-center justify-center rounded-full bg-neutral-800 text-orange-500">
                    {f.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{f.title}</h3>
                    <p className="text-neutral-400 text-sm mt-1">{f.short}</p>
                  </div>
                </div>

                <p className="text-neutral-400 mt-4 line-clamp-3">{f.longDescription}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {f.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FeaturePage;
