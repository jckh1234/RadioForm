import React from 'react';
import PropTypes from 'prop-types';

import EditPanelHeader from './EditPanelHeader.jsx';
import EditTable from './EditTable.jsx';

//import PlanTableHeader from './PlanTableHeader.jsx';
//import PlanTableRow from './PlanTableRow.jsx'

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: 12
}

const rows = [
    //row
    {
            id: 'CME_NPRO',
        fields: [
            {
                    title: 'CME', //literal 
                value: '', //must have uniqure value if isRadio = true
                isRadio: false,
                selected: false,
                },
            {
                    title: 'Free', //literal 
                value: '1', //must have uniqure value if isRadio = true
                isRadio: true,
                selected: true,
                },
            {
                    title: 'USD 1', //literal 
                value: '2', //must have uniqure value if isRadio = true
                isRadio: true,
                selected: false,
                }, {
                    title: 'USD 5', //literal 
                value: '3', //must have uniqure value if isRadio = true
                isRadio: true,
                selected: false,
                },
        ]
        },
    {
            id: 'CBOT_NPRO',
        fields: [
            {
                    title: 'CBOT', //literal 
                value: '', //must have uniqure value if isRadio = true
                isRadio: false,
                selected: false,
                },
            {
                    title: 'Free', //literal 
                value: '1', //must have uniqure value if isRadio = true
                isRadio: true,
                selected: true,
                },
            {
                    title: 'USD 1', //literal 
                value: '2', //must have uniqure value if isRadio = true
                isRadio: true,
                selected: false,
                }, {
                    title: 'USD 5', //literal 
                value: '3', //must have uniqure value if isRadio = true
                isRadio: true,
                selected: false,
                },
        ]
        },
    {
            id: 'NYMEX_NPRO',
        fields: [
            {
                    title: 'NYMEX', //literal 
                value: '', //must have uniqure value if isRadio = true
                isRadio: false,
                selected: false,
                },
            {
                    title: 'Free', //literal 
                value: '1', //must have uniqure value if isRadio = true
                isRadio: true,
                selected: true,
                },
            {
                    title: 'USD 1', //literal 
                value: '2', //must have uniqure value if isRadio = true
                isRadio: true,
                selected: false,
                }, {
                    title: 'USD 5', //literal 
                value: '3', //must have uniqure value if isRadio = true
                isRadio: true,
                selected: false,
                },
        ]
        },
    {
            id: 'COMEX_NPRO',
        fields: [
            {
                    title: 'COMEX', //literal 
                value: '', //must have uniqure value if isRadio = true
                isRadio: false,
                selected: false,
                },
            {
                    title: 'Free', //literal 
                value: '1', //must have uniqure value if isRadio = true
                isRadio: true,
                selected: true,
                },
            {
                    title: 'USD 1', //literal 
                value: '2', //must have uniqure value if isRadio = true
                isRadio: true,
                selected: false,
                }, {
                    title: 'USD 5', //literal 
                value: '3', //must have uniqure value if isRadio = true
                isRadio: true,
                selected: false,
                },
        ]
        },
    {
            id: 'CME_BUNDLE',
        fields: [
            {
                    title: 'CME_BUNDLE', //literal 
                value: '', //must have uniqure value if isRadio = true
                isRadio: false,
                selected: false,
                },
            {
                    title: '', //literal 
                value: '1', //must have uniqure value if isRadio = true
                isRadio: false,
                selected: false
            },
            {
                    title: 'USD 3', //literal 
                value: '2', //must have uniqure value if isRadio = true
                isRadio: true,
                selected: false,
                }, {
                    title: 'USD 15', //literal 
                value: '3', //must have uniqure value if isRadio = true
                isRadio: true,
                selected: false,
                },
        ]
        }
]
class EditPanel extends React.Component {


  render() {
    return (
        <div>
            <EditPanelHeader title={this.props.title} selected={this.props.selected} />
            <EditTable cols={['Market', 'Delay', 'Top of Book', 'Market Depth']}
                rows={rows}
            />         
        </div>
    );
  }

  //renderRows(cols,rows){

  //  return (rows.map(
  //    function(row){
  //      return (<PlanTableRow cols={cols} key={row.id} id={row.id} data={row.fields} disabled={this.props.disabled} checkedColAtRow={this._checkedColAtRow.bind(this)}/>);
  //    }.bind(this)
  //  ));

  //}

  //_checkedColAtRow(rowId, colId){

  //    this.props.checkedColAtRow(rowId,colId);
      
  //}
}

export default EditPanel;