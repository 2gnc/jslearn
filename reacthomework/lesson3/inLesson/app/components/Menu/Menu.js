import React from 'react';
import MenuItem from './MenuItem'

export default class Menu extends React.Component {
	render() {
		let menuItems = this.props.items.map( function( value, index ) {
			return <MenuItem href = { value.href } title = { value.title } key = { 'menuItem' + index } />;
		} );
		return <div>
		<h1>{ this.props.h1 }</h1>
		<ul>
			{ menuItems }
		</ul>
		<p>
			{ this.props.children }
		</p>
		</div>;
	}
}