import React, { Component } from 'react';
import  './CheckboxCountBox.css';

class CheckboxCountBox extends Component {
    constructor(props) {
        //all the checkedbox will be recived here , we will keep in state
        super(props);
        this.state = {
            items: this.props.items.concat()
        }
    }



    //once user will click on checkbox then mention below function will executed 
    //and it will checked  ,on again click it will be uncheked 
   
    onCheckChange(idx) {
        return () => {
            const items = this.state.items.concat();
            items[idx].checked = !items[idx].checked;
            this.setState({ items });
        }
    }

    //mention below function will count the number of checked box is checked and return the value 
    totalChecked() {
        return this.state.items.filter(props => props.checked).length;
    }


    render() {
        const Item = props => (
            <div>
                <input type="checkbox" checked={props.checked} onChange={props.onCheckChange} />
                {props.value}
            </div>
        )
        return (
            <div class="boxMargin">
                {this.state.items.map((props, idx) => (
                    <Item {...props} key={idx} onCheckChange={this.onCheckChange(idx)} />
                ))}
                <br />
                Total CheckBox Checked ::  <span> {this.totalChecked()}</span>
            </div>
        )
    }
}

export default CheckboxCountBox;