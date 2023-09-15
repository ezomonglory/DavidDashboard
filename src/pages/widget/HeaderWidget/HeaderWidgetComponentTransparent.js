import React from 'react'
import { Link} from 'react-router-dom'
import AlertDialogSlide from '../../components/auth/LoginModal';

import {
    Button,
    NavContainer
} from './HeaderWidgetComponent.style';

  
  function HeaderWidgetComponentTransaparent() {
    return (
      <div className="">
          <nav className=" z-depth-0 transparent hide-on-med-and-down" style={{height:"120px"}}>
                <NavContainer className="" style={{
                }}>
                <Button to="/" className="brand-logo">
                    <h5></h5>
                    {/* <img style={{
                        marginTop:"10px"    
                    }} src="https://res.cloudinary.com/yalla-ng/image/upload/v1657118226/re-brand/yalla_logo_2_wa7dlm.svg" width="160px"  alt="" />     */}
                </Button>
                <ul className="right  hide-on-med-and-down mt-25 ">
                </ul>
                </NavContainer>
            </nav>

            <nav className="z-depth-0 transparent hide-on-large-only show-on-medium show-on-small" style={{height:"85px"}}>
                <NavContainer className=" " style={{
                    // border:"2px dashed red"
                }}>
                <Link to="#!" className="brand-logo">
                    <h5></h5>

                    
                </Link>
                
                <ul className="right  hide-on-med-and-down mt-25 ">
                  
                </ul>
                </NavContainer>
            </nav>

                        
      </div>
    )
  }
  
  export default HeaderWidgetComponentTransaparent