import React from 'react';
import ReactDOOM from 'react-dom';
import Menu from './components/menu/Menu.js'

const items = [
	{
		href: '/',
		title: 'Главная'
	},
	{
		href: '/cat',
		title: 'Каталог'
	},
	{
		href: '/contacts',
		title: 'Контакты'
	}
];

ReactDOOM.render( <Menu items = {items} h1 = 'Меню на реакт'>lorem ipsum</Menu>, document.getElementById( 'app' ) );