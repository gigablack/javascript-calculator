import React,{Component} from 'react'
import OpButton from './OpButton.jsx'

class OpPad2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            buttons: [
                {
                    operation: '+',
                    area: 'add'
                },
                {
                    operation: '-',
                    area: 'sub'
                },
                {
                    operation: '=',
                    area: 'eq'
                }
            ]
        }
    }

    render(){
        const {buttons} = this.state
        return (
            <div>
               {/*  <p>op pad 2</p> */}
               {buttons.map((val,ind) => (<OpButton operation={val.operation} area={val.area} key={ind}/>))}
                <style jsx>
                    {`
                    div {
                        grid-area: b;
                        display: grid;
                        grid-gap: 5px;
                        grid-template-rows: repeat(4,1fr);
                        grid-template-columns: repeat(1,1fr);
                        grid-template-areas:
                        "add"
                        "sub"
                        "eq"
                        "eq";
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default OpPad2