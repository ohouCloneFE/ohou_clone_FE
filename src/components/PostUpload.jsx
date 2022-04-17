import React, { useState } from 'react';
import styled from 'styled-components';
import photo from '../asset/photoUpload.png'
import "./Header.css"

import { Grid, Input, Button, Image, Text } from "../elements/Index";


const PostUpload = (props) => {
    
    const [preview, setPreview] = useState();
    
    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload=()=>{
                console.log(reader.result)
                setPreview(reader.result);
                resolve();
            }
        })
        
    }

    return (
        <div>
            <div>
                <Btn>
                    <button-p>사진</button-p>
                    <button-v>동영상</button-v>
                </Btn>
            </div>

            <div>
                <select className = "selectBox" name='roomSize'> 
                    <option selected = "selected" disabled="disabled">평수</option>
                    <option value="10평 미만">10평 미만</option>
                    <option value="10평대">10평대</option>
                    <option value="20평대">20평대</option>
                    <option value="30평대">30평대</option>
                    <option value="40평대">40평대</option>
                    <option value="50평대 이상">50평대 이상</option>
                </select>

                <select className = "selectBox" name='roomType'>
                    <option selected = "selected" disabled="disabled">주거형태</option>
                    <option value="원룸&오피스텔">원룸&오피스텔</option>
                    <option value="아파트">아파트</option>
                    <option value="빌라&연립">빌라&연립</option>
                    <option value="단독주택">단독주택</option>
                    <option value="사무공간">사무공간</option>
                    <option value="상업공간">상업공간</option>
                    <option value="기타">기타</option>
                </select>

                <select className = "selectBox" name='roomStyle'>
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
                    shape="rectangle"
                    src={preview ? preview : photo}
                    type="file"
                    onChange={(e) => {
                        encodeFileToBase64(e.target.files[0])
                    }}
                    />
                </div>
                <div style={{marginLeft : "20px"}}>
                    <select className = "bigSelectBox" name='zone'>
                        <option selected = "selected" disabled="disabled">공간 (필수)</option>
                        <option value="모던">원룸</option>
                        <option value="모던">거실</option>
                        <option value="모던">침실</option>
                        <option value="모던">주방</option>
                        <option value="모던">욕실</option>
                        <option value="모던">아이방</option>
                        <option value="모던">드레스룸</option>
                        <option value="모던">서재&작업실</option>
                        <option value="모던">베란다</option>
                        <option value="모던">사무공간</option>
                        <option value="모던">상업공간</option>
                        <option value="모던">가구&소품</option>
                        <option value="모던">현관</option>
                        <option value="모던">외관&기타</option>

                    </select>
                    <TextBox>hi</TextBox>   
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
  &:hover{
      opacity:0.65;
  }
  border : 1px dashed #d3d3d3;
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
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
`

const selectBox = styled.select`
    width : 300px;
`



export default PostUpload;