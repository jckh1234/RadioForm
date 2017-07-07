var store = {};

function selectAllButThisInTable(table,rowId,colKey){

  table.rows.forEach(function(row){
    row.fields.forEach(function(col){
      if(col.key === colKey && row.id === rowId){
        col.selected = true;
      }else{
        col.selected = false;
      }
    });
  });

}

function selectAllButThisInRow(row,colKey){

  row.fields.forEach(function(col){
    if(col.key === colKey){
      col.selected = true;
    }else{
      col.selected = false;
    }
  });

}

function selectDefaultIfNoneSelectedInRow(row){

  var rowHasSelection = row.fields.some(function(col, i, cols){
    return col.selected;
  });          
  if(!rowHasSelection){
    var defaultCol = row.fields.find(function(col){
      return  col.key === row.default;
    })
    if(defaultCol != null){
      defaultCol.selected = true;
    }
  }

}

function removeAllSelectionFromRow(row){

  row.fields.forEach(function(col){
      col.selected = false;
  });

}

function createTableDeepCopy(table){

  return $.extend(true, {}, table);

}

function createShallowEmpyTableCopy(table){

  var copy = $.extend(true, {}, table);;
  copy.rows = [];
  return copy;

}

function getCorrespondingTableFromSubmissionTypeAndGpType(submissionType, gpType, state){
  
  panelTableListToUpdate = [];
  switch(submissionType){

      case 'A': panelTableListToUpdate = state.applyPlanTables;break;
      case 'C': panelTableListToUpdate = state.updatePlanTables;break;
      case 'T': panelTableListToUpdate = state.deletePlanTables;break;
      default:break;
  }

  return panelTableListToUpdate.find(function(table){
            return table.type === gpType;
  });

}


function reducer(state, actions){

  switch (actions.type) {



  	case "ReloadData":

          //reinitialize tables
          var ApplyPlanTables =[];
          var DeletePlanTables = [];
          var UpdatePlanTables = [];
          var UserInfoPlanTables = [];

      		var newData = actions.data;

          newData.forEach(function(newTable){

            //Data Massaging
            if(newTable.singleOpt){

              //check only selected SingleOptCell
              selectAllButThisInTable(newTable, newTable.singleOptSelectedRow, newTable.singleOptSelectedCol)

            }else{

              //check if bundle item is selected
              var bundleItemSelected = false;
              var bundleRow = newTable.rows.find(function(row){
               return row.bundle;
              });
              if(bundleRow != null){
                bundleItemSelected = bundleRow.fields.some(function(col, i ,cols){
                  return col.selected;
                });
              }

              newTable.rows.forEach(function(row){

                if(!row.bundle){
                  if(bundleItemSelected){
                    removeAllSelectionFromRow(row);
                  }else{
                    selectDefaultIfNoneSelectedInRow(row);
                  }                    
                }

              });

            }


            //Dispaly UserInfo Tables
            var userInfoTable;
            if(newTable.applied){
              userInfotable = createTableDeepCopy(newTable);
            }else{
              userInfotable = createShallowEmpyTableCopy(newTable);
            }
            userInfotable.disabled = true;
            UserInfoPlanTables.push(userInfotable);

            //Table In Forms should be selectable
            newTable.checked = false;
            newTable.selectable = true;

            //Duplicating To Corresponding Panels
            if(newTable.applied){

              UpdatePlanTables.push(createTableDeepCopy(newTable));
              DeletePlanTables.push(createShallowEmpyTableCopy(newTable));

            }else{

              ApplyPlanTables.push(createTableDeepCopy(newTable));

            }

          });
          
          return {submissionType:state.submissionType, applyPlanTables:ApplyPlanTables, deletePlanTables:DeletePlanTables, updatePlanTables:UpdatePlanTables, userInfoPlanTables: UserInfoPlanTables};


  	case "SelectedRowRadio":

      		var rowId = actions.row;
      		var colKey = actions.col;
          var gpType = actions.gp;
          var submissionType = actions.submissionType;

      		var newState = Object.assign({},state);

          var tableToUpdate = getCorrespondingTableFromSubmissionTypeAndGpType(submissionType, gpType, newState);

          if(tableToUpdate != null){

            if(tableToUpdate.singleOpt){

              selectAllButThisInTable(tableToUpdate,rowId,colKey);

            }else{

              var selectedRow = tableToUpdate.rows.find(function(row){

                return rowId === row.id;

              });

              if(selectedRow != null){

                if(selectedRow.bundle){

                  selectAllButThisInTable(tableToUpdate, rowId, colKey);

                }else{

                  selectAllButThisInRow(selectedRow, colKey);

                  tableToUpdate.rows.forEach(function(row){
                    if(row.bundle){
                      removeAllSelectionFromRow(row);
                    }else{
                      selectDefaultIfNoneSelectedInRow(row);
                    }
                  });

                }

              }

            }   

          }
          

      		return newState;


    //IN NEED OF MODIFICATION!!!      
    case "PanelSelection":

          var gpType = actions.gp;
          var submissionType = actions.submissionType;
          var checked = actions.checked;

          var newState = Object.assign({},state);
          var tableToUpdate = getCorrespondingTableFromSubmissionTypeAndGpType(submissionType, gpType, newState);
          tableToUpdate.checked = checked;
          return newState;

    case "SelectedSubmissionType":

          var newState = Object.assign({},state);
          newState.submissionType = actions.submissionType;
          return newState;

    default: 

          return {submissionType:"A", applyPlanTables:[], deletePlanTables:[], updatePlanTables:[], displayPlanTables:[]};

  }

}