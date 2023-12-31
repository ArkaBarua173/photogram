import ApplicationLogo from "@/Components/ApplicationLogo";
import { Card, CardContent } from "@/Components/ui/card";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-background">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>
            <Card className="w-[400px]">
                <CardContent className="mt-4">{children}</CardContent>
            </Card>
        </div>
    );
}
