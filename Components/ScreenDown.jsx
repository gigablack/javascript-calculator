import React,{Component} from 'react'
import {connect} from 'react-redux'

class ScreenDown extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {screenNumbers} = this.props
        return (
            <div>
                <p>{screenNumbers}</p>
                <style jsx>
                    {`
                    div {
                        font-family: 'Orbitron', sans-serif;
                    }
                    p {
                        font-size: 2em;
                        color: #eee5e9;
                        margin: 0px;
                    }
                    `}
                </style>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        screenNumbers: state.screenDown
    }
}

export default connect(mapStateToProps,null)(ScreenDown)