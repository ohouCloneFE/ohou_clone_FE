import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

// action
const SET_DETAILPOST = "SET_DETAILPOST";
// detail 페이지 액션
const GET_POST = "GET_POST";
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_PREVIEW = "SET_PREVIEW";
const UPLOAD_IMG = "UPLOAD_IMG";

// action creators
const setDetailPost = createAction(SET_DETAILPOST, (post) => ({post}));
// detail 페이지 액션크리에이터
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, (post) => ({post}));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));
const uploadImg = createAction(UPLOAD_IMG, (image) => ({ image }));

// init
const initialState = {
    list: [],
    preview: null,
};


// middleware


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
      const myToken = getCookie("Authorization",)
    axios.get('http://13.209.83.26/'
    ,{headers : {"Authorization" : `Bearer ${myToken}`}})
    .then((res) => {
      dispatch(getPost(res.data));
    })
    .catch((err)=> {
      console.log(err);
    })
  }
}


        // const { data } = await axios.get("http://13.209.83.26/");
        // {headers: { 'Authorization' : `Bearer ${myToken}`}}   
        // // console.log(data);
        // dispatch(getPost(data));



// const addPostDB = (post_id, filter, image, des) => {
//     const myToken = getCookie("Authorization")
//     console.log("토큰",myToken)
//     return async function(dispatch, getState, {history}) {
//       const user = getState().user.user;
//       const body = {
//         image : image,
//         des : des,
//       }
//       console.log(body)
//       await axios.post("http://13.209.83.26/post/new", 
//         body,{
//           headers: {
//             "Authorization": `Bearer ${myToken}`,
//           }
//         }      
//       )
//      .then(       
//           dispatch((res)=>{
//               dispatch(addPost(res.data.post))
//               console.log(res.data.post)
//               alert("추가완료")
//           }
//         )
//       )
//       .catch((err) => {
//         alert("실패")
//         console.log("댓글추가실패", err);
//       })
//     }
// }

const addPostDB = (payload) => {
  console.log("페이로드",payload);
  return async function (dispatch, getState, { history }) {
    const myToken = getCookie("Authorization",)
    console.log("파일",payload.file, "인포",payload.jsons);
    const formData = new FormData();
    formData.append("file", payload.file);
    formData.append(
      "jsons",
      new Blob([JSON.stringify(payload.jsons)], {
        type: "application/json",
      })
    );

    // const formFile = new FormData();
    // formFile.append("file", payload.file);
    
    // const formData = new FormData();
    // formData.append(
    //     "jsons",
    //     new Blob([JSON.stringify(payload.jsons)], {
    //       type: "application/json",
    //     })
    //   );



    console.log(payload.file);
    await axios({
      method: "post",
      url: "http://13.209.83.26/post/new",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${myToken}`,
      },
    })
      .then((response) => {
        window.alert("포스트 업로드 성공!!!");
        dispatch(uploadImg(response.data.roomurl));

        console.log(response.data.roomurl);
        setPreview(`${response.data.roomurl}`);
        window.location.href = "/";
      })
      .catch((err) => {
        window.alert("게시물을 다 넣어주세요!");
      });
  };
};
  
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
        [SET_PREVIEW]: (state, action) =>
        produce(state, (draft) => {
          draft.preview = action.payload.preview;
        }),
        [UPLOAD_IMG]: (state, action) =>
        produce(state, (draft) => {
          draft.roomurl = action.payload.roomurlr;
          draft.uploading = false;
          console.log(state, action);
        }),
    },
    initialState
);


  const actionCreators = {
    getPost,
    getPostDB,
    addPost,
    addPostDB,
    setPreview,

};

export { actionCreators };