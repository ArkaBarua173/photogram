import { Link, InertiaLinkProps } from "@inertiajs/react";
import { Button } from "./ui/button";
import {
    Home,
    Search,
    Compass,
    Bookmark,
    PlusCircle,
    UserIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function PageNavbar({ userAvatar }: { userAvatar: string }) {
    return (
        <ul className="flex flex-col gap-4 mt-6 text-lg sticky ">
            <li>
                <Button asChild variant={"ghost"} className="h-14">
                    <Link
                        href={route("dashboard")}
                        className="flex items-center"
                    >
                        <Home
                            className={`h-[1.4rem] w-[1.4rem] mr-4 ${
                                route().current("dashboard") && "text-primary"
                            }`}
                        />
                        <span
                            className={`text-lg ${
                                route().current("dashboard") && "text-primary"
                            }`}
                        >
                            Home
                        </span>
                    </Link>
                </Button>
            </li>
            <li>
                <Button asChild variant={"ghost"} className="h-14">
                    <Link
                        href={route("search.index")}
                        className="flex items-center"
                    >
                        <Search
                            className={`h-[1.4rem] w-[1.4rem] mr-4 ${
                                route().current("search.index") &&
                                "text-primary"
                            }`}
                        />
                        <span
                            className={`text-lg ${
                                route().current("search.index") &&
                                "text-primary"
                            }`}
                        >
                            Search
                        </span>
                    </Link>
                </Button>
            </li>
            <li>
                <Button asChild variant={"ghost"} className="h-14">
                    <Link href="#" className="flex items-center">
                        <Compass className={`h-[1.4rem] w-[1.4rem] mr-4 `} />
                        <span className={`text-lg `}>Explore</span>
                    </Link>
                </Button>
            </li>
            <li>
                <Button asChild variant={"ghost"} className="h-14">
                    <Link href="#" className="flex items-center">
                        <Bookmark className={`h-[1.4rem] w-[1.4rem] mr-4 `} />
                        <span className={`text-lg `}>Saved</span>
                    </Link>
                </Button>
            </li>
            <li>
                <Button asChild variant={"ghost"} className="h-14">
                    <Link href="#" className="flex items-center">
                        <PlusCircle className={`h-[1.4rem] w-[1.4rem] mr-4 `} />
                        <span className={`text-lg `}>Create</span>
                    </Link>
                </Button>
            </li>
            <li>
                <Button asChild variant={"ghost"} className="h-14">
                    <Link href="#" className="flex items-center">
                        <Avatar className="h-[1.4rem] w-[1.4rem] mr-4">
                            <AvatarImage src={userAvatar} alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className={`text-lg `}>Profile</span>
                    </Link>
                </Button>
            </li>
        </ul>
    );
}
