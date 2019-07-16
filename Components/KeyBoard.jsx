import React,{Component} from 'react'
import NumberPad from './NumberPad.jsx'
import OpPad1 from './OpPad1.jsx'
import OpPad2 from './OpPad2.jsx'

class KeyBoard extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                {/* <p>KeyBoard</p> */}
                <NumberPad />
                <OpPad1 />
                <OpPad2 />
                <style jsx>
                    {`
                    div {
                        flex-grow: 3;
                        flex-shrink: 1;
                        flex-basis: 3;
                        margin-top: 10px;
                        display: grid;
                        grid-gap: 5px;
                        grid-template-columns: repeat(12,1fr);
                        grid-template-rows: repeat(5,1fr);
                        grid-template-areas:
                        "a a a a a a a a a a a a"
                        "c c c c c c c c c b b b"
                        "c c c c c c c c c b b b"
                        "c c c c c c c c c b b b"
                        "c c c c c c c c c b b b";
                        height: 300px;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default KeyBoard