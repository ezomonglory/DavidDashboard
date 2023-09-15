import React from 'react'

function CircleProgressLoader() {
  return (
    <div>
        <div class="preloader-wrapper small active">
            <div class="spinner-layer spinner-green-only">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div><div class="gap-patch">
                <div class="circle"></div>
            </div><div class="circle-clipper right">
                <div class="circle"></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CircleProgressLoader