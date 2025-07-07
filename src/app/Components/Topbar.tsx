import ThemeSwitch from "../theme/ThemeSwitch";
export default function Topbar(){
    return (
        // <nav className="pl-5 md:px-15 xl:px-35 py-5 md:py-15 xl:py-13 h-20 lg:h-35 content-center">
        //     <p className="h-full content-top align-middle text-xl font-black">Daniel Hernandez</p>
        // </nav>
        <nav className="flex justify-between px-10 md:px-12 h-12 md:h-38 lg:h-14 lg:px-30 xl:px-36 items-end">
            <p className="h-fit font-black text-2xl">Daniel Hernandez</p>
            <ThemeSwitch />
        </nav>
    );
}