import React, { useRef,useState } from 'react'
import {Link, useHistory } from 'react-router-dom';
import { useAuth } from './../../context/AuthContext'
import {firestore,auth} from './../../firebase'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';

// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContentText from '@material-ui/core/DialogContentText';



export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [artisteStan,setArtisteStan] = useState(false)
  const [userStan,setUserStan] = useState(false)

  const {signup} = useAuth();
  // error state below
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const userTypeValidator = ()=>{
    if(artisteStan){
      setUserStan(false)
      console.log(userStan)
    }
    if(userStan){
      setArtisteStan(false)
      console.log(artisteStan)
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('')
    if (passwordRef.current.value.length < 6 ) {
        return setError('Password should be at-least 6 chars')
    }
    console.log("artiste",artisteStan)
    console.log("user",userStan)

    
    try {
      setError('')
      setLoading(true)
      
      var name = usernameRef.current.value
      var currentemail = emailRef.current.value
      var user= await signup(emailRef.current.value, passwordRef.current.value)
      
      var userCurrent = auth.currentUser;
          console.log(userCurrent)


          userCurrent.updateProfile({
              displayName: name ,
              // photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(function() {
          // Update successful.
              console.log("user details  Update successful")
          }).catch(function(error) {
          // An error happened.    
              console.log(error)
          })
      // console.log(user.user.uid)
        await firestore.collection("users")
          .doc(user.user.uid).set({
              "uid":user.user.uid,
              "displayName":name,
              "email": currentemail,
              "phoneNumber":null,
              "artiste":artisteStan,
              "stan":userStan,
              "wallet_bal":0
          })
      
      history.push('/user/home')



    } catch (e) {
      console.log(e)
      let errMsg = e.message;
      setError(errMsg)
    }
    setLoading(false)
  }

  return (
    <div>
      <Button 
        className="bg-color btn-flat btn-large  center white-text"
        onClick={handleClickOpen}
        style={{width:"100px"}}
      >
       Signup
      </Button>
      <Dialog
        open={open}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        scroll={"body"} 
      >
        <DialogTitle id="alert-dialog-slide-title">
          <div className="col s12 right">
            <button type="button" className="btn-flat center grey lighten-3" onClick={handleClose}>
              <i className="material-icons">close</i>
            </button>
          </div><br></br>
          <div className="col s12">
            <h2>Sign up</h2>
          </div>
          

        </DialogTitle>
        <DialogContent  style={{
          
          minWidth:"350px"
        }}>
          <div className="row">
             <div className="col s12">
              {error &&
                    <div className="row alert-err red" style={{ padding: "16px" }} >
                        <span className="white-text  mt-25" >
                            {error}
                        </span>
                    </div>
                }
            </div>
          </div>
         
          <form onSubmit={handleSubmit}>
          {/* <DialogContentText id="alert-dialog-slide-description">

          </DialogContentText> */}
          <div >
            <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="text" ref={usernameRef} placeholder="username " className="validate" required/>
                </div>
                <div className="input-field col s12">
                  <input id="email" type="email" ref={emailRef} placeholder="email address" className="validate" required/>
                </div>
                
                <div className="input-field col s12">
                  <input id="password" type="password" ref={passwordRef} placeholder="password" className="validate" required/>
                </div>
                
                <div className="col s12 input-field">
                    Register as 
                  <p>
                    <label>
                      <input type="checkbox" disabled={artisteStan} onClick={userTypeValidator} value="artiste" />
                      <span>Artiste</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input type="checkbox" disabled={userStan} onClick={userTypeValidator}  value="stan" />
                      <span>Stan</span>
                    </label>
                  </p>
                </div>
            </div>
            
            <div className="row">
              <button disabled={loading} className="btn-flat col s12
               btn-large center bg-color white-text">
                 
                  {loading &&
                    <CircularProgress disableShrink  />
                  }
                  {!loading &&
                      <b>Sign upsknn</b>
                  }
              </button>
            </div>
          </div>
          </form>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Forget Password? click here
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
