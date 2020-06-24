import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Container, Card } from 'react-bootstrap';

const StatBlockPDF = (props) => {

    const styles = StyleSheet.create({
        topSection: {
            marginHorizontal: 25,
            marginTop: 25
        },
        section: {
            marginHorizontal: 25
        },
        listSection: {
            flexDirection: "row",
            marginHorizontal: 25
        },
        header: {
            fontSize: 24
        },
        normalText: {
            fontSize: 14
        },
        listText: {
            fontSize: 12,
            marginRight: 10
        }
    });

    const charList = Object.entries(props.stats.Characteristics).map(([characteristic, value]) =>
        <Text style={{ fontSize: 12, marginRight: 10 }}>{characteristic}: {value}</Text>
    );

    const skillList = Object.entries(props.stats.Skills).filter(([skill, value]) => value > 0).map(([skill, value]) =>

        <Text style={{ fontSize: 12, marginRight: 10 }}>{skill}: {value}</Text>

    );

    const Gap = (() =>

        <View style={{ marginHorizontal: 25, marginVertical: 5 }}></View>

    );

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.topSection}>
                    <Text style={styles.header}>{props.stats.Name}</Text>
                    <Text style={{ color: 'gray' }}>{props.stats.Description}</Text>
                </View>
                <Gap />
                <View style={styles.section}>
                    <Text style={styles.listText}>Soak: {props.stats.Soak}</Text>
                </View>
                <View style={styles.listSection}>
                    <Text style={styles.listText}>Wound Threshold: {props.stats.Wounds}</Text>
                    <Text style={styles.listText}>Strain Threshold: {props.stats.Strain}</Text>
                </View>
                <View style={styles.listSection}>
                    <Text style={styles.listText}>Melee Defense: {props.stats.MeleeDef}</Text>
                    <Text style={styles.listText}>Ranged Defense: {props.stats.RangedDef}</Text>
                </View>
                <Gap />
                <View style={styles.section}>
                    <Text style={styles.normalText}>Characteristics: </Text>
                </View>
                <View style={styles.listSection}>
                    {charList}
                </View>
                <Gap />
                <View style={styles.section}>
                    <Text style={styles.normalText}>Skills: </Text>
                </View>
                <View style={{ marginHorizontal: 35 }} wrap={false}>
                    {skillList}
                </View>
            </Page>
        </Document>
    );

}

export { StatBlockPDF as Default }

const Preview = (props) => {

    return (
        <Container>
            <Card>
                <PDFViewer stats={props.stats} />
            </Card>
        </Container>
    );

}
export { Preview }

const Download = (props) =>
    <PDFDownloadLink className="btn btn-primary" document={<StatBlockPDF stats={props.stats} />} fileName={props.stats.Name + `.pdf`}>
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download')}
    </PDFDownloadLink>
export { Download }

