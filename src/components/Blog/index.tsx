import { IBlog } from "../../utils/interfaces";
import * as S from "./styles";

type Props = {
  blog: IBlog;
};

const Blog: React.FC<Props> = ({ blog: { tag, blogs } }) => {
  return (
    <S.Container>
      <S.Span>
        I write about data structures and algorithms, frontend and mobile
        development on my free time, checkout some of my selected articles below
      </S.Span>
      <S.BlogContainer>
        {blogs.map((blog, index) => (
          <S.BlogWrapper key={index}>
            <S.Time>{blog.date}</S.Time>
            <S.HeaderText>{blog.title}</S.HeaderText>
            <S.BlogText>{blog.text}</S.BlogText>
            <S.ContinueBtn href={blog.link}>CONTINUE READING</S.ContinueBtn>
          </S.BlogWrapper>
        ))}
      </S.BlogContainer>
    </S.Container>
  );
};

export default Blog;
