export default function ProjectCard({ title, description }) {
  return (
    <article className="rounded-xl border border-slate-200 p-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </article>
  );
}
