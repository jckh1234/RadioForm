import React from 'react';
import PlanTableHeader from './PlanTableHeader.jsx';
import PlanTableRow from './PlanTableRow.jsx'
import PlanTable from './PlanTable.jsx'
import TableFooterReminder from './TableFooterReminder.jsx'

class TablePanel extends React.Component {

  constructor(){
    super();
  }

  render() {

    return (
      <div>
        <div style={{textAlign:'center', position:'relative', height:'30px', lineHeight:'30px', backgroundColor:'#F7FAFF', borderWidth:1, borderColor:'#A3C0E8', borderStyle:'solid'}}>
          
          <input type="checkbox"
            hidden={!this.props.table.selectable}
            checked={(this.props.table.checked)}
            onChange={this._DispatchCollapsibleSignal.bind(this)}
            style={{ height:'20px', top:'5px', left:5, position:'absolute', margin:0, padding:0}}
          />

          {this.props.table.header}

        </div>

        {
          (this.props.table.checked || !this.props.table.selectable) ?(

            <div>

              <PlanTable rows={this.props.table.rows} cols={this.props.table.cols} disabled={this.props.table.disabled} checkedColAtRow={this._checkedColAtRow.bind(this)} overridingMessage={this.props.overridingMessage}/>

              {
                (!this.props.hiddenFooter)?

                    <TableFooterReminder type={this.props.table.type} footer={this.props.table.footer}/>
                    : <div style={{padding:10}}></div>    
              }

            </div>

          ):(null)
        }
      </div>
    );
    
  }


  _DispatchCollapsibleSignal(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.props.panelCheckboxChange(this.props.table.type, value);

  }

  _checkedColAtRow(rowId,colId){
    this.props.checkedColAtRow(this.props.table.type,rowId,colId);
  }
}

export default TablePanel;