import React from 'react';

const ListItem = (props) => (
  <tr>
    <th>{props.item.artist}</th>
    <th><a href={props.item.spotifyLink}>{props.item.title}</a></th>
    <th>{props.item.tempo}</th>
    <th>{props.item.intensity}</th>
    <th>{props.item.wordiness}</th>
    <th>{props.item.danciness}</th>
  </tr>
)

export default ListItem;

//{ props.item.name }