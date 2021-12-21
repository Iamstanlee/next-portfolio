export interface IHero {
  name: string;
  catchPhrase: string;
  tagLine: string;
}

export interface IAbout {
  name: string;
  bio: string;
  email: string;
}

export interface IApp {
  title: string;
  desc: string;
  hero: IHero;
  about: IAbout;
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
