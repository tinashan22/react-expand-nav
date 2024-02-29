"use client";
import { useState } from "react";
import ContactUsButton from "./contactBtn";
import LogoIcon from "./logoIcon";
import { ButtonTheme, routes } from "@/app/constants";
import Link from "next/link";
import path from "path";

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
              <LogoIcon />

              <div className="flex items-center gap-x-8">
                <ContactUsButton theme={ButtonTheme.dark} />
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
      <div
        className="relative z-50 overflow-hidden bg-neutral-950 pt-2 "
        style={{ height: "auto" }}
      >
        {/* absolute row when expanded light theme  z-50*/}
        {expanded && (
          <div
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
                    <LogoIcon />
                    <div className="flex items-center gap-x-8">
                      <ContactUsButton theme={ButtonTheme.light} />
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
            <nav className="mt-px text-white bg-neutral-950">
              {/* outer container */}
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* inner container */}
                <div className="mx-auto max-w-2xl lg:max-w-none">
                  {/* nav grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 ">
                    {routes.map((el, i) => {
                      return (
                        <Link
                          className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                          href={el["path"]}
                        >
                          <span>{el["name"]}</span>
                          <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2"></div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
