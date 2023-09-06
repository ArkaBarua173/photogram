import ApplicationLogo from "@/Components/ApplicationLogo";
import PageNavbar from "@/Components/PageNavbar";
import ProfileAvatarDropdown from "@/Components/ProfileAvatarDropdown";
import ThemeChanger from "@/Components/ThemeChanger";
import { useTheme } from "@/Components/theme-provider";
import { Separator } from "@/Components/ui/separator";
import { User } from "@/types";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
export default function HomeLayout({
    user,
    children,
}: PropsWithChildren<{ user: User }>) {
    const { setTheme } = useTheme();
    return (
        <div className="h-screen">
            <header className=" fixed h-[5rem] inset-0 z-50 bg-background border-b">
                <div className="flex justify-between py-6 px-8 mx-auto">
                    <Link href="/">
                        <ApplicationLogo className="block h-10 pl-4 w-auto fill-current text-gray-800 dark:text-gray-200" />
                    </Link>
                    <div className="flex items-center gap-4 pr-4">
                        <ThemeChanger setTheme={setTheme} />
                        <ProfileAvatarDropdown userAvatar={user?.avatar} />
                    </div>
                </div>
            </header>
            <Separator />
            <div className="max-w-7xl mx-auto w-full">
                <div className="border-r fixed top-[5rem] h-screen left-0 w-52 pl-8">
                    <PageNavbar userAvatar={user?.avatar} />
                </div>
                <div className="relative top-[5rem] left-52 px-10 py-8 overflow-auto w-[calc(100%-13rem)]">
                    {children}
                </div>
            </div>
        </div>
    );
}
