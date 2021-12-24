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
}

export interface IContact {
  tag?: string;
  email: string;
  linkedin: string;
  twitter: string;
}
export interface IApp {
  title: string;
  desc: string;
  hero: IHero;    
  about: IAbout;
  contact: IContact;
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
}
