import React, { useState } from 'react';
import styled from 'styled-components';
import photo from '../asset/photoUpload.png'

import { Grid, Input, Button, Image, Text } from "../elements/Index";


const PostUpload = (props) => {
    
    const [preview, setPreview] = useState();
    
    return (
        <div>
            <div>
                <Btn>
                    <button-p>사진</button-p>
                    <button-v>동영상</button-v>
                </Btn>
            </div>
            <Grid is_flex padding='0%'>           
                <div style={{marginTop:"3%", width:"500px", height:"300px"}}>
                    <FileUpload
                    shape="rectangle"
                    src={preview ? preview : photo}
                    type="file"
                    />
                </div> 
                <TextBox>hi</TextBox>   
            </Grid>
        </div>
    );
};



const FileUpload = styled.button`


  position: relative;
  overflow: hidden;
  width: 500px;
  height : 300px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  border-radius : 4spx;
  &:hover{
      opacity:0.65;
  }
  border : 1px dashed #d3d3d3;
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
`



export default PostUpload;