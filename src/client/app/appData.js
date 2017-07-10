// JavaScript source code

const nonProCMETable = {
    selected: false,
    title: 'For non-Professional User (CME)',
    cols: ['Market', 'Delay', 'Top of Book', 'Market Depth'], //column header
    rows: [
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
    ], //row
    type: 'CME', // CME/ICE/EUREX. control footer
    requireAttachment: false, // show fileUpload
    selectionOption: {
        singleChoice: false, //allow single choice only
        bundleRow: 'CME_BUNDLE', //only one row can be bundle. Select option in bundle will unselect all other options. Match row id
        defaultValue: '1', //match row selected value. Selected if unselect a bundle row
        // valid option
        // singleChoice:false, bundleRow: any
        // ignore bundleRow if singleChoice is true
    }
}

const proCMETable = {
    selected: false,
    title: 'For Professional User (CME)',
    cols: ['Market', 'Delay', 'Market Depth'], //column header
    rows: [
        //row
        {
            id: 'CME_PRO',
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
                    title: 'USD 85', //literal 
                    value: '3', //must have uniqure value if isRadio = true
                    isRadio: true,
                    selected: false,
                },
            ]
        },
        {
            id: 'CBOT_PRO',
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
                    title: 'USD 85', //literal 
                    value: '3', //must have uniqure value if isRadio = true
                    isRadio: true,
                    selected: false,
                },
            ]
        },
        {
            id: 'NYMEX_PRO',
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
                    title: 'USD 5', //literal 
                    value: '3', //must have uniqure value if isRadio = true
                    isRadio: true,
                    selected: false,
                },
            ]
        },
        {
            id: 'COMEX_PRO',
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
                    selected: false,
                },
                {
                    title: 'USD 5', //literal 
                    value: '3', //must have uniqure value if isRadio = true
                    isRadio: true,
                    selected: false,
                },
            ]
        }
    ], //row
    type: 'NPROCME', // CME/ICE/EUREX. control footer
    requireAttachment: false, // show fileUpload
    selectionOption: {
        singleChoice: false, //allow single choice only
        bundleRow: '', //only one row can be bundle. Select option in bundle will unselect all other options. Match row id
        defaultValue: '1', //match row selected value. Selected if unselect a bundle row
        // valid option
        // singleChoice:false, bundleRow: any
        // ignore bundleRow if singleChoice is true
    }
}

const ICETable = {
    selected: false,
    title: 'ICE',
    cols: ['Market', 'Delay', 'Market Depth'], //column header
    rows: [
        //row
        {
            id: 'ICE_M1',
            fields: [
                {
                    title: 'IPE', //literal 
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
                    title: 'USD 110', //literal 
                    value: '3', //must have uniqure value if isRadio = true
                    isRadio: true,
                    selected: false,
                },
            ]
        },
        {
            id: 'ICE_M2',
            fields: [
                {
                    title: 'LIFFE', //literal 
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
                    title: 'USD 110', //literal 
                    value: '3', //must have uniqure value if isRadio = true
                    isRadio: true,
                    selected: false,
                },
            ]
        },
        {
            id: 'ICE_M3',
            fields: [
                {
                    title: 'NYBOT', //literal 
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
                    title: 'USD 110', //literal 
                    value: '3', //must have uniqure value if isRadio = true
                    isRadio: true,
                    selected: false,
                },
            ]
        }
    ], //row
    type: 'ICE', // CME/ICE/EUREX. control footer
    requireAttachment: true, // show fileUpload
    selectionOption: {
        singleChoice: false, //allow single choice only
        bundleRow: '', //only one row can be bundle. Select option in bundle will unselect all other options. Match row id
        defaultValue: '', //match row selected value. Selected if unselect a bundle row
        // valid option
        // singleChoice:false, bundleRow: any
        // ignore bundleRow if singleChoice is true
    }
}

const EUREXTable = {
    selected: false,
    title: 'EUREX',
    cols: ['Market', 'Delay', 'Market Depth'], //column header
    rows: [
        //row
        {
            id: 'EUREX_Asia',
            fields: [
                {
                    title: 'EUX_ASIA', //literal 
                    value: '', //must have uniqure value if isRadio = true
                    isRadio: false,
                    selected: false,
                },
                {
                    title: 'Free', //literal 
                    value: '1', //must have uniqure value if isRadio = true
                    isRadio: true,
                    selected: false,
                },
                {
                    title: 'EUR 1', //literal 
                    value: '3', //must have uniqure value if isRadio = true
                    isRadio: true,
                    selected: false,
                },
            ]
        },
        {
            id: 'EUREX_NASIA',
            fields: [
                {
                    title: 'EUX_Non-Asia', //literal 
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
                    title: 'EUR 12', //literal 
                    value: '3', //must have uniqure value if isRadio = true
                    isRadio: true,
                    selected: false,
                },
            ]
        },
        {
            id: 'EUX_PRO',
            fields: [
                {
                    title: 'NYBOT', //literal 
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
                    title: 'EUR 52', //literal 
                    value: '3', //must have uniqure value if isRadio = true
                    isRadio: true,
                    selected: false,
                },
            ]
        }
    ], //row
    type: 'EUREX', // CME/ICE/EUREX. control footer
    requireAttachment: true, // show fileUpload
    selectionOption: {
        singleChoice: true, //allow single choice only
        bundleRow: '', //only one row can be bundle. Select option in bundle will unselect all other options. Match row id
        defaultValue: '', //match row selected value. Selected if unselect a bundle row
        // valid option
        // singleChoice:false, bundleRow: any
        // ignore bundleRow if singleChoice is true
    }
}