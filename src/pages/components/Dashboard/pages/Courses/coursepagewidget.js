import React, { useState,useRef } from 'react'
import firebase from 'firebase/app'
import { storage, firestore, } from './../../../../../firebase'
// import firebase from 'firebase/app'
import {useHistory} from 'react-router-dom'

function Coursepagewidget() {
const history = useHistory()
const [loading, setLoading] = useState(false)
// 
const [coursePdf, setCoursePdfFile] = useState(null)
const [coursePdfPerc,setCoursePdfFilePerc] = useState(0)
// 
const [courseCurriculumPdf, setCourseCurriculumPdfFile] = useState(null)
const [courseCurriculumPdfPerc,setCourseCurriculumPdfFilePerc] = useState(0)
// 
// 
const [coursePastQuestionPdf, setCoursePastQuestionPdfFile] = useState(null)
const [coursePastQuestionPdfPerc,setCoursePastQuestionPdfFilePerc] = useState(0)
// 
const [error, setError] = useState(null)
const [success, setSuccess] = useState(null)



// Ref data
const title = useRef(null)
const courseCode = useRef(null)
const authors = useRef(null)
const department = useRef(null)
const school = useRef(null)
const program = useRef(null)
const level = useRef(null)
const semester = useRef(null)
const courseResourceLink = useRef(null)





   

const handleCoursePdf = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0].name)
      console.log(e.target.files)
      // setMediapath(e.target.files[0].name)
      setCoursePdfFile(e.target.files[0])
  }
}

const handleCourseCurriculumPdf = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0].name)
      console.log(e.target.files)
      // setMediapath(e.target.files[0].name)
      setCourseCurriculumPdfFile(e.target.files[0])
  }
}

const handlePastQuestionPdf = (e) => {
  if (e.target.files[0]) {
    console.log(e.target.files[0].name)
    console.log(e.target.files)
    // setMediapath(e.target.files[0].name)
    setCoursePastQuestionPdfFile(e.target.files[0])
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
  "hnd1", 
  "hnd2", 
  "hnd3"
];


  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)

    try {
      setError('')
      console.log("past question",coursePastQuestionPdf)
      // if(coursePastQuestionPdf == null){
        // console.log("past question no course pdf ",coursePastQuestionPdf)
      // }else{
        var req = coursePastQuestionPdf ==null 
        ?uploadCourseCurriculum(courseCurriculumPdf,"")
        :await uploadPastQuestion(coursePastQuestionPdf)
        ;
      // }
      // console.log("hurray we don get artwork url=", artworkUploadUrl)
      ;
    } catch (err) {
      
      console.log(err)
      let errMsg = err.message;
      setError(errMsg)
      setLoading(false)

    }
  }






  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 '>
            <h1>Add courses</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div class="input-field col s12 m6">
            <label >Title</label><br/>
            <input type="text" ref={title} class="validate" required/>
          </div>
          <div class="input-field col s12 m6">
          <label >Course Code</label><br/>
            <input  type="text" ref={courseCode}  class="validate" required/>
          </div>
          <div class="input-field col s12 m6">
            <label >Lecturer/s</label><br/>
            <input  type="text" ref={authors} class="validate"required/>
          </div>
          <div class="input-field col s12 m6">
            <label >Course Resoures Link</label><br/>
            <input type="text" class="validate" ref={courseResourceLink} />
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
                  <span>Pick Course Past questions Pdf </span>
                  <input type="file" 
                    onChange={handlePastQuestionPdf}
                  />
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text"/>
                </div>
              </div>
              <div className='col s12'>
                {coursePastQuestionPdf &&
                    <div className="col s12" style={{
                        padding: "8px"
                    }}>
                        <div className='col s12'>
                          <b>Course Past Question Pdf</b>
                        </div>
                        <div className=" col s12 grey lighten-2" style={{
                            borderRadius: "5px"
                        }}>
                            <p>{coursePastQuestionPdf.name}</p>
                        </div>
                        <div className="progress col s12">
                            <div className="determinate" style={{width:`${coursePastQuestionPdfPerc}%`}}></div>{coursePdfPerc}
                        </div>
                    </div>
                }
            </div>
          </div>

          <div className='row'>
            <div class="file-field input-field col s12">
              <div class="btn">
                <span>Pick Course Curriculum Pdf </span>
                <input type="file" 
                  onChange={handleCourseCurriculumPdf}
                required/>
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text"/>
              </div>
            </div>
            <div className='col s12'>
                {courseCurriculumPdf &&
                    <div className="col s12" style={{
                        padding: "8px"
                    }}>
                        <div className='col s12'>
                          <b>Course  Curriculum Pdf</b>
                        </div>
                        <div className=" col s12 grey lighten-2" style={{
                            borderRadius: "5px"
                        }}>
                            <p>{courseCurriculumPdf.name}</p>
                        </div>
                        <div className="progress col s12">
                            <div className="determinate" style={{width:`${courseCurriculumPdfPerc}%`}}></div>{coursePdfPerc}
                        </div>
                    </div>
                }
            </div>

          </div>

          <div className='row'>
              <div class="file-field input-field col s12 ">
                <div class="btn">
                  <span>Pick Course Pdf </span>
                  <input 
                  type="file"  
                  onChange={handleCoursePdf}
                  required/>
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text"/>
                </div>
              </div>
              <div className='col s12'>
                {coursePdf &&
                    <div className="col s12" style={{
                        padding: "8px"
                    }}>
                        <div className='col s12'>
                          <b>Course Pdf</b>
                        </div>
                        <div className=" col s12 grey lighten-2" style={{
                            borderRadius: "5px"
                        }}>
                            <p>{coursePdf.name}</p>
                        </div>
                        <div className="progress col s12">
                            <div className="determinate" style={{width:`${coursePdfPerc}%`}}></div>{coursePdfPerc}
                        </div>
                    </div>
                }
            </div>
          </div>

          

          
          
        </div>


        <div className='row'>
          {/* <div className='col s12'>
              {coursePdf &&
                  <div className="col s12" style={{
                      padding: "8px"
                  }}>
                      <div className='col s12'>
                        <b>Course Pdf</b>
                      </div>
                      <div className=" col s12 grey lighten-2" style={{
                          borderRadius: "5px"
                      }}>
                          <p>{coursePdf.name}</p>
                      </div>
                      <div className="progress col s12">
                          <div className="determinate" style={{width:`${coursePdfPerc}%`}}></div>{coursePdfPerc}
                      </div>
                  </div>
              }
          </div> */}
          {/* <div className='col s12'>
              {courseCurriculumPdf &&
                  <div className="col s12" style={{
                      padding: "8px"
                  }}>
                      <div className='col s12'>
                        <b>Course  Curriculum Pdf</b>
                      </div>
                      <div className=" col s12 grey lighten-2" style={{
                          borderRadius: "5px"
                      }}>
                          <p>{courseCurriculumPdf.name}</p>
                      </div>
                      <div className="progress col s12">
                          <div className="determinate" style={{width:`${courseCurriculumPdfPerc}%`}}></div>{coursePdfPerc}
                      </div>
                  </div>
              }
          </div> */}
          {/* <div className='col s12'>
              {coursePastQuestionPdf &&
                  <div className="col s12" style={{
                      padding: "8px"
                  }}>
                      <div className='col s12'>
                        <b>Course Past Question Pdf</b>
                      </div>
                      <div className=" col s12 grey lighten-2" style={{
                          borderRadius: "5px"
                      }}>
                          <p>{coursePastQuestionPdf.name}</p>
                      </div>
                      <div className="progress col s12">
                          <div className="determinate" style={{width:`${coursePastQuestionPdfPerc}%`}}></div>{coursePdfPerc}
                      </div>
                  </div>
              }
          </div> */}
        </div>
        <div className='row'>
          {loading ?
            <button type='btn' disabled className='btn disabled' >
              Loading
            </button>
            :<button type='submit' disabled={loading} className='btn ' >
              Submit
            </button>
          }
          
        </div>
      </form>
    </div>
  )



  async function uploadCourse(file,curriculumlink,pastQuestionLink) {
    console.error("start course uplaod");

    var dnwUrl;
    // var metadata = {
    //   contentType: 'image/*'
    // };
    var uploadTask = storage.ref().child('course/' + file.name).put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setCoursePdfFilePerc(progress)
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
          console.log("pushing to firestore")
          dnwUrl = downloadURL
           var dataToPush = {
            "title":title.current.value,
            "codeCode":courseCode.current.value,
            "authors":authors.current.value,
            "courseResource":courseResourceLink.current.value,
            "department":department.current.value,
            "school":school.current.value,
            "program":program.current.value,
            "level":level.current.value,
            "semester":semester.current.value,
            "curriculemPdfLink":curriculumlink,
            "coursePdfLink":dnwUrl,
            "pastQuestion":pastQuestionLink,
            "createdAt": Date.now(),
            "isActive":false
          }
           firestore.collection('courses').doc().set(dataToPush)
            .then(() => {
              // firestore push success  
                console.log("firestore push success ");
                setSuccess("Poll Added Successfully");
                history.push('/')
            })
            .catch((error) => {
              // firestore error push
              console.error("Error writing document firestore: ", error);
              let errMsg = error.message;
              setError(errMsg)
            });
          
        }).catch((error) => {
          console.error("Error writing document: ", error);
          let errMsg = error.message;
          setError(errMsg)
        });
      }
    );

  }

  async function uploadCourseCurriculum(file,pastQstLink) {
    console.error("start curriculum uplaod");

    var dnwUrl;
    // var metadata = {
    //   contentType: 'pdf/*'
    // };
    var uploadTask = storage.ref().child('course/' + file.name).put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setCourseCurriculumPdfFilePerc(progress)
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

          uploadCourse(coursePdf,dnwUrl,pastQstLink)
           
          
        }).catch((error) => {
          // console.error("Error writing document: ", error);
          let errMsg = error.message;
          setError(errMsg)
        });
      }
    );

  }


  async function uploadPastQuestion(file) {
    console.error("start pastq uplaod");
    setLoading(true)

    var dnwUrl;
    // var metadata = {
    //   contentType: 'image/*'
    // };
    var uploadTask = storage.ref().child('course/' + file.name).put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setCoursePastQuestionPdfFilePerc(progress)
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
          uploadCourseCurriculum(courseCurriculumPdf,dnwUrl);
          
        }).catch((error) => {
          // console.error("Error writing document: ", error);
          let errMsg = error.message;
          setError(errMsg)
        });
      }
    );

  }


}

export default Coursepagewidget