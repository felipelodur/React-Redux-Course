import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return(
        <div>
            <Sparklines heigh={120} width={120} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
                <div>{average(props.data)} {props.units}</div>
            </Sparklines>
        </div>
    );
}