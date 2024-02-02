import React, { useState } from 'react'
import HeaderLoading from './loading/HeaderLoading'
import Logo from './Logo'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../MAIN_API'

const OnlineExamLoginContainer = () => {

    const navigate=useNavigate()

    const [emailValue,setEmailValue]=useState("")
    const [passwordValue,setPasswordValue]=useState("")
    const [errPsw,setErrPsw]=useState("")
    const [errEmail,setErrEmail]=useState("")
    const [loader,setLoader]=useState(false)


    const setEmailChange=(e)=>{
        setEmailValue(e.target.value)
    }

    const setPasswordChange=(e)=>{
        setPasswordValue(e.target.value)
    }


    const examLogin=async(e)=>{
        e.preventDefault()

        // setLoader(true)


        const data = {
            email: emailValue,
            password: passwordValue
            

        }

        console.log(data);
        if (data.password === '' || data.email === '') {

            setErrEmail("Email must be valid")
            setErrPsw("password invalid")
        }
        console.log(data.email);
        localStorage.setItem('onlineExamUser', data.email)
       await axios({
            method: "POST",
            url: `${baseUrl}auth/token/`,
            data,
        }).then((res) => {
            const data = res.data;
            console.log(data)
            if (data.access) {
                localStorage.setItem("ACCESS_TOKEN_EXAM", data.access)
                
                navigate("/dashboard")

            } else {
               
                
            }

           

        }
        
        )

        
        setLoader(false)

    }

    const goRegister=()=>{
        navigate("/online-exam-signup")
    }

    return (
        <div className="online_exam_login_container">
            <div className="exam_login">
                <Logo/>

                <form className='exam_login_form' onSubmit={examLogin}>



                    <div className="exam_login_email login_email">
                        <label htmlFor="">Email</label>
                        <input value={emailValue} onChange={setEmailChange} type="email" placeholder="mansur.isayev@gmail.com" />

                        <p>
                            {(emailValue.length < 1 ? '' : emailValue.includes('@gmail.co') ? '' : emailValue.includes('@mail.ru') ? '' : 'Email must be valid') || errEmail}
                        </p>
                        
                    </div>
                    <div className="exam_login_password login_psw">
                        <label htmlFor="">Password</label>
                        <input type="password" value={passwordValue} onChange={setPasswordChange}
                            placeholder="1234567890" />
                        <p>{passwordValue.length < 1 ? '' : passwordValue.length < 8 ? 'Password must be at least 8 characters' : ''}</p>
                        <p>{errPsw}</p>
                    </div>

                   
                    
                    <button  className="exam_login_btn">Log in</button>
                    {loader ? <HeaderLoading /> : null}
                </form>

                <div className='exam_go_register'>Don't have an account? <button onClick={goRegister}>Register</button></div>
            </div>
        </div>
    )
}

export default OnlineExamLoginContainer