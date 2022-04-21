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
  const [filter1, setFilter1] = useState(["평수","10평 미만","10평대","20평대","30평대","40평대","50평 이상"]);
  const [filter2, setFilter2] = useState(["주거형태","원룸&오피스텔","아파트","빌라&연립","단독주택","사무공간","상업공간","기타"]);
  const [filter3, setFilter3] = useState(["스타일","모던","북유럽","빈티지","내추럴","프로방스&로맨틱","한국&아시아","유니크"]);
  const [filter4, setFilter4] = useState(["공간","원룸","거실","침실","주방","욕실","아이방","드레스룸","서재","베란다","사무공간","상업공간","가구&소품","현관","외간&기타"]);
  
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
            filter1.map((e, i)=>{
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
            filter2.map((e, i)=>{
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
            filter3.map((e, i)=>{
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
            filter4.map((e, i)=>{
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