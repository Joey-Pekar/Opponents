import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Container, Card, Row, Col } from 'react-bootstrap';

import StatBlock from '../data/StatBlock.json';
import DataFile from '../data/Data.json';

import { TextInput, RequiredTextInput, CharacteristicInput, NumericInput, DefenseInput, SkillInput } from './Fields.jsx';
import { Preview, Download } from './PDF.jsx';


const Editor = () => {

    const [statBlock, setStatBlock] = useState(StatBlock);

    const previewStats = e => {

        e.preventDefault();

        ReactDOM.render(<Preview stats={statBlock} />, document.getElementById('preview'));

    };

    const updateProperty = e => {

        setStatBlock({
            ...statBlock,
            [e.target.name]: e.target.value
        });

    };

    const updateCharacteristic = e => {

        var characteristics = statBlock.Characteristics;

        characteristics[e.target.name] = e.target.value;

        setStatBlock({
            ...statBlock,
            "Characteristics": characteristics
        });

    };

    const updateSkills = e => {

        var skills = statBlock.Skills;

        skills[e.target.name] = e.target.value;

        setStatBlock({
            ...statBlock,
            "Skills": skills
        });

    }

    return (

        <Container>
            <Card>
                <Card.Header>Opponents Editor</Card.Header>
                <Container>
                    <br />
                    <Form onSubmit={previewStats.bind(this)}>
                        <Form.Row>
                            <Col>
                                <RequiredTextInput name="Name" change={updateProperty} />
                            </Col>
                            <Col />
                            <Col />
                        </Form.Row>
                        <TextInput name="Description" change={updateProperty}></TextInput>
                        <Row>
                            <Col>
                                <NumericInput name="Soak" min={0} change={updateProperty} />
                            </Col>
                            <Col>
                                <NumericInput name="Wounds" min={1} change={updateProperty} />
                            </Col>
                            <Col>
                                <NumericInput name="Strain" min={1} change={updateProperty} />
                            </Col>
                            <Col>
                                <DefenseInput min={0} change={updateProperty} />
                            </Col>
                        </Row>

                        <CharacteristicBar change={updateCharacteristic} />

                        <Form.Row>
                            <Col xs lg="1" />
                            <Col >
                                <SkillsGroups name="General" skillGroup={DataFile.Skills.General} change={updateSkills} />
                            </Col>
                            <Col xs lg="2" />
                            <Col >
                                <SkillsGroups name="Combat" skillGroup={DataFile.Skills.Combat} change={updateSkills} />
                                <br />
                                <SkillsGroups name="Social" skillGroup={DataFile.Skills.Social} change={updateSkills} />
                                <br />
                                <SkillsGroups name="Knowledge" skillGroup={DataFile.Skills.Knowledge} change={updateSkills} />
                            </Col>
                            <Col xs lg="1" />
                        </Form.Row>
                        <Download stats={statBlock} />
                    </Form>
                </Container>
            </Card>

        </Container>

    );

}

export { Editor as default }

class CharacteristicBar extends Component {

    render() {

        const characteristics = DataFile.Characteristics.map((x) =>
            <Col key={x}>
                <CharacteristicInput name={x} change={this.props.change}></CharacteristicInput>
            </Col>
        );

        return (

            <React.Fragment>
                <Card.Title>Characteristics</Card.Title>
                <Row>
                    {characteristics}
                </Row>
            </React.Fragment>

        );

    }

} export { CharacteristicBar };

class SkillsGroups extends Component {

    render() {

        const skills = this.props.skillGroup.map((x) =>
            <Row key={x}>
                <SkillInput name={x} change={this.props.change}></SkillInput>
            </Row>
        );

        return (

            <React.Fragment>
                <Card.Title>{this.props.name}</Card.Title>
                {skills}
            </React.Fragment>

        );

    }

} export { SkillsGroups };