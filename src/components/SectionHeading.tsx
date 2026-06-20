export default function SectionHeading({
  eyebrow,
  title,
  index,
}: {
  eyebrow: string;
  title: string;
  index: string;
}) {
  return (
    <div className="flex items-center gap-4 border-l-2 border-accent pl-4">
      <span className="text-xs font-semibold text-slate-400 select-none">{index}</span>
      <div>
        <p className="text-xs font-semibold tracking-widest text-accent-light uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
