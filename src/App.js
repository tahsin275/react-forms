import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters</p>
    );
};

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState("role");

    // capturing value for firstname
    const setFName = (event) => {
        setFirstName(event.target.value);
    };

    console.log(firstName);

    // capturing value for lastname
    const setLName = (event) => {
        setLastName(event.target.value);
    };

    console.log(lastName);

    // capturing value for email
    const setEmailAddr = (event) => {
        setEmail(event.target.value);
    };

    console.log(email);

    // capturing value for password
    const setPass = (event) => {
        setPassword(event.target.value);
    };

    console.log(password);

    // capturing value for email
    const setUserRole = (event) => {
        setRole(event.target.value);
    };

    console.log(role);

    const getIsFormValid = () => {
        // Implement this function
        if (firstName && email && password && role != "role") {
            return true;
        } else {
            return false;
        }
    };

    const clearForm = () => {
        // Implement this function
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false,
        });
        setRole("role");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 8) {
            PasswordErrorMessage();
        } else {
            alert("Account created!");
            clearForm();
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className="Field">
                        <label>
                            First name <sup>*</sup>
                        </label>
                        <input
                            placeholder="First name"
                            value={firstName}
                            onChange={setFName}
                        />
                    </div>
                    <div className="Field">
                        <label>Last name</label>
                        <input
                            placeholder="Last name"
                            value={lastName}
                            onChange={setLName}
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Email address <sup>*</sup>
                        </label>
                        <input
                            placeholder="Email address"
                            value={email}
                            onChange={setEmailAddr}
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Password <sup>*</sup>
                        </label>
                        <input
                            placeholder="Password"
                            value={password.value}
                            onChange={setPass}
                            type="password"
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Role <sup>*</sup>
                        </label>
                        <select value={role} onChange={setUserRole}>
                            <option value="role">Role</option>
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <button type="submit" disabled={!getIsFormValid()}>
                        Create account
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export default App;
