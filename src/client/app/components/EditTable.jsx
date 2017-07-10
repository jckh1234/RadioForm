import React from 'react';
import PropTypes from 'prop-types';
import EditTableColumnHeader from './EditTableColumnHeader.jsx';
import EditTableRow from './EditTableRow.jsx';

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: 12
}

const checkboxStyle = {
   
}

class EditTable extends React.Component {
    render() {
        return (
            <div>
                <table style={tableStyle}>
                    <thead>
                        <EditTableColumnHeader cols={this.props.cols} />
                    </thead>
                    <tbody>
                        {this.renderRows(this.props.rows)}
                    </tbody>
                </table>
            </div>
        );

    }

    renderRows(rows) {
        return (rows.map(
            function (row) {
                return (<EditTableRow key={row.id} id={row.id} fields={row.fields} />);
            }.bind(this)
        ));

    }
}

//EditPanelHeader.defaultProps = {
//    selected: false,
//    title: ''
//};

//EditPanelHeader.propTypes = {
//    selected: PropTypes.bool.isRequired,
//    title: PropTypes.string
//};
export default EditTable;

