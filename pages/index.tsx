import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeSection from "../src/components/home";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="">
      <HomeSection />
    </div>
  );
};

export default Home;
