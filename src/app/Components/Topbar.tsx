import ThemeSwitch from "../theme/ThemeSwitch";
export default function Topbar(){
    return (
        <nav className="flex justify-between px-10 md:px-12 h-12 md:h-38 lg:h-14 lg:px-30 xl:px-36 items-end">
            <p className="h-fit font-black text-2xl">Daniel Hernandez</p>
            <ThemeSwitch />
        </nav>
    );
}