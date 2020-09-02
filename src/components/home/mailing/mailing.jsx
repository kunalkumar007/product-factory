import React from 'react';
import { Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Email } from '@material-ui/icons';
import Mail from '../../../assets/mailing_list.svg';
export default function Mailing() {
	return (
		<div className="mailing">
			<Grid container justify="space-around" alignItems="center">
				<div className="left-mailing">
					<div className="mailing-text">
						<h1>Contact us through Mail <Email/> </h1>
						<p>
							Please enter your email address to receive course titles, the topics will be emailed to you.
						</p>
						<input type="text" placeholder="abc@email.com" />
						<Alert severity="success" style={{ background: 'transparent', color: 'white' }}>
							Your email has been successfully registered.
						</Alert>
						<button>Submit</button>
					</div>
				</div>
				<div className="right-mailing">
					<img src={Mail} alt="mailling List" />
				</div>
			</Grid>
		</div>
	);
}
