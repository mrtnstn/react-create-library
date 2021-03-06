import React from 'react';
import logo from './logo.svg';
import { Demo } from '{{name}}';
import './App.css';
{{#if externalCSS}}
import '{{name}}/dist/{{name}}.css'
{{/if}}

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<Demo type='success'>HELLO World</Demo>
			</header>
		</div>
	);
}

export default App;
