import { FaFileAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
export default function Footer() {
  return (
    <footer className="h-35 flex flex-col items-center justify-center bg-slate-midground-200 dark:bg-slate-midground-900 border-t-2 border-slate-midground-800 dark:border-slate-midground-200 gap-5">
        <div className="flex gap-3 text-3xl md:gap-6 lg:gap-8 xl:gap-5">
            <a href="" className="dark:text-emerald-200 dark:hover:text-emerald-300 text-emerald-400 hover:text-emerald-500"><FaFileAlt/></a>
            <a href="https://www.linkedin.com/in/daniel-hernandez-10203b24a" className="dark:text-sky-200 dark:hover:text-sky-300 text-sky-400 hover:text-sky-500"><FaLinkedin/></a>
            <a href="https://github.com/danez13" className="dark:text-neutral-300 dark:hover:text-neutral-400 text-neutral-600 hover:text-neutral-700"><FaGithub/></a>
            <a href="mailto:hernandezdaniel1702@gmail.com" className="dark:text-red-300 dark:hover:text-red-400 text-red-500 hover:text-red-600"><MdOutlineEmail/></a>
        </div>
        <p className="text-xl text-foreground font-bold">Developed by Daniel Hernandez</p>
    </footer>
  );
}