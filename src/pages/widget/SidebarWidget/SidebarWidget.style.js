
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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
  className: ' gray white-text',
}))`
color:#ffffff !important;
font-size:16px;
border:none !important;
height: 100vh;
`;
