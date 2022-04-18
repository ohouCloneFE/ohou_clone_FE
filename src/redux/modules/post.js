import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

// action
const GET_POST = "GET_POST";
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';

// action creators
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, (post) => ({post}));

// init
const initialState = {
    list: [],
};


// middleware
const getPostDB = () => {
    return async function (dispatch, getState, { history }) {
      // const token = localStorage.getItem('token');
      try {
        const { data } = await axios.get("http://13.209.83.26/");
        // console.log(data);
        dispatch(getPost(data));
      } catch (error) {
        alert("데이터를 불러오지 못했습니다");
        // console.log(error);
      }
    };
  };


const addPostDB = (post_id, filter, image, desc) => {
    const myToken = getCookie("Authorization")
    console.log("토큰",myToken)
    return async function(dispatch, getState, {history}) {
      const user = getState().user.user;
      const body = {
        image : image,
        roomsize : filter.roomsize,
        roomstyle : filter.roomstyle, 
        space : filter.space,
        desc : desc,
      }
      console.log(body)
      await axios.post("http://13.209.83.26/post/new", 
        body,{
          headers: {
            "Authorization": `Bearer ${myToken}`,
          }
        }      
      )
     .then(       
          dispatch((res)=>{
              dispatch(addPost(res.data.post))
              console.log(res.data.post)
              alert("추가완료")
          }
        )
      )
      .catch((err) => {
        alert("실패")
        console.log("댓글추가실패", err);
      })
    }
}
  
export const deletePostDB = (post_id) => {
    return function (dispatch, getState, {history}) {
      if(!post_id) {
        window.alert("포스트 아이디가 없습니다!")
      }
      const myToken = getCookie("Authorization");
      axios({
        method: "delete",
        url: `http://13.209.83.26/posts/${post_id}`,
        data: {
            post_id: post_id,
        },
        headers: {
          Authorization: `Bearer ${myToken}`
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(deletePost(post_id));
      })
      .catch((err) => {
        console.log("서버에러: ", err)
      })
    }
  }

// reducer
export default handleActions(
    {
      [GET_POST]: (state, action) =>
        produce(state, (draft) => {
          // console.log(state);
          // console.log(action);
          draft.list = action.payload.post_list;
          // console.log(draft.list);
  
        }),
        [ADD_POST]: (state, action) =>
        produce(state, (draft) => {
          draft.list.unshift(action.payload.post);
        }),
        [DELETE_POST]: (state, action) =>
        produce(state, (draft) => {
            console.log(action.payload.planId)
            draft.list.content = draft.list.content.filter((p) =>  p.post_id !== action.payload.post_id);
      }),
    },
    initialState
);


  const actionCreators = {
    getPost,
    getPostDB,
    addPost,
    addPostDB,
};

export { actionCreators };