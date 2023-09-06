import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import HomeLayout from "@/Layouts/HomeLayout";

export default function Dashboard({ auth }: PageProps) {
    return (
        <HomeLayout user={auth.user}>
            <Head title="Dashboard" />
            <p>Homepage</p>
        </HomeLayout>
    );
}
