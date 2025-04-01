import { useState } from "react";
import "./App.css";
import Home from "./home.jsx";
import Login from "./login";
import { Routes, Route } from 'react-router-dom';

function App() {
const dates=[];
const months=["Jan","Feb","mar","Apr","May","June","July","Aus","sep","Oct","Nov","Dec"]
const years=[];
const genders=["Male","Female","Others"];

const [users,setuser]= useState([]);
const [firstname,setfirstname]= useState("");
const [lastname,setlastname]= useState("");
const [date,setdate]= useState("");
const [mont,setmonth]= useState("");
const [yearr,setyear]= useState("");
const [gen,setgender]= useState("");
const [email,setemail]= useState("");
const [password,setpassword]= useState("");

for(let i=1;i<=30;i++){
    dates.push(i);
}
for(let i=1985;i<=2025;i++){
    years.push(i);
}

const handlefirstname=(event)=>{
    setfirstname(event.target.value);
    console.log("firstname:",event.target.value)
}

const handlelastname=(event)=>{
    setlastname(event.target.value);
    console.log("lastname:",event.target.value)
}

const handledate=(event)=>{
    setdate(event.target.value);
    console.log("date",event.target.value)
}

const handlemont=(event)=>{
    setmonth(event.target.value);
    console.log("month:",event.target.value)
}

const handleyear=(event)=>{
    setyear(event.target.value);
    console.log("yearr:",event.target.value)
}

const handlegender=(event)=>{
    setgender(event.target.value);
    console.log("setgender:",event.target.value);
}
const handleemail=(event)=>{
    setemail(event.target.value);
    console.log("Email:",event.target.value);
}

const handlepassword=(event)=>{
    setpassword(event.target.value);
    console.log("password:",event.target.value);
}

const signup=()=>{
    const userdata={
        id:users.length+1,
        firstname,
        lastname,
        date,
        mont,
        yearr,
        gen,
        email,
        password,
    };
    setuser  ([...users,userdata])
    setfirstname("");
    setlastname("");
    setdate("");
    setmonth("");
    setyear("");
    setgender("");
    setemail("");
    setpassword("");
    console.log("userdata:",userdata)
    alert("Signup Successfull");
}

 
  return (
<div>
    <div>
      <h1>Welcome to My App</h1>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

    <div class="signup-wrapper">
    <h1 class="logo-text">facebook</h1>
    <div class="signup-card">
        <h2>Sign Up</h2>
        <p>It’s quick and easy.</p>
        <hr />

        <div class="name-fields">
            <input type="text" placeholder="First name" value={firstname} onChange={handlefirstname} />
            <input type="text" placeholder="Last name" value={lastname} onChange={handlelastname}/>
        </div>

        <label class="form-label">Date of birth</label>
        <div class="date-fields">
            <select id="" value={date} onChange={handledate} >
                {
                    dates.map(day=>(
                        <option value={day}>{day}</option>
                    ))
                }
 
            </select>
            <select id="" value={mont} onChange={handlemont} >
            {
                    months.map(month =>(
                        <option value={month}>{month}</option>
                    ))
            }
            </select>
          
            <select id="" value={yearr} onChange={handleyear}>
            {
                    years.map(year =>(
                        <option value={year} >{year}</option>
                    ))
            }
            </select>

        </div>

        <label class="form-label">Gender</label>
        <div class="gender-selection" value={gen} onChange={handlegender} >
            {   
                
                genders.map(gender=>(
                    <label><input value={gender} type="radio" name="gender" />{gender}</label>
                ))
            }
            
        </div>

        <input type="email" placeholder="Email or phone number" value={email}onChange={handleemail} />
        <input type="password" placeholder="New password" value={password}onChange={handlepassword}/>

        <p class="terms-text">
            By clicking Sign Up, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
        </p>

        <button class="signup-button" onClick={signup}>Sign Up</button>
        <p class="login-text">Already have an account? <a href="#">Log in</a></p>
    </div>
    <h2>USER LIST</h2>
    <table border="1" cellPadding="10">
        <thead>
            <tr>
                <th>id</th>
                <th>Fname</th>
                <th>Lname</th>
                <th>Date</th>
                <th>Month</th>
                <th>Year</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Password</th>
            </tr>    
        </thead>
        <tbody>
            {users.map((user) =>(
                <tr >
                <td>{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.date}</td>
                <td>{user.mont}</td>
                <td>{user.yearr}</td>
                <td>{user.gen}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
               </tr>

            ))}
            
        </tbody>

    </table>
</div>
</div>

  );
}

export default App;
