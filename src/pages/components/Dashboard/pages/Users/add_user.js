import React, { useState,useRef } from 'react'
import firebase from 'firebase/app'
// import firebase from 'firebase/app'
import {useHistory} from 'react-router-dom'
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
const [profilePicPerc,setProfilePicPerc] = useState(0)
// 
const [coursePdfPerc,setCoursePdfFilePerc] = useState(0)

const handleProfilePic = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0].name)
      console.log(e.target.files)
      // setMediapath(e.target.files[0].name)
      setProfilePic(e.target.files[0])
  }
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
        "SCHOOL OF SCIENCE AND  TECHNOLOGY", 
        "SCHOOL OF AGRICULTURAL SCIENCE AND TECHNOLOGY", 
        "SCHOOL OF COMMUNICATION AND INFORMATION TECCHNOLOGY",
        "SCHOOL OF ENVIRONMENTAL SCIENCE AND TECHNOLOGY",
        "SCHOOL OF PRELIMINARY AND GENERAL STUDIES"
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

      const handleSubmit = async(e) => {
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
    <div>
       <h3>AddUser</h3> 
       <form onSubmit={handleSubmit}>
            <div class="input-field col s12 m6">
                <label >Nfc Card Number</label><br/>
                <input  type="text" ref={nfcNumner}  class="validate" required/>
            </div>
            <div class="input-field col s12 m6">
                <label >Name</label><br/>
                <input  type="text" ref={name}  class="validate" required/>
            </div>
            <div class="input-field col s12 m6">
                <label >Matric numner</label><br/>
                <input  type="text" ref={matricNumber}  class="validate" required/>
            </div>
            <div class="input-field col s12 m6">
                <label >Email</label><br/>
                <input  type="email" ref={email}  class="validate" required/>
            </div>
            <div class="input-field col s12 m6">
                <label >Phone</label><br/>
                <input  type="tel" ref={phone}  class="validate" required/>
            </div>
            <select class="browser-default" ref={department} required>
                <option value="" disabled selected>Department</option>
                {departmentArr && 
                departmentArr.map((data)=> <option value={data}>{data}</option>)
                }
            </select>
            <br/>
            <select class="browser-default" ref={school} required>
                <option value="" disabled selected>School</option>
                {schooltArr && 
                schooltArr.map((data)=> <option value={data}>{data}</option>)
                }
            </select>
            <br/>
            <select class="browser-default" ref={program} required>
                <option value="" disabled selected>Program</option>
                {programmArr && 
                programmArr.map((data)=> <option value={data}>{data}</option>)
                }
            </select>
            <br/>
            <select class="browser-default" ref={level} required>
                <option value="" disabled selected>Level</option>
                {levelArr && 
                levelArr.map((data)=> <option value={data}>{data}</option>)
                }
            </select>
            <br/>
            <select class="browser-default" ref={semester} required>
                <option value="" disabled selected>Semester</option>
                {semestertArr && 
                semestertArr.map((data)=> <option value={data}>{data}</option>)
                }
            </select>
            <br/>

            <div className='row'>
                <div class="file-field input-field col s12">
                <div class="btn">
                    <span>Pick User Profile Pic </span>
                    <input type="file" 
                    onChange={handleProfilePic}
                    required/>
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text"/>
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
                                <div className="determinate" style={{width:`${profilePicPerc}%`}}></div>{coursePdfPerc}
                            </div>
                        </div>
                    }
                </div>

            </div>
            <div className='container'>
                <div className='row '>
                {loading ?
                    <button type='submit' disabled className='btn disabled' >
                    Loading
                    </button>
                    :<button type='submit' disabled={loading} className='btn btn-large' >
                    Register User
                    </button>
                }
                
                </div>
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
            "profilePic":dnwUrl,
            "cardNumber":nfcNumner.current.value,
            "name":name.current.value,
            "email":email.current.value,
            "phone":phone.current.value,
            "matricNumber":matricNumber.current.value,
            "department":department.current.value,
            "school":school.current.value,
            "program":program.current.value,
            "level":level.current.value,
            "semester":semester.current.value,
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