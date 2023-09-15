import React, { useEffect, useState } from 'react'
import CircleProgressLoader from '../../../../widget/circle_progress_loader';
import firebase from 'firebase/app'
import { storage, firestore, } from '../../../../../firebase'
import {useHistory} from 'react-router-dom'


function ClockInpagewidget() {

const history = useHistory()
const [loading, setLoading] = useState(true)
const [rows,setRows] = useState([])
const [isEmti,setIsEmpti] = useState(false)
// 
const [error, setError] = useState(null)






useEffect(() => {
  var tt= firestore.collection('student-clock-in')
    tt.get().then((item) => {
        setLoading(true)
          const items = item.docs.map((doc) => doc)
          if (items.length==0) {
            setIsEmpti(true)
          }
          setRows(items)
          console.log("CLock in history==","---=-====-==---")
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
          <h2>Clock-in history</h2>
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
                  <th>Course</th>
                  <th>Created At</th>
                  <th>Action</th>
              </tr>
            </thead>

            <tbody>
            {!loading &&
                    
                    rows.map((data) => <tr>
                    <td>
                      {/* {data.data()['studentCard']} */}
                      
                      <GetUserDetails data={{
                        "studentCard":data.data()['studentCard'],
                      }}/>
                    </td>
                    <td>{data.data()['clockInSessionId']}</td>
                    <td>{"dskc djk"}</td>
                    <td>{console.log('data==',data.data()['createdAt'])}</td>
                </tr> 
                )
            }
    
             
            </tbody>
          </table>
       

      </div>
    </div>
  )


}

export default ClockInpagewidget




export function GetUserDetails(props) {
const [loading, setLoading] = useState(true)
const [user,setUser] = useState(null)
const id = props.data.studentCard
useEffect(() => {
  var tt= firestore.collection('registeredStudents')
  .where('cardNumber','==', id)
    
    tt.get().then((item) => {
        setLoading(true)
          const items = item.docs.map((doc) => doc)
          if (items.length==0) {
            // setIsEmpti(true)
            // setUser(items[0].data())
          }
          console.log(items[0].data())
          setUser(items[0].data())
          console.log("CLock in name","---=-====-==---")
          console.log(items.length)
            setTimeout(() => {
            setLoading(false)
            }, 3000)
      }).catch((e) => {
          console.log("error from snapshot",e)
      })
  },[])
  return (
    <div>
      {(!loading )  && user.name}
    </div>
  )
}
