import Image from "next/image";
import { FaFileAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Highlight from "./Components/Highlight";
import Tabs from "@/app/Components/Tabs";
export default function Home() {
  return (
    <main className="flex flex-col gap-10 w-full ">
      {/* HERO Section */}
      <section className="flex flex-col items-center gap-30 lg:gap-0 xl:gap-0">
        <div className="flex flex-col items-center gap-13 px-11 md:flex-row md:items-start md:gap-0 md:px-12 lg:px-30 xl:pl-36 xl:pr-50 xl:gap-13">
          <Image src="/portrait.png" width="400" height="600" alt="animated portrait" className="md:pr-11 lg:pr-15 xl:pr-5"></Image>
          <div className="md:hidden border-1 rounded-2xl bg-slate-midground-200 dark:bg-slate-midground-800 w-10 h-16 animate-bounce before:border-2 before:absolute before:top-2 before:left-4 before:animate-[topY_1s_ease_infinite] before:h-2 before:rounded-lg"></div>
          <div className="flex flex-col gap-5 pt-4 md:pt-6 xl:pt-5 xl:gap-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-black">Hi, I'm Daniel 👋</p>
            <p className="text-lg md:text-xl lg:text-2xl font-extrabold">23 yo from Miami, Florida, USA. Who loves</p>
            <p className="text-4xl md:text-5xl lg:text-7xl font-extrabold">Turning <Highlight>ideas</Highlight> into <Highlight>reality</Highlight></p>
            <p className="text-2xl lg:text-3xl xl:text-2xl font-black">Full-Stack Developer</p>
            <div className="flex pl-4 gap-3 text-4xl md:pl-2 md:gap-6 lg:gap-8 xl:pl-4 xl:gap-5">
              <a href="" className="dark:text-emerald-200 dark:hover:text-emerald-300 text-emerald-400 hover:text-emerald-500"><FaFileAlt/></a>
              <a href="https://www.linkedin.com/in/daniel-hernandez-10203b24a" className="dark:text-sky-200 dark:hover:text-sky-300 text-sky-400 hover:text-sky-500"><FaLinkedin/></a>
              <a href="https://github.com/danez13" className="dark:text-neutral-300 dark:hover:text-neutral-400 text-neutral-600 hover:text-neutral-700"><FaGithub/></a>
              <a href="mailto:hernandezdaniel1702@gmail.com" className="dark:text-red-300 dark:hover:text-red-400 text-red-500 hover:text-red-600"><MdOutlineEmail/></a>
            </div>
          </div>
        </div>
        <div className="hidden md:block border-1 rounded-2xl bg-slate-midground-200 dark:bg-slate-midground-800 w-10 h-16 animate-bounce before:border-2 before:absolute before:top-2 before:left-4 before:animate-[topY_1s_ease_infinite] before:h-2 before:rounded-lg"></div>
      </section>

      {/* Work and Education  */}
      <section className="border-slate-midground-800 dark:border-slate-midground-200 border-2 bg-slate-midground-100 dark:bg-slate-midground-900 px-10 py-20">
        <Tabs
          tabs={[
            { id: "1", name: "Work", contents:  [
                                                    {id:"1", image: "/fiu-nursing.jpg", link:"https://cnhs.fiu.edu/", date:"Aug 2024 - Now", name: "Nicole Wertheim College of Nursing and Health Sciences", position: "Student It Lab Assistant", desc: [{content:"Delivered technical support to 200+ students and staff. resolved hardware and software issues with a 95% first-contact resolution rate and maintaining 99% system uptime for seamless daily operations."},{content:"Managed IT inventory, including 100+ devices, ensuring accurate tracking and timely updates, resulting in a 20% reduction in equipment loss."}]},
                                                    {id:"2", image: "/go-fans-ai.png", link:"https://gofans.ai/", date:"Dec 2024 - Jun 2025", name: "GoFans.Ai", position: "Data scientist (Intern)", desc: [{content:"Interpreted Team Ideas for a Music Emotion Recognition Model, leveraged Python, Keras, Essentia, AWS Lambda, SageMaker, and S3 Buckets to build a Data Pipeline and Machine learning model."}, {content:"Achieved an average API runtime of 5 seconds, a model accuracy of 80%, and gathering interest of 100% of app investors."}]},
                                                    {id:"3", image: "/cahsi.png", link:"https://cahsi.utep.edu/", date:"Feb 2024 - Jun 2024", name: "Computing Alliance of Hispanic-Serving Institutions", position: "Undergraduate research assistant", desc: [{content:"Evaluated and researched Security vulnerabilities and Defense Mechanisms in Generative Language AI models and delivered a visual presentation captivating 100% of Evaluators."}]},
                                                    
                                                ] },
            { id: "2", name: "Education", contents: [
                                                      {id:"1", image:"/fiu-panther.jpg", link:"https://www.fiu.edu/", date:"Jan 2025 - Now", name: "Florida International University", position: "MS in Computer Science", desc: []},
                                                      {id:"2", image:"/fiu-panther.jpg", link:"https://www.fiu.edu/", date:"Jun 2020 - Dec 2024", name: "Florida International University", position: "BS in Computer Science", desc: [{content:"2-time recipient of the Deans List Award"},{content: "Datascience & AI Technical Lead for the FIU CodeCrunch Student Organization"}]}
                                                    ]}
          ]}
        />
      </section>
      {/* Projects */}
      <section>
        
      </section>

      {/* Skills */}
      <section>

      </section>
    </main>
  );
}
