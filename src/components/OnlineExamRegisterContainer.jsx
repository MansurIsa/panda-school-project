import React, { useState } from 'react'
import Logo from './Logo'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../MAIN_API'
import Swal from 'sweetalert2'

const OnlineExamRegisterContainer = () => {


    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [number, setNumber] = useState("")
    const [regErrPsw, setRegErrPsw] = useState("")


    const nameRegisterHandle = (e) => {
        setName(e.target.value)
    }
    const surnameRegisterHandle = (e) => {
        setSurname(e.target.value)
    }
    const emailRegisterHandle = (e) => {
        setEmail(e.target.value)
    }
    const passwordRegisterHandle = (e) => {
        setPassword(e.target.value)
    }

    const numberRegisterHandle = (e) => {
        setNumber(e.target.value)
    }

    const handleOnlineExamRegister = (e) => {
        e.preventDefault()

        const data = {
            email: email,
            name: name,
            surname: surname,
            password: password,
            phone_number: number,
            is_student: true,
            is_superuser: false
        }

        axios(`${baseUrl}exam/create-user/`, {
            method: "POST",
            data

        })
            .then(resp => {
                console.log(resp);
                const data = resp.data
                console.log(data);

                if (resp.status === 200) {

                    Swal.fire({
                        title: "Created",
                        text: "User created",
                        icon: "success",
                        confirmButtonText: "OK",
                    }).then(function () {

                        navigate("/online-exam-signup")
                    });
                }
            }).catch(err => {
                console.log(err)
                Swal.fire({
                    title: "Error",
                    text: "User don't created",
                    icon: "error"
                }).then(function () {
                    navigate("/online-exam-signup")
                });

            })
    }

    const goLogin = () => {
        navigate("/online-exam-login")
    }


    return (
        <div className="online_exam_login_container">
            <div id='online_exam_register' className="exam_login">
                <Logo />

                <form className='online_exam_login_form' onSubmit={handleOnlineExamRegister}>
                    <div className="online_exam_register_line">
                        <div className="online_exam_first_name">
                            <label htmlFor="">Name</label>
                            <input value={name} type="text" placeholder="mansur" onChange={nameRegisterHandle} />
                        </div>
                        <div className="online_exam_last_name">
                            <label htmlFor="">Surname</label>
                            <input value={surname} type="text" placeholder="isayev" onChange={surnameRegisterHandle} />
                        </div>
                    </div>
                    <div className="online_exam_register_line">
                        <div className="online_exam_register_email">
                            <label htmlFor="">Email</label>
                            <input value={email} type="email" placeholder="mansur.isayev@gmail.com" onChange={emailRegisterHandle} />
                        </div>
                        <div className="online_exam_password">
                            <label htmlFor="">Password</label>
                            <input value={password} type="password" placeholder="1234567890" onChange={passwordRegisterHandle} />
                            <p className='online_exam_reg_err_psw'>{regErrPsw}</p>
                        </div>
                    </div>

                    <div className="online_exam_register_line">
                        <div className="online_exam_register_email online_exam_register_number">
                            <label htmlFor="">Nömrə</label>
                            <input value={number} type="number" placeholder="0510000000" onChange={numberRegisterHandle} />
                        </div>

                    </div>
                    <button type="submit" className="exam_login_btn">Register</button>


                </form>

                <div className='exam_go_register exam_go_login'> Have an account?  <button onClick={goLogin}>Log in</button></div>


            </div>
        </div>
    )
}

export default OnlineExamRegisterContainer