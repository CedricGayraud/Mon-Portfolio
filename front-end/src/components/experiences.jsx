import React from "react";
import { MdClose, MdOutlineScreenshotMonitor } from "react-icons/md";
import { GoDash, GoDotFill } from "react-icons/go";
import { HiOutlineServerStack } from "react-icons/hi2";
import { AiOutlineShop } from "react-icons/ai";

function Experiences() {
  return (
    <section id="exp" className="2xl:mt-32">
      <div className="rounded-2xl text-blanc">
        <div className="bg-grisFonce rounded-t-2xl h-10 flex gap-2 items-center">
          <div className="bg-rouge rounded-full ml-3">
            <MdClose className="cursor-pointer text-transparent hover:text-grisFonce font-black text-lg" />
          </div>
          <div className="bg-jaune rounded-full">
            <GoDash className="cursor-pointer text-transparent hover:text-grisFonce font-black text-lg" />
          </div>
          <div className="cursor-pointer text-transparent hover:text-grisFonce font-black text-lg">
            <GoDotFill className="bg-grisBtn rounded-full" />
          </div>
        </div>
        <div className="bg-bleuFonce rounded-b-2xl 2xl:p-6">
          <h1 className="text-center text-4xl">Ce que je fais</h1>
          <div className="flex justify-evenly py-4">
            <div className="">
              <MdOutlineScreenshotMonitor className="text-9xl block mx-auto text-bleuFonce bg-blanc rounded-full p-3" />
              <p className="text-center pb-5 font-semibold text-2xl mt-3">
                FRONT-END
              </p>
              <div className="border-b-2 border-blanc w-full px-4"></div>
            </div>
            <div className="">
              <HiOutlineServerStack className="text-9xl block mx-auto text-bleuFonce bg-blanc rounded-full p-3" />
              <p className="text-center pb-5 font-semibold text-2xl mt-3">
                BACK-END
              </p>
              <div className="border-b-2 border-blanc w-full px-4"></div>
            </div>
            <div className="">
              <AiOutlineShop className="text-9xl block mx-auto text-bleuFonce bg-blanc rounded-full p-3" />
              <p className="text-center pb-5 font-semibold text-2xl mt-3">
                CMS
              </p>
              <div className="border-b-2 border-blanc w-full px-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
