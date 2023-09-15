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

