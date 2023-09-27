import React, { useEffect, useState } from 'react'
import CircleProgressLoader from '../../../../widget/circle_progress_loader';
import firebase from 'firebase/app'
import { storage, firestore, } from '../../../../../firebase'
import { useHistory } from 'react-router-dom'


function ClockInpagewidget() {

    const history = useHistory()
    const [loading, setLoading] = useState(true)
    const [rows, setRows] = useState([])
    const [isEmti, setIsEmpti] = useState(false)
    // 
    const [error, setError] = useState(null)






    useEffect(() => {
        var tt = firestore.collection('student-clock-in')
        tt.get().then((item) => {
            setLoading(true)
            const items = item.docs.map((doc) => doc)
            
            if (items.length == 0) {
                setIsEmpti(true)
            }
            setRows(items)
            console.log("CLock in history==", "---=-====-==---")            

            setTimeout(() => {
                setLoading(false)
            }, 3000)
        }).catch((e) => {
            console.log("error from snapshot", e)
        })
    }, [])
    return (
        <div>

            <div className=' md:py-[48px] px-[16px] md:px-[40px] w-full flex flex-col space-y-[42px] overflow-hidden'>
                <div>
                    <h2 className='text-[#000] text-[24px] font-[500] leading-[32px] textmed text-[#1A1A1A] ' >Clock-in history</h2>
                </div>

                <hr className='h-[1px] md:hidden bg-[#d9d9d9] w-[500px]  ml-[-16px] ' />

                {loading &&
                    <div className="row">
                        <div className="col s12 left">
                            <CircleProgressLoader />
                        </div>
                    </div>
                }
                <div className='overflow-scroll scroll-hidden'>
                    <table className='  w-[780px] md:w-full  md:px-[20px]  '>
                        <thead className=' w-full md:px-[20px]  '>
                            <tr>
                                <th className='text-[14px] text-[#8a8a8a] text-left md:text-[16px] textmed' >Full Name</th>
                                <th className='text-[14px] text-[#8a8a8a] text-left md:text-[16px] textmed' >Course</th>
                                <th className='text-[14px] text-[#8a8a8a] text-left md:text-[16px] textmed' >Created At</th>
                                <th className='text-[14px] text-[#8a8a8a] text-left md:text-[16px] textmed' ></th>
                            </tr>
                        </thead>

                        <tbody>
                            {!loading &&

                                rows.map((data) => {
                                    console.log(data.data())

                                    return (
                                        <tr>
                                            <td className="text-[14px] md:text-[16px]">
                                                {/* {data.data()['studentCard']} */}

                                                <GetUserDetails data={{
                                                    "studentCard": data.data()['studentCard'],
                                                }} />
                                            </td>
                                            <td className="text-[14px] md:text-[16px]"> {"CSC421"}</td>
                                            <td className="text-[14px] md:text-[16px]"> {"12/08/23"}</td>
                                            <td className="text-[14px] md:text-[16px]"> </td>
                                        </tr>
                                    )
                                }
                                )
                            }


                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )


}

export default ClockInpagewidget




export function GetUserDetails(props) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const id = props.data.studentCard
    useEffect(() => {
        var tt = firestore.collection('registeredStudents')
            .where('cardNumber', '==', id)

        tt.get().then((item) => {
            setLoading(true)
            const items = item.docs.map((doc) => doc)
            if (items.length == 0) {
                // setIsEmpti(true)
                // setUser(items[0].data())
            }
            console.log(items[0].data())
            setUser(items[0].data())
            console.log("CLock in name", "---=-====-==---")
            console.log(items.length)
            setTimeout(() => {
                setLoading(false)
            }, 3000)
        }).catch((e) => {
            console.log("error from snapshot", e)
        })
    }, [])
    return (
        <div>
            {(!loading) && user.name}
        </div>
    )
}
