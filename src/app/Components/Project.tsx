import Image from "next/image";
export default function Project({image, name, desc, links, frameworks}: {image: string, name: string, desc: string, links: {image: React.ReactNode, name: string, link: string}[], frameworks: {image: React.ReactNode, name: string}[]}) {
    const frameworkElements = frameworks.map((framework, index) => (
        <div key={index} className="flex gap-2 items-center w-fit p-1 text-xs bg-slate-midground-200 dark:bg-slate-midground-800  rounded-lg">
            {framework.image}
            <p>{framework.name}</p>
        </div>
    ));

    const linkElements = links.map((link, index) => (
        <a key={index} href={link.link} className="flex items-center gap-2 p-2 rounded-xl bg-slate-midground-500 text-background font-bold text-md">
            {link.image}
            <p>{link.name}</p>
        </a>
    ));
    return (
        <div className="flex flex-col gap-2 bg-slate-midground-300 dark:bg-slate-midground-700 rounded-4xl">
            <div className="relative w-full h-60">
                <Image src={image} alt={name} fill={true} style={{ objectFit: "cover" }} className="rounded-t-4xl"/>
            </div>
            <div className="flex flex-col gap-2 p-5">
                    <h1 className="font-bold">{name}</h1>
                <p className="text-sm font-semibold text-slate-midground-700 dark:text-slate-midground-300">{desc}</p>
                <div className="flex gap-2 items-center w-full flex-wrap">
                    {frameworkElements}
                </div>
                <div className="h-2"></div>
                <div className="flex gap-2 flex-wrap text-sm">
                    {linkElements}
                </div>
            </div>
        </div>
    );
}