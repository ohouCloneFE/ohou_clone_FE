import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Detail = () => {
  return (
  <React.Fragment>
    <div style={{width : "100vw", height : "100vh", backgroundColor : "#e5e5e5"}}>
      <div style={{height : "80px"}}>
        
          <Header />
        
      </div>
      <DetailDiv>
        <div>dksk</div>
        <DetailBtn>
          팔로우
        </DetailBtn>
      </DetailDiv>

    </div>

  </React.Fragment>
  );
};

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color : white;
  height : 92px;
  padding : 16px;
  border-bottom: 1px solid rgb(201, 201, 201);
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`
const DetailBtn = styled.div`
  border: none;
  border-radius: 5px;
  background-color: #35c5f0;
  color: #ffffff;
  width: 80px;
  height: 32px;
  font-size: 15px;
  font-weight: 700;
  text-aline : center;
  padding : 5px 20px 6px;
`

export default Detail;