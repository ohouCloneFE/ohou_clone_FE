import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';


import Header from "../components/Header";
import Post from '../components/Post';

import Data from '../components/data'

import { postLoadFB } from '../redux/modules/post';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";



const PostList = (props) => {

      
  const dispatch = useDispatch();


 
  const [filter, setFilter] = useState(["필터","원룸&오피스텔","아파트","빌라&연립"]);
  
  const [postItem, setPostItem] = useState(Data);

  const [postList, setPostList] = useState();

  // console.log(Post)

  useEffect(() => {
    console.log(postLoadFB())
    dispatch(postLoadFB());
  }, [dispatch]);

  const posts = useSelector(state => state.post.list);

  // console.log(posts)

  // const posts = useSelector(state => state.todo.todos);

  // console.log(posts)




  return (
    <div>
      <div style={{height : "80px"}}>
        <Header />
      </div>
      <div style={{marginTop : "15px", marginBottom:"30px"}}>
        <Select>
          {
            filter.map((e, i)=>{
              return(
                  <option>
                    {e}
                  </option>
              ) 
            })
          }
          <option>
            
          </option>
        </Select>
        <Select>
          {
            filter.map((e, i)=>{
              return(
                  <option>
                    {e}
                  </option>
              ) 
            })
          }
          <option>
            
          </option>
        </Select>
        <Select>
          {
            filter.map((e, i)=>{
              return(
                  <option>
                    {e}
                  </option>
              ) 
            })
          }
          <option>
            
          </option>
        </Select>
        <Select>
          {
            filter.map((e, i)=>{
              return(
                  <option>
                    {e}
                  </option>
              ) 
            })
          }
          <option>
            
          </option>
        </Select>
        
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"5%"}}>
        <PostListWrap>
            {
              posts.map((e, idx)=>{
                // console.log("포스트",postItem)
                console.log(posts[idx])
                return(
                  <Post key={idx} e={e}/>
                )
              })
            }
                
    
        </PostListWrap>
      </div>
      
        

    </div>
    
  );
};


const PostListWrap = styled.div`
  display: grid;
  position : relative;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-top : 50px
  width:300px;
  // grid-gap: 20px;
  gap: 20px;
  // margin : 50px;
  // padding : 5px;
`
const Select = styled.select`
  margin: 5px;
  width: 100px;
  height: 35px;
  border-radius : 5px;
  border : none;
  background: #f5f5f5;
  color: #757575;
  font-weight: 600;
`

export default PostList;