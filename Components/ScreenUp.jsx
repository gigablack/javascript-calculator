import React,{Component} from 'react'
import {connect} from 'react-redux'

class ScreenUp extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {screenOperation} = this.props
        return (
            <div>
                <p>{screenOperation}</p>
                <style>
                    {`
                    div {
                        font-family: 'Orbitron', sans-serif;
                    }
                    p {
                        font-size: 1em;
                        color: #d64933;
                        margin-top: 25px;
                        margin-bottom: 0px;
                    }
                    `}
                </style>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        screenOperation: state.screenUp
    }
}

export default connect(mapStateToProps,null)(ScreenUp)