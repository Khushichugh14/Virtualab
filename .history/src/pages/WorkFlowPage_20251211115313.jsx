// src/pages/WorkflowPage.jsx
import { workflow } from "../constants/siteData";
import { Link } from "react-router-dom";

const WorkflowPage = () => {
  return (
    <main className="px-6 pt-28 pb-12"> {/* pt-28 clears fixed navbar */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Workflow</h1>
        <p className="text-neutral-400 max-w-2xl mb-8"> How your team goes from idea => code productionn</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workflow.map((w) => (
            <div key={w.id} className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-neutral-800 text-orange-500">
                  {w.icon}
                </div>
                <h3 className="text-xl font-semibold">{w.title}</h3>
              </div>
              <p className="text-neutral-400 mb-3">{w.description}</p>

              <ul className="text-neutral-500 ml-4 list-disc space-y-1">
                {w.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>

              <div className="mt-4">
                <Link to={`/workflow/${w.id}`} className="text-sm underline">
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WorkflowPage;
