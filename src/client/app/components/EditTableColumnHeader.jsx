import React from 'react';
import {render} from 'react-dom';

const thStyle = {
    textAlign: 'left',
    borderWidth: 1,
    borderColor: '#A3C0E8',
    borderStyle: 'solid',
    margin: 0,
    backgroundColor: '#D0E4FE',
    fontWeight: 'normal',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5
}

const EditTableColumnHeader = ({ cols }) => {
    return (
        <tr>
            {cols.map(col =>
                <th key={col} style={thStyle}>{col}</th>
            )}
        </tr>
    )
}

export default EditTableColumnHeader;