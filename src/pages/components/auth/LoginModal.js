// import React, { useRef,useState } from 'react'
// import {Link, useHistory } from 'react-router-dom';
// import { useAuth } from './../../../context/AuthContext'
// import {firestore,auth} from './../../../firebase'
// // import Button from '@material-ui/core/Button';
// // import Dialog from '@material-ui/core/Dialog';
// // import DialogContent from '@material-ui/core/DialogContent';
// // import DialogTitle from '@material-ui/core/DialogTitle';
// // import CircularProgress from '@material-ui/core/CircularProgress';
// // "@apollo/client": "^3.3.6",
// //     "@emotion/react": "^11.11.1",
// //     "@emotion/styled": "^11.11.0",
// //     "@material-ui/core": "^4.11.3",
// //     "@material-ui/data-grid": "^4.0.0-alpha.25",
// //     "@material-ui/icons": "^4.11.2",
// //     "@material-ui/lab": "^4.0.0-alpha.57",
// //     "@mui/icons-material": "^5.10.9",
// //     "@mui/material": "^5.14.11",



// export default function AlertDialogSlide() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };


//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   const {login} = useAuth();
//   // error state below
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)
//   const history = useHistory()

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     if (passwordRef.current.value.length < 6 ) {
//             return setError('Password should be at-least 6 chars')
//         }
    
//     try {
//             setError('')
//             setLoading(true)
//             await login(emailRef.current.value,passwordRef.current.value)
//             history.push('/user/home')
//             // history.push('/admin')
          
//         } catch (e) {
//             console.log(e)
//             let errMsg = e.message;
//             setError(errMsg)
//         }
//         setLoading(false)
//   }

//   return (
//     <div>
//       <Button  color="primary" className="col s6 btn-flat btn-large purple darken-4 center white-text"
//         onClick={handleClickOpen}>
//        Log-in
//       </Button>
//       <Dialog
//         open={open}
//         keepMounted
//         aria-labelledby="alert-dialog-slide-title"
//         aria-describedby="alert-dialog-slide-description"
//         scroll={"body"} 
//       >
//         <DialogTitle id="alert-dialog-slide-title">
//           <div className="col s12 right">
//             <button type="button" className="btn-flat center grey lighten-3" onClick={handleClose}>
//               <i className="material-icons">close</i>
//             </button>
//           </div><br></br>
//           <div className="col s12">
//             <h2>Sign in</h2>
//           </div>
          

//         </DialogTitle>
//         <DialogContent  style={{
          
//           width:"300px !important"
//         }}>
//           {/* <DialogContentText id="alert-dialog-slide-description">

//           </DialogContentText> */}

//           <form onSubmit={handleSubmit} >
//           <div className="row">
//              <div className="col s12">
//               {error &&
//                     <div className="row alert-err red" style={{ padding: "16px" }} >
//                         <span className="white-text  mt-25" >
//                             {error}
//                         </span>
//                     </div>
//                 }
//             </div>
//           </div>
//            <div className="row">
                
//                 <div className="input-field col s12">
//                   <input id="email" type="email" ref={emailRef} placeholder="email address" className="validate" required/>
//                 </div>
//                 <div className="input-field col s12">
//                   <input id="password" type="password" ref={passwordRef} placeholder="password" className="validate" required/>
//                 </div>
//             </div>
//             <div className="row">
               
//                 <button disabled={loading} className="btn-flat col s12
//                btn-large center bg-color white-text">
                 
//                   {loading &&
//                     <CircularProgress disableShrink  />
//                   }
//                   {!loading &&
//                       <b>Sign in</b>
//                   }
//               </button>
//             </div>
//           </form>

//         </DialogContent>
      
//       </Dialog>
//     </div>
//   );
// }


import React from 'react'

const LoginModal = () => {
  return (
    <div>LoginModal</div>
  )
}

export default LoginModal