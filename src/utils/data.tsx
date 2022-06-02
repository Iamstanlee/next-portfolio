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
    tagLine: "Mobile And Frontend Engineer",
  },
  about: {
    tag: "about",
    name: "Stanley",
    bio: `I like to call myself a Product Engineer :), 
    This is because of how I put my very core values(quality and attention to details) into building products, I'm currently a Mobile Engineer 
    at <a  href='https://ourpass.co'>Pass</a> 
    working on financial tools to revolutionize digital commerce in Africa.
    <br/>
    I'm a builder at heart, I co-founded and lead product for 
    <a  href='https://kivifood.app'>kivifood</a>,
    an on-demand food delivery startup. I write clean, maintainable and scalable code 
    because i believe in the quest to solve problems for the next billion users,
    I shouldn’t create one for developers like myself. 
    I occasionally mentor at <a href='https://andela.com/learning-community/'>
    Andela learning community</a>
    and do open-source at <a href='https://github.com/iamstanlee'>Github</a>.`,
    skills: [
      {
        title: "I'm proficient and actively working with",
        list: [
          {
            name: "language",
            data: ["dart", "javascript", "typescript"],
          },
          {
            name: "mobile",
            data: ["flutter", "react-native"],
          },
          {
            name: "frontend",
            data: ["reactjs", "nextjs", "recoiljs", "redux"],
          },
          {
            name: "styling",
            data: ["CSS3", "styled-components", "chakra-ui", "tailwindcss"],
          },
          {
            name: "Testing/DevOps",
            data: [
              "Flutter testing library",
              "Jest",
              "Git",
              "Github Action",
              "Codemagic",
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
        url: "/assets/Stanley_Akpama_Resume.pdf",
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
    tag: "projects",
    projects: [
      {
        title: "kivifood",
        tags: ["mobile", "web"],
        desc: "Kivifood is a platform where customers can get the food they want from the comfort of their homes.",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://kivifood.app",
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
        title: "Expense Bud",
        tags: ["mobile"],
        desc: "An app to keep of track your expenses and stay on top of your game with detailed insights 🚀",
        links: [
          {
            icon: <GooglePlayLogo size={24} />,
            url: "https://play.google.com/store/apps/details?id=com.app.expense_bud",
            tooltip: "View on playstore",
          },
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/Iamstanlee/expense_bud",
            tooltip: "View on github",
          },
        ],
      },
      {
        title: "kivifood Vendor",
        tags: ["mobile"],
        desc: "Vendor app for kivifood",
        links: [
          {
            icon: <GooglePlayLogo size={24} />,
            url: "https://play.google.com/store/apps/details?id=com.kivifood.vendor",
            tooltip: "View on playstore",
          },
          {
            icon: <AppStoreLogo size={24} />,
            url: "https://apps.apple.com/us/app/kivifood-vendor/id1588656247",
            tooltip: "View on appstore",
          },
        ],
      },
      {
        title: "Linkfy Text",
        tags: ["mobile"],
        desc: "A lightweight flutter package to linkify texts containing urls, emails and hashtags like twitter does",
        links: [
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/Iamstanlee/linkfy_text",
            tooltip: "View on github",
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
