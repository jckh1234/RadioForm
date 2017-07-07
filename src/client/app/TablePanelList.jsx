import React from 'react';
import {render} from 'react-dom';
import TablePanel from './TablePanel.jsx';


class TablePanelList extends React.Component {

	constructor() {
		super();
	}

    render () {
        
        return (

		  	<div style={{padding:30}}>

		  		{this._generatetables()}

			</div>
			 
        );

    }

    _generatetables(){

    	return(
	    	this.props.list.map(function(table){

	    		return(

	    			<TablePanel key={table.type} table={table} overridingMessage={this._getOverridingMessage(table)} checkedColAtRow={this._checkedColAtRow.bind(this)} panelCheckboxChange={this._panelCheckboxChange.bind(this)} hiddenFooter={this.props.isUserInfo}/>

	    		)

    		}.bind(this))
    	);

    }

    _checkedColAtRow(type, rowId, colId){

    	this.props.checkedColAtRow(type, rowId, colId);

    }

    _panelCheckboxChange(type,value){

        this.props.store.dispatch(
          {
            type:"PanelSelection",
            gp:type,
            submissionType:this.props.submissionType,
            checked: value
          }
        );

    }

    _getOverridingMessage(table){
        
        if(this.props.isUserInfo){

            if(!table.applied){

                return "No existing ICE market data plan for user";

            }

            return null;

        }else{

            switch(this.props.submissionType){
                case "T": return "Terminate all CME Market Data Subscription";
                default: return null;
            }

        }

    }

}

export default TablePanelList;