import React from 'react';
import {render} from 'react-dom';
import TablePanelList from './TablePanelList.jsx';

class Content extends React.Component {

	constructor() {
		super();
	}

    render () {
        return (
        	
	        <div style={{borderWidth:1, borderColor:'#A3C0E8', borderStyle:'solid', borderRadius:10, overflow:'hidden'}}>
		        <div style={{textAlign:'center', position:'relative', height:'30px', lineHeight:'30px', backgroundColor:'#F7FAFF'}}>

		          <p style={{ height:'30px', top:'0px', left:5, position:'absolute', margin:0, padding:0}}>
		          	Market Data Subscription
		          </p>

		          <div style={{display:'inline'}}>
		           	{this._generateSubmissionTypeRadios()}
		          </div>

		        </div>
		        <TablePanelList list={this._getTablePanelList()} submissionType={this.props.page.submissionType} store={this.props.store} checkedColAtRow={this._checkedColAtRow.bind(this)}/>
		    </div>
			 
        );
    }



	_generateSubmissionTypeRadios(){
		return (
			this.props.submissionOptions.map(function(option){
				return(
					<div key={option.type} style={{display:'inline'}}>
			            <input
			              type="radio"
			              checked={this.props.page.submissionType === option.type}
			              onChange={()=>{
			                this._dispatchSubmissionTypeSelectionSignal(option.type);
			              }}
			            />
			            <span>{option.display}</span>
					</div>
				);
			}.bind(this))
		);
	}


	_dispatchSubmissionTypeSelectionSignal(type){

	    this.props.store.dispatch(
	    	{
	    		type:"SelectedSubmissionType",
	    		submissionType:type
	    	}
	    );

	}


	_getTablePanelList(){

		switch (this.props.page.submissionType){

			case 'A': return this.props.page.applyPlanTables;
			case 'C': return this.props.page.updatePlanTables;
			case 'T': return this.props.page.deletePlanTables;
			default: return [];

		}
		
	}

	_checkedColAtRow(type,rowId,colId){
	    // alert(rowId + "and" + colId + "and" + type + this.props.page.submissionType);
		this.props.store.dispatch(
			{
				type:"SelectedRowRadio",
				row:rowId,
				col:colId,
				gp:type,
				submissionType:this.props.page.submissionType
			}
		);
	}

}

export default Content;