
import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './../../../context/AuthContext';
import FooterWidgetComponent from '../../widget/FooterWidget/FooterWidgetComponent';
import HeaderWidgetComponentTransaparent from '../../widget/HeaderWidget/HeaderWidgetComponentTransparent'
import {
    ContainerFluid,
    Container,
} from './HomeComponent.style';
export default function HomeComponent() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    // error state below
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    // const {login} = useAuth();


    const handleSubmit = async (e) => {
        console.log("adslksdlksd");
        e.preventDefault();
        if (passwordRef.current.value.length < 6) {
            return setError('Password should be at-least 6 chars')
        }

        try {
            // setError('')
            // setLoading(true)
            // await login(emailRef.current.value,passwordRef.current.value)
            // history.push('/user/home')
            // // history.push('/admin')

        } catch (e) {
            console.log(e)
            let errMsg = e.message;
            setError(errMsg)
        }
        setLoading(false)
    }


    const logion = (e) => {
        e.preventDefault();
        setLoading(true)
        console.log("sd")
        setTimeout(() => {
            history.push('/dashboard')
        }, 3000)

    }

    return (
        <div>
            <ContainerFluid>
                <HeaderWidgetComponentTransaparent />

                <Container>
                    <form onSubmit={logion}>

                        <div className='row mt-100'>
                            <div className='col s12 m12 l4'></div>
                            <div className='col s12 m12 l4'>
                                <h2 className='white-text center'> Admin login</h2>
                                <div class="card-panel white">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="email" type="email" ref={emailRef} placeholder="email address" className="validate" required />
                                        </div>
                                        <div className="input-field col s12">
                                            <input id="password" type="password" ref={passwordRef} placeholder="password" className="validate" required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        {/* <Link to="/dashboard"> */}
                                        <button type='submit' onClick={() => logion} className="btn-flat btn teal col s12
                                    btn-large center bg-color white-text">

                                            {loading &&
                                                (

                                                    "Loading...."
                                                )
                                            }
                                            {!loading &&
                                                <b>Login</b>
                                            }
                                        </button>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className='col s12 m12 l4'></div>
                        </div>

                    </form>
                </Container>
            </ContainerFluid>
            <FooterWidgetComponent />
        </div>
    )
}




