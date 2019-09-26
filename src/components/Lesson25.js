import React, {Component} from "react"

class Lesson25 extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            dietaryRestrictions: {
                vegetarian: false,
                noMilk: false,
                lowFat: false
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {type, name, value, checked } = event.target;
        this.setState(prev => {
            if (type === "checkbox") {
                prev.dietaryRestrictions[name] = checked;
                return prev
            }
            return {
                [name]: value
            }
        })
    }

    render() {
        return (
            <main>
                <form>
                    <input
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    /><br />
                    <input
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    /><br />
                    <input
                        placeholder="Age"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    /><br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                            />Male
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        />Female
                    </label>
                    <br />
                    <label>Destination?</label>
                    <select
                        name="destination"
                        value={this.state.destination}
                        onChange={this.handleChange}
                    >
                        <option value="">-- Please Choose a destination --</option>
                        <option value="Moscow">Moscow</option>
                        <option value="St Petersburg">St Petersburg</option>
                        <option value="Berlin">Berlin</option>
                        <option value="London">London</option>
                        <option value="Rome">Rome</option>
                    </select>
                    <br />

                    <label>
                    <input
                        type="checkbox"
                        name="vegetarian"
                        checked={this.state.dietaryRestrictions.vegetarian}
                        onChange={this.handleChange}
                    />Vegetarian?</label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="noMilk"
                            checked={this.state.dietaryRestrictions.noMilk}
                            onChange={this.handleChange}
                        />No milk?</label>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="lowFat"
                            checked={this.state.dietaryRestrictions.lowFat}
                            onChange={this.handleChange}
                        />Low fat?</label>
                    <br/>
                    <button>Submit</button>
                </form>
                <hr />
                <h2><font color="#3AC1EF">Entered information:</font></h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions:</p>
                <p>Vegetarian: {this.state.dietaryRestrictions.vegetarian ? 'Yes' : 'No'}</p>
                <p>No milk: {this.state.dietaryRestrictions.noMilk ? 'Yes' : 'No'}</p>
                <p>Low fat: {this.state.dietaryRestrictions.lowFat ? 'Yes' : 'No'}</p>
            </main>
        )
    }
}

export default Lesson25