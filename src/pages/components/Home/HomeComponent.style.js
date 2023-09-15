import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.div
.attrs(() => ({
  className: '',
}))`
width:80% !important;
margin:0px auto !important;
height:100px;
// border:2px dashed red;

//small-mobile
@media screen and (max-width: 425px) {
  width:88% !important;
}

`;
export const Container = styled.div
.attrs(() => ({
  className: '',
}))`
width:80% !important;
margin:0px auto !important;
height:100px;
// border:2px dashed red;

//small-mobile
h1,h2,h3,h4,h5,h6,p{
    padding:0px !important;
}
@media screen and (max-width: 425px) {
  width:88% !important;
}

`;
export const ContainerFluid = styled.div
.attrs(() => ({
  className: '',
}))`
width:100% !important;
margin:0px auto !important;
// border:2px dashed red;
background:url('./../../../assets/1.svg');
background-size:cover;
background-repeat:no-repeat;
background-position:center;
height:900px;


//small-mobile
@media screen and (max-width: 425px) {
}

`;

export const Button = styled(Link)`
  padding-left:1.4rem;
  padding-right:1.4rem;
  background:transparent;
  color:#000000;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
    padding: 9px 1.5rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const InputField = styled.input
.attrs(() => ({
  className: '',
}))`
height:70px;
border:1px solid #ffffff !important;
color:#ffffff !important;
padding: 10px 30px !important;
border-radius: 0px 0px 0px 15px !important;
//small-mobile
flex:2;
@media screen and (max-width: 425px) {
}

`;

export const InputFieldButton = styled(Link)`
padding: 16px 30px;
width: 150px;
height:68px;
background: #FFFFFF;
border-radius: 0px 15px 0px 0px;
color:#000000;
flex:1;
font-style: normal;
font-weight: 400 !important;
font-size: 18px;
line-height: 32px;

color: rgba(0, 0, 0, 0.9);

`;
