"use client";

import {useState} from "react";
import Experience from "./Experience";

export default function Tabs({tabs}: {tabs: {id: string, name: string, contents: {id: string, image: string, link: string, date: string, name: string, position: string, desc: { content: string }[] }[] }[]}) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index:number) => {
        setActiveTab(index);
    }

    const tabButtons = tabs.map((tab, index) => {
        return (
            <button
                key={tab.id}
                onClick={() => handleTabChange(index)}
                className={`w-full rounded-lg p-1 font-bold ${activeTab === index ? 'bg-slate-midground-100 dark:bg-slate-midground-900' : ''}`}>
                {tab.name}
            </button>
        );
    });

    const tabContents = tabs[activeTab].contents.map(content => {
        return (
            <Experience key={content.id} image={content.image} link={content.link} date={content.date} name={content.name} position={content.position} desc={content.desc} />
        );
    });

    return (
        <div className="flex flex-col gap-2 h-full w-full">
            <div className="bg-slate-midground-500 flex p-1 rounded-lg">
                {tabButtons}
            </div>
            <div className="relative border-1 border-slate-midground-500 rounded-lg px-3 w-full">
                <div className="absolute left-10.5 z-0 h-full border-[0.5px] border-slate-midground-500"></div>
                <div className="relative z-10 py-5">
                    {tabContents}
                </div>
            </div>
        </div>
    );
}