"use client";
import { useState } from "react";
import ContactUsButton from "./contactBtn";
import LogoIcon from "./logoIcon";
import { theme, routes } from "@/app/constants";
import Link from "next/link";
import path from "path";
import { AnimatePresence, animate, easeIn, motion } from "framer-motion";

const expandAnim = {
  initial: {
    height: "0px",
  },
  enter: {
    height: "auto",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    height: "0px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  return (
    <header>
      {/* absolute row  z-40*/}
      <div
        className="absolute left-0 right-0 top-2 z-40 pt-14"
        aria-hidden="true"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="flex items-center justify-between">
              <LogoIcon iconTheme={theme.dark} />

              <div className="flex items-center gap-x-8">
                <ContactUsButton buttonTheme={theme.dark} />
                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  aria-expanded={expanded}
                  aria-controls=":rf:"
                  className="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-950/10"
                  aria-label="Toggle navigation"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700"
                  >
                    <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2">
        <AnimatePresence>
          {expanded && (
            <div
              className={`
            relative z-50 overflow-hidden bg-neutral-950 `}
              //   style={{ height: `${expanded ? "auto" : "1px"}` }}
            >
              {/* absolute row when expanded light theme  z-50*/}

              <motion.div
                variants={expandAnim}
                initial="initial"
                animate="enter"
                exit="exit"
                className="bg-neutral-800"
                style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
              >
                {/* absolute row when expanded */}
                <div className="bg-neutral-950 pb-16 pt-14">
                  {/* outer container */}
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* inner container */}
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                      <div className="flex items-center justify-between">
                        <LogoIcon iconTheme={theme.light} />
                        <div className="flex items-center gap-x-8">
                          <ContactUsButton buttonTheme={theme.light} />
                          <button
                            type="button"
                            onClick={() => setExpanded(!expanded)}
                            aria-expanded={expanded}
                            aria-controls=":rf:"
                            className="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-800"
                            aria-label="Toggle navigation"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-6 w-6 fill-white group-hover:fill-neutral-200"
                            >
                              <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"></path>
                              <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* pages nav grid */}
                <nav className="text-white  bg-neutral-800 tracking-tight text-5xl">
                  {/* nav row #1 */}
                  <div className="mt-px bg-neutral-950">
                    {/* outer container */}
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                      {/* inner container */}
                      <div className="mx-auto max-w-2xl lg:max-w-none ">
                        {/* nav grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2  ">
                          {routes.slice(0, 2).map((el, i) => {
                            return (
                              <Link
                                onClick={() => setExpanded(!expanded)}
                                className="group relative isolate -mx-6 px-6 py-10 sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 even:border-t even:border-neutral-800 sm:even:border-t-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                                href={el["path"]}
                              >
                                {el["name"]}
                                <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* nav row #2 */}
                  <div className="mt-px bg-neutral-950">
                    {/* outer container */}
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                      {/* inner container */}
                      <div className="mx-auto max-w-2xl lg:max-w-none ">
                        {/* nav grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 ">
                          {routes.slice(2, 4).map((el, i) => {
                            return (
                              <Link
                                onClick={() => setExpanded(!expanded)}
                                className="group relative isolate -mx-6 px-6 py-10 sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 even:border-t even:border-neutral-800 sm:even:border-t-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                                href={el["path"]}
                              >
                                {el["name"]}
                                <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
