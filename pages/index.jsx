import React,{Component} from 'react'
import Calculator from '../Components/Calculator.jsx'
import Head from 'next/head'
import store from '../store/store'
import {Provider} from 'react-redux'

class Home extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Orbitron&display=swap" rel="stylesheet" />
                    <title>JavaScript Calculator</title>
                </Head>
                <h1>JavaScript Calculator</h1>
                <Provider store={store}>
                    <Calculator />
                </Provider>
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
                        color: #000000;
                        font-size: 3em;
                    }
                    body {
                        background-color: #92dce5;
                        height: 100%;
                    }
                    div {
                        height: 100%;
                    }
                    @media (max-width: 600px){
                        h1 {
                            font-size: 2em;
                        }
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default Home