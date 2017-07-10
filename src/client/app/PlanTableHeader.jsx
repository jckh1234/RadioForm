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

const PlanTableHeader = ({ cols }) => {
    return (
        <tr>
            {cols.map(col =>
                <th key={col.id} style={thStyle}>{col.display}</th>
            )}
        </tr>
    )
}


//class PlanTableHeader extends React.Component {

//  constructor (){
//    super();
//  }


//  render() {
//    return (
//      <tr>
//        {this.renderColHeader(this.props.cols)}
//      </tr>
//    );
//  }

//  renderColHeader(cols){
//    return (cols.map(
//      function(col){
//            return (<th key={col.id} style={thStyle}>{col.display}</th>);
//      }.bind(this)
//    ));
//  }
//}

export default PlanTableHeader;