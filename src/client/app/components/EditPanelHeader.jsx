import React from 'react';
import PropTypes from 'prop-types';

const divStyle = {
    textAlign: 'center',
    position: 'relative',
    height: '30px',
    lineHeight: '30px',
    backgroundColor: '#F7FAFF',
    borderWidth: 1,
    borderColor: '#A3C0E8',
    borderStyle: 'solid'
}

const checkboxStyle = {
    height: '20px',
    top: '5px',
    left: 5,
    position: 'absolute',
    margin: 0,
    padding: 0
}

class EditPanelHeader extends React.Component {

    render() {
        return (
            <div style={divStyle}>
                <input type="checkbox"
                    checked={(this.props.selected)}
                    //onChange={this._DispatchCollapsibleSignal.bind(this)}
                    style={checkboxStyle}
                />
                {this.props.title}
            </div>
        );
    }

    //_DispatchCollapsibleSignal(event) {
    //    const target = event.target;
    //    const value = target.type === 'checkbox' ? target.checked : target.value;
    //    this.props.panelCheckboxChange(this.props.table.type, value);
    //}
}

EditPanelHeader.defaultProps = {
    selected: false,
    title: ''
};

EditPanelHeader.propTypes = {
    selected: PropTypes.bool.isRequired,
    title: PropTypes.string
};



export default EditPanelHeader;

