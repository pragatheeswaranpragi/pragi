import Link from 'next/link';
import Typical from 'react-typical';
import Image from 'next/image'


export default function Banner() {
return (
<div>
    <section className="text-white bg-gray-900">
        <main className="font-mono relative overflow-hidden py-24">
            <div className="flex relative z-20 items-center">
                <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
                    <div className="flex flex-col">
                        <img src="/img/pragi.jpg" className="rounded-full w-28 mx-auto" alt='Pragatheeswaran pic'/>
                        <div className="max-w-3xl mx-auto text-center pt-8">
                            <h1
                                className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                                Pragatheeswaran<br />
                                <span className="sm:block">
                                Front-End Developer
                                </span>
                            </h1>
                            <div className="mt-2 bg-clip-text text-transparent bg-gradient-to-r  from-green-300 via-blue-500 to-purple-600 font-bold text-lg lg:text-3xl">
                                <Typical loop={Infinity} steps={[ 'React' ,3000, 'Javascript'
                                    ,3000, 'Typescript' ,3000, 'Next.js Framework', 3000 ]} 
                                />
                            </div>
                        </div>
                        <div className='mx-auto py-8 cursor-pointer'>
                            <Link href="mailto:pragatheespragi98@gmail.com">
                            <div className="flex items-center justify-center mt-4">
                                <div className='flex items-center'>
                                    <img src="/img/logo-google.svg" className='w-8 fill-stone-600' />
                                    <p className='pl-5'>pragatheespragi98@gmail.com</p>
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
)
}