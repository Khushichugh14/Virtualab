import { Link } from "react-router-dom";
import { workflow } from "../constants/siteData";

const WorkflowPage = () => {
  return (
    <main className="px-6 pt-28 pb-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Workflow</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workflow.map((w) => (
            <div key={w.id} className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 h-full flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{w.title}</h3>
                <p className="text-neutral-400">{w.short}</p>
              </div>

              <ul className="text-neutral-500 ml-4 list-disc space-y-1 mb-4">
                {w.steps.map((s, i) => <li key={i}>{s}</li>)}
              </ul>

              <div className="mt-auto">
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
