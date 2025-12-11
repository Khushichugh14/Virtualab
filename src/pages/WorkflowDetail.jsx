import { useParams, Link, useNavigate } from "react-router-dom";
import { workflow } from "../constants/siteData";

const toEmbedUrl = (raw) => {
  if (!raw) return null;
  const url = String(raw).trim();

  // YouTube: watch?v=ID or youtu.be/ID -> embed
  if (/youtube\.com|youtu\.be/.test(url)) {
    const watchMatch = url.match(/[?&]v=([^&]+)/);
    if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
    if (/youtu\.be\//.test(url)) {
      const id = url.split("youtu.be/")[1].split(/[?&]/)[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (/youtube\.com\/embed\//.test(url)) return url;
  }

  // Vimeo: vimeo.com/ID -> player.vimeo.com/video/ID
  if (/vimeo\.com/.test(url)) {
    const m = url.match(/vimeo\.com\/(\d+)/);
    if (m) return `https://player.vimeo.com/video/${m[1]}`;
    if (/player\.vimeo\.com/.test(url)) return url;
  }

  // Dropbox share -> force dl=1
  if (/dropbox\.com/.test(url)) {
    if (url.includes("dl=0")) return url.replace("dl=0", "dl=1");
    if (!/\?/.test(url)) return `${url}?dl=1`;
    return url;
  }

  // Google Drive: /d/ID/view or id=ID -> direct download
  const gdriveMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)(?:\/|$)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (gdriveMatch) {
    const id = gdriveMatch[1];
    // best-effort direct download link (may still be blocked for embedding depending on Drive settings)
    return `https://drive.google.com/uc?export=download&id=${id}`;
  }

  // direct video file
  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) return url;

  // fallback: return original and let iframe try
  return url;
};

const isDirectFile = (url) => !!url && /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);

const MediaRenderer = ({ url, title }) => {
  if (!url) {
    return (
      <div className="rounded-lg border border-neutral-800 w-full h-[320px] lg:h-[420px] flex items-center justify-center text-neutral-500">
        No video available
      </div>
    );
  }

  const embed = toEmbedUrl(url);

  // YouTube/Vimeo embed
  if (/youtube\.com\/embed|player\.vimeo\.com/.test(embed)) {
    return (
      <div className="rounded-lg overflow-hidden border border-neutral-800 w-full h-[320px] lg:h-[420px]">
        <iframe
          src={embed}
          title={title || "Video"}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {/* helpful link if embedding blocked by X-Frame-Options — user can still open in new tab */}
        <div className="p-2">
          <a href={url} target="_blank" rel="noreferrer" className="text-sm underline">
            Open original video in new tab
          </a>
        </div>
      </div>
    );
  }

  // direct mp4/webm
  if (isDirectFile(embed)) {
    return (
      <video
        src={embed}
        controls
        className="rounded-lg border border-neutral-800 w-full h-auto max-h-[420px] object-contain"
      />
    );
  }

  // last attempt: iframe, plus fallback link
  return (
    <div className="rounded-lg border border-neutral-800 w-full h-[320px] lg:h-[420px] overflow-hidden relative">
      <iframe
        src={embed}
        title={title || "Video"}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <div className="absolute bottom-3 left-3">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-4 py-2 bg-neutral-900/80 border border-neutral-700 text-sm rounded text-white"
        >
          Open in new tab
        </a>
      </div>
    </div>
  );
};

const WorkflowDetail = () => {
  const { id } = useParams();
  const item = workflow.find((w) => w.id === id);

  // Debug logs — paste console output if you need more help
  console.log("WorkflowDetail id:", id);
  console.log("Found item:", item);
  console.log("item.video:", item?.video);

  if (!item)
    return (
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

        {/* longDescription may be multi-line; if it's a string with \n, render paragraphs */}
        <div className="text-neutral-400 mt-4 space-y-4">
          {String(item.longDescription || "")
            .split(/\n\s*\n/)
            .filter(Boolean)
            .map((p, i) => (
              <p key={i}>{p.trim()}</p>
            ))}
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-2">Examples</h4>
          <ul className="list-disc pl-5">
            {item.examples?.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>

        {/* MEDIA: video / embed / image fallback */}
        <div className="mt-8">
          <h4 className="font-semibold mb-3">Demo</h4>
          <MediaRenderer url={item.video} title={item.title} />
        </div>

        {/* Additional sections (checklist, roles etc.) if present */}
        {item.checklist?.length > 0 && (
          <div className="mt-8">
            <h4 className="font-semibold mb-2">Checklist</h4>
            <ul className="list-disc pl-5">
              {item.checklist.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        {item.roles?.length > 0 && (
          <div className="mt-8">
            <h4 className="font-semibold mb-2">Roles & responsibilities</h4>
            <ul className="list-disc pl-5">
              {item.roles.map((r, i) => (
                <li key={i}>
                  <strong>{r.role}:</strong> {r.responsibilities}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8">
          <Link to="/workflow" className="text-sm underline">
            ← Back to workflow
          </Link>
        </div>
      </div>
    </main>
  );
};

export default WorkflowDetail;
