import {
  AppStoreLogo,
  GooglePlayLogo,
  GithubLogo,
  Globe,
  LinkedinLogo,
  TwitterLogo,
  FilePdf,
} from "phosphor-react";
import { IApp } from "./interfaces";

const app: IApp = {
  title: "Stanley Akpama",
  desc: "Stanlee's Porfolio and Resume",
  hero: {
    tag: "hero",
    name: "Stanley Akpama",
    catchPhrase: "10x",
    tagLine: "Mobile And Frontend Developer",
  },
  about: {
    tag: "about",
    name: "Stanley",
    bio: "I'm a blah blah blah blah blah blah, I've 3 years of experience working with modern mobile and web technologies. I'm a builder at heart, I co-founded and lead product for <a  href='https://kivifood.app'>kivifood</a>, an on-demand food delivery startup. I've learnt so much from the community so i'm trying to give back in any way i can, I currently mentor at <a href='https://andela.com/learning-community/'>Andela learning community</a> and do open-source at <a href='https://github.com/iamstanlee'>Github</a>.",
    skills: [
      {
        title: "I'm proficient and actively working with",
        list: [
          {
            name: "language",
            data: ["javascript", "typescript", "dart"],
          },
          {
            name: "mobile",
            data: ["flutter", "react-native"],
          },
          {
            name: "frontend",
            data: ["reactjs", "nextjs", "recoiljs", "jotai", "redux"],
          },
          {
            name: "styling",
            data: ["CSS3", "styled-components", "chakra-ui", "tailwindcss"],
          },
          {
            name: "Testing/DevOps",
            data: [
              "Jest",
              "Mocha",
              "Flutter testing library",
              "Git",
              "Github Action",
              "Jenkins",
              "Circle CI",
            ],
          },
          {
            name: "Others",
            data: ["REST API", "graphql", "firebase", "GCP"],
          },
        ],
      },
    ],
  },
  contact: {
    tag: "contact",
    email: "hey@stanleee.me",
    urls: [
      {
        icon: <FilePdf size={22} />,
        url: "/assets/Resume_Stanley_Akpama.pdf",
        title: "Resume",
      },
      {
        icon: <LinkedinLogo size={22} />,
        url: "https://linkedin.com/in/stan0x01",
        title: "Linkedin",
      },
      {
        icon: <TwitterLogo size={22} />,
        url: "https://twitter.com/iamstanlee_",
        title: "Twitter",
      },
      {
        icon: <GithubLogo size={22} />,
        url: "https://github.com/iamstanlee",
        title: "Github",
      },
    ],
  },

  project: {
    tag: "project",
    projects: [
      {
        title: "kivifood",
        tags: ["mobile", "web"],
        desc: "Kivifood is a platform where customers can get the food they want from the comfort of their homes.",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https:kivifood.app",
            tooltip: "View the web",
          },
          {
            icon: <GooglePlayLogo size={24} />,
            url: "https://play.google.com/store/apps/details?id=com.kivifood.app",
            tooltip: "View on playstore",
          },
          {
            icon: <AppStoreLogo size={24} />,
            url: "https://apps.apple.com/us/app/kivi-food/id1588631598",
            tooltip: "View on appstore",
          },
        ],
      },
      {
        title: "Dokto",
        tags: ["web"],
        desc: "Dokto is a global Telehealth service that gives patients the opportunity to connect with licensed doctors, therapists, practitioners and specialists for on-demand, online medical consultations.",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://dokto.com",
            tooltip: "View the web",
          },
        ],
      },
      {
        title: "MV Player",
        tags: ["mobile"],
        desc: "MV Player is a video and audio media player application that support multiple file extensions. mp3, mp4, mpv etc.",
        links: [
          {
            icon: <GooglePlayLogo size={24} />,
            url: "https://play.google.com/store/apps/details?id=com.stanlee.mvplayer",
            tooltip: "View on playstore",
          },
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/Iamstanlee/MV-Player",
            tooltip: "View on github",
          },
        ],
      },

      {
        title: "lastprice",
        tags: ["web"],
        desc: "Lastprice is an eccomerce platform where vendors can sell products at discounted or slashed prices.",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://amazing-torvalds-02adef.netlify.app",
            tooltip: "View the web",
          },

          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/iamstanlee/last-price",
            tooltip: "View on github",
          },
        ],
      },
    ],
  },

  blog: {
    tag: "blog",
    blogs: [
      {
        title: "Leetcode #845 — Longest Mountain In Array",
        date: "DEC 24, 2021",
        text: "The leetcode #845 problem is a classical dynamic programming problem where we are asked to return the length of the longest mountain subarray from a given array. What is a mountain array? from the leetcode description, an array is a mountain array if it satisfies the following...",
        link: "https://medium.com/@iamstanlee/leetcode-845-longest-mountain-in-array-256202687979",
      },
    ],
  },
};

export default app;
