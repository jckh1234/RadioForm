// JavaScript source code

const inititalState = {
    originalData: {
        tradingRight: ['GF', 'LME'], //[] or ['GF'] or ['GF', 'LME']
        marketData: {
            ProCME: {

            },
            NonProCME: {

            },
            ICE: {

            },
            EUREX: {

            }
        }
    }, //original data from server
    updateData: {}, // updated data from UI
    ui: {
        tradingRightSubscription: {
            enabled: true, //checkbox state
            submissionType: '', //Apply or Terminate
            applyTables: [],
            terminateTable: []
        },
        marketDataSubscription: {
            enabled: true, // checkbox state
            selectedSubmissionType: '', // Apply Terminate Change radio
            //selectedExchange: [] // ProCME/nonProCME/ICE/EUREX
            applyTables: [
                {//table type => editTable component
                    selected: false,
                    title: '',
                    cols: ['Market', 'Delay', 'Top of Book', 'Market Depth'], //column header
                    rows: [
                        //row
                         {
                            id: '1',
                            fields: [
                                {
                                    title: 'CME', //literal 
                                    value: '', //must have uniqure value if isRadio = true
                                    isRadio: false,
                                    selected: false,
                                }
                            ]
                        }
                       ,
                    ], //row
                    type: '', // CME/ICE/EUREX. control footer
                    requireAttachment: false, // show fileUpload
                    selectionOption: {
                        singleChoice: false, //allow single choice only
                        bundleRow: '3', //only one row can be bundle. Select option in bundle will unselect all other options. Match row id
                        defaultValue: '', //match row selected value. Selected if unselect a bundle row
                        // valid option
                        // singleChoice:false, bundleRow: any
                        // ignore bundleRow if singleChoice is true
                    }
                },

            ],
            terminateTables: [
                {//table type => terminateTable component
                    selected: false,
                    title: '',
                    cols: ['Market', 'Delay', 'Top of Book', 'Market Depth'], //column header
                }
            ],
            changeTable: [
                {//table type => editTable component
                    selected: false,
                    title: '',
                    cols: ['Market', 'Delay', 'Top of Book', 'Market Depth'], //column header
                    rows: [
                        //row
                        [
                            {
                                title: 'CME', //literal 
                                value: '', //must have uniqure value if isRadio = true
                                isRadio: false,
                                default: false, //
                                selected: false,
                                //bundle: false, //only one row can be bundle
                                id: '1'
                            }
                        ]
                        ,

                    ], //row
                    type: '', // CME/ICE/EUREX. control footer
                    requireAttachment: false, // show fileUpload
                    selectionOption: {
                        singleChoice: false, //allow single choice only
                        bundleRow: '3', //only one row can be bundle. Select option in bundle will unselect all other options. Match row id
                        defaultValue: '', //match row selected value. Selected if unselect a bundle row
                        // valid option
                        // singleChoice:false, bundleRow: any
                        // ignore bundleRow if singleChoice is true
                    }
                },
            ],

        },
        applicationType: 'tradingRight', //'tradingRight' or 'marketData'
    },
    applicationData: {
        type: 'tradingRight', //'tradingRight' or 'marketData'
        action: 'apply', //apply, terminate, change

    },
    account: {
        type: 'User', //User or Client
        accountNo: '',
        isProfesssional: true,
        name: '',
        isInternet: true
    } 
}