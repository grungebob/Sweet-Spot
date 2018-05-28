import React from 'react';

const ListItem = (props) => (
  <tr>
    <td><img src = {props.item.image} /></td>
    <td>{props.item.artist}</td>
    <td><a href={props.item.spotifyLink}>{props.item.title}</a></td>
    <td>{props.item.tempo}</td>
    <td>{props.item.intensity}</td>
    <td>{props.item.wordiness}</td>
    <td>{props.item.danciness}</td>
    <td><img src="Apple.jpg" alt="Apple Music" width="120"  height="64"/></td>
  </tr>
)

export default ListItem;

//{ props.item.name }