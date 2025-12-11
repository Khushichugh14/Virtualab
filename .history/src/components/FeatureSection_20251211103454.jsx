// src/components/FeatureSection.jsx
import { useMemo } from "react";
import { Link } from "react-router-dom";
import features from "../constants/features"; // new file
// existing file referenced earlier for context. :contentReference[oaicite:1]{index=1}

const FeatureSection = () => {
  // show first 3 as preview
  const preview = useMemo(() => features.slice(0, 3), []);

  return (
    <section id="featuresection" className="relative mt-20 border-b border-neutral-800 py-12">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto mt-4">
          Powerful dev tools, CI/CD, security scans and realtime collaboration — all in one place.
        </p>
      </div>

      <div className="flex flex-wrap justify-center mt-12 gap-6 px-4">
        {preview.map((f) => (
          <div key={f.id} className="w-full sm:w-1/2 lg:w-1/3 max-w-sm">
            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 h-full flex flex-col">
              <div className="flex items-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-neutral-800 text-orange-500">
                  {f.icon}
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-semibold">{f.title}</h5>
                  <p className="text-neutral-400 text-sm">{f.short}</p>
                </div>
              </div>

              <ul className="mt-4 text-sm text-neutral-500 space-y-1 flex-1">
                {f.bullets.slice(0, 3).map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>

              <div className="mt-4">
                <Link
                  to={f.link}
                  className="inline-block text-sm font-medium underline hover:no-underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/features"
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold"
        >
          View all features
        </Link>
      </div>
    </section>
  );
};

export default FeatureSection;
