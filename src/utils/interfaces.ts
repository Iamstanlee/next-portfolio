export interface IHero {
  tag?: string;
  name: string;
  catchPhrase: string;
  tagLine: string;
}

export interface IAbout {
  tag?: string;
  name: string;
  bio: string;
  email: string;
  resumeUrl: string;
  skills: Skills[];
}
export type Skills = {
  title: string;
  list: List[];
};

export type List = {
  name: string;
  data: string[];
};

export interface IContact {
  tag?: string;
  email: string;
  linkedin: string;
  twitter: string;
}

export type Link = {
  icon: React.ReactElement;
  url: string;
  tooltip: string;
};

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  links: Link[];
};

export interface IProject {
  tag?: string;
  projects: Project[];
}
export interface IBlog {
   tag:string;
   blogs:Blog[]
}
export type Blog = {
   title: string;
   date: string;
   text: string;
   link: string;
}

export interface IApp {
  title: string;
  desc: string;
  hero: IHero;
  about: IAbout;
  contact: IContact;
  project: IProject;
  blog: IBlog
}

export interface ITheme {
  bgColor: string;
  buttonColor?: string;
  buttonPrimaryColor?: string;
  buttonOutlineColor?: string;
  buttonHoverColor?: string;
  buttonHoverTextColor?: string;
  textColor?: string;
  highlightTextColor?: string;
  paragraphTextColor?: string;
  headerTextColor?: string;
  titleColor?: string;
  projectDescColor?: string;
  tooltipColor?: string;
  borderColor?: string;
}
