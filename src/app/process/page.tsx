"use client";

import dynamic from "next/dynamic";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Scene = dynamic(() => import("@/components/scene"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center">
      <p>Loading...</p>
    </div>
  ),
});

export default function ProcessPage() {
  return (
    //mt -54px to offset mt-14 applied in layout for global nav height
    <main className=" min-h-screen h-dvh overflow-hidden     w-screen">
      <Scene />
    </main>
  );
}
