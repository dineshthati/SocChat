import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Login = () => {
  return (
    <div className="bg-zinc-950 h-[100vh]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Get started today
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-white text-center text-lg font-medium">
              Log in to Existing Account
            </p>

            <button
              type="submit"
              className="block w-full rounded-lg bg-zinc-600 px-5 py-3 text-sm font-medium text-white"
            >
              Login with Github
            </button>
            <p className="text-center text-sm text-gray-500">
              New user ?
              <Link className="underline" href={"/signup"}>
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
