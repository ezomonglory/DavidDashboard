import React, { useContext, useState, useEffect } from 'react'
import { auth,firestore } from './../firebase'
// import { auth } from './../firebase'


const AuthContext = React.createContext(null);


export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(false)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email,password)
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout() {
        return auth.signOut()
    }
    function forgetPassowrd(email) {
        return auth.sendPasswordResetEmail(email);
    }
    function getUserDoc(email){
        var query = firestore.collection("users").where("email","==",email);

        return query;
     
    }
   
    function refresh() {
        // return window.location.href="http://localhost:3000"
        return window.location.reload()
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe
    },[])
    

    const value = {
        currentUser,
        signup,
        login,
        logout,
        forgetPassowrd,
        refresh,
        getUserDoc
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading  && children}
        </AuthContext.Provider>
    )
}
