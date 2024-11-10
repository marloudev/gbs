import { useForm } from "@inertiajs/react";
import { Button, Checkbox, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";

export default function LoginPage() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    const submit = (e) => {
        e.preventDefault();
        console.log("data", data);
        post(route("login.auth"), {
            onFinish: () => reset("password"),
        });
    };
    return (
        <>
            <div className="absolute inset-0 -z-10 items-center px-5 py-24 bg-gray-300"></div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-5 rounded-md">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm flex w-full items-center justify-center">
                        <div className="flex items-center justify-center flex-col text-4xl m py-5 font-black">
                            {/* <img
                                alt="Your Company"
                                src="/images/logo.png"
                                className="mx-auto h-24 w-96 "
                            />
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
                                Sign in to your account
                            </h2> */}
                            GBS MINIMART
                        </div>
                    </div>
                    <form onSubmit={submit} className="space-y-6">
                        <TextField
                            className="w-full"
                            onChange={(e) => setData("email", e.target.value)}
                            error={errors?.email ? true : false}
                            helperText={errors?.email ?? ""}
                            name="email"
                            type="text"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                        />

                        <TextField
                            className="w-full"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            error={errors?.password ? true : false}
                            helperText={errors?.password ?? ""}
                            name="password"
                            type="password"
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                        />
                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-gray-600">
                                    Remember me
                                </span>
                            </label>
                        </div>
                        <div>
                            <Button
                                type="submit"
                                disabled={processing}
                                variant="contained"
                                className="w-full"
                            >
                                {processing ? (
                                    <CircularProgress
                                        size={24}
                                        color="inherit"
                                    />
                                ) : (
                                    " Sign in"
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
