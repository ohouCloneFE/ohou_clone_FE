import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

// 액션
const ADD_COMMENT = "ADD_COMMENT";

// 액션크리에이터

const addcomment = createAction(ADD_COMMENT, (comments) => ({comments}));

// 초기값 

const initialState = {
  list : []
}

// 미들웨어

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
      console.log(response)
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
    [ADD_COMMENT]: (state, action) =>
        produce(state, (draft) => {
          console.log(state, action)
          draft.list.unshift(action.payload.comment);
        }),
        
  },
  initialState
);
