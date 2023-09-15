import React, { useEffect, useState } from 'react'
import CircleProgressLoader from '../../../../widget/circle_progress_loader';
import firebase from 'firebase/app'
import { storage, firestore, } from './../../../../../firebase'
import {useHistory} from 'react-router-dom'
import { Button } from '../../dahsboard.style';

function NoticeList() {
    const [loading, setLoading] = useState(true)
    const [rows,setRows] = useState([])
    const [isEmti,setIsEmpti] = useState(false)

    const deleteNotice = async (id)=>{
      console.log(id)
    
      // // e.preventDefault();
      //   setLoading(true)
      //   try {
      //     setError('')
      //     await firestore.collection('notice').doc(id).delete()
      //     .then(() => {
      //       // firestore push success  
      //         alert("Notice deleted");
      //         history.push('/dashboard')
      //     })
      //     .catch((error) => {
      //       // firestore error push
      //       console.error("Error writing document firestore: ", error);
      //       let errMsg = error.message;
      //       setError(errMsg)
      //     });
      
      //   } catch (err) {
          
      //     console.log(err)
      //     let errMsg = err.message;
      //     setError(errMsg)
      //     setLoading(false)
    
      //   }
      
    }
    
    useEffect(() => {
      var tt= firestore.collection('notice')
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
              <h2>Notice</h2>
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
                      <th>Actions</th>
                  </tr>
                </thead>
    
                <tbody>
                  {!loading &&
                    
                    rows.map((data) => <tr>
                          <td>{data.data()['title']}</td>
                          <td>
                            <Button className='teal btn btn-flat center white-text' to='/noticeDetails'>
                                View
                            </Button>
                            <Button className=' btn btn-flat center white-text red' >
                                Delete
                            </Button>
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

export default NoticeList