var mountingDomID = null;
function setUpReact(domID){

	mountingDomID = domID;
    store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
	
}