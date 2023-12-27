import Link from "next/link";
import Typical from "react-typical";
import Image from "next/image";
import { useEffect, useState } from "react";
import { en } from "../common/index";

export default function Banner() {
  const [time, setTime] = useState();

  useEffect(() => {
    var myDate = new Date();
    var hrs = myDate.getHours();
    getTime(hrs);
  });
  function getTime(hrs) {
    if (hrs < 12) setTime("Good Morning");
    else if (hrs >= 12 && hrs <= 17) setTime("Good Afternoon");
    else if (hrs >= 17 && hrs <= 24) setTime("Good Evening");
  }

  return (
    <div>
      <section className="text-white bg-gray-900 py-10 animate-marquee whitespace-nowrap bg-[url('/img/dev.svg')] bg-no-repeat bg-contain bg-center">
        <main className="font-mono relative overflow-hidden py-10 ">
          <div className="flex relative z-20 items-center">
            <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
              <div className="flex flex-col items-center">
                <div>
                  <Image
                    src="/img/pragi.jpg"
                    className="rounded-full w-56 object-cover"
                    width={100}
                    height={100}
                    alt="Pragatheeswaran pic"
                  />
                </div>
                <div className="max-w-3xl mx-auto text-center pt-3">
                  <p className="font-serif">{`Hello There, ${time}`}</p>
                  <h1 className="text-4xl font-black text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 animate-text">
                    {en.userName}
                    <br />
                    <span className="sm:block">{en.userPosition}</span>
                  </h1>
                  <div className="mt-2 bg-clip-text text-transparent bg-gradient-to-r  from-green-300 via-blue-500 to-purple-600 font-bold text-lg lg:text-3xl">
                    <Typical
                      loop={Infinity}
                      steps={[
                        "React.Js",
                        3000,
                        "Javascript",
                        3000,
                        "Typescript",
                        3000,
                        "Next.js Framework",
                        3000,
                        "TailwindCss",
                        3000,
                      ]}
                    />
                  </div>
                </div>
                <div className="mx-auto py-8 cursor-pointer">
                  <Link href="mailto:pragatheespragi98@gmail.com">
                    <div className="flex items-center justify-center">
                      <div className="flex items-center">
                        <Image
                          src="/img/logo-google.svg"
                          className="w-8 fill-stone-600"
                          width={30}
                          height={30}
                          alt={'gmail-Logo'}
                        />
                        <p className="pl-5">pragatheespragi98@gmail.com</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
