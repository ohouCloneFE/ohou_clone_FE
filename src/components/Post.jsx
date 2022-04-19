import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Input, Button, Image, Text } from "../elements/Index";
import { history } from "../redux/configureStore";
import { actionCreators } from '../redux/modules/post';
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from '../shared/Cookie';

import Data from "./data"


const Post = (props) => {
    
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);
    // const post_list = props
    console.log("겟성공?",post_list)

    // const { post_list } = props
    // console.log("포스트아이템props",props)
    // const [postItem, setPostItem] = useState(Data);
    // console.log("nick",props[0].nickname)
    // console.log({post_list})
    
    const user = getCookie("userId")
    console.log("유저",user)
    // const [user, setUser] = useState("test3")
    const [is_like, setIsLike] = useState(true)
    const [is_scrap, setIsScrap] = useState(false)

    // React.useEffect(() => {
    //     dispatch(actionCreators.getPostDB());
    //   }, []);

    return (
        <>  

            <div style={{width : "260px"}}> 
                <div style={{width : "100%", maxWidth:"300px", justifyContent:"center", alignItem:"center", padding:"3px"}}>
                    <Grid is_flex width="auto">
                        <div style={{display:"flex",textAlign:"start", justifyContent:"center"}}>
                            <Image shape="circle" src={props.e.profile} />
                            <div>
                                <Text bold size='17px' padding="7px">
                                    {props.e.username}
                                    {
                                        (user == props.e.username)
                                        ? <span><Btn style={{backgroundColor:"transparent", border:"none" }} onClick={()=>{history.replace("/postedit/"+props.e.id)}}> · 수정</Btn>
                                          <Btn style={{backgroundColor:"transparent", border:"none"}}>삭제</Btn></span>
                                          :null
                                    }                                 
                                </Text>
                            </div>
                            

                        </div>             
                    </Grid>
                    <Grid width="200px">
                    {/* {props.is_me && (<Button width="auto" padding="4px" margin="4px" _onClick={() => {history.push(`/write/${props.id}`)}}>수정</Button>)} */}
                    {/* <Text>{props.insert_dt}</Text> */}
                    </Grid>     
                    <Grid>
                        <div onClick={()=>{history.replace("/detail/"+props.e.id)}} >
                            <PostImg shape="rectangle" src={props.e.roomurl} />
                        </div>
                        
                    </Grid>
                    <div style={{display: 'flex', justifyContent:"space-around", paddingTop:"5%"}}>
                        <button style={{border:"none", backgroundColor:"transparent"}} onClick={()=>{
                            return(
                                setIsLike(!is_like)
                            )
                        }}>
                        {
                            (is_like === true)
                            ? <svg className="icon icon--stroke" aria-label="좋아요" width="24" height="24" fill="#35c5f0" stroke="currentColor" stroke-width="0.1" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M23.22 7.95c.4 4.94-2.92 9.71-10.92 13.85a.47.47 0 0 1-.42 0C3.88 17.66.56 12.9.96 7.93 1.54 2.48 8.28.3 12.1 4.7c3.8-4.4 10.55-2.22 11.13 3.25z"></path></svg>
                            : <svg className="icon icon--stroke" aria-label="좋아요" width="24" height="24" fill="#ffff" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M23.22 7.95c.4 4.94-2.92 9.71-10.92 13.85a.47.47 0 0 1-.42 0C3.88 17.66.56 12.9.96 7.93 1.54 2.48 8.28.3 12.1 4.7c3.8-4.4 10.55-2.22 11.13 3.25z"></path></svg>
                        }
                        </button>
                        <button style={{border:"none", backgroundColor:"transparent"}} onClick={()=>{
                            return(
                                setIsScrap(!is_scrap)
                            )
                        }}> 
                        {
                            (is_scrap === true)
                            ?<svg className="icon icon--stroke" aria-label="스크랩" width="24" height="24" fill="#35c5f0" stroke="currentColor" stroke-width="0.1" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M11.53 18.54l-8.06 4.31A1 1 0 0 1 2 21.97V3.5A1.5 1.5 0 0 1 3.5 2h17A1.5 1.5 0 0 1 22 3.5v18.47a1 1 0 0 1-1.47.88l-8.06-4.31a1 1 0 0 0-.94 0z"></path></svg>
                            :<svg className="icon icon--stroke" aria-label="스크랩" width="24" height="24" fill="#ffff" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M11.53 18.54l-8.06 4.31A1 1 0 0 1 2 21.97V3.5A1.5 1.5 0 0 1 3.5 2h17A1.5 1.5 0 0 1 22 3.5v18.47a1 1 0 0 1-1.47.88l-8.06-4.31a1 1 0 0 0-.94 0z"></path></svg>

                        }
                        </button>
                        <button style={{border:"none", backgroundColor:"transparent"}} onClick={()=>{history.replace("/detail/"+props.e.id)}}>
                            <svg class="icon" aria-label="댓글 달기" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path fill="currentColor" fill-rule="nonzero" d="M13.665 18.434l.53-.066C19.69 17.679 23 14.348 23 10c0-4.942-4.235-8.5-11-8.5S1 5.058 1 10c0 4.348 3.31 7.68 8.804 8.368l.531.066L12 21.764l1.665-3.33zm-3.985.926C3.493 18.585 0 14.69 0 10 0 4.753 4.373.5 12 .5S24 4.753 24 10c0 4.69-3.493 8.585-9.68 9.36l-1.647 3.293c-.374.75-.974.744-1.346 0L9.68 19.36z"></path></svg>
                        </button>
                    </div>
                    <Grid padding="16px 0 0 0">
                        <Text size='15px' bold>{props.e.des}</Text>              
                    </Grid>
                </div>
            </div>           
        </>    
    );
};

// Post.defaultProps = {
    
//     idid : "0",
//     profile : "https://t1.daumcdn.net/cfile/tistory/255BD13D548B6C161B",
//     roomImage : "https://t1.daumcdn.net/cfile/tistory/117F8F234C5D007D58",
//     nickname : "test1",
//     desc : "도배했어요",
// };


const PostImg = styled.div`
    position: relative;
    height : 255px;
    width: 100%;
    // padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    // object-fit : cover;
    border-radius : 5px;
    _onclick : ()={}
    // &:hover{
    //     position: relative;
    //     transform: scale(1.2);
    //     -webkit-transform: scale(1.2);
    //     -moz-transform: scale(1.2);
    //     -ms-transform: scale(1.2);
    //     -o-transform: scale(1.2);
    //     overflow:hidden;
    // }
`;

const Btn = styled.button`
    background-color : transparent;
    border : none;
    font-weight : bold;
    &:hover{
        color : #35c5f0;
        font-weight : bold;
    }
`

export default Post;