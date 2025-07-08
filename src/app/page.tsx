import Image from "next/image";
import { FaFileAlt, FaLinkedin, FaGithub, FaPython, FaWindows, FaBasketballBall } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiNextjsLine,RiReactjsLine,RiTailwindCssFill } from "react-icons/ri";
import { BsGit, BsSourceforge} from "react-icons/bs";
import { BiLogoTypescript } from "react-icons/bi";
import { SiStreamlit } from "react-icons/si";
import Highlight from "./Components/Highlight";
import Tabs from "@/app/Components/Tabs";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
export default function Home() {
  return (
    <main className="flex flex-col gap-10 w-full ">
      {/* HERO Section */}
      <section className="flex flex-col items-center gap-30 lg:gap-0 xl:gap-0">
        <div className="flex flex-col items-center gap-13 px-11 md:flex-row md:items-start md:gap-0 md:px-12 lg:px-30 xl:pl-36 xl:pr-50 xl:gap-13">
          <Image src="/portrait.png" width="400" height="600" fill={false} alt="animated portrait" className="md:pr-11 lg:pr-15 xl:pr-5"></Image>
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
      <section className="flex flex-col items-center border-slate-midground-800 dark:border-slate-midground-200 border-t-2 border-b-2 bg-slate-midground-100 dark:bg-slate-midground-900 px-11 md:px-12 lg:px-30 xl:px-36 py-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold pb-10">Experience</h1>
        <Tabs
          tabs={[
            { id: "1", name: "Work", contents:  [
                                                    {id:"1", image: "/work/fiu-nursing.jpg", link:"https://cnhs.fiu.edu/", date:"Aug 2024 - Now", name: "Nicole Wertheim College of Nursing and Health Sciences", position: "Student It Lab Assistant", desc: [{content:"Delivered technical support to 200+ students and staff. resolved hardware and software issues with a 95% first-contact resolution rate and maintaining 99% system uptime for seamless daily operations."},{content:"Managed IT inventory, including 100+ devices, ensuring accurate tracking and timely updates, resulting in a 20% reduction in equipment loss."}]},
                                                    {id:"2", image: "/work/go-fans-ai.png", link:"https://gofans.ai/", date:"Dec 2024 - Jun 2025", name: "GoFans.Ai", position: "Data scientist (Intern)", desc: [{content:"Interpreted Team Ideas for a Music Emotion Recognition Model, leveraged Python, Keras, Essentia, AWS Lambda, SageMaker, and S3 Buckets to build a Data Pipeline and Machine learning model."}, {content:"Achieved an average API runtime of 5 seconds, a model accuracy of 80%, and gathering interest of 100% of app investors."}]},
                                                    {id:"3", image: "/work/cahsi.png", link:"https://cahsi.utep.edu/", date:"Feb 2024 - Jun 2024", name: "Computing Alliance of Hispanic-Serving Institutions", position: "Undergraduate research assistant", desc: [{content:"Evaluated and researched Security vulnerabilities and Defense Mechanisms in Generative Language AI models and delivered a visual presentation captivating 100% of Evaluators."}]},
                                                    
                                                ] },
            { id: "2", name: "Education", contents: [
                                                      {id:"1", image:"/work/fiu-panther.jpg", link:"https://www.fiu.edu/", date:"Jan 2025 - Now", name: "Florida International University", position: "MS in Computer Science", desc: []},
                                                      {id:"2", image:"/work/fiu-panther.jpg", link:"https://www.fiu.edu/", date:"Jun 2020 - Dec 2024", name: "Florida International University", position: "BS in Computer Science", desc: [{content:"2-time recipient of the Deans List Award"},{content: "Datascience & AI Technical Lead for the FIU CodeCrunch Student Organization"}]}
                                                    ]}
          ]}
        />
      </section>
      {/* Skills */}
      <section className="flex flex-col items-center border-slate-midground-800 dark:border-slate-midground-200 border-t-2 border-b-2 bg-slate-midground-100 dark:bg-slate-midground-900 px-11 md:px-12 lg:px-30 xl:px-36 py-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold pb-10">Skills</h1>
        <div className="flex gap-2 items-start justify-start w-full flex-wrap">
          <Skill image={<RiNextjsLine/>} name="NextJs"/>
          <Skill image={<RiReactjsLine/>} name="ReactJs"/>
          <Skill image={<RiTailwindCssFill/>} name="Tailwind CSS"/>
          <Skill image={<FaPython/>} name="Python"/>
          <Skill image={<BsGit/>} name="Git"/>
          <Skill image={<FaGithub/>} name="GitHub"/>
          <Skill image={<BiLogoTypescript/>} name="TypeScript"/>
          <Skill image={<SiStreamlit/>} name="Streamlit"/>
        </div>
      </section>

      {/* Projects */}
      <section className="flex flex-col items-center border-slate-midground-800 dark:border-slate-midground-200 border-t-2 border-b-2 bg-slate-midground-100 dark:bg-slate-midground-900 px-11 md:px-12 lg:px-30 xl:px-36 py-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold pb-10">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Project image="/projects/writeguard.png" name="WriteGuard" desc="a command-line tool that makes write filter configuration easier on Windows systems." links={[{image: <FaGithub/>, name: "Github", link: "https://github.com/danez13/WriteGuard"}, {image: <BsSourceforge/>, name: "Sourceforge", link: "https://sourceforge.net/projects/writeguard/"}]} frameworks={[{image: <FaWindows/>, name: "Batchscript"}, {image: <FaPython/>, name: "Python"}]}/>
            <Project image="/projects/portfolio.png" name="Portfolio" desc="The website you are seeing now! 😁" links={[{image: <FaGithub/>, name: "Github", link: "https://github.com/danez13/portfolio"}]} frameworks={[{image: <RiNextjsLine/>, name: "Next.js"}, {image: <RiReactjsLine/>, name: "React"}, {image: <RiTailwindCssFill/>, name: "Tailwind CSS"}, {image:<BiLogoTypescript/>, name:"Typescript"}]}/>
            <Project image="/projects/NBA-Hub.png" name="NBA Hub" desc="A web application that provides NBA statistics" links={[{image: <FaGithub/>, name:"Github", link: "https://github.com/danez13/CRRJD_data-driven-basetball-application"},{image:<SiStreamlit/>, name:"Streamlit site", link: "https://danez13-crrjd-data-driven-basetball-application-main-guwczn.streamlit.app/"}]} frameworks={[{image:<SiStreamlit/>, name:"Streamlit"},{image:<FaPython/>, name:"Python"},{image:<FaBasketballBall/>, name:"NBA API"}]}/>
          </div>
      </section>
    </main>
  );
}
