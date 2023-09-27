import React, { useState } from 'react'
import { Sidebar } from '../SidebarWidget/SidebarWidget.style'
import SidebarWidget from '../SidebarWidget/SidebarWidget'

function NavWidget() {

    const [open, setOpen] = useState(false)    

    return (

        <div className='block md:hidden px-[16px]  '>

            <div className={` fixed h-screen w-full z-50 top-0 animation  ${open ? "right-[0%] " : "right-[100%]"}`}>
                <SidebarWidget setOpenModal={setOpen} />
            </div>

            <div className='flex justify-between items-center w-full'>
                <div className='flex gap-[8px] items-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6668 13.9999C25.6668 20.4432 20.4435 25.6666 14.0002 25.6666C7.55684 25.6666 2.3335 20.4432 2.3335 13.9999C2.3335 7.5566 7.55684 2.33325 14.0002 2.33325C20.4435 2.33325 25.6668 7.5566 25.6668 13.9999ZM17.5002 10.4999C17.5002 12.4329 15.9332 13.9999 14.0002 13.9999C12.0672 13.9999 10.5002 12.4329 10.5002 10.4999C10.5002 8.56692 12.0672 6.99992 14.0002 6.99992C15.9332 6.99992 17.5002 8.56692 17.5002 10.4999ZM14.0001 23.9166C16.0815 23.9166 18.0132 23.2754 19.6082 22.1797C20.3127 21.6957 20.6138 20.7739 20.2042 20.0237C19.3551 18.4685 17.6054 17.4999 14.0001 17.4999C10.3948 17.4999 8.64512 18.4685 7.79599 20.0236C7.38638 20.7738 7.68745 21.6956 8.39195 22.1796C9.98705 23.2753 11.9187 23.9166 14.0001 23.9166Z" fill="#808080" />
                    </svg>

                    <h1 className='text-[#1A1A1A]  '>CSC Admin</h1>
                </div>

                <div onClick={() => {
                    setOpen(true)
                }} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M26.6665 9.33325L5.33317 9.33325" stroke="#505050" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M26.6665 16L5.33317 16" stroke="#505050" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M26.6665 22.6667L5.33317 22.6667" stroke="#505050" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </div>

            </div>
        </div>
    )

    //   return (
    //     <div>
    //          <nav>
    //             <div className="nav-wrapper  cyan darken-4">
    //                 <a href="#!" className="brand-logo p-16">
    //                     Dashboard
    //                 </a>
    //                 <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    //                 <ul className="right hide-on-med-and-down  cyan darken-4">
    //                     <li className=' cyan darken-4'>
    //                         <a href="sass.html">
    //                             <i className='material-icons'>account_circle</i>
    //                         </a>
    //                     </li>

    //             </ul>
    //             </div>
    //         </nav>

    //         <ul className="sidenav" id="mobile-demo">
    //             <li><a href="sass.html">Sass</a></li>
    //             <li><a href="badges.html">Components</a></li>
    //             <li><a href="collapsible.html">Javascript</a></li>
    //             <li><a href="mobile.html">Mobile</a></li>
    //         </ul>

    //     </div>
    //   )
}

export default NavWidget