import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { firestore } from '../../../../../firebase'
import CircleProgressLoader from '../../../../widget/circle_progress_loader'
import { Button } from '../../dahsboard.style'

function AdminPageWidget() {
const history = useHistory()
const [loading, setLoading] = useState(false)
const [rows,setRows] = useState([])
const [isEmti,setIsEmpti] = useState(false)

// 
const [error, setError] = useState(null)
const [success, setSuccess] = useState(null)

const username = useRef(null)
const pass = useRef(null)

const deleteUser = async (id)=>{
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

  const handleSubmit = async(e) => {
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
        "username":username.current.value,
        "password":pass.current.value,
        "status":"Subadmin",
        "createdAt":today,
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


  const deleteCourse = async (id)=>{
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
    var tt= firestore.collection('registeredStudents')
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
    <div className='container'>
        <div className='row'>
            <h2>Registered Users</h2>  
        </div>  
        {loading && 
            <div className="row">
                <div className="col s12 left">
                <CircleProgressLoader/>
                </div>
            </div>
        }
        <table className='striped'>
            <thead>
            <tr>
                <th>Name</th>
                <th>Matric Number</th>
                <th>Created At</th>
                <th>Action</th>
            </tr>
            </thead>

            <tbody>
            {!loading &&
                    
                    rows.map((data) => <tr>
                    <td>{data.data()['name']}</td>
                    <td>{data.data()['matricNumber']}</td>
                    <td>{data.data()['createdAt']}</td>
                    <td>
                    {/* <Button className='teal btn btn-flat center white-text' to='/noticeDetails'>
                        View
                    </Button> */}
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
        { isEmti &&
            <div className="row">
                <div className="col s12 center">
            <h5 className="grey-text">Data not found</h5>
                </div>
            </div>
        }
    </div>
  )
}

export default AdminPageWidget