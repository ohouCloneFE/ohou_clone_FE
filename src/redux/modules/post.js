import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

// action
const SET_POST = "SET_POST";
// main 페이지 액션
const SET_DETAILPOST = "SET_DETAILPOST";
// detail 페이지 액션
const GET_POST = "GET_POST";
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';

// action creators
const setPost = createAction(SET_POST, (post) => ({post}));
// main 페이지 액션크리에이터
const setDetailPost = createAction(SET_DETAILPOST, (post) => ({post}));
// detail 페이지 액션크리에이터
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, (post) => ({post}));

// init
const initialState = {
    list: [
      {
        category: null,
        des: "스프링1",
        id: 1,
        liketotal: 0,
        modifiedAt: "2022-04-20",
        roomimg: null,
        roomurl: "https://myspartabucket1.s3.ap-northeast-2.amazonaws.com/7f08d1cd-dac0-42a4-b71f-8faeff632d9a.png",
        scraptotal: 0,
        username: "한글1",
      }
    ],
};


// middleware


// main 페이지 포스트 불러오기 미들웨어
export const postLoadFB = () => {
  return function(dispatch, getState, {history}) {
    const myToken = getCookie("Authorization",
    )
    axios.get('http://13.209.83.26/'
    ,{headers : {"Authorization" : `${myToken}`}})
    .then((res) => {
      dispatch(setPost(res.data));
    })
    .catch((err)=> {
      console.log(err);
    })
  }
}

// detail 페이지 포스트 불러오기 미들웨어
export const detailPostLoadFB = (postId) => {
  return async function(dispatch, getState, {history}) {
    const myToken = getCookie("Authorization",
    )
    await axios.get(`http://13.209.83.26/posts/${postId}`
    ,{headers : {"Authorization" : `${myToken}`}})
    .then((res) => {
      console.log(res.data)
      dispatch(setDetailPost(res.data));
    })
    .catch((err)=> {
      console.log(err);
    })
  }
}

export const getPostDB = () => {
    return async function (dispatch, getState, { history }) {
      const token = localStorage.getItem('token');
      try {
        const { data } = await axios.get("http://13.209.83.26/");
        // console.log(data);
        dispatch(getPost(data));
      } catch (error) {
        alert("데이터를 불러오지 못했습니다");
        console.log(error);
      }
    };
  };


export const addPostDB = (post_id, filter, roomurl, des) => {
    const myToken = getCookie("Authorization",
    )
    return async function(dispatch, getState, {history}) {
      // const user = getState().user.user;
      const body = {
        roomurl : roomurl,
        des : des,
        // roomsize : filter.roomsize,
        // roomstyle : filter.roomstyle, 
        // space : filter.space,
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
            console.log(res.data)
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

// const addTodoFB = (preview, dec) => {
//   return function (dispatch, getState, {history}) {
//     const myToken = getCookie("Authorization")
//     console.log(myToken)
//     axios.post("http://13.209.83.26/post/new", {
//       preview : preview,
//       dec : dec
//     },
//     {headers: { 'Authorization' : `${myToken}`}}
//     )
//     .then(
//       dispatch(addPost({preview, dec}))
//     )
//     .catch(error => {
//       alert("돌아가")
//       console.log("어림없어", error)
//     })
//   }
// }
  
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
      // 메인페이지 post 불러오기 리듀서
      [SET_POST]: (state, action) =>
      produce(state, (draft) => {
      draft.list = action.payload.post;
      }),
      [SET_DETAILPOST]: (state, action) =>
      produce(state, (draft) => {
        console.log(state, action)
      draft.list = action.payload.post;
      }),
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
    // getPostDB,
    addPost,
    addPostDB,
};

export { actionCreators };