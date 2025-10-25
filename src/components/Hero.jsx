import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-transparent dark:bg-gray-900 h-[95vh]">
            <div className=" max-w-screen-xl px-4 py-6 mx-auto lg:py-16 flex flex-col-reverse lg:flex-row-reverse items-center lg:justify-between lg:gap-8">

                {/* Left Content */}
                <div className=" lg:w-7/12 text-center lg:text-left">



                    <h1 className="hidden lg:flex max-w-2xl mb-4 text-5xl md:text-6xl xl:text-7xl font-extrabold uppercase tracking-wider text-transparent 
                    bg-clip-text
                     bg-gradient-to-r from-gray-200 via-red-500 to-yellow-500 anim1" style={{ animationDelay: "1.2s" }}>
                        {/* drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] */}
                        Basirhat Music Forum
                    </h1>
                    <p className=" max-w-2xl mb-8 text-lg md:text-ld font-light text-gray-300 leading-relaxed anim1" style={{ animationDelay: "2.1s" }}>
                        A musical movement born in Basirhat celebrating independent sound, raw energy, and street passion.
                        Join our gigs, feel the rhythm, and be part of the revolution.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 anim1" style={{ animationDelay: "2.2s" }}>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-6 py-3 text-xs lg:text-md font-semibold text-white 
                             bg-gradient-to-r from-pink-600 to-red-700 rounded-full shadow-lg hover:scale-105 transition-transform 
                             duration-300 hover:shadow-[0_0_20px_rgba(255,0,90,0.6)]"
                        >
                            Join the Vibe
                            <svg
                                className="w-5 h-5 ml-2 -mr-1 animate-pulse"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 
                                    6a1 1 0 010 1.414l-6 6a1 1 0 
                                  01-1.414-1.414L14.586 11H3a1 1 
                                   0 110-2h11.586l-4.293-4.293a1 
                                   1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>

                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-6 py-3 text-xs lg:text-md  font-semibold border-2 border-pink-600 text-pink-400 
                              rounded-full hover:bg-pink-600 hover:text-white transition duration-300"
                            onClick={() => navigate("/member")}
                        >
                            Members Panel
                        </a>
                    </div>
                </div>
                ̥

                {/* Right Image */}

                <div className="relative lg:flex lg:w-5/12 justify-center anim1" style={{ animationDelay: "1.8s" }}>
                    <img src="bmf_logo.png" alt="mockup" className="max-w-full h-auto" />


                    <DotLottieReact
                        src="https://lottie.host/19a532fe-b53c-4f4e-accb-161a2be0b930/IyT7Xn3t6U.lottie"
                        loop
                        autoplay
                        className=' hidden lg:flex absolute scale-75 lg:scale-55 lg:-left-5 lg:top-[-120px]  -right-5'
                    />

                </div>
            </div>
        </section>
    );
}

export default Hero;
