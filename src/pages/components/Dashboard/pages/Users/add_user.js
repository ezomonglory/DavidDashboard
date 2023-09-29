import React, { useState, useRef } from 'react'
import firebase from 'firebase/app'
// import firebase from 'firebase/app'
import { useHistory } from 'react-router-dom'
import { storage, firestore, } from './../../../../../firebase'


function AddUser() {
    const history = useHistory()


    const [loading, setLoading] = useState(false)
    // 
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    // Ref data


    // 
    const [profilePic, setProfilePic] = useState(null)
    const [profilePicPerc, setProfilePicPerc] = useState(0)
    // 
    const [coursePdfPerc, setCoursePdfFilePerc] = useState(0)

    const handleProfilePic = (e) => {

        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePic(e.target.result);
            };
            reader.readAsDataURL(file);
        }
        console.log(e.target.files[0].name)
        console.log(e.target.files)
        // setMediapath(e.target.files[0].name)
        setProfilePic(e.target.files[0])

    }
    const departmentArr = [
        "Biological Science Technology",
        "Chemical science Technology",
        "Computer science",
        "Food Science and Technology",
        "Mathematics and Statistics",
        "Nutrition and Dietetics",
        "Hospitality Management Technology",
        "Science Laboratory Technology",
        "Leisure and Tourism  Management",
        "Agricultural Technology",
        "Agricultural and Bio-Environmental Engineering Technology",
        "Animal Health and Production Technology",
        "Accountancy",
        "Bussiness Administration and Management",
        "Purchasing and Supply",
        "Public Administration",
        "Legal Studies",
        "Office Technology and Management",
        "Library and Information Science",
        "- Electrical/Electronic Engineering Technology",
        "Mechanical Engineering Technology",
        "Civil Engineering Technology",
        "Computer Engineering  Technology",
        "Chemical Engineering Technology",
        "urveying and Geoinformatics",
        "Quantity Surveying",
        "Estate Management Evaluation",
        "Architectural Technology",
        "Environmental Science",
        "Urban and Regional Planning",
        "Building Technology",
        "Pre-ND Science and Engineering",
        "Prelim Social and Management Sciences",
        "General Studies"
    ];
    const schooltArr = [
        "FACULTY OF SCIENCE AND  TECHNOLOGY",
        "FACULTY OF AGRICULTURAL SCIENCE AND TECHNOLOGY",
        "FACULTY OF COMMUNICATION AND INFORMATION TECCHNOLOGY",
        "FACULTY OF ENVIRONMENTAL SCIENCE AND TECHNOLOGY",
        "FACULTY OF PRELIMINARY AND GENERAL STUDIES"
    ];

    const semestertArr = [
        "first-semester",
        "second-semester",
    ];
    const programmArr = [
        "full-time",
        "part-time",
    ];

    const levelArr = [
        "100 level",
        "200 level",
        "300 level",
        "400 level",
        "500 level",
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            setError('')
            //   console.log("past question",coursePastQuestionPdf)

            uploadProfilePic(profilePic)

        } catch (err) {

            console.log(err)
            let errMsg = err.message;
            setError(errMsg)
            setLoading(false)

        }
    }

    const title = useRef(null)
    const courseCode = useRef(null)
    const authors = useRef(null)
    const department = useRef(null)
    const school = useRef(null)
    const inputRef = useRef(null)
    const program = useRef(null)
    const level = useRef(null)
    const semester = useRef(null)
    const courseResourceLink = useRef(null)


    const nfcNumner = useRef(null)
    const name = useRef(null)
    const email = useRef(null)
    const phone = useRef(null)
    const matricNumber = useRef(null)





    return (
        <div className='pb-[36px] md:py-[50px] px-[16px] overflow-hidden md:px-[40px] flex flex-col space-y-[24px] md:space-y-[64px] h-screen overflow-y-scroll scroll-hidden '>
            <h3 className=' text-[#1A1A1A] text-[24px] leading-[32px] textmed '>Add Students </h3>
            <hr className='h-[1px] md:hidden bg-[#d9d9d9] w-[500px]  ml-[-16px] ' />

            <form onSubmit={handleSubmit} className=' flex-col flex space-y-[16px] md:space-y-[32px] max-w-[568px] ' >

                <div>
                    <input className='  p-[16px]  border border-[#B3B3B3] rounded-[8px] outline-none text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]  hidden' type="file"
                        ref={inputRef}
                        onChange={handleProfilePic}
                        accept="image/*"
                        required />

                    <div className=' rounded-full  w-[64px] h-[64px] overflow-hidden '>
                        {
                            profilePic ? (
                                <img
                                    src={profilePic}
                                    alt="Selected"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M58.6663 31.9999C58.6663 46.7275 46.7273 58.6666 31.9997 58.6666C17.2721 58.6666 5.33301 46.7275 5.33301 31.9999C5.33301 17.2723 17.2721 5.33325 31.9997 5.33325C46.7273 5.33325 58.6663 17.2723 58.6663 31.9999ZM39.9997 23.9999C39.9997 28.4182 36.418 31.9999 31.9997 31.9999C27.5814 31.9999 23.9997 28.4182 23.9997 23.9999C23.9997 19.5816 27.5814 15.9999 31.9997 15.9999C36.418 15.9999 39.9997 19.5816 39.9997 23.9999ZM31.9996 54.6666C36.7571 54.6666 41.1722 53.2009 44.8181 50.6965C46.4284 49.5903 47.1166 47.4832 46.1804 45.7685C44.2395 42.2139 40.2403 39.9999 31.9995 39.9999C23.7588 39.9999 19.7596 42.2138 17.8187 45.7684C16.8825 47.483 17.5706 49.5901 19.1809 50.6963C22.8268 53.2008 27.2421 54.6666 31.9996 54.6666Z" fill="#808080" />
                            </svg>
                        }
                    </div>

                    <h1 className='text-[#036] textmed mt-[5px] font-[500] cursor-pointer ' onClick={() => {
                        inputRef.current.click()
                    }} >{profilePic ? "Change Picture" : "Upload Picture"}</h1>

                </div>


                <div className=" flex flex-col space-y-[8px]">
                    <label className='text-[14px] font-[400]' >NFC Card No</label>
                    <input className='  p-[16px] border border-[#B3B3B3] rounded-[4px] text-black textmed outline-none text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]  ' type="text" ref={nfcNumner} required placeholder='Enter NFC card No' />
                </div>
                <div className=" flex flex-col space-y-[8px]">
                    <label className='text-[14px] font-[400]' >Full Name</label>
                    <input className='  p-[16px] border border-[#B3B3B3] rounded-[4px] text-black textmed outline-none text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]  ' type="text" ref={name} required placeholder='Full name' />
                </div>
                <div className=" flex flex-col space-y-[8px]">
                    <label className='text-[14px] font-[400]'>Matriculation Number</label>
                    <input className='  p-[16px] border border-[#B3B3B3] rounded-[4px] text-black textmed outline-none text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]  ' type="text" ref={matricNumber} required placeholder='Enter Matric Number' />
                </div>
                {/* <div className=" flex flex-col space-y-[8px]  ">
                    <label className='text-[14px] font-[400]  ' >Email</label>
                    <input className='  p-[16px] border border-[#B3B3B3] rounded-[4px] text-black textmed outline-none text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]  ' type="email" ref={email} required />
                </div>
                <div className=" flex flex-col space-y-[8px]  ">
                    <label className='text-[14px] font-[400]  ' >Phone</label>
                    <input className='  p-[16px] border border-[#B3B3B3] rounded-[4px] text-black textmed outline-none text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]  ' type="tel" ref={phone} required />
                </div> */}

                <div className='flex flex-col md:flex-row items-center justify-between w-full gap-[16px] md:gap-[40px] ' >
                    <select className='w-full  p-[16px] border border-[#B3B3B3] rounded-[4px] text-black textmed outline-none text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]  ' ref={school} required>
                        <option value="" disabled selected>Faculty</option>
                        {schooltArr &&
                            schooltArr.map((data) => <option value={data}>{data}</option>)
                        }
                    </select>

                    <select className='w-full  p-[16px] border border-[#B3B3B3] rounded-[4px] text-black textmed outline-none text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]  ' ref={department} required>
                        <option value="" disabled selected>Department</option>
                        {departmentArr &&
                            departmentArr.map((data) => <option value={data}>{data}</option>)
                        }
                    </select>

                </div>


                <div className='flex flex-col md:flex-row w-full items-center justify-between gap-[16px] md:gap-[40px] ' >
                    <select className='w-full  p-[16px] border border-[#B3B3B3] rounded-[4px] text-black textmed outline-none text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]  ' ref={program} required>
                        <option value="" disabled selected>Program</option>
                        {programmArr &&
                            programmArr.map((data) => <option value={data}>{data}</option>)
                        }
                    </select>

                    <select className='w-full  p-[16px] border border-[#B3B3B3] rounded-[4px] text-black textmed outline-none text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]  ' ref={level} required>
                        <option value="" disabled selected>Level</option>
                        {levelArr &&
                            levelArr.map((data) => <option value={data}>{data}</option>)
                        }
                    </select>
                </div>

                {/* <select className='w-full  p-[16px] border border-[#B3B3B3] rounded-[4px] text-black textmed outline-none text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]  ' ref={semester} required>
                    <option value="" disabled selected>Semester</option>
                    {semestertArr &&
                        semestertArr.map((data) => <option value={data}>{data}</option>)
                    }
                </select> */}


                {/* <div className='row'>
                    <div className=" flex flex-col space-y-[8px]  file-field input-field col s12">
                        <div className=" flex flex-col space-y-[8px]  btn">
                            <span>Pick User Profile Pic </span>
                            <input className='  p-[16px] border border-[#B3B3B3] rounded-[8px] outline-none text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]  ' type="file"
                                onChange={handleProfilePic}
                                required />
                        </div>
                        <div className=" flex flex-col space-y-[8px]  file-path-wrapper">
                            <input className='  p-[16px] border border-[#B3B3B3] rounded-[8px] outline-none text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]  ' class="file-path validate" type="text" />
                        </div>
                    </div>
                    <div className='col s12'>
                        {profilePic &&
                            <div className="col s12" style={{
                                padding: "8px"
                            }}>
                                <div className='col s12'>
                                    <b>Course  Curriculum Pdf</b>
                                </div>
                                <div className=" col s12 grey lighten-2" style={{
                                    borderRadius: "5px"
                                }}>
                                    <h5>{profilePic.name}</h5>
                                </div>
                                <div className="progress col s12">
                                    <div className="determinate" style={{ width: `${profilePicPerc}%` }}></div>{coursePdfPerc}
                                </div>
                            </div>
                        }
                    </div>

                </div> */}

                <div className=' w-full flex  md:justify-start items-center justify-center '>
                    {loading ?
                        <button type='submit' disabled className='btn disabled textmed ' >
                            Loading
                        </button>
                        :
                        <button type='submit' disabled={loading} className='textmed bg-[#036] py-[12px] px-[16px] w-full md:w-[185px] text-white font-[500] text-center items-center rounded-[4px] text-black textmed  ' >
                            Register User
                        </button>
                    }

                </div>


            </form>
        </div>
    )



    async function uploadProfilePic(file) {
        console.error("start curriculum uplaod");

        var dnwUrl;
        // var metadata = {
        //   contentType: 'pdf/*'
        // };
        var uploadTask = storage.ref().child('registeredStudents/' + file.name).put(file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setProfilePicPerc(progress)
            },
            (error) => {

                switch (error.code) {
                    case 'storage/unauthorized':
                        setError(`User doesn't have permission to access the object`)
                        break;
                    case 'storage/canceled':
                        setError(`User canceled the upload`)
                        break;
                    case 'storage/unknown':
                        setError(`Unknown error occurred, inspect error.serverResponse`)
                        break;
                    default:
                }
            },
            () => {

                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    dnwUrl = downloadURL
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
                        "profilePic": dnwUrl,
                        "cardNumber": nfcNumner.current.value,
                        "name": name.current.value,
                        "email": email.current.value,
                        "phone": phone.current.value,
                        "matricNumber": matricNumber.current.value,
                        "department": department.current.value,
                        "school": school.current.value,
                        "program": program.current.value,
                        "level": level.current.value,
                        "semester": semester.current.value,
                        "createdAt": today
                    }
                    firestore.collection('registeredStudents').doc().set(dataToPush)
                        .then(() => {
                            // firestore push success  
                            console.log("firestore push success ");

                            setSuccess("Student register Added Successfully")
                            alert("Student register Added Successfully")
                            history.push('/')
                        })
                        .catch((error) => {
                            // firestore error push
                            console.error("Error writing document firestore: ", error);
                            let errMsg = error.message;
                            setError(errMsg)
                        });


                }).catch((error) => {
                    // console.error("Error writing document: ", error);
                    let errMsg = error.message;
                    setError(errMsg)
                });
            }
        );

    }
}

export default AddUser