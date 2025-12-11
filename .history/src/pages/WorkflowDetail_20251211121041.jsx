import { useParams, Link, useNavigate } from "react-router-dom";
import { workflow } from "../constants/siteData";

const WorkflowDetail = () => {
  const { id } = useParams();
  const item = workflow.find((w) => w.id === id);

  if (!item) return (
    <main className="px-6 pt-28 pb-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2>Step not found</h2>
        <button onClick={() => window.history.back()}>Go back</button>
      </div>
    </main>
  );

  return (
    <main className="px-6 pt-28 pb-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold">{item.title}</h1>
        <p className="text-neutral-400 mt-2">{item.longDescription}</p>
        <div className="mt-6">
          <h4>Examples</h4>
          <ul>{item.examples?.map((e,i) => <li key={i}>{e}</li>)}</ul>
        </div>

        <div className="mt-8">
          <Link to="/workflow" className="text-sm underline">← Back to workflow</Link>
        </div>
      </div>
    </main>
  );
};

export default WorkflowDetail;
