import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName } from "../store/slices/name.slice";
import Logo from './img/98042af437fdff212d3259040db2e2db.png';

const InputName = () => {

  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const enterName = () => {
    dispatch(changeName(userName));
    navigate("/characters")
  }

  return (
    <div className="InputNameContainer">
      <img src={Logo} alt="React Logo" />
      <h1>Hello trainer!</h1>
      <p>To be able to continue, register your name</p>
      <input className="inputName"
        type="text"
        onChange={e => setUserName(e.target.value)}
        placeholder="Your name"
        value={userName}
      />
      <button className="buttonName" onClick={enterName}>Enter</button>
    </div>
  );
};

export default InputName;