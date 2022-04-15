import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import PostUpload from '../components/PostUpload';


const Postwrite = () => {
  return (
    <div>
      <div style={{height : "80px"}}>
        <Header />
      </div>

        

      <PostUpload></PostUpload>
    </div>
  );
};



export default Postwrite;
