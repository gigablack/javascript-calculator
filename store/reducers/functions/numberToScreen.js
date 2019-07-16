const numberToScreen = (state,number) => {
    if(/\d$/.test(state.screenUp) && state.resetable){
        let newState = Object.assign({},state,{
            screenDown: number,
            resetable: false,
            screenUp: '0'
        })
        return newState
    }
    if(state.resetable){
        let newState = Object.assign({},state,{
            screenDown: number,
            resetable: false
        })
        return newState
    } else {
        let newState = Object.assign({},state,{
            screenDown: state.screenDown+number
        })
        return newState
    }
}

module.exports = numberToScreen