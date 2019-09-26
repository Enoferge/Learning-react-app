import React, {Component} from "react"

class Lesson22 extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    character: data
                });
                console.log(data);
                this.setState({loading: false})
            })
    }

    render() {
        const text = this.state.loading ? 'loading...' : this.state.character.name;
        return (
            <p>{text}</p>
        )
    }
}

export default Lesson22