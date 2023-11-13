import { Link } from "@inertiajs/react";
import { Bookmark, Compass, Home, PlusCircle, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { User } from "../types/index";

export default function PageNavbar({ user }: { user: User }) {
    return (
        <ul className="flex flex-col gap-4 mt-6 text-lg sticky ">
            <li className="pr-4">
                <Button
                    asChild
                    variant={"ghost"}
                    className="w-full h-14 flex justify-start"
                >
                    <Link href={route("dashboard")}>
                        <Home
                            className={`h-[1.4rem] w-[1.4rem] mr-4 ml-0 ${
                                route().current("dashboard") && "text-primary"
                            }`}
                        />
                        <span
                            className={`text-sm ${
                                route().current("dashboard") && "text-primary"
                            }`}
                        >
                            Home
                        </span>
                    </Link>
                </Button>
            </li>
            <li className="pr-4">
                <Button
                    asChild
                    variant={"ghost"}
                    className="w-full h-14 flex justify-start"
                >
                    <Link href={route("search.index")}>
                        <Search
                            className={`h-[1.4rem] w-[1.4rem] mr-4 ml-0 ${
                                route().current("search.index") &&
                                "text-primary"
                            }`}
                        />
                        <span
                            className={`text-sm ${
                                route().current("search.index") &&
                                "text-primary"
                            }`}
                        >
                            Search
                        </span>
                    </Link>
                </Button>
            </li>
            <li className="pr-4">
                <Button
                    asChild
                    variant={"ghost"}
                    className="w-full h-14 flex justify-start"
                >
                    <Link href="#">
                        <Compass
                            className={`h-[1.4rem] w-[1.4rem] mr-4 ml-0 `}
                        />
                        <span className={`text-sm `}>Explore</span>
                    </Link>
                </Button>
            </li>
            <li className="pr-4">
                <Button
                    asChild
                    variant={"ghost"}
                    className="w-full h-14 flex justify-start"
                >
                    <Link href="#">
                        <Bookmark
                            className={`h-[1.4rem] w-[1.4rem] mr-4 ml-0 `}
                        />
                        <span className={`text-sm `}>Saved</span>
                    </Link>
                </Button>
            </li>
            <li className="pr-4">
                <Button
                    asChild
                    variant={"ghost"}
                    className="w-full h-14 flex justify-start"
                >
                    <Link href="#">
                        <PlusCircle
                            className={`h-[1.4rem] w-[1.4rem] mr-4 ml-0 `}
                        />
                        <span className={`text-sm `}>Create</span>
                    </Link>
                </Button>
            </li>
            <li className="pr-4">
                <Button
                    asChild
                    variant={"ghost"}
                    className="w-full h-14 flex justify-start"
                >
                    <Link href="#">
                        <Avatar className="h-[1.4rem] w-[1.4rem] mr-4 ml-0">
                            <AvatarImage src={user?.avatar} alt="@shadcn" />
                            <AvatarFallback>
                                {user?.name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <span className={`text-sm `}>{user?.username}</span>
                    </Link>
                </Button>
            </li>
        </ul>
    );
}
