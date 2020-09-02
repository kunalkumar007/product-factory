import React from 'react';
import { Grid } from '@material-ui/core';
import Card from "./card";

export default function Category() {
	return (
		<div className="folder">
		<div className="category">
            <h1>Category</h1>
            <Grid container justify="space-evenly" alignItems="center" className="category-grid">
                <Card title="Website Development"/>
                <Card title="Android Development"/>
                <Card title="iOS Development"/>
            </Grid>
        </div>
		</div>
	);
}
