import "babel-polyfill";
import React from 'react';
import {render} from 'react-dom';


import mountingDomID from 'mountingDomID';
import store from 'store';

import Content from './Content.jsx';
import TablePanelList from './TablePanelList.jsx';


const submissionOptions = 
	[
		{
			type:'A',
			display:'Apply'
		},	      	
		{
			type:'T',
			display:'Terminate'
		},	
	  	{
			type:'C',
			display:'Change'
		}
	];

class Form extends React.Component {

	constructor() {
		super();
	    this.state={
	      page:{},
	      submissionOptions:submissionOptions
	    }

	}

    render () {

        return (

		  	<div style={{fontFamily:'Tahoma'}}>

		  		<Content store={this.props.store} submissionOptions={this.state.submissionOptions} page={this.state.page}/>

			</div>
			 
        );

    }

	componentDidMount(){

		this.props.store.subscribe(()=>{

		  this.setState({
		    page:this.props.store.getState()
		  });

		}).bind(this);

	}


    componentWillMount(){

	    document.body.style.margin = "0px";
	    
	}
}

class UserInfo extends React.Component {

	constructor() {
		super();
		this.state ={
			tables : []
		}
	}

    render () {

        return (

		  	<div style={{fontFamily:'Tahoma'}}>

		  		<TablePanelList isUserInfo={true} list={this.state.tables} store={this.props.store} checkedColAtRow={() => {}}/>

			</div>
			 
        );

    }

	componentDidMount(){

		this.props.store.subscribe(()=>{

		  this.setState({
		    tables:this.props.store.getState().userInfoPlanTables
		  });

		}).bind(this);

	}


    componentWillMount(){

	    document.body.style.margin = "0px";
	    
	}
}

render(<UserInfo store={store}/>, document.getElementById(mountingDomID.userInfoID));
render(<Form store={store}/>, document.getElementById(mountingDomID.formID));
	

