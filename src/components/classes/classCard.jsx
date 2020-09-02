import React from 'react';
import { Paper } from '@material-ui/core';

export default function Card({ title }) {
	return (
		<div className="class-card">
			<Paper elevation={9} className="class-paper">
				{title}
			</Paper>
		</div>
	);
}
