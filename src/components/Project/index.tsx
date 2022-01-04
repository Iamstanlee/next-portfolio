import { ArrowUpRight } from "phosphor-react";
import { IProject } from "../../utils/interfaces";
import Tooltip from "../Tooltip";
import * as S from "./styles";

type ProjectProps = {
  project: IProject;
};

const Project: React.FC<ProjectProps> = ({ project: { tag, projects } }) => {
  return (
    <S.Container>
      <S.HeaderText>
        Featured <S.ColoredText>{tag}</S.ColoredText>
      </S.HeaderText>
      <S.Projects>
        {projects.map((item, i) => (
          <S.Project key={i}>
            <S.Spaced height="14px" />
            <S.TitleText>
              {item.title}
              <ArrowUpRight size={32} />
            </S.TitleText>
            <S.TagRow>
              {item.tags.map((tag, i) => (
                <S.Tag key={[tag, i].join(".")}>{tag}</S.Tag>
              ))}
            </S.TagRow>
            <S.DescText>{item.desc}</S.DescText>
            <S.Icons>
              {item.links.map((link, i) => (
                <S.IconText key={[link.url, i].join(".")} href={link.url}>
                  <Tooltip text={link.tooltip}>{link.icon}</Tooltip>
                </S.IconText>
              ))}
            </S.Icons>
          </S.Project>
        ))}
      </S.Projects>
    </S.Container>
  );
};

export default Project;
