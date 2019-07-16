import React,{Component} from 'react'
import OpButton from './OpButton.jsx'

class OpPad1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            buttons: [
                {
                    operation: 'del',
                    area: 'del'
                },
                {
                    operation: '*',
                    area: 'mul'
                },
                {
                    operation: '/',
                    area: 'div'
                }
            ]
        }
    }

    render(){
        const {buttons} = this.state
        return (
            <div>
                {/* <p>op pad 1</p> */}
                {buttons.map((val,ind) => (<OpButton operation={val.operation} area={val.area} key={ind}/>))}
                <style jsx>
                    {`
                    div {
                        grid-area: a;
                        display: grid;
                        grid-gap: 5px;
                        grid-template-columns: repeat(4,1fr);
                        grid-template-areas: "del del mul div";
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default OpPad1