import {
  AppStoreLogo,
  GooglePlayLogo,
  GithubLogo,
  Globe,
} from "phosphor-react";
import { IApp } from "./interfaces";

const app: IApp = {
  title: "Stanley Akpama",

  desc: "Stanlee's Porfolio and Resume",
  hero: {
    tag: "hero",
    name: "Stanley Akpama",
    catchPhrase: "Creative",
    tagLine: "Mobile And Frontend Developer",
  },
  about: {
    tag: "about",
    name: "Stanley",
    bio: "I'm a blah blah blah blah blah blah, I've 3+ years of experience working with modern mobile and web technologies (Skills outlined below), I watch movies and animes when i'm doing any tech stuff.\n I'm currently looking for a full-time opportunity/gig as a mobile/frontend developer.",
    email: "hey@stanleee.me",
    resumeUrl: "/assets/resume.pdf",
    skills: [
      {
        title: "Actively working with",
        list: [
          {
            name: "language",
            data: ["javascript", "typescript", "dart", "kotlin"],
          },
          {
            name: "frontend",
            data: ["reactjs", "nextjs"],
          },
          {
            name: "mobile",
            data: ["flutter", "react-native", "jetpack-compose"],
          },
          {
            name: "state-management",
            data: ["recoiljs", "jotai", "redux"],
          },
          {
            name: "styling",
            data: [
              "CSS3",
              "bootstrap",
              "styled-components",
              "chakra-ui",
              "tailwindcss",
            ],
          },
          {
            name: "database",
            data: ["sqlite", "firebase", "graphql"],
          },
        ],
      },
    ],
  },
  contact: {
    tag: "contact",
    email: "hey@stanleee.me",
    linkedin: "stan0x01",
    twitter: "iamstanlee_",
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
