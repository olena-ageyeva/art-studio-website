import React from 'react'
import {Form, FormGroup, ControlLabel, Button } from 'react-bootstrap'

export default class AddNewItem extends React.Component {
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
            <Form inline onSubmit={this.onSubmit}>
            <FormGroup controlId="formInlineName">
               <ControlLabel>Title</ControlLabel>{' '}
                <input type="text" name="Name" onChange={this.onValueChange} value={this.props.name} />
                <ControlLabel>Link</ControlLabel>{' '}
                <input type="text" name="link" onChange={this.onValueChange} value={this.props.link} />         
            </FormGroup>{' '}
            <Button type="submit" bsSize="small">Add To Gallery</Button>
            </Form>
            
        )
    }
}