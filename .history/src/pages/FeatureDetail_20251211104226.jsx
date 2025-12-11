// src/pages/FeatureDetail.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import features from "../constants/features";

const FeatureDetail = () => {
    const { id } = useParams(); // expects route param 'id' (slug)
    const feature = features.find((f) => f.id === id);
    const navigate = useNavigate();

    if (!feature) {
        return (
            <main className="px-6 pt-28 pb-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-bold">Feature not found</h2>
                    <p className="text-neutral-400 mt-4">That feature doesn't exist or the link is broken.</p>
                    <div className="mt-6">
                        <button onClick={() => navigate(-1)} className="px-4 py-2 rounded bg-neutral-800">
                            Go back
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-start gap-6">
                    <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-neutral-800 text-orange-500">
                        {feature.icon}
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">{feature.title}</h1>
                        <p className="text-neutral-400 mt-2">{feature.short}</p>
                        <div className="mt-4 flex gap-2">
                            {feature.tags.map((t) => (
                                <span key={t} className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-300">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                        <p className="text-neutral-300 leading-relaxed">{feature.longDescription}</p>

                        <ul className="mt-6 list-disc pl-5 text-neutral-400 space-y-2">
                            {feature.bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <img
                            src={feature.image}
                            alt={feature.title}
                            className="rounded-lg border border-neutral-800 w-full h-auto max-h-[420px] object-contain"
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <Link to="/features" className="text-sm underline">
                        ← Back to features
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default FeatureDetail;
