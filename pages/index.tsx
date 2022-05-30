import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeComponent from "../src/components/home";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="">
      <HomeComponent />
    </div>
  );
};

export default Home;
