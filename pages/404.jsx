import React, { useState } from "react";
import Link from 'next/link'

export default function PageNotFound() {
    return (
        <div>
            <div className="lg:px-24 lg:py-12 md:py-12 md:px-44 px-4 py-12 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                    <div className="relative">
                        <div className="absolute">
                            <div className>
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                    Page Not Found
                                </h1>
                                <h1 className="my-2 text-gray-800 font-bold text-xl">
                                    Looks like you've found the
                                    doorway to the great nothing
                                </h1>
                                <p className="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                                <div  className="pt-5">
                                <Link href="/">
                                    <a className="sm:w-full lg:w-auto my-2 border rounded-lg md py-4 px-8 text-center bg-red-700 text-white hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-opacity-50">Take me there!</a>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                        </div>
                    </div>
                </div>
                <div>
                    <img src="img/page.gif" />
                </div>
            </div>
        </div>

    );
}