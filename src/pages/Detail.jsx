/* eslint-disable */
import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import "./Detail.css"
import Input from '../elements/Input';

const Detail = () => {
  return (
  <React.Fragment>
    <div style={{width : "100%", height : "100vh", backgroundColor : "#e5e5e5"}}>
      <div style={{height : "80px"}}><Header /></div>

      <DetailDiv style={{borderBottom: "4px solid rgb(230, 230, 230)", maxWidth: "100%"}}>
        <div style={{height : "50px", width : "775px", float : "left"}}>

          <img 
            src='data:image/jpeg;base64,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'
            style={{height : "50px", width : "50px", borderRadius : "50%", float : "left"}}>
          </img>

          <div >
            <p style={{lineHeight : "30px", margin : "0px 0px 0px 60px", fontSize: "20px"}}>React</p>
            <p style={{lineHeight : "20px", margin : "0px 0px 0px 60px", fontSize: "12px"}}>2일 전</p>
          </div>

          

        </div>
      </DetailDiv>

      <DetailDiv>
        <div className='upbar'>
          <div className='roomtype'>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "spaceBetween"}}>
              <p className='roomtypetag'>10평 미만</p>
              <p className='roomtypetag'>모던 스타일</p>
              <p className='roomtypetag'>원룸 & 오피스텔</p>
            </div>
            <div>
              <svg fill="none" viewBox="0 0 18 18" width="1em" height="1em" preserveAspectRatio="xMidYMid meet">
                <path d="M3.6 9A1.8 1.8 0 110 9a1.8 1.8 0 013.6 0zM18 9a1.8 1.8 0 11-3.6 0A1.8 1.8 0 0118 9zM9 10.8a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6z" fill="currentColor">
                </path>
              </svg>
            </div>
          </div>
        </div>

      </DetailDiv>

      <DetailDiv>

          <DetailImg src='https://img.maisonkorea.com/2020/03/msk_5e65a1179ab47.jpg' />

      </DetailDiv>

      <DetailDiv>
        <p style={{margin : "30px 5px"}}>정말 깔끔한 방이에요! 정말 깔끔한 방이에요! 정말 깔끔한 방이에요! 정말 깔끔한 방이에요! 정말 깔끔한 방이에요! 
        정말 깔끔한 방이에요! 정말 깔끔한 방이에요! 정말 깔끔한 방이에요! 정말 깔끔한 방이에요! 정말 깔끔한 방이에요! 정말 깔끔한 방이에요! 정말 깔끔한 방이에요! </p>
      </DetailDiv> 
      
      <DetailDiv style={{borderBottom: "1px solid rgb(230, 230, 230)"}}>
        <ul style={{listStyle : "none" , color : "#35c5f0", display : "inlineBlock", float : "left", padding : "0px" }}>
          <li className='hashTag'># 마이 하우스</li>
          <li className='hashTag'># 깔끔한 방</li>
          <li className='hashTag'># 내 집</li>
          <li className='hashTag'># 화이트</li>

        </ul>
      </DetailDiv>
      <DetailDiv>
        <h1 style={{fontSize : "18px",fontWeight: "700", margin: "10px 0px 20px"}}>댓글</h1>
      </DetailDiv>
      <DetailDiv>
        <img 
            src='data:image/jpeg;base64,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'
            style={{height : "40px", width : "40px", borderRadius : "50%", float : "left"}}>
        </img>
        
        <input type="text" placeholder='칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)' className='detailInput'/>

        <button className='detailBtn'>등록</button>

      </DetailDiv>

      <div style={{padding : "16px",  margin : "10px 0px", height : "45px", paddingBottom : "40px"}}>
        <img 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3zSX4demC8M8F1whHndKmYZc8lkq9EEnzA&usqp=CAU'
          style={{height : "40px", width : "40px", borderRadius : "50%", float : "left"}}>
        </img>

        <div style={{float : "left"}}>
            <p style={{lineHeight : "20px", margin : "0px 10px 0px 20px", fontSize: "20px", width : "100%"}}>React</p>
            <p style={{lineHeight : "20px", margin : "0px 10px 0px 20px", fontSize: "12px", width : "100%"}}>2시간 전</p>
        </div>

        <div style={{lineHeight : "20px"}}>
          정말 이쁜집이군요!!!
        </div>

      </div>

      <DetailDiv style={{height : "150px"}}></DetailDiv>

    </div>

  </React.Fragment>
  );
};

const DetailDiv = styled.div`
  display: flex;
  // flex-direction: column;
  // justify-content: center;
  align-items: center;
  background-color : white;
  padding : 16px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  max-width: 100%; 
`
const DetailImg = styled.img`
  max-width: 100%; 
  height: auto;
  object-fit: cover;
  border-radius: 5px;
`

export default Detail;