import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.svg'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    email: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if(handleValidation()) {
      alert('form');
    }
    
  }


  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    draggable: true,
    // pauseOnHover: true,
    theme: "dark",
  };

  const handleValidation = () => {
    const {username, password, confirmpassword} = values;
    if (password !== confirmpassword) {
        // console.log("iam validation", toast);
        toast.error('Your password is mismatched', toastOptions);
        return false;
    }
    if (username.length < 3 ) {
      toast.error("Your username should be greater than 3 chars", toastOptions);
      return false;
    }
    return true;
  }
  
  const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value})
  }

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className='brand'>
            <img src={Logo} alt="logo" />
            <h1>chatime</h1>
          </div>
          <input 
            type="text" 
            placeholder="Username" 
            name="username" 
            onChange={e => handleChange(e)}
          />
          <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            onChange={e => handleChange(e)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            name="password" 
            onChange={e => handleChange(e)}
          />
          <input 
            type="password" 
            placeholder="Confirm Your Password" 
            name="confirmpassword" 
            onChange={e => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>Already have an account ? <Link to="/login">Login</Link></span>
        </form>
      </FormContainer>
      <ToastContainer/>
    </>
  )
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content:center;
    img {
      height: 7rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }

  }
  form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background-color: #00000076;
      border-radius: 2rem;
      padding: 3rem 5rem;
      input {
        background-color: transparent;
        padding: 1rem;
        border:0.1rem solid #4e0eff;
        border-radius: 0.5rem;
        color: white;
        width: 100%;
        font-size: 1rem;
        &:focus {
          border: 0.1rem solid #997af0;
          outline: none;
        }
      }
      button {
        color : white;
        background-color : #997af0;
        padding: 1rem 2rem;
        border: none;
        border-radius: 0.7rem;
        font-weight: bold;
        cursor: pointer;
        font-size: 0.9rem;
        text-transform: uppercase;
        transition: 0.5s ease-in-out;
        &:hover {
          background-color: #4e0eff;
        }
      }
      span {
        color: white;
        /* text-transform: uppercase; */
        a {
          color: #4e0eff;
          text-transform: uppercase;
          font-weight: bold;

        }
      }
  }
  

`;

export default Register