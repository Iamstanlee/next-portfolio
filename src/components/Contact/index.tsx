import { FC } from "react";
import { IContact } from "../../utils/interfaces";
import Button from "../Button";
import * as S from "./styles";

type Props = {
  contact: IContact;
};

const Contact: React.FC<Props> = ({
  contact: { tag, email, linkedin, twitter },
}) => {
  return (
    <S.Container id="tag">
      <S.HeaderText>
        Say <S.ColoredText>Hi</S.ColoredText>
      </S.HeaderText>
      <S.SpanText>
        Don&#39;t be a stranger :), I&#39;m looking to connect and meet new
        people in tech, If you&#39;re a developer or designer, hit me up!
      </S.SpanText>
      <S.SpaceY space="24px" />

      <S.ButtonWrapper>
        <Button>
          <LinkedInIcon />
          LinkedIn
        </Button>
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <Button>
          <TwitterIcon />
          Twitter
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

const TwitterIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <path
      d="M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></path>
  </svg>
);

const LinkedInIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <rect
      x="36"
      y="36"
      width="184"
      height="184"
      rx="8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></rect>
    <line
      x1="120"
      y1="112"
      x2="120"
      y2="176"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></line>
    <line
      x1="88"
      y1="112"
      x2="88"
      y2="176"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></line>
    <path
      d="M120,140a28,28,0,0,1,56,0v36"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></path>
    <circle cx="88" cy="80" r="12"></circle>
  </svg>
);
export default Contact;
