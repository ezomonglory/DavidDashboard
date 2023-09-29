import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { firestore } from '../../../../../firebase'
import CircleProgressLoader from '../../../../widget/circle_progress_loader'
import { FadeLoader } from 'react-spinners'
import { Link } from 'react-router-dom';

function AdminPageWidget() {
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [rows, setRows] = useState([])
    const [isEmti, setIsEmpti] = useState(false)

    // 
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const username = useRef(null)
    const pass = useRef(null)

    const deleteUser = async (id) => {
        console.log(id)

        // e.preventDefault();
        setLoading(true)
        try {
            setError('')
            await firestore.collection('users').doc(id).delete()
                .then(() => {
                    // firestore push success  
                    console.log("users deleted");
                    history.push('/')
                })
                .catch((error) => {
                    // firestore error push
                    console.error("Error writing document firestore: ", error);
                    let errMsg = error.message;
                    setError(errMsg)
                });

        } catch (err) {

            console.log(err)
            let errMsg = err.message;
            setError(errMsg)
            setLoading(false)

        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            setError('')
            let objectDate = new Date();
            let day = objectDate.getDate();
            console.log(day); // 23

            let monthh = objectDate.getMonth();
            console.log(monthh + 1); // 8
            let month = monthh + 1;

            let year = objectDate.getFullYear();
            console.log(year); // 2022


            let today = day + "/" + month + "/" + year;
            console.log(today); // 2022

            var dataToPush = {
                "username": username.current.value,
                "password": pass.current.value,
                "status": "Subadmin",
                "createdAt": today,
            }
            firestore.collection('subAmins').doc().set(dataToPush)
                .then(() => {
                    // firestore push success  
                    alert("Sub-Admin added.");
                    history.push('/dashboard')
                })
                .catch((error) => {
                    let errMsg = error.message;
                    setError(errMsg)
                });
            // console.log("hurray we don get artwork url=", artworkUploadUrl)

        } catch (err) {

            console.log(err)
            let errMsg = err.message;
            setError(errMsg)
            setLoading(false)

        }
    }


    const deleteCourse = async (id) => {
        console.log(id)

        // e.preventDefault();
        setLoading(true)
        try {
            setError('')
            await firestore.collection('registeredStudents').doc(id).delete()
                .then(() => {
                    // firestore push success  
                    alert("User deleted");
                    history.push('/dashboard')
                })
                .catch((error) => {
                    // firestore error push
                    console.error("Error writing document firestore: ", error);
                    let errMsg = error.message;
                    setError(errMsg)
                });

        } catch (err) {

            console.log(err)
            let errMsg = err.message;
            setError(errMsg)
            setLoading(false)

        }

    }

    useEffect(() => {
        var tt = firestore.collection('registeredStudents')
        tt.get().then((item) => {
            setLoading(true)
            const items = item.docs.map((doc) => doc)
            if (items.length == 0) {
                setIsEmpti(true)
            }
            setRows(items)
            console.log("---=-====-==---")
            console.log(items)
            setTimeout(() => {
                setLoading(false)
            }, 3000)
        }).catch((e) => {
            console.log("error from snapshot", e)
        })
    }, [])

    return (
        <div className=' md:py-[48px] px-[16px] md:px-[40px] w-full flex flex-col space-y-[24px]  md:space-y-[48px] overflow-hidden'>
            <div className=' flex justify-between items-center  '>
                <h2 className=' text-[24px] leading-[32px] font-[500] textmed text-[#1A1A1A]'>Students</h2>

                <Link to="/registerUser" >
                    <div className='bg-[#036] rounded-[4px] text-white py-[8px] px-[16px] textmed  ' >Add Student</div>
                </Link>

            </div>

            <hr className='h-[1px] md:hidden bg-[#d9d9d9] w-[500px]  ml-[-16px] ' />

            <div className='overflow-scroll scroll-hidden'>


                {
                    loading ?
                        <div className='h-[60vh] pt-[-50%] flex items-center justify-center  w-full'>
                            < FadeLoader color="#183DA7" />
                        </div>

                        : <table className='  w-[680px] md:w-full  md:px-[20px]  '>
                            <thead className=' w-full md:px-[20px]  '>
                                <tr>
                                    {/* <th className='text-[14px] text-[#8a8a8a]  md:text-[16px]'> <input type="radio" className='w-[30px] h-[30px] ' /> </th> */}
                                    <th className='text-[14px] text-[#8a8a8a] text-left  textmed ' >Name</th>
                                    <th className='text-[14px] text-[#8a8a8a] text-left  textmed '>Matric Number</th>
                                    <th className='text-[14px] text-[#8a8a8a] text-left  textmed '>Created At</th>
                                    <th className='text-[14px] text-[#8a8a8a] text-left textmed'></th>
                                </tr>
                            </thead>

                            <tbody   >


                                {rows.map((data) =>
                                    <tr className='' >
                                        <td className="text-[14px] md:text-[16px]"> {data.data()['name']}</td>
                                        <td className="text-[14px] md:text-[16px]">{data.data()['matricNumber']}</td>
                                        <td className="text-[14px] md:text-[16px]">{data.data()['createdAt']}</td>
                                        <td>
                                            {!loading &&
                                                <button className='  textmed text-[#036] ' onClick={() => deleteCourse(data.id)}>
                                                    Delete
                                                </button>
                                            }
                                        </td>
                                    </tr>
                                )}



                            </tbody>
                        </table>
                }
                {isEmti &&
                    <div className="row">
                        <div className="col s12 center">
                            <h5 className="grey-text">Data not found</h5>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}

export default AdminPageWidget