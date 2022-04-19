import React, { useState } from 'react';
import styled from 'styled-components';
import photo from '../asset/photoUpload.png'
import "./Header.css"
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Grid, Input, Button, Image, Text } from "../elements/Index";
import { actionCreators } from "../redux/modules/post";
import { getCookie } from '../shared/Cookie';
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

import Header from './Header';


const PostUpload = (props) => {
    
    const dispatch = useDispatch();
    const is_login = getCookie("is_login")
    // const [preview, setPreview] = useState();
    const preview = useSelector((state) => state.post.preview);
    const fileInput = React.useRef();
    console.log("프리뷰",preview)


    const [roomsize, setRoomsize] = React.useState(null);
    const [residence, setResidence] = React.useState(null);
    const [roomstyle, setRoomstyle] = React.useState(null);
    const [space, setSpace] = React.useState(null);
    const [des, setDes] = React.useState(null);

    const handleRoomsize = (e) => {
        setRoomsize(e.target.value)
    }
    const handleResidence = (e) => {
        setResidence(e.target.value)
    }
    const handleRoomStyle = (e) => {
        setRoomstyle(e.target.value)
    }
    const handleSpace = (e) => {
        setSpace(e.target.value)
    }
    const handleDes = (e) => {
        setDes(e.target.value)
    }
    console.log("roomsize",roomsize)
    console.log("residence",residence)
    console.log("roomstyle",roomstyle)
    console.log("space",space)
    console.log("des",des)

    const selectFile = (e) => {
        const reader = new FileReader();
        const file = fileInput.current.files[0];
        reader.readAsDataURL(file);
    
        reader.onloadend = () => {
          dispatch(actionCreators.setPreview(reader.result));
        };
    };
    
    const addPostDB = (e) => {
        e.preventDefault();
        let file = fileInput.current.files[0];
        dispatch(
          actionCreators.addPostDB({
            jsons: { 
                des: des, 
                // residence:residence, 
                // roomsize: roomsize, 
                // space: space,
                // roomstyle : roomstyle 
            },
            file,
          })
        );
      };
    // const encodeFileToBase64 = (fileBlob) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(fileBlob);
    //     return new Promise((resolve) => {
    //         reader.onload=()=>{
    //             console.log(reader.result)
    //             setPreview(reader.result);
    //             resolve();
    //         }
    //     })
        
    // }

    return (
        <div>
            <div style={{height : "80px"}}>
            <div className='header'>
      {/* 오늘의집 글자 아이콘 */}
      <Link to = "/">
        <div className='headerName'>
          <svg class="icon" width="74" height="30" viewBox="0 0 74 30" preserveAspectRatio="xMidYMid meet">
            <g fill="none" fill-rule="evenodd">
              <path fill="#000" d="M14.2 25.17H9.28V20.7a1.45 1.45 0 0 0-2.9 0v4.47H1.44a1.45 1.45 0 1 0 0 2.9H14.2a1.45 1.45 0 0 0 0-2.9M4.5 9.15c0-4.6 2.08-5.28 3.33-5.28 1.24 0 3.33.69 3.33 5.28v.36c0 4.6-2.09 5.28-3.33 5.28-1.25 0-3.34-.69-3.34-5.28v-.36zm3.33 8.54c3.84 0 6.23-3.13 6.23-8.18v-.36c0-5.05-2.39-8.18-6.23-8.18-3.85 0-6.24 3.13-6.24 8.18v.36c0 5.05 2.39 8.19 6.24 8.19zm25.54-7.34H17.81a1.45 1.45 0 0 0 0 2.9h15.56a1.45 1.45 0 1 0 0-2.9m-1.55 15.5c-7.08 1.83-9.45.79-10.14.25-.45-.35-.65-.8-.65-1.48v-.87h10.25c.8 0 1.46-.65 1.46-1.45v-5.08c0-.8-.66-1.45-1.46-1.45h-11.7a1.45 1.45 0 1 0 0 2.9h10.25v2.18H19.57c-.8 0-1.45.65-1.45 1.45v2.32a4.6 4.6 0 0 0 1.78 3.78c1.2.93 2.94 1.39 5.21 1.39 2.05 0 4.54-.38 7.44-1.13a1.45 1.45 0 1 0-.73-2.82M20.3 7.83h10.8a1.45 1.45 0 1 0 0-2.9h-9.35V1.45a1.45 1.45 0 1 0-2.9 0v4.93c0 .8.65 1.45 1.45 1.45">
              </path>
              <rect width="3" height="15" x="70" fill="#000" rx="1.5"></rect>
              <path fill="#000" d="M64.5 13.28a1.45 1.45 0 0 0 2.73-1c-.05-.13-1-2.68-3.38-4.5l3.7-4.1a1.45 1.45 0 0 0-1.09-2.42h-9.05a1.45 1.45 0 1 0 0 2.9h5.8l-6.88 7.64a1.45 1.45 0 1 0 2.16 1.95l3.41-3.8a8 8 0 0 1 2.6 3.33M69.56 26.52h-7.01a.82.82 0 0 1-.82-.82v-1.95h8.65v1.95c0 .45-.37.82-.82.82m2.27-9.37c-.8 0-1.45.65-1.45 1.45v2.25h-8.65V18.6a1.45 1.45 0 1 0-2.9 0v7.1a3.73 3.73 0 0 0 3.72 3.72h7.01a3.73 3.73 0 0 0 3.72-3.72v-7.1c0-.8-.65-1.45-1.45-1.45M42.46 3.87c2.22 0 2.33 4.24 2.33 5.08 0 .85-.11 5.09-2.33 5.09-2.21 0-2.32-4.24-2.32-5.08 0-.86.11-5.09 2.32-5.09m0 13.07c1.76 0 3.23-.93 4.14-2.62.71-1.34 1.1-3.2 1.1-5.36s-.39-4.02-1.1-5.37A4.6 4.6 0 0 0 42.46.97c-1.76 0-3.22.93-4.13 2.62-.72 1.35-1.1 3.2-1.1 5.37s.38 4.01 1.1 5.36a4.59 4.59 0 0 0 4.13 2.62">
              </path>
              <path fill="#000" d="M51.4.49c-.8 0-1.45.65-1.45 1.45v17.78c-1.93.6-5.75 1.13-10.38 1.13h-2.2a1.45 1.45 0 0 0 0 2.9h2.2c2.64 0 7.21-.23 10.38-1.02v4.84a1.45 1.45 0 0 0 2.9 0V1.94c0-.8-.65-1.45-1.45-1.45">
              </path>
            </g>
          </svg>
        </div>
      </Link>
      <div style={{display:"flex"}}>
      <div style={{display:"flex",justifyContent:"flex-end", textAlign:"end", marginRight:"10px"}}>
        {!is_login
        ? <span>
            <button style={{backgroundColor:"transparent", border:"none"}}
            onClick = {() => {
              history.push('/login');
            }}
            >로그인</button>
            <button style={{backgroundColor:"transparent", border:"none"}}
            onClick = {() => {
              history.push('/signup');
            }}
            >회원가입</button>
          </span>
        :
        <button style={{backgroundColor:"transparent", border:"none"}} 
        onClick = {() => {
          window.alert("로그아웃");
          dispatch(userActions.logOut());
          history.push('/');
        }}
        >로그아웃
        </button>

        }
      </div>
      <Link to="/PostWrite">
        <button className='headerBtn' onClick={addPostDB}>
          올리기
        </button>
      </Link>
      </div>

    </div>
            </div>
            <div>
                <Btn>
                    <button-p>사진</button-p>
                    <button-v>동영상</button-v>
                </Btn>
            </div>

            <div>
                <select className = "selectBox" name='roomsize' onChange={handleRoomsize}> 
                    <option selected = "selected" disabled="disabled">평수</option>
                    <option value="10평 미만">10평 미만</option>
                    <option value="10평대">10평대</option>
                    <option value="20평대">20평대</option>
                    <option value="30평대">30평대</option>
                    <option value="40평대">40평대</option>
                    <option value="50평대 이상">50평대 이상</option>
                </select>

                <select className = "selectBox" name='residence' onChange={handleResidence}>
                    <option selected = "selected" disabled="disabled">주거형태</option>
                    <option value="원룸&오피스텔">원룸&오피스텔</option>
                    <option value="아파트">아파트</option>
                    <option value="빌라&연립">빌라&연립</option>
                    <option value="단독주택">단독주택</option>
                    <option value="사무공간">사무공간</option>
                    <option value="상업공간">상업공간</option>
                    <option value="기타">기타</option>
                </select>

                <select className = "selectBox" name='roomstyle' onChange={handleRoomStyle}>
                    <option selected = "selected" disabled="disabled">스타일</option>
                    <option value="모던">모던</option>
                    <option value="북유럽">북유럽</option>
                    <option value="빈티지">빈티지</option>
                    <option value="내추럴">내추럴</option>
                    <option value="프로방스&로맨틱">프로방스&로맨틱</option>
                    <option value="클래식&앤틱">클래식&앤틱</option>
                    <option value="한국&아시아">한국&아시아</option>
                    <option value="유니크">유니크</option>
                </select>
            </div>
                
            <Grid is_flex padding='0%'>
                <div style={{marginTop:"3%", width:"500px", height:"300px"}}>
                    <FileUpload
                    id="file"
                    shape="rectangle"
                    ref={fileInput}
                    src={preview ? preview : photo}
                    type="file"
                    onChange={selectFile}
                   
                    // onChange={(e) => {
                    //     encodeFileToBase64(e.target.files[0])
                    // }}
                    />
                </div>
                <div style={{marginLeft : "20px"}}>
                    <select className = "bigSelectBox" name='space' onChange={handleSpace}>
                        <option selected = "selected" disabled="disabled">공간 (필수)</option>
                        <option value="원룸">원룸</option>
                        <option value="거실">거실</option>
                        <option value="침실">침실</option>
                        <option value="주방">주방</option>
                        <option value="욕실">욕실</option>
                        <option value="아이방">아이방</option>
                        <option value="드레스룸">드레스룸</option>
                        <option value="서재&작업실">서재&작업실</option>
                        <option value="베란다">베란다</option>
                        <option value="사무공간">사무공간</option>
                        <option value="상업공간">상업공간</option>
                        <option value="가구&소품">가구&소품</option>
                        <option value="현관">현관</option>
                        <option value="외관&기타">외관&기타</option>

                    </select>
                    <TextBox onChange={handleDes}/>   
                </div>
            </Grid>
        </div>
    );
};




const FileUpload = styled.input`


  position: relative;
  overflow: hidden;
  width: 100%;
  height : 300px;
  min-width:500px;
//   min-height:300px;
  max-width:1000px;
  max-height:1000px;
  background-image : url("${(props) => props.src}");
  background-size: cover;
  backgound-image : z-index 1;
  border-radius : 4px;
  cursor: pointer;
  vertical-align: middle;
  color : transparent;
  &::file-selector-button { 
      display: none;
    }


  
  &:hover{
      opacity:0.65;
  }
  border : 1px dashed #d3d3d3;
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }

`;

const Btn = styled.button`
    background-color: transparent;
    border : none;
    font-weight : bold;
    margin-top : 15px;
    button-p{
        color: #35c5f0;
        margin:20px
    }
`

const TextBox = styled.textarea`
    width:500px;
    resize: none;
    // margin-left : px
    border:1px solid #d3d3d3;
    padding : 15px;
    padding-left : 25px;
    height : 200px;
    border-radius: 5px;
    _onChange:()=>{};
`

const selectBox = styled.select`
    width : 300px;
`



export default PostUpload;