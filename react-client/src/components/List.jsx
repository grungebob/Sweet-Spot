import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <table id="table1">
    
    <tr>
      <th></th>
      <th>Artist</th>
      <th>Song</th>
      <th>Tempo</th>
      <th>Intensity</th>
      <th>Wordiness</th>
      <th>Danciness</th>
    </tr>
    
    { props.items.map(item => <ListItem item={item}/>)}
    
  </table>
)

export default List;


/*
<caption>There are { props.items.length } items.</caption>

<div>
    <h6>There are { props.items.length } items. </h6>
    { props.items.map(item => <ListItem item={item}/>)}
  </div>

<table style="width:100%">
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$50</td>
  </tr>
</table>
*/