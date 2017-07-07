import React from 'react';
import {render} from 'react-dom';
import {
  Checkbox
} from 'office-ui-fabric-react/lib/Checkbox';
import {
  DetailsList,
  CheckboxVisibility,
  SelectionMode,
  DetailsListLayoutMode
} from 'office-ui-fabric-react/lib/DetailsList';

class MarketDataPlansDetailList extends React.Component {

  constructor (props){
    super(props);
    this.state={
      table:{
        cols:[],
        rows:[]
      }
    }
  }


  render() {
    return (
      <DetailsList
        columns={ this.state.table.cols}
        items={ this.state.table.rows }
        setKey='set'
        checkboxVisibility={CheckboxVisibility.hidden}
        selectionMode={SelectionMode.none}
        onRenderItemColumn={ this._renderItemColumn.bind(this) }
        detailsListLayoutMode={DetailsListLayoutMode.justified}
      />
    );
  }

  componentDidMount(){

    this.props.store.subscribe(()=>{
      this.setState({
        table:{
          cols: this.props.store.getState().table.cols.map(function(col){
            return {
              key: col.id,
              name: col.display,
              fieldName: col.display,
              maxWidth:350,
              minWidth: 100,
              radio: col.radio
            }
          }),
          rows: this.props.store.getState().table.rows
        }
      });
    });
  }


  _renderItemColumn(item, index, column) {
    let fieldContent = item[column.fieldName];
    var field = item.fields.find(function(field){
      return field.key === column.key;
    });
    if(field != null){
      if(column.radio){
        return (        
          <Checkbox
            checked={field.selected}
            label={field.value}
            onChange={() => 
              {
                this._dispatchSelection(column.key, item.id);
              }
            } 
          />
        );
      }
      return (<span>{field.value}</span>);
    }
    return (<span> </span>);
  }


  _dispatchSelection(colId, rowId){
    this.props.store.dispatch(
      {
        type:"SelectedRowRadio",
        row:rowId,
        col:colId
      }
    );
  }

}

export default MarketDataPlansDetailList;