import React from "react";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto inset-0 max-w-7xl flex items-start gap-5 sm:-mb-28 mb-0">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Zainab Tariq</span>
          </h1>
          <h2 className={`${styles.heroSubText} mt-3 sm:block hidden`}>
            FRONT-END DEVELOPER
          </h2>
          <p
            className={`${styles.sectionSubText} text-gray-400 sm:text-gray-200 mt-10 leading-[30px]`}
          >
            {" "}
            I build dynamic, visually appealing user interfaces and{" "}
            <br className="sm:block hidden" />
            web applications, committed to driving impactful{" "}
            <br className="sm:block hidden" />
            results in every project I undertake with functional{" "}
            <br className="sm:block hidden" />
            web solutions.
          </p>

          <div className="flex">
            <button
              type="button"
              className="mt-20 bg-[#915eff] py-4 px-9 rounded-xl outline-none w-fit text-slate-900 font-bold shadow-md shadow-primary tracking-wider cursor-pointer"
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
