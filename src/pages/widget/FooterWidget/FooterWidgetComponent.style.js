// import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainerFluid = styled.div`
// border:2px dashed red;
width:100%;
// background-image:url('https://res.cloudinary.com/yalla-ng/image/upload/v1657058054/re-brand/footer-overlay_z60jf9.svg');
// background-size:contain;
// background-repeat:no-repeat;
// background-position:bottom right;

`;


export const FooterCopyright = styled.div`
width:100%;
height:350px;
margin-top:-200px;
background-image:url('https://res.cloudinary.com/yalla-ng/image/upload/v1657058054/re-brand/footer-overlay_z60jf9.svg');
background-size:contain;
background-repeat:no-repeat;
background-position:bottom right;
`;


export const Container = styled.div
.attrs(() => ({
  className: 'container-custom',
}))`
height:auto !important;
`;
export const CollectionList = styled.ul
.attrs(() => ({
  className: 'collection with-header',
}))`
border:0px;
span{
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 30px;
/* identical to box height */
color: #282828;
}
`;
export const CollectionListItem = styled.li
.attrs(() => ({
  className: '',
}))`
border:0px;
font-style: normal;
font-weight: 500;
font-size: 19px;
line-height: 30px;
/* identical to box height */
color: #4A4A4A;
margin-top:30px;
cursor: pointer;
`;