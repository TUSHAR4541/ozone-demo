import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';


const SecondColumn = props => (
    props.record.Name === 'expiry' ? 
    <div>{new Date(parseInt(props.record[props.source])).toDateString()}</div> : 
    <div>{props.record[props.source]}</div>
)

export const DemoList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="Name" />
            <SecondColumn source="Value"></SecondColumn>
        </Datagrid>
    </List>
);
