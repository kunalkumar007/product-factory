import React from 'react';
import './App.css';
import './css/main.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import Register from './components/register';
import Classes from './components/classes';
import Navbar from './components/home/navbar/navbar';
import Html from './components/classes/html/html';
import HtmlTemplate from './components/classes/html/htmlTemplate';

export default function App() {
	return (
		<Router>
			<Navbar/>
			<Route exact path="/" component={Home} />
			<Route path="/register" component={Register} />
			<Route path="/classes" component={Classes}/>
			<Route path="/webdev/html" component={Html} />
			<Route path="/html-1" component={HtmlTemplate} />
		</Router>
	);
}
