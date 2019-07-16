import React,{Component} from 'react'
import NumberButton from './NumberButton.jsx'

class NumberPad extends Component {
    constructor(props){
        super(props)
        this.state = {
            buttons: [
                {
                    number: '1',
                    area: 'one'
                },
                {
                    number: '2',
                    area: 'two'
                },
                {
                    number: '3',
                    area: 'three'
                },
                {
                    number: '4',
                    area: 'four'
                },
                {
                    number: '5',
                    area: 'five'
                },
                {
                    number: '6',
                    area: 'six'
                },
                {
                    number: '7',
                    area: 'seven'
                },
                {
                    number: '8',
                    area: 'eight'
                },
                {
                    number: '9',
                    area: 'nine'
                },
                {
                    number: '0',
                    area: 'zero'
                }
            ]
        }
    }

    render(){
        const {buttons} = this.state
        return (
            <div>
                {/* <p>number pad</p> */}
                {buttons.map((val,ind) => (<NumberButton number={val.number} area={val.area} key={ind}/>))}
                <style jsx>
                    {`
                    div {
                        grid-area: c;
                        display: grid;
                        grid-template-columns: repeat(3,1fr);
                        grid-template-rows: repeat(4,1fr);
                        grid-gap: 5px;
                        grid-template-areas:
                        "seven eight nine"
                        "four five six"
                        "one two three"
                        "zero zero zero";
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default NumberPad