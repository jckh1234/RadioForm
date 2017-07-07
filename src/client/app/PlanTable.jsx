import React from 'react';
import {render} from 'react-dom';

import PlanTableHeader from './PlanTableHeader.jsx';
import PlanTableRow from './PlanTableRow.jsx'

class PlanTable extends React.Component {

  constructor (){
    super();
  }


  render() {
    return (
      <div>
        <table style={{width:'100%', borderCollapse:'collapse', fontSize:12}}>
          <thead>
            <PlanTableHeader cols={this.props.cols}/>
          </thead>
          {
            (this.props.overridingMessage == null) && 
            <tbody>
              {this.renderRows(this.props.cols,this.props.rows)}
            </tbody>
          }
        </table>

        {
          (this.props.overridingMessage != null) &&
          <div style={{textAlign:'center', height:'30px', lineHeight:'30px', backgroundColor:'#F7FAFF', borderWidth:1, borderColor:'#A3C0E8', borderStyle:'solid'}}>
            {this.props.overridingMessage}
          </div>
        }
      </div>
    );
  }

  renderRows(cols,rows){

    return (rows.map(
      function(row){
        return (<PlanTableRow cols={cols} key={row.id} id={row.id} data={row.fields} disabled={this.props.disabled} checkedColAtRow={this._checkedColAtRow.bind(this)}/>);
      }.bind(this)
    ));

  }

  _checkedColAtRow(rowId, colId){

      this.props.checkedColAtRow(rowId,colId);
      
  }
}

export default PlanTable;