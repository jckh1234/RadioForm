import React from 'react';
import {render} from 'react-dom';
import {CMEFootnote, ICEFootnote} from './components/Footnote.jsx'

class TableFooterReminder extends React.Component {

  constructor (){
    super();
  }


  render() {

    switch(this.props.type){

      case 'CME':
        return (
            <CMEFootnote />
            //<ul style={{marginLeft:0, listStyleType:'none', fontStyle:'italic', fontSize:'11px', paddingLeft:0}}>
            //  <li>(1) To apply the non-professional data rates, subscribers must submit Non-Professional Self Certification Form.</li>
            //  <li>(2) Non-Professional subscribers may select either option on a per-market basis or , as a bundled package.</li>
            //  <li>(3) If Non-Professional or Professional subscribers terminate market data subscription, selected market will not provide market data.</li>      
            //</ul>

        );

      case 'ICE':
        return (

            <ul style={{marginLeft:0, listStyleType:'none', fontStyle:'italic', fontSize:'11px', paddingLeft:0}}>
              <li>(1) To apply the real-time market data, subscribers must submit the "ICE Data Pricing Form"</li>
              <li>(2) If ICE subscribers terminate market data subscription, selected market will not provide market data.</li>     
            </ul>

        );

      case 'EUREX':
        return (

            <ul style={{marginLeft:0, listStyleType:'none', fontStyle:'italic', fontSize:'11px', paddingLeft:0}}>
              <li>(1) To apply the real-time market data, subscribers must submit the "EUREX Data Pricing Form"</li>
              <li>(2) If EUREX subscribers terminate market data subscription, selected market will not provide market data.</li>    
            </ul>
            
        );

      default: return <ul></ul>;

    }

  }
}

export default TableFooterReminder;