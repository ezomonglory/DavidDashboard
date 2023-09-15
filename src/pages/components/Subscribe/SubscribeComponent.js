import React,{ useRef } from "react";
import FooterWidgetComponent from '../../widget/FooterWidget/FooterWidgetComponent';
import HeaderWidgetComponentTransaparent2 from '../../widget/HeaderWidget/HeaderWidgetComponentTransparent2';
import axios from "axios"
import { useHistory } from 'react-router';
import {
   ContainerFluid,
   Container,Button,
   InputField,InputFieldLabel
} from './Subscribe.style';

export default function SubscribeComponent() {
    const history = useHistory();
    const name = useRef(0);
    const email = useRef(0);
    const userType = useRef(0);
    const business = useRef(0);
    const companyName = useRef(0);
    const position = useRef(0);
    const url = 'https://api.moveinturkiye.com/';
    const handleSubmit =async(e)=> {
        e.preventDefault();
        console.log(name.current.value)
        await axios.post(
            // process.env.REACT_APP_API_URL
            url
            ,{
            name: name.current.value,
            email:email.current.value,
            user:userType.current.value,
            business:business.current.value,
            companyName:companyName.current.value,
            position:position.current.value
          })
          .then(function (response) {
            alert("Thank you for subscribiing");
            history.push('/')
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
    };

    return (
    <div>
        <ContainerFluid>
            <HeaderWidgetComponentTransaparent2/>
            <Container>
                <form onSubmit={handleSubmit}>
                    <div className='row mt-20'>
                        <div className='col s12 m12 l5'>
                            <h3 
                            style={{
                            marginLeft:"-10px",
                            fontFamily:"GeneralSans-bold",
                                lineHeight:"124%"
                            }}
                            className='white-text'>
                                We’re glad to have you!
                            </h3>
                            <div>
                                <InputFieldLabel 
                                className='white-text'>Name</InputFieldLabel>
                                <InputField
                                ref={name}
                                placeholder='' required/>
                            </div>
                            <div>
                                <InputFieldLabel
                                className='white-text'>Email</InputFieldLabel>
                                <InputField
                                ref={email}                            
                                placeholder='' type="email" required/>
                            </div>
                            <div>
                                <InputFieldLabel
                                className='white-text'>Seller or Buyer</InputFieldLabel>
                                <InputField 
                                ref={userType}                            
                                placeholder='' required/>
                            </div>
                            <div>
                                <InputFieldLabel 
                                className='white-text'>Business</InputFieldLabel>
                                <InputField
                                ref={business}
                                placeholder='' required/>
                            </div>
                            <div>
                                <InputFieldLabel
                                className='white-text'>CompanyName</InputFieldLabel>
                                <InputField
                                ref={companyName}
                                placeholder='' required/>
                            </div>
                            <div className="">
                                <InputFieldLabel
                                className='white-text'>Position</InputFieldLabel>
                                <InputField
                                ref={position}
                                className="" placeholder='' 
                                required
                            />
                            </div>
                            <div>
                                
                                <Button className='col s12 mt-25'>
                                    Submit
                                </Button>
                            </div>


                        </div>
                    

                    </div>
                    
                </form>
            </Container>
                <br/>
                    <br/>
                    <br/> <br/>
                    <br/>
                    <br/>
        </ContainerFluid>
        
        <FooterWidgetComponent/>
    </div>
  )
}




