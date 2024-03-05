"use client";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Lenis from "@studio-freight/lenis";

export default function Footer() {
  const container = useRef(null);
  const paths = useRef<(SVGTextPathElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        path?.setAttribute("startOffset", -40 + i * 40 + e * 30 + "%");
      });
    });
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={container} className="bg-white">
      <svg className="w-full mb-40" viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          d="m 0,88.5
             c 61.37,0,61.5 -58,126.5 -58,58,0,51,58,123,58"
        />

        <text className="text-[5px]" style={{ fill: "blue" }}>
          {[...Array(3)].map((_, i) => {
            return (
              // binding <textPath> with "href" to the id of the <path> maps the text to the svg path
              <textPath
                ref={(ref) => (paths.current[i] = ref)}
                key={i}
                href="#curve"
              >
                a little bit of sunshine goes a long way.
              </textPath>
            );
          })}
        </text>
      </svg>

      <Logos scrollProgress={scrollYProgress} />
    </div>
  );
}

const Logos = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const y = useTransform(scrollProgress, [0, 1], [-600, 1]);

  return (
    <div className="h-[250px] overflow-hidden">
      <motion.div
        style={{ y }}
        className="h-full bg-black flex gap-5 sm:gap-10 items-center justify-center"
      >
        {[...Array(5)].map((_, i) => {
          return (
            <div
              className="h-[80px] w-[80px]  flex items-center justify-center"
              key={i}
            >
              <div className=" h-8 w-8 sm:h-12 sm:w-12 rounded-[50%]  bg-white">
                {" "}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
