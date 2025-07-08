export default function Skill({image, name}: {image:React.ReactNode, name: string}) {
  return (
    <div className="flex items-center justify-center gap-2 p-2 bg-slate-midground-200 dark:bg-slate-midground-800 rounded-xl">
      <p className="text-3xl">{image}</p>
      <p className="text-md">{name}</p>
    </div>
  );
}