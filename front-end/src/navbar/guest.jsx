import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FrontIndex from "../components/front";
import { Disclosure } from "@headlessui/react";
import { MdClose, MdMenu } from "react-icons/md";
import tabs from "../data/navbar";
import Login from "../components/login";

function Guest() {
  const [currentSection, setCurrentSection] = useState("root");

  const tabsDesktop = tabs.map((tab) => {
    return (
      <div key={tab.id}>
        <a
          href={tab.link}
          className={`${tab.desktopCss} ${
            currentSection === tab.id ? "bg-gray-900 text-white" : ""
          }`}
        >
          {tab.label}
        </a>
      </div>
    );
  });

  const tabsMobile = tabs.map((tab) => {
    return (
      <div key={tab.id}>
        <Disclosure.Button
          href={tab.link}
          className={`${tab.mobileCss} ${
            currentSection === tab.id ? "bg-gray-900 text-white" : ""
          }`}
        >
          {tab.label}
        </Disclosure.Button>
      </div>
    );
  });

  const handleScroll = () => {
    const sections = ["about", "exp", "projects", "contact"];

    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      }
      return false;
    });

    setCurrentSection(currentSection || ""); // Mettre à jour l'état
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Disclosure as="nav" className="fixed w-full">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-fit bg-gray-800 rounded-full mt-4">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">{tabsDesktop}</div>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                    </button>
                  </div>
                </div>

                {/* Mobile menu  */}

                <div className="-mr-2 flex sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <MdClose className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MdMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                {tabsMobile}
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4"></div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div>
        <Routes>
          <Route path="/" element={<FrontIndex />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default Guest;
