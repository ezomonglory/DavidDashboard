import React from 'react'

import {
    Button,
} from './HeaderWidgetComponent.style';

  
  function HeaderWidgetComponentTransaparent2() {
    return (
      <div className="container">
        <div className='row'>
            <div className='col s12 right'>
                <Button to="/" className="brand-logo white-text right">
                    {/* <h5>MoveinTurkiye</h5> */}
                </Button>
            </div>
        </div>          
      </div>
    )
  }
  
  export default HeaderWidgetComponentTransaparent2