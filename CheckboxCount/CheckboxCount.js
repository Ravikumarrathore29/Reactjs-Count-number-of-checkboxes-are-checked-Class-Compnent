import React, { Component } from 'react';
import CheckboxCountBox from './CheckboxCountBox';

class CheckboxCount extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        // 5 check box passed as data to another component CheckboxCountBox through items 
        //by default all checkbox will be uncheck as we have set false 
        const data = [
            { checked: false, value: 'Checkbox-1' },
            { checked: false, value: 'Checkbox-2' },
            { checked: false, value: 'Checkbox-3' },
            { checked: false, value: 'Checkbox-4' },
            { checked: false, value: 'Checkbox-5' },
        ];
        return (
            <CheckboxCountBox items={data} />
        )
    }
}
export default CheckboxCount