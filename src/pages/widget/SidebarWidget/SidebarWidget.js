import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {

    SidebarListItem,
    Sidebar
} from './SidebarWidget.style';
function SidebarWidget({setOpen}) {

    const [href, setHref] = useState("")

    useEffect(() => {
        const href = window.location.href
        setHref(href)
        console.log(window.location.href)
    }, []);


    return (
        <div>
            <div className='bg-white py-[54px] h-screen flex flex-col space-y-[54px] min-w-[242px] px-[24px] border-[0.5px] border-[e6e6e6] shadow ' >

                <div className='flex items-center justify-between'>
                    <div className='flex gap-[8px] items-center  '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6668 13.9999C25.6668 20.4432 20.4435 25.6666 14.0002 25.6666C7.55684 25.6666 2.3335 20.4432 2.3335 13.9999C2.3335 7.5566 7.55684 2.33325 14.0002 2.33325C20.4435 2.33325 25.6668 7.5566 25.6668 13.9999ZM17.5002 10.4999C17.5002 12.4329 15.9332 13.9999 14.0002 13.9999C12.0672 13.9999 10.5002 12.4329 10.5002 10.4999C10.5002 8.56692 12.0672 6.99992 14.0002 6.99992C15.9332 6.99992 17.5002 8.56692 17.5002 10.4999ZM14.0001 23.9166C16.0815 23.9166 18.0132 23.2754 19.6082 22.1797C20.3127 21.6957 20.6138 20.7739 20.2042 20.0237C19.3551 18.4685 17.6054 17.4999 14.0001 17.4999C10.3948 17.4999 8.64512 18.4685 7.79599 20.0236C7.38638 20.7738 7.68745 21.6956 8.39195 22.1796C9.98705 23.2753 11.9187 23.9166 14.0001 23.9166Z" fill="#808080" />
                        </svg>
                        <h1 className='textmed  text-[#1A1A1A] ' >CSC Administrator</h1>
                    </div>

                    <div className='block md:hidden ' 
                        onClick={()=> {
                            setOpen(false)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M19.7071 18.2926C19.8 18.3855 19.8737 18.4958 19.924 18.6172C19.9743 18.7386 20.0001 18.8687 20.0001 19.0001C20.0001 19.1315 19.9743 19.2616 19.924 19.383C19.8737 19.5044 19.8 19.6147 19.7071 19.7076C19.6142 19.8005 19.5039 19.8742 19.3825 19.9245C19.2611 19.9747 19.131 20.0006 18.9996 20.0006C18.8682 20.0006 18.7381 19.9747 18.6167 19.9245C18.4953 19.8742 18.385 19.8005 18.2921 19.7076L9.99958 11.4138L1.70708 19.7076C1.51944 19.8952 1.26494 20.0006 0.999579 20.0006C0.734215 20.0006 0.47972 19.8952 0.292079 19.7076C0.104439 19.5199 -0.000976557 19.2654 -0.000976562 19.0001C-0.000976568 18.7347 0.104439 18.4802 0.292079 18.2926L8.58583 10.0001L0.292079 1.70757C0.104439 1.51993 -0.000976562 1.26543 -0.000976562 1.00007C-0.000976562 0.734704 0.104439 0.480208 0.292079 0.292568C0.47972 0.104927 0.734215 -0.000488281 0.999579 -0.000488281C1.26494 -0.000488281 1.51944 0.104927 1.70708 0.292568L9.99958 8.58632L18.2921 0.292568C18.4797 0.104927 18.7342 -0.000488286 18.9996 -0.000488281C19.2649 -0.000488276 19.5194 0.104927 19.7071 0.292568C19.8947 0.480208 20.0001 0.734704 20.0001 1.00007C20.0001 1.26543 19.8947 1.51993 19.7071 1.70757L11.4133 10.0001L19.7071 18.2926Z" fill="#505050" />
                        </svg>
                    </div>

                </div>

                <ul className='flex flex-col space-y-[16px] '>

                    <Link to="/admins">
                        <div className={`${href === "https://digipass-amber.vercel.app/#/admins" || href === "https://digipass-amber.vercel.app/#/registerUser" ? "bg-[#E5F2FF] text-[#036]" : " text-[#808080] "} rounded-[2px]   flex items-center p-[8px] gap-[24px] `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="9.99984" cy="4.99996" r="3.33333" stroke="#808080" stroke-width="1.5" />
                                <circle cx="14.9998" cy="13.3333" r="3.33333" stroke="#808080" stroke-width="1.5" />
                                <path d="M13.8887 13.3334L14.5833 14.1667L16.1109 12.5927" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.5002 11.106C11.7281 10.9302 10.8842 10.8334 10.0002 10.8334C6.31826 10.8334 3.3335 12.5123 3.3335 14.5834C3.3335 16.6544 3.3335 18.3334 10.0002 18.3334C14.7397 18.3334 16.1098 17.4848 16.5058 16.25" stroke="#808080" stroke-width="1.5" />
                            </svg>
                            <h1 className='textmed  '>Student</h1>
                        </div>
                    </Link>
                    <Link to="/clock-in">
                        <div className={`${href === "https://digipass-amber.vercel.app/#/clock-in" ? "bg-[#E5F2FF] text-[#036]" : " text-[#808080] "} rounded-[2px]  flex items-center p-[8px] gap-[24px] `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M13.3333 3.33472C15.1459 3.34481 16.1274 3.42518 16.7678 4.0655C17.5 4.79773 17.5 5.97625 17.5 8.33327V13.3333C17.5 15.6903 17.5 16.8688 16.7678 17.601C16.0355 18.3333 14.857 18.3333 12.5 18.3333H7.5C5.14298 18.3333 3.96447 18.3333 3.23223 17.601C2.5 16.8688 2.5 15.6903 2.5 13.3333V8.33327C2.5 5.97625 2.5 4.79773 3.23223 4.0655C3.87255 3.42518 4.85414 3.34481 6.66667 3.33472" stroke="#808080" stroke-width="1.5" />
                                <path d="M8.75 11.6667L14.1667 11.6667" stroke="#808080" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M5.8335 11.6667H6.25016" stroke="#808080" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M5.8335 8.75H6.25016" stroke="#808080" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M5.8335 14.5833H6.25016" stroke="#808080" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M8.75 8.75H14.1667" stroke="#808080" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M8.75 14.5833H14.1667" stroke="#808080" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M6.6665 2.91675C6.6665 2.22639 7.22615 1.66675 7.9165 1.66675H12.0832C12.7735 1.66675 13.3332 2.22639 13.3332 2.91675V3.75008C13.3332 4.44044 12.7735 5.00008 12.0832 5.00008H7.9165C7.22615 5.00008 6.6665 4.44044 6.6665 3.75008V2.91675Z" stroke="#808080" stroke-width="1.5" />
                            </svg>
                            <h1 className='textmed  '>Clock in history</h1>
                        </div>
                    </Link>


                    <div className="text-[#808080]  flex items-center p-[8px] gap-[24px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.9165 11.6666C9.29722 11.6666 10.4165 12.7859 10.4165 14.1666C10.4165 15.5473 9.29722 16.6666 7.9165 16.6666C6.53579 16.6666 5.4165 15.5473 5.4165 14.1666C5.4165 12.7859 6.53579 11.6666 7.9165 11.6666Z" stroke="#808080" stroke-width="1.5" />
                            <path d="M12.0835 3.33335C10.7028 3.33335 9.5835 4.45264 9.5835 5.83335C9.5835 7.21407 10.7028 8.33335 12.0835 8.33335C13.4642 8.33335 14.5835 7.21407 14.5835 5.83335C14.5835 4.45264 13.4642 3.33335 12.0835 3.33335Z" stroke="#808080" stroke-width="1.5" />
                            <path d="M12.5 14.1321L18.3333 14.1321" stroke="#808080" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M7.5 5.79871L1.66667 5.79871" stroke="#808080" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M1.6665 14.1321L3.33317 14.1321" stroke="#808080" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M18.3335 5.79871L16.6668 5.79871" stroke="#808080" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        <h1 className='textmed  '>Settings</h1>
                    </div>
                </ul>
            </div>

        </div>
    )
}

export default SidebarWidget