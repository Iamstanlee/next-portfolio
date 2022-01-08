import { IHero } from "../../utils/interfaces";
import { scrollTo } from "../../utils/scroll";
import Button from "../Button";
import * as S from "./styles";

type HeroProps = {
  hero: IHero;
};

const Hero: React.FC<HeroProps> = ({ hero: { tagLine, catchPhrase } }) => {
  return (
    <S.Container>
      <S.HeaderText>
        <S.ColoredText>{catchPhrase}</S.ColoredText> {tagLine}
      </S.HeaderText>
      <S.SpiralImage src="/assets/images/spiral2.png" />
      <S.SpiralImage1 src="/assets/images/spiral1.png" />
      <S.StarfishImage src="/assets/images/starfish.png" />
      <Button isPrimary onClick={(_e) => scrollTo("about")}>
        Learn More
      </Button>
    </S.Container>
  );
};

export default Hero;
