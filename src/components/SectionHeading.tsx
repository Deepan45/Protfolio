export default function SectionHeading({
  eyebrow,
  title,
  index: _index,
}: {
  eyebrow: string;
  title: string;
  index?: string;
}) {
  return (
    <div>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold tracking-widest text-indigo-600 uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}
