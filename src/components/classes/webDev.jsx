import React from 'react';
import { Grid } from '@material-ui/core';
import ClassCard from '../classes/classCard';
import { Link } from 'react-router-dom';

const WebDev = () => {
	return (
		<>
			<h1 className="class-heading">Website</h1>

			<Grid container justify="space-evenly" alignItems="center" className="class-grid">
				<Link to="webdev/html">
					<ClassCard title="HTML" />
				</Link>
				<Link to="webdev/css">
					<ClassCard title="CSS" />
				</Link>
				<Link to="webdev/javascript">
					<ClassCard title="JavaScript" />
				</Link>
			</Grid>
		</>
	);
};

export default WebDev;
