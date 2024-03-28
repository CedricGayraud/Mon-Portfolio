import React, { useState } from "react";
import { MdClose, MdOutlineScreenshotMonitor } from "react-icons/md";
import { GoDash, GoDotFill } from "react-icons/go";
import { HiOutlineServerStack } from "react-icons/hi2";
import { AiOutlineShop } from "react-icons/ai";
import FullScreen from "../data/fullScreen";
import {
  FaReact,
  FaLaravel,
  FaPhp,
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiPrestashop,
  SiPostman,
} from "react-icons/si";

function About() {
  const [show, setShow] = useState(true);
  const [isReduce, setIsReduce] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleClose = () => {
    setShow(false);
  };
  const handleReduce = () => {
    setIsReduce(false);
    setIsOpen(true);
    setIsExpanded(false);
  };
  const handleOpen = () => {
    setIsReduce(true);
    setIsOpen(false);
    setIsExpanded(true);
  };
  return (
    <section id="about" className="pt-72">
      <div className="mb-32">
        <h1 className="2xl:text-6xl xl:text-4xl text-bleu uppercase">
          Cédric Gayraud
        </h1>
        <h2 className="2xl:text-5xl xl:text-2xl text-bleuFonce 2xl:mt-8">
          Développeur full-stack - Intégrateur web
        </h2>
        <p className="text-bleu 2xl:mt-8 w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {show && (
        <div className="rounded-2xl text-blanc">
          <div className="bg-grisFonce rounded-t-2xl h-10 flex gap-2 items-center">
            {isReduce && (
              <>
                <div className="bg-rouge rounded-full ml-3">
                  <MdClose
                    className="cursor-pointer text-transparent hover:text-grisFonce font-black text-lg"
                    onClick={handleClose}
                  />
                </div>
                <div className="bg-jaune rounded-full">
                  <GoDash
                    className="cursor-pointer text-transparent hover:text-grisFonce font-black text-lg"
                    onClick={handleReduce}
                  />
                </div>
                <div className="cursor-pointer text-transparent hover:text-grisFonce font-black text-lg">
                  <GoDotFill className="bg-grisBtn rounded-full" />
                </div>
              </>
            )}
            {isOpen && (
              <>
                <div className="bg-rouge rounded-full ml-3">
                  <MdClose
                    className="cursor-pointer text-transparent hover:text-grisFonce font-black text-lg"
                    onClick={handleClose}
                  />
                </div>
                <div className="bg-grisBtn rounded-full">
                  <GoDash className="cursor-pointer text-transparent hover:text-grisFonce font-black text-lg" />
                </div>
                <div
                  className="cursor-pointer bg-vert rounded-full"
                  onClick={handleOpen}
                >
                  <FullScreen />
                </div>
              </>
            )}
          </div>
          <div
            className={`bg-bleuFonce rounded-b-2xl ${
              isExpanded ? "2xl:py-6" : ""
            } ${isOpen ? "xl:py-2" : ""}`}
          >
            {isExpanded && (
              <>
                <h1 className="text-center text-5xl">Ce que je fais</h1>
                <div className="flex justify-evenly py-12">
                  <div className="w-1/4 py-5 group hover:bg-bgSite rounded-md transition duration-200">
                    <MdOutlineScreenshotMonitor className="text-9xl block mx-auto text-bleuFonce bg-blanc rounded-full p-3 group-hover:text-bgSite group-hover:bg-bleuFonce" />
                    <p className="text-center pb-5 font-semibold text-2xl mt-3 group-hover:text-bleuFonce">
                      FRONT-END
                    </p>
                    <div className="border-b-2 border-blanc w-1/2 px-4 mx-auto group-hover:border-bleuFonce"></div>
                    <p className="text-center py-4 px-6 group-hover:text-bleuFonce">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                  </div>
                  <div className="border h-auto"></div>
                  <div className="w-1/4 py-5 group hover:bg-bgSite rounded-md transition duration-200">
                    <HiOutlineServerStack className="text-9xl block mx-auto text-bleuFonce bg-blanc rounded-full p-3 group-hover:text-bgSite group-hover:bg-bleuFonce" />
                    <p className="text-center pb-5 font-semibold text-2xl mt-3 group-hover:text-bleuFonce">
                      BACK-END
                    </p>
                    <div className="border-b-2 border-blanc w-1/2 px-4 mx-auto group-hover:border-bleuFonce"></div>
                    <p className="text-center py-4 px-6 group-hover:text-bleuFonce">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                  </div>
                  <div className="border h-auto"></div>
                  <div className="w-1/4 py-5 group hover:bg-bgSite rounded-md transition duration-200">
                    <AiOutlineShop className="text-9xl block mx-auto text-bleuFonce bg-blanc rounded-full p-3 group-hover:text-bgSite group-hover:bg-bleuFonce" />
                    <p className="text-center pb-5 font-semibold text-2xl mt-3 group-hover:text-bleuFonce">
                      CMS
                    </p>
                    <div className="border-b-2 border-blanc w-1/2 px-4 mx-auto group-hover:border-bleuFonce"></div>
                    <p className="text-center py-4 px-6 group-hover:text-bleuFonce">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                  </div>
                </div>
              </>
            )}
            {isOpen && (
              <div className="flex justify-evenly">
                <div className="flex items-center space-x-2">
                  <FaHtml5 className="text-7xl text-[#E34C26] transition-transform transform hover:scale-125" />
                  <FaCss3Alt className="text-7xl text-[#2965F1] transition-transform transform hover:scale-125" />
                  <FaReact className="text-7xl text-[#61dbfb] transition-transform transform hover:scale-125" />
                  <SiTailwindcss className="text-7xl text-[#06b6d4] transition-transform transform hover:scale-125" />
                </div>
                <div className="border h-auto bg-grisFonce"></div>
                <div className="flex items-center space-x-2">
                  <FaLaravel className="text-7xl text-[#fb503b] transition-transform transform hover:scale-125" />
                  <FaPhp className="text-7xl text-[#8993be] transition-transform transform hover:scale-125" />
                  <SiMysql className="text-7xl text-[#F29111] transition-transform transform hover:scale-125" />
                </div>
                <div className="border h-auto bg-grisFonce"></div>
                <div className="flex items-center space-x-2">
                  <SiPrestashop className="text-7xl text-[#25B9D7] transition-transform transform hover:scale-125" />
                  <FaWordpress className="text-7xl text-[#21759B] transition-transform transform hover:scale-125" />
                </div>
                <div className="border h-auto bg-grisFonce"></div>
                <div className="flex items-center space-x-2">
                  <FaGithub className="text-7xl text-[#e8eaea] transition-transform transform hover:scale-125" />
                  <SiPostman className="text-7xl text-[#FF6C37] transition-transform transform hover:scale-125" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
