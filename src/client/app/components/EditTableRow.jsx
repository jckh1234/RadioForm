import React from 'react';

const emptyCellStyle = {
    textAlign: 'left',
    borderWidth: 1,
    borderColor: '#A3C0E8',
    borderStyle: 'solid',
    margin: 0
}

const radioCellStyle = {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#A3C0E8',
    borderStyle: 'solid',
    margin: 0
}

const stringCellStyle = {
    textAlign: 'left',
    borderWidth: 1,
    borderColor: '#A3C0E8',
    borderStyle: 'solid',
    margin: 0,
    paddingLeft: 5
}
class EditTableRow extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <tr key={this.props.id}>
                {
                    this.props.fields.map(
                        function (field) {
                            return this.renderRowCol(field);
                        }.bind(this)
                    )
                }
            </tr>
        );
    }

    renderRowCol(field) {
        //var value = data.find(d => d.key === col.id);
        if (field.title === null || field.title === '') {

            return (
                <td key={field.id} style={emptyCellStyle}>&emsp;</td>
            );

        } else {

            if (field.isRadio) {
                return (
                    <td key={field.id} style={radioCellStyle}>
                        <input
                            type="radio"
                            //disabled={this.props.disabled}
                            checked={field.selected}
                            //onChange={() => {
                            //    this._dispatchSelection(col.id)
                            //}}
                        />
                        <span>{field.title}</span>
                    </td>
                );

            } else {

                return (
                    <td key={field.id} style={stringCellStyle}>
                        {field.title}
                    </td>
                );

            }

        }
    }

    //_dispatchSelection(colId) {

    //    if (!this.props.disabled) {

    //        this.props.checkedColAtRow(this.props.id, colId);

    //    }

    //}
}

export default EditTableRow;