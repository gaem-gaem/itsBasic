import * as S from "./PostPageMain.style";
import { PostCardAdd } from "./postCard/PostCardAdd";
import { PostCardItem } from "./postCard/PostCardItem";
import { Outlet, Link } from "react-router-dom";
const PostPageMain = () => {
  return (
    <S.Layout>
      <Link to='edit'>
        <button className='post-delete-button'>삭제하기</button>
      </Link>
      <Outlet />
      <S.Container>
        <PostCardAdd />
        <PostCardItem />
      </S.Container>
    </S.Layout>
  );
};

export default PostPageMain;