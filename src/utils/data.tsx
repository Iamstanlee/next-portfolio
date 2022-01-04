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
            name: "lang",
            data: ["javascript, ", "typescript, ", "dart."],
          },
          {
            name: "frontend",
            data: ["react, ", "next,", "vue."],
          },
          {
            name: "mobile",
            data: ["flutter, ", "kotlin", "react-native."],
          },
          {
            name: "state-management",
            data: ["redux, ", "vuex."],
          },
          {
            name: "data-fetching",
            data: ["axios, ", "fetch-api."],
          },
          {
            name: "styling",
            data: ["bootstrap, ", "CSS3, ", "styled-components, ", "tailwind."],
          },
        ],
      },
      {
        title: "Previously working with",
        list: [
          {
            name: "state-management",
            data: ["redux, ", "vuex."],
          },
          {
            name: "data-fetching",
            data: ["axios, ", "fetch-api."],
          },
          {
            name: "styling",
            data: ["bootstrap, ", "CSS3, ", "styled-components, ", "tailwind."],
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
        title:
          " Google AMP is dead! AMP pages no longer get preferential treatment in searches",
        date: "MAY 18, 2021",
        text: "Google is rolling out a significant change as a part of their page experience ranking algotithm in June 2021.",
        link: "#",
      },
      {
        title:
          " Google AMP is dead! AMP pages no longer get preferential treatment in searches",
        date: "MAY 18, 2021",
        text: "Google is rolling out a significant change as a part of their page experience ranking algotithm in June 2021.",
        link: "#",
      },
    ],
  },
};

export default app;
