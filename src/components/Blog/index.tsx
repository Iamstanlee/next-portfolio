import { IBlog } from "../../utils/interfaces";
import * as S from "./styles";

type Props = {
  blog: IBlog;
};

const Blog: React.FC<Props> = ({ blog: { tag ,blogs} }) => {
  return (
    <S.Container>
      <S.HeaderText>
        Featured <S.ColoredText>{tag}</S.ColoredText>
      </S.HeaderText>

      <S.BlogContainer>
        {blogs.map((blog, index) => (
          <S.BlogWrapper key={index}>
            <S.Time>{blog.date}</S.Time>
            <S.HeaderText>
              {blog.title}
            </S.HeaderText>
            <S.BlogText>
              {blog.text}
            </S.BlogText>
            <S.ContinueBtn href={blog.link}>CONTINUE READING</S.ContinueBtn>
          </S.BlogWrapper>
        ))}
      </S.BlogContainer>
    </S.Container>
  );
};

export default Blog;
