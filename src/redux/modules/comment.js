import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

// 액션
const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

// 액션크리에이터
const getComment = createAction(GET_COMMENT, (comment_list) => ({ comment_list }));
const addcomment = createAction(ADD_COMMENT, (comments) => ({comments}));

// 초기값 

const initialState = {
  list : []
}

// 미들웨어


//추가분//
export const getCommentDB = (postId) => {
  return async function(dispatch, getState, {history}) {
    const myToken = getCookie("Authorization",
    )
    await axios.get(`http://13.209.83.26/posts/${postId}`
    ,{headers : {"Authorization" : `${myToken}`}},
    )
    .then((res) => {
      console.log("res.data?",res.data)
      dispatch(getComment(res.data.body.commentDtoList));
    })
    .catch((err)=> {
      console.log(err);
    })
  }
}
//추가분//





export const __addcomment = (postid, comments) => {
  return function (dispatch, getState, {history}) {
    const myToken = getCookie("Authorization",)
    console.log(postid, comments)
    axios.post('http://13.209.83.26/comment',{
      postid : postid,
      comments : comments,
    },
    {headers : {'Authorization' : `${myToken}`}}
    )
    .then((response) => {
      console.log("리스폰",response)
      dispatch(addcomment(response.data));
    })
    .catch((err) => {
      console.log(err);
    })
  }
};


//리듀서 

export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        // draft.list = [];
        console.log("get_comment 리듀서 실행");
        // console.log("액션",action);
        draft.list = action.payload.comment_list;
        // console.log("드래프트",draft.list);

    }),
    [ADD_COMMENT]: (state, action) =>
        produce(state, (draft) => {
          console.log(state, action)
          draft.list.unshift(action.payload.comment);
        }),
        
  },
  initialState
);
