import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./Components/Banner/Banner";
import Premium from "./Components/Premium/Premium";
import Testimonial from "./Components/Testimonial/Testimonial";
import Features from "./Components/Features/Features";
import ReelSection from "./Components/ReelSection/reelSection";

export default function Home() {
  return (
   <>
    <Banner/>
    <ReelSection/>
    <Premium/>
   <Testimonial/>
   <Features/>
   </>
  );
}
