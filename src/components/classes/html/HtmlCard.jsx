import React from 'react';
import { Paper } from '@material-ui/core';

export default function Card({ title, body }) {
	return (
		<div className="html-card">
			<Paper elevation={9} className="html-paper">
				{title}
			</Paper>
		</div>
	);
}
