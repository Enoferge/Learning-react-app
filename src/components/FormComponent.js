import React from "react"

function FormComponent(props) {
    return (
        <main>
            <form>
                <input
                    placeholder="First Name"
                    name="firstName"
                    value={props.state.firstName}
                    onChange={props.handleChange}
                /><br/>
                <input
                    placeholder="Last Name"
                    name="lastName"
                    value={props.state.lastName}
                    onChange={props.handleChange}
                /><br/>
                <input
                    placeholder="Age"
                    name="age"
                    value={props.state.age}
                    onChange={props.handleChange}
                /><br/>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.state.gender === "male"}
                        onChange={props.handleChange}
                    />Male
                </label>
                <br/>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.state.gender === "female"}
                        onChange={props.handleChange}
                    />Female
                </label>
                <br/>
                <label>Destination?</label>
                <select
                    name="destination"
                    value={props.state.destination}
                    onChange={props.handleChange}
                >
                    <option value="">-- Please Choose a destination --</option>
                    <option value="Moscow">Moscow</option>
                    <option value="St Petersburg">St Petersburg</option>
                    <option value="Berlin">Berlin</option>
                    <option value="London">London</option>
                    <option value="Rome">Rome</option>
                </select>
                <br/>

                <label>
                    <input
                        type="checkbox"
                        name="vegetarian"
                        checked={props.state.dietaryRestrictions.vegetarian}
                        onChange={props.handleChange}
                    />Vegetarian?</label>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="noMilk"
                        checked={props.state.dietaryRestrictions.noMilk}
                        onChange={props.handleChange}
                    />No milk?</label>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="lowFat"
                        checked={props.state.dietaryRestrictions.lowFat}
                        onChange={props.handleChange}
                    />Low fat?</label>
                <br/>
                <button>Submit</button>
            </form>
            <hr/>
            <h2><font color="#3AC1EF">Entered information:</font></h2>
            <p>Your name: {props.state.firstName} {props.state.lastName}</p>
            <p>Your age: {props.state.age}</p>
            <p>Your gender: {props.state.gender}</p>
            <p>Your destination: {props.state.destination}</p>
            <p>Your dietary restrictions:</p>
            <p>Vegetarian: {props.state.dietaryRestrictions.vegetarian ? 'Yes' : 'No'}</p>
            <p>No milk: {props.state.dietaryRestrictions.noMilk ? 'Yes' : 'No'}</p>
            <p>Low fat: {props.state.dietaryRestrictions.lowFat ? 'Yes' : 'No'}</p>
        </main>
    )
}

export default FormComponent