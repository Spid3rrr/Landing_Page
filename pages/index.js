import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

import { motion } from "framer-motion";
//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>4A4B - Future Technology Made Today</title>
        <meta
          name="description"
          content="4A4B is a sample landing page made to highlight your startup"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SectionTitle pretitle="Our services" title=" Why choose us ?">
          Experience a new level of efficiency, accuracy, and accessibility.
          Whether you're a business looking to streamline your operations or an
          individual seeking a smarter, more connected lifestyle, we got you
          covered.
        </SectionTitle>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Benefits data={benefitOne} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Benefits imgPos="right" data={benefitTwo} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SectionTitle
          pretitle="Demonstration"
          title="Learn how we can help you grow"
        >
          You can check out this video from one of our clients highlighting the
          growth he has made and how our products eased his way to success
        </SectionTitle>
        <Video />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SectionTitle
          pretitle="Testimonials"
          title="Here's what our customers said"
        >
          Here is some feedback from our customers !
        </SectionTitle>
        <Testimonials />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          These are some frequently asked questions from our customers
        </SectionTitle>
        <Faq />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Cta />
        <Footer />
      </motion.div>
      <PopupWidget />
    </>
  );
}
