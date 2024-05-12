import Hero from "@/components/Hero";
import NAvbar from "@/components/NAvbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <NAvbar />
      <Hero />
    </div>
  );
}
