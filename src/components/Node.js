import React from 'react'
import './Node.css'
export default class Node extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nums: null,
        extraClass: 'red',
        extraBottomBorder: '',
    }
}

    render() {
        const {isRight, term} = this.props;
      
        const toggleClassOnClick = () => {
            if (this.state.extraClass === 'red') {
                this.setState({extraClass: ''})
            }else {
                this.setState({extraClass: 'red'})
            }
        }
        const toggleRightBorder =  isRight ? 'isRight' : ''
        const deTerm = term || ''
        const enablClass = deTerm === '' ? 'enableClass' : ''
        const disable = deTerm === '' ? '' : 'disabled'

        return (
            <input 
            type="number" 
           pattern="\d{4}" 
           onInput={(e) => {if (e.target.value.length > 1) e.target.value = e.target.value.slice(0, 1);}}
            className={`node ${this.state.extraClass} ${toggleRightBorder} ${enablClass}`} onClick={toggleClassOnClick} 
            defaultValue={deTerm} 
            disabled={disable}
            />
               
        )
    }
}