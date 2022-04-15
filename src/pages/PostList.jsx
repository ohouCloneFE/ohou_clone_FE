import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import Header from "../components/Header";
import Post from '../components/Post';

const PostList = () => {
 
  const [filter, setFilter] = useState(["필터","원룸&오피스텔","아파트","빌라&연립"]);
 
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
      <PostListWrap>
       <Post />
       <Post />
       <Post />
       <Post />
       <Post />
       <Post />
       <Post />
       <Post />
       <Post />
       <Post />
       <Post />
       <Post />
       <Post />
      </PostListWrap>
        

    </div>
    
  );
};


const PostListWrap = styled.div`
  display: grid;
  position : relative;
  grid-template-columns: 0.5fr 0.5fr 0.5fr;
  padding-top : 50px
  width:300px;
  // grid-gap: 20px;
  // gap: 20px;
  // margin-top : 50px;
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