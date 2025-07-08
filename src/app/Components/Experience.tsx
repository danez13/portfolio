import Image from "next/image";
export default function Experience({image, link, date, name, position, desc }: {image: string, link: string, date: string, name: string, position: string, desc: {content: string}[] }) {
    const descriptionContent = desc.map((desc, index) => (
        <li key={index} className="p-1">
            {desc.content}
        </li>
    ));
    return (
        <div className="flex w-full gap-5 mb-10">
            <a href={link} className="rounded-full overflow-hidden h-fit w-fit border-slate-midground-500 border-1 flex flex-shrink-0">
                <Image src={image} alt={`${name} logo`} width={60} height={60} fill={false}/>
            </a>
            <div>
                <h2 className="text-xs text-slate-midground-600 dark:text-slate-midground-400">{date}</h2>
                <h1 className="text-xl dark:font-semibold">{name}</h1>
                <h2 className="text-sm text-slate-midground-600 dark:text-slate-midground-400">{position}</h2>
                <ul className="text-sm text-slate-midground-900 dark:text-slate-midground-100 list-disc list-inside">{descriptionContent}</ul>
            </div>
        </div>
    );
}