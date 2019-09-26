import React, {Component} from "react"
import FormComponent from "./FormComponent"

class FormContainer extends Component {
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
            <FormComponent
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}

export default FormContainer