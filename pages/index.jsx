import React,{Component} from 'react'
import Calculator from '../Components/Calculator.jsx'
import Head from 'next/head'

class Home extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Orbitron&display=swap" rel="stylesheet" />
                </Head>
                <h1>JavaScript Calculator</h1>
                <Calculator />
                <style jsx global>
                    {`
                    :root {
                        --registration-black: #000000;
                        --cornflower-blue: #92dce5;
                        --platinum: #eee5e9;
                        --trolley-grey: #7c7c7c;
                        --vermillion: #d64933;
                        --vermillion-mod: hsl(8, 90%, 50%);
                        height: 80%;
                    }
                    h1 {
                        text-align: center;
                        font-family: 'Orbitron', sans-serif;
                        color: var(--registration-black);
                        font-size: 3em;
                    }
                    body {
                        background-color: var(--cornflower-blue);
                        height: 100%;
                    }
                    div {
                        height: 100%;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default Home