import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '../../classes/html/HtmlCard';
import { Link } from 'react-router-dom';

const Html =() => {
	return (
		<div>
			<h1 className="html-heading">HTML</h1>

			<Grid container justify="space-evenly" alignItems="center" className="html-grid">
				<Link to="/html-1">
					<Card title="HTML" />
				</Link>
				<Link to="/html-2">
					<Card title="CSS" />
				</Link>
				<Link to="/html-3">
					<Card title="JavaScript" />
				</Link>
				<Link to="/html-4">
					<Card title="JavaScript" />
				</Link>
				
                
			</Grid>
		</div>
	);
};

export default Html;
