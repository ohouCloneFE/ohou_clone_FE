import React from "react";
import styled from "styled-components";
import {Grid, Text, Input, Button} from "../elements/Index";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { idCheck, passwordCheck } from "../shared/LoginCheck";

const Singup = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdCheck, setPwdCheck] = React.useState("");
  const [nickname, setNickname] = React.useState("");

  const signup = () => {
    if(id === "" || pwd === "" || pwdCheck === "") {
      window.alert("아이디와 비밀번호를 모두 입력해주세요!");
      return;
    }
    dispatch(userActions.signupDB(id, pwd, pwdCheck, nickname));
  }

  return (
    <React.Fragment>
      <Grid/>
      <Grid min = "360px" width = "100%" margin = "auto" bg = "" radius = "10px">
        <DivSt>
          <Grid margin="16px"/>
          <Grid padding="10px 16px">
            <h5 style={{fontWeight : "700"}}>회원가입</h5>
          </Grid>

          <Grid margin="5px auto" padding="0px 70px" width= "360px">
                <Ast style={{margin : "50px 0px 0px 20px"}}>SNS계정으로 간편 로그인/회원가입</Ast>
            </Grid>
            
            <Grid margin="0px auto" padding="0px 70px" width= "360px">
              <div style={{float : "left", margin : "0px 10px"}}>
                <svg width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet">
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#3B5998" d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z">
                    </path>
                    <path fill="#FFF" d="M25.77 35V24h3.384v-3.385h-3.385v-2.538c-.012-.756.08-1.285 1.693-1.692h1.692V13h-3.385c-3.25 0-4.52 1.84-4.23 5.077v2.538H19V24h2.538v11h4.231z">
                    </path>
                  </g>
                </svg>
              </div>
              
              <div style={{float : "left", margin : "0px 10px"}}>
                <svg width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet">
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#FFEB00" d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z">
                    </path>
                    <path fill="#3C2929" d="M24 11.277c8.284 0 15 5.306 15 11.85 0 6.545-6.716 11.85-15 11.85-.92 0-1.822-.066-2.697-.191l-6.081 4.105a.43.43 0 0 1-.674-.476l1.414-5.282C11.777 31.031 9 27.335 9 23.127c0-6.544 6.716-11.85 15-11.85zm6.22 8.407c-.416 0-.718.297-.718.707v5.939c0 .41.289.686.718.686.41 0 .718-.295.718-.686v-1.932l.515-.526 1.885 2.57c.277.374.426.54.691.568.037.003.075.005.112.005.154 0 .66-.04.716-.563.038-.293-.137-.52-.348-.796l-2.043-2.675 1.727-1.743.176-.196c.234-.26.353-.39.353-.587.009-.422-.34-.652-.687-.661-.274 0-.457.15-.57.262l-2.528 2.634v-2.3c0-.422-.288-.706-.717-.706zm-9.364 0c-.56 0-.918.432-1.067.837l-2.083 5.517a.84.84 0 0 0-.065.315c0 .372.31.663.706.663.359 0 .578-.162.69-.51l.321-.97h2.999l.313.982c.111.335.34.498.7.498.367 0 .655-.273.655-.62 0-.056-.017-.196-.081-.369l-2.019-5.508c-.187-.53-.577-.835-1.069-.835zm-2.92.064h-4.452c-.417 0-.642.337-.642.654 0 .3.168.652.642.652h1.51v5.21c0 .464.274.752.716.752.443 0 .718-.288.718-.751v-5.21h1.508c.474 0 .643-.352.643-.653 0-.317-.225-.654-.643-.654zm7.554-.064c-.442 0-.717.287-.717.75v5.707c0 .497.28.794.75.794h2.674c.434 0 .677-.321.686-.627a.642.642 0 0 0-.17-.479c-.122-.13-.3-.2-.516-.2h-1.99v-5.195c0-.463-.274-.75-.717-.75zm-4.628 1.306l.008.01 1.083 3.265h-2.192L20.842 21a.015.015 0 0 1 .028 0z">
                    </path>
                  </g>
                </svg>
              </div>
              
              <div style={{float : "left", margin : "0px 10px"}}>
                <svg width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet">
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#00C63B" d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z">
                    </path>
                    <path fill="#FFF" d="M21 25.231V34h-7V15h7l6 8.769V15h7v19h-7l-6-8.769z">
                    </path>
                  </g>
                </svg>
              </div>
            </Grid>
            <hr style={{color : "rgb(157, 157, 157)", width : "360px", margin : "50px auto"}}></hr>

          
          <Grid margin="0px 0px 0px 0px" padding="8px 40px">
            <p style={{fontWeight : "700"}}>아이디</p>
            <Inputst
              type="text"
              label="아이디"
              placeholder="아이디"
              onChange={(e) => {
                setId(e.target.value);
                // console.log(e.target.value)
              }} 
            ></Inputst>
            {idCheck(id) ? (<p style={{fontSize: "12px", color: "green"}}>형식에 맞는 아이디입니다.</p>) : null}
            {!idCheck(id) ? (<p style={{fontSize: "12px", color: "red"}}> 2~ 10자 한글, 영문, 숫자 가능, 특수문자 -_ 가능</p>) : null}
          
          </Grid>
          
          <Grid padding="8px 40px">
            <p style={{fontWeight : "700"}}>비밀번호</p>
            <Inputst
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력하세요."  
              onChange={(e) => {
                setPwd(e.target.value);
                // console.log(setPwd)
              }} 
            ></Inputst>
            {passwordCheck(pwd) ? (<p style={{fontSize: "12px", color: "green"}}>형식에 맞는 비밀번호입니다.</p>) : null}
            {!passwordCheck(pwd) ? (<p style={{fontSize: "12px", color: "red"}}>6~20자 영문 숫자 필수, 특수문자 !@#$%^&* 가능</p>) : null}
          </Grid>
          
          <Grid padding="8px 40px">
            <p style={{fontWeight : "700"}}>비밀번호확인</p>
            <Inputst
              type="password"
              label="비밀번호확인"
              placeholder="비밀번호를 다시 입력하세요."  
              onChange={(e) => {
                setPwdCheck(e.target.value);
                // console.log(setPwd)
              }} 
            ></Inputst>
            {(pwd !== pwdCheck) && (pwd.length >= 1) ? (<p style={{fontSize: "12px", color: "red"}}>비밀번호가 일치하지 않습니다.</p>) : null}
            {(pwd === pwdCheck) && (pwd.length > 5) ? (<p style={{fontSize: "12px", color: "green"}}>비밀번호가 일치합니다.</p>) : null}
          </Grid>

          <Grid padding="0px 40px">
            <p style={{fontWeight : "700"}}>닉네임</p>
            <Inputst
              type="text"
              label="닉네임"
              placeholder="별명 (2~15자)"  
              onChange={(e) => {
                setNickname(e.target.value);
              }} 
            ></Inputst>
          </Grid>
          
          <Grid margin="20px 0px 0px 0px">
            <Grid margin="10px 0px 0px 0px" padding="8px 40px">

              <Button
                  bg = "#35c5f0"
                  width = "360px"
                  text="로그인"
                  color = "white"
                  bold = "900"
                  radius = "5px"
                  onClick={signup}
                />   
            </Grid>
            <Grid width = "360px" margin = "auto" padding="8px">
              <p style={{padding : "0px 62px", width: "360px", display:"flex"}}>
              이미 아이디가 있으신가요?
              <a style={{marginLeft : "10px", fontWeight: "700"}} onClick={() => {history.push('/login');}}>로그인</a>
              </p>
            </Grid>
          </Grid>
        </DivSt>
      </Grid>
    </React.Fragment>  
  );
};

const DivSt = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
`

const Inputst = styled.input`
  width: 360px;
  height : 40px;
  margin : -1px 0px;
  border : 1px solid #bfbfbf;
  border-radius : 5px;
  background : white;
  padding : 14px 15px
`

const Ast = styled.a`
  text-decoration: none;
  color : #424242;
  font-size : 12px
`

export default Singup;