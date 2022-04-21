import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Post from '../components/Post';
import { actionCreators as postAcions } from "../redux/modules/post";
import Data from '../components/data'

const PostList = (props) => {
 
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(["필터","원룸&오피스텔","아파트","빌라&연립"]);
  
  // const [postItem, setPostItem] = useState(Data);

  React.useEffect(() => {
    dispatch(postAcions.getPostDB());
  },[]);



  const postItem = useSelector((state) => state.post.list);
  // console.log("겟성공하나?",postItem)

  if(postItem.length === 0){
    console.log("포스트아이템",postItem.length)
    return(null)
  }

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
              postItem.map((e, idx)=>{
                // console.log("포스트",postItem)
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