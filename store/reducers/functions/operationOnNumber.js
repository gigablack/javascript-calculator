import stringCalculator from 'string-calculator'

const operationOnNumber = (state,operation) => {
    if(operation !== '='){
        // To do
        if(operation == 'del'){
            let newState = Object.assign({},state,{
                screenDown: '0',
                screenUp: '0',
                resetable: true
            })
            return newState
        } else {
            //To do
            if(state.resetable){
                let newState = Object.assign({},state,{
                    screenDown: '0',
                    screenUp: state.screenDown+operation,
                    resetable: true
                })
                return newState
            } else if(state.screenUp === '0'){
                let newState = Object.assign({},state,{
                    screenDown: '0',
                    screenUp: state.screenDown+operation,
                    resetable: true
                })
                return newState
            } else {
                let newState = Object.assign({},state,{
                    screenDown: '0',
                    screenUp: state.screenUp+state.screenDown+operation,
                    resetable: true
                })
                return newState
            }
        }
    } else {
        //To do
        if(/\d$/.test(state.screenUp)){
            let newState = Object.assign({},state,{
                screenDown: state.screenDown,
                screenUp: state.screenDown
            })
            return newState
        }
        /* if(!state.resetable && /\d$/.test(state.screenUp)){
            let newState = Object.assign({},state,{
                screenDown: state.screenDown,
                screenUp: state.screenDown
            })
            return newState
        } */
        let endInNumber = /\d$/.test(state.screenDown)
        if(endInNumber){
            //To do
            let result = stringCalculator(state.screenUp+state.screenDown)
            result = result.toString()
            let newState = Object.assign({},state,{
                screenDown: result,
                screenUp: state.screenUp+state.screenDown,
                resetable: true
            })
            return newState
        } else {
            //To do
            let endInMulOrDiv = /[\*|\/]$/.test(state.screenDown)
            if(endInMulOrDiv){
                //To do
                let newState = Object.assign({},state,{
                    screenDown: state.screenDown+'1'
                })
                return operationOnNumber(newState,'=')
            } else {
                //To do
                let newState = Object.assign({},state,{
                    screenDown: state.screenDown+'0'
                })
                return operationOnNumber(newState,'=')
            }
        }
    }
}

module.exports = operationOnNumber