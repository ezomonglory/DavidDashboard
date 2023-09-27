import { Link } from 'react-router-dom';
import styled from 'styled-components';




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

// export const InputField = styled.input
// .attrs(() => ({
//   className: '',
// }))`
// height:70px;
// border:1px solid #ffffff !important;
// color:#ffffff !important;
// padding: 10px 30px !important;
// border-radius: 0px 0px 0px 15px !important;
// //small-mobile
// flex:2;
// @media screen and (max-width: 425px) {
// }

// `;

export const SidebarListItem = styled.div
.attrs(() => ({
  className: ' cyan darken-4 white-text mt-25',
}))`
color:#ffffff !important;
font-size:18px;
border-color:#006064 !important;
height:50px;
border-bottom:1px solid #fff !important;
`;



export const Sidebar= styled.div
.attrs(() => ({
  className: 'cyan darken-4 white-text',
}))`
color:#ffffff !important;
font-size:16px;
border:none !important;
min-height:1300px;
`;
