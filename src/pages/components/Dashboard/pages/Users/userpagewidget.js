import React, { useEffect, useState } from 'react'
import CircleProgressLoader from '../../../../widget/circle_progress_loader';
import firebase from 'firebase/app'
import { storage, firestore, } from './../../../../../firebase'
import {useHistory} from 'react-router-dom'


function Userpagewidget() {

const history = useHistory()
const [loading, setLoading] = useState(true)
const [rows,setRows] = useState([])
const [isEmti,setIsEmpti] = useState(false)

// 
const [error, setError] = useState(null)
const [success, setSuccess] = useState(null)




const deleteUser = async (id)=>{
  console.log(id)

  // e.preventDefault();
    setLoading(true)
    try {
      setError('')
      await firestore.collection('users').doc(id).delete()
      .then(() => {
        // firestore push success  
        alert("users deleted");
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
  var tt= firestore.collection('users')
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
          <h2>Users</h2>
        </div>
        {loading && 
            <div className="row">
              <div className="col s12 left">
                <CircleProgressLoader/>
              </div>
            </div>
          }
        <table className="striped">
            <thead>
              <tr>
                  <th>Name</th>
                  <th>email</th>
                  <th>phoneNumber</th>
                  <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {!loading &&
                
                rows.map((data) => <tr>
                      <td>{data.data()['name']}</td>
                      <td>{data.data()['email']}</td>
                      <td>{data.data()['phoneNumber']}</td>
                      <td>
                        {loading &&
                            <button  className='btn btn-flat center white-text red' disabled="true" >
                            <i className='material-icons'>loading</i>
                          </button>
                        }
                        {!loading &&
                          <button  className='btn btn-flat center white-text red' onClick={()=>deleteUser(data.id)}>
                            <i className='material-icons'>delete</i>
                          </button>
                        }
                      </td>
                    </tr> 
                  )
              }
             
            </tbody>
          </table>
        {/* {isEmti &&
            <div className="row">
              <div className="col s12 center">
            <h5 className="grey-text">Data not found</h5>
              </div>
            </div>
        } */}

      </div>
    </div>
  )


}

export default Userpagewidget