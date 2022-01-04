import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Project from "../components/Project";
import { useThemeContext } from "../context/theme_context";
import AppStyles from "../globalstyles";
import { IApp } from "../utils/interfaces";

type Props = {
  app: IApp;
};

const Home: NextPage<Props> = ({ app }: Props) => {
  const { mode: theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme!}>
      <AppStyles />
      <Head>
        <title>{app.title}</title>
        <meta name="description" content={app.desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero hero={app.hero} />
      <About about={app.about} />
      <Project project={app.project} />
      <Blog blog={app.blog} />
      <Contact contact={app.contact} />

      <Footer />
    </ThemeProvider>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const props: Props = { app: data };
//   return { props };
// };
export default Home;
