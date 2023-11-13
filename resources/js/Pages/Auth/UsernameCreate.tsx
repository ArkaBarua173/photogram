import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler, useEffect, useState } from "react";

export default function Register({ uid }: { uid: string }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
    });

    console.log(uid);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("username.store"));
    };

    return (
        <GuestLayout>
            <Head title="Username" />
            <form onSubmit={submit}>
                <div className="mt-4">
                    <div className="mb-3 text-sm text-gray-300">
                        <p>
                            Please choose a username so that we can identify
                            you. Thank you.
                        </p>
                    </div>
                    <Label htmlFor="username">Username</Label>

                    <Input
                        id="username"
                        name="username"
                        type="text"
                        value={data.username}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("username", e.target.value)}
                        required
                    />

                    <InputError message={errors.username} className="mt-2" />
                </div>
                <Button disabled={processing} className="mt-4">
                    Continue
                </Button>
            </form>
        </GuestLayout>
    );
}
