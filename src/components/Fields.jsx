import React, { Component } from 'react';
import { Form, Container, InputGroup } from 'react-bootstrap';

class TextInput extends Component {

    render() {

        return (
            <Form.Group>
                <Form.Label>{this.props.name}</Form.Label>
                <Form.Control type="text" name={this.props.name} placeholder={this.props.name} onChange={this.props.change}></Form.Control>
            </Form.Group>
        );

    }

} export { TextInput };

class RequiredTextInput extends Component {

    render() {

        return (
            <Form.Group>
                <Form.Label>{this.props.name}</Form.Label>
                <Form.Control type="text" name={this.props.name} placeholder={this.props.name} onChange={this.props.change} required={true}></Form.Control>
            </Form.Group>
        );

    }

} export { RequiredTextInput };

class CharacteristicInput extends Component {

    render() {

        return (

            <Form.Group key={this.props.name}>
                <Form.Control type="number" name={this.props.name} onChange={this.props.change} max="6" min="1" defaultValue={1} ></Form.Control>
                <p className="text-center">{this.props.name}</p>
            </Form.Group>

        );

    }

} export { CharacteristicInput };

class NumericInput extends Component {

    render() {

        return (

            <Form.Group key={this.props.name}>
                <Form.Control type="number" name={this.props.name} onChange={this.props.change} min={this.props.min} defaultValue={this.props.min} ></Form.Control>
                <p className="text-center">{this.props.name}</p>
            </Form.Group>

        );

    }

} export { NumericInput };

class DefenseInput extends Component {


    render() {

        return (
            <Form.Group>
                <InputGroup>
                    <Form.Control type="number" name="MeleeDef" onChange={this.props.change} min={this.props.min} placeholder="Melee" ></Form.Control>
                    <Form.Control type="number" name="RangedDef" onChange={this.props.change} min={this.props.min} placeholder="Ranged" ></Form.Control>
                </InputGroup>
                <p className="text-center">Defense</p>              
            </Form.Group>
        );

    }

} export { DefenseInput }

class SkillInput extends Component {

    render() {

        return (


            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>{this.props.name}</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="number" name={this.props.name} onChange={this.props.change} max="6" min="0" defaultValue={0} ></Form.Control>
            </InputGroup>

        );

    }

} export { SkillInput };