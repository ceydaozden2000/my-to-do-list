import React from 'react'

class DersOlustur extends React.Component {
    constructor(props){
        super(props)

        this.state = { 
            userName :'',
            course : '',
            date : '',
        }
    }
    changeUsername = (event) => {
        this.setState({
            userName: event.target.value
        } )   
    }
    changeLesson = (event) => {
        this.setState({
            course: event.target.value
        } )   
    }
    changeDate = (event) => {
        this.setState({
            date: event.target.value
        } )
        console.log(this.date);   
    }

    alertName = (event) => {
        alert(`Course ${this.state.userName} ${this.state.course} ${this.state.date} `)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <div>
                    <input onChange={this.changeUsername} type='text' value={this.state.userName} />
                </div>
                <div>
                    <select onChange={this.changeLesson} value={this.state.course}>
                        <option>typeScript</option>
                        <option>React</option>
                        <option>Angular</option>
                    </select>
                </div>
                <div>
                    <input onChange={this.changeDate} type='date' value={this.state.date} />
                </div>
                <div>
                    <button onClick={this.alertName} type='submit'>submit</button>
                </div>

            </div>
        )
    }
}
export default DersOlustur