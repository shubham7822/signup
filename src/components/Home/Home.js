import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
function Home() {
  const [{ detail }, dispatch] = useStateValue();

  const [name, setName] = useState("");
  const [empId, setEmpId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = (e) => {
    let count = 0;
    if (name && empId && email && password) {
      dispatch({
        type: "EMP_DETAIL",
        item: {
          id: count++,
          name: name,
          empId: empId,
          email: email,
          password: password,
        },
      });
    }
    setName("");
    setEmail("");
    setEmpId("");
    setPassword("");

    e.preventDefault();
  };

  return (
    <div className='Home'>
      <form className='Home__form'>
        <div>
          <label htmlFor='UserName'>userName</label>
          <input
            className='Home__input'
            value={name}
            type='text'
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter your UserName'
          />
        </div>
        <div>
          <label htmlFor='EmployeId'>Employee Id</label>
          <input
            className='Home__input'
            type='text'
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
            placeholder='Enter your EmployeId'
          />
        </div>
        <div>
          <label htmlFor='Email'>Email</label>
          <input
            className='Home__input'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your Email'
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            className='Home__input'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
          />
        </div>
        <button onClick={HandleSubmit} className='Home__btn'>
          Sign up
        </button>
        <Link to='/detail' className='Home__btn'>
          Login
        </Link>
        <p>
          Alerdy An Employee ? <span id='Home__para'> Please Login</span>
        </p>
      </form>
      <div className='Home__second__sec'>
        <h1>Welcome</h1>
      </div>
    </div>
  );
}

export default Home;
