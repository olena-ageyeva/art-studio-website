import React from 'react'
import {Form, FormGroup, ControlLabel, Button } from 'react-bootstrap'

export default class SearchInput extends React.Component {
    constructor({update, label,value, ... props}){
        super(props)
        this.state={
           searchName: value
        }

        this.onValueChange = this.onValueChange.bind(this);
    }
    
    onValueChange(event) {           
        this.props.update(event.target.value);
    }

    render() {        
        return (   
            <Form inline onSubmit={this.onValueChange}>
            <FormGroup controlId="formInlineName">
            <ControlLabel>Name</ControlLabel>{' '}
                <input type="text" name="searchName" onChange={this.onValueChange} value={this.props.searchName} />
            </FormGroup>{' '}
            <Button type="submit" bsSize="small">Search</Button>
            </Form>
        )
    }
}