import * as S from "./index.style";
import PostPageMain from "./components/PostPageMain";
import HeaderLogoBox from "./components/HeaderLogoBox";
import HeaderFeatureBox from "./components/HeaderFeatureBox";

const PostPage = () => {
  console.log(window.location.href.slice(0, 4));
  return (
    <S.Layout>
      <HeaderLogoBox />
      <HeaderFeatureBox />
      <PostPageMain />
    </S.Layout>
  );
};

export default PostPage;