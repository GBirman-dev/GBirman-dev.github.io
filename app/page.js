import Header from "@/app/components/Header";
import Hero from "./components/Hero";
import DesignProcess from "./components/DesignProcess";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import OtherCases from "./components/OtherCases";
import Footer from "./components/Footer";
import UIUXProjects from "./components/Projects";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense>
        <main className="w-full overflow-hidden">
          <Header />
          <Hero />
          <DesignProcess />
          <UIUXProjects />
          <Testimonials />
          <OtherCases/>
          <Footer/>
        </main>
     </Suspense> 
    </>
  );
}
