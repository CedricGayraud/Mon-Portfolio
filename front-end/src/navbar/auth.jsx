import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import FrontIndex from "../components/front";
import AdminIndex from "../components/admin/adminIndex";
import { Disclosure } from "@headlessui/react";
import { MdClose, MdMenu } from "react-icons/md";
import AuthUser from "../components/AuthUser";
import tabs from "../data/navbar";

function Auth() {
  const { token, logout } = AuthUser();
  const { http } = AuthUser();

  const [userdetail, setUserdetail] = useState("");
  useEffect(() => {
    fetchUserDetail();
  });

  const fetchUserDetail = () => {
    http.post("/me").then((res) => {
      setUserdetail(res.data);
    });
  };

  function renderElement() {
    if (userdetail) {
      return (
        <div className="text-white flex">
          <p className="px-2">{userdetail.name}</p>
          <p>{userdetail.email}</p>
        </div>
      );
    } else {
      return <p className="text-white">Non connecté</p>;
    }
  }

  const tabsDesktop = tabs.map((tab) => {
    return (
      <div key={tab.id}>
        <a href={tab.link} className={tab.desktopCss}>
          {tab.label}
        </a>
      </div>
    );
  });

  const tabsMobile = tabs.map((tab) => {
    return (
      <div key={tab.id}>
        <Disclosure.Button href={tab.link} className={tab.mobileCss}>
          {tab.label}
        </Disclosure.Button>
      </div>
    );
  });

  const logoutUser = () => {
    if (token !== undefined) {
      logout();
    }
  };
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex justify-start">
                    <a href="/" className="text-white px-2">
                      Accueil
                    </a>
                    <a href="/admin" className="text-white">
                      Admin
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">{tabsDesktop}</div>
                  </div>
                  {renderElement()}
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                    </button>
                    <div>
                      <span
                        role="button"
                        className="text-white"
                        onClick={logoutUser}
                      >
                        Logout
                      </span>
                    </div>
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
          <Route path="/admin" element={<AdminIndex />} />
        </Routes>
      </div>
    </>
  );
}

export default Auth;
