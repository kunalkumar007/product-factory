import React from 'react';
import { Grid } from '@material-ui/core';
import ClassCard from '../classes/classCard';
import { Link } from 'react-router-dom';

const IosDev= () => {
	return (
		<div>
			<h1 className="class-heading">iOS</h1>

			<Grid container justify="space-evenly" alignItems="center" className="class-grid">
				<Link to="/html">
					<ClassCard title="HTML" />
				</Link>
				<Link to="/css">
					<ClassCard title="CSS" />
				</Link>
				<Link to="/javascript">
					<ClassCard title="JavaScript" />
				</Link>
			</Grid>
		</div>
	);
};

export default IosDev;
