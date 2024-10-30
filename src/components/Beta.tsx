import React from "react";
import Link from "next/link";

export const Beta = () => {

    return (
        <div className="flex justify-center z-20 relative m-4">
            <Link href="https://app.coven.fi">
                <span className=" text-xl px-12 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-semibold text-white cursor-pointer transition-all duration-200 border-2 border-transparent hover:border-indigo-300 hover:shadow-[0_0_15px_rgba(75,0,130,0.7)] hover:from-indigo-600 hover:to-purple-700">
                    App
                </span>
            </Link>
        </div>
    );
}
