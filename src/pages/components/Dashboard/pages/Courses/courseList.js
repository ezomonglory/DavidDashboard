import React, { useEffect, useState } from 'react'
import CircleProgressLoader from '../../../../widget/circle_progress_loader';
import firebase from 'firebase/app'
import { storage, firestore, } from './../../../../../firebase'
import {useHistory} from 'react-router-dom'
import { Button } from '../../dahsboard.style';

function CourseList() {
    const [loading, setLoading] = useState(true)
    const [rows,setRows] = useState([])
    const [isEmti,setIsEmpti] = useState(false)
    // 
const [error, setError] = useState(null)
const [success, setSuccess] = useState(null)
const history = useHistory()


    const deleteCourse = async (id)=>{
      console.log(id)
    
      // e.preventDefault();
        setLoading(true)
        try {
          setError('')
          await firestore.collection('courses').doc(id).delete()
          .then(() => {
            // firestore push success  
              alert("course deleted");
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
    useEffect(() => {
      var tt= firestore.collection('courses')
        tt.get().then((item) => {
            setLoading(true)
              const items = item.docs.map((doc) => doc)
              if (items.length==0) {
                setIsEmpti(true)
              }
              setRows(items)
              console.log("---=-====-==---")
              console.log(items)
                setTimeout(() => {
                setLoading(false)
                }, 3000)
          }).catch((e) => {
              console.log("error from snapshot",e)
          })
      },[])
      return (
        <div>
    
          <div className='container'>        
            <div>
              <h2>Courses</h2>
            </div>
            {loading && 
                <div className="row">
                  <div className="col s12 left">
                    <CircleProgressLoader/>
                  </div>
                </div>
              }
            {!isEmti  &&
            <table className="striped">
                <thead>
                  <tr>
                      <th>Title</th>
                      <th>Course Code</th>
                      <th>Lecturers</th>
                      <th>Action</th>
                  </tr>
                </thead>
    
                <tbody>
                  {!loading &&
                    
                    rows.map((data) => <tr>
                          <td>{data.data()['title']}</td>
                          <td>{data.data()['codeCode']}</td>
                          <td>{data.data()['authors'] == "Null" || data.data()['authors'] == "Null "  ? '' :data.data()['authors']   }</td>
                          <td>
                            <Button className='teal btn btn-flat center white-text' to='/coursesDetails'>
                                View
                            </Button>
                            {loading &&
                              <button  className='btn btn-flat center white-text red' disabled="true" >
                                <i className='material-icons'>loading</i>
                              </button>
                            }
                            {!loading &&
                              <button  className='btn btn-flat center white-text red' onClick={()=>deleteCourse(data.id)}>
                                <i className='material-icons'>delete</i>
                              </button>
                            }
                          </td>
                        </tr> 
                      )
                  }
                 
                </tbody>
              </table>
            }
            { isEmti &&
                <div className="row">
                  <div className="col s12 center">
                <h5 className="grey-text">Data not found</h5>
                  </div>
                </div>
            }
    
          </div>
        </div>
      )}

export default CourseList