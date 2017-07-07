import React from 'react';
import {render} from 'react-dom';



class PlanTableRow extends React.Component {

  constructor (){
    super();
  }



  render() {
    return (

      <tr key={this.props.id}>
      	{
      		this.props.cols.map(
      			function(col){
      				return this.renderRowCol(col,this.props.data);
      			}.bind(this)
      		)
      	}
      </tr>

    );
  }



  renderRowCol(col, data){
  	var value = data.find(d => d.key === col.id);
  	if(value == null){

	    return (
	    	<td key={col.id} style={{textAlign:'left', borderWidth:1, borderColor:'#A3C0E8', borderStyle:'solid', margin:0}}>&emsp;</td>
	   	);

  	}else{

      if(col.radio){
        return(
          <td key={col.id} style={{textAlign:'center', borderWidth:1, borderColor:'#A3C0E8', borderStyle:'solid', margin:0}}>
            <input
              type="radio"
              disabled={this.props.disabled}
              checked={value.selected}
              onChange={()=>{
                this._dispatchSelection(col.id)
              }}
            />
            <span>{value.value}</span>
          </td>
        );

      }else{

        return(
          <td key={col.id} style={{textAlign:'left', borderWidth:1, borderColor:'#A3C0E8', borderStyle:'solid', margin:0, paddingLeft:5}}>
            {value.value}
          </td>
        );
        
      }

    }
  }

  _dispatchSelection(colId){

      if(!this.props.disabled){

        this.props.checkedColAtRow(this.props.id, colId);

      }
              
  }
}

export default PlanTableRow;