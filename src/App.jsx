import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div class="signup-wrapper">
    <h1 class="logo-text">facebook</h1>
    <div class="signup-card">
        <h2>Sign Up</h2>
        <p>It’s quick and easy.</p>
        <hr />

        <div class="name-fields">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
        </div>

        <label class="form-label">Date of birth</label>
        <div class="date-fields">
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
 
            </select>
            <select id="">
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apral</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>Aagust</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nav</option>
                <option>Dec</option>
                
            </select>
          
            <select id="">
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
                <option>2004</option>
                <option>2005</option>
                <option>2006</option>
                <option>2007</option>
                <option>2008</option>
                <option>2009</option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                
            </select>

        </div>

        <label class="form-label">Gender</label>
        <div class="gender-selection">
            <label><input type="radio" name="gender" /> Female</label>
            <label><input type="radio" name="gender" /> Male</label>
            <label><input type="radio" name="gender" /> Custom</label>
        </div>

        <input type="email" placeholder="Email or phone number" />
        <input type="password" placeholder="New password" />

        <p class="terms-text">
            By clicking Sign Up, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
        </p>

        <button class="signup-button">Sign Up</button>
        <p class="login-text">Already have an account? <a href="#">Log in</a></p>
    </div>
</div>


  );
}

export default App;
