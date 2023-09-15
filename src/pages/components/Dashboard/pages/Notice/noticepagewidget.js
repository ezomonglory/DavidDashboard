import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app'
import { storage, firestore, } from './../../../../../firebase'
function Noticepagewidget() {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  // 
  const [bannerImg, setbannerImgFile] = useState(null)
  const [bannerImgPerc,setbannerImgFilePerc] = useState(0)
  // 

  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  
  
  
  // Ref data
const title = useRef(null)
const department = useRef(null)
const school = useRef(null)
const message = useRef(null)





const handleBannerImg = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0].name)
      console.log(e.target.files)
      // setMediapath(e.target.files[0].name)
      setbannerImgFile(e.target.files[0])
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

const handleSubmit = async(e) => {
  e.preventDefault();
  setLoading(true)

  try {
    setError('')

    var req = await uploadNotice(bannerImg);
    // console.log("hurray we don get artwork url=", artworkUploadUrl)

  } catch (err) {
    
    console.log(err)
    let errMsg = err.message;
    setError(errMsg)
    setLoading(false)

  }
}

  return (
    <div className="container">
      <div className='row'>
        <h2>Post notice</h2>  
      </div>  
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div class="input-field col s12 m6">
            <label >Title</label><br/>
            <input type="text" ref={title} class="validate" required/>
          </div>
          <div class="col s12">
            <label >Notice message</label><br/>
              <textarea class="materialize-textarea"    ref={message} required></textarea>
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
          <div className='row'>
              <div class="file-field input-field col s12">
                <div class="btn">
                  <span>Pick Notice banner </span>
                  <input type="file" 
                    onChange={handleBannerImg}
                  required/>
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text"/>
                </div>
              </div>

              <div className='col s12'>
                {bannerImg &&
                    <div className="col s12" style={{
                        padding: "8px"
                    }}>
                        <div className='col s12'>
                          <b>Course Past Question Pdf</b>
                        </div>
                        <div className=" col s12 grey lighten-2" style={{
                            borderRadius: "5px"
                        }}>
                            <p>{bannerImg.name}</p>
                        </div>
                        <div className="progress col s12">
                            <div className="determinate" style={{width:`${bannerImgPerc}%`}}></div>{bannerImgPerc}
                        </div>
                    </div>
                }
            </div>
          </div>
          <div className='row'>
            <div className='col s12'>
              {loading ?
                <button type='btn' disabled className='btn disabled' >
                  Loading
                </button>
                :<button type='submit' disabled={loading} className='btn ' >
                  Submit
                </button>
              }
            </div>
          </div>
        </div>
      </form>
    </div>
  )



  async function uploadNotice(file) {
    console.error("start course uplaod");

    var dnwUrl;
    var metadata = {
      contentType: 'image/*'
    };
    var uploadTask = storage.ref().child('notice/' + file.name).put(file, metadata);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setbannerImgFilePerc(progress)
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
            "department":department.current.value,
            "school":school.current.value,
            "message":message.current.value,
            "banner":dnwUrl,
            "createdAt": Date.now(),
          }
           firestore.collection('notice').doc().set(dataToPush)
            .then(() => {
              // firestore push success  
                alert("Notice posted ");
                history.push('/')
            })
            .catch((error) => {
              // firestore error push
              // alert("Notice posted ");

              // console.error("Error writing document firestore: ", error);
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
}

export default Noticepagewidget