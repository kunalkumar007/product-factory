import React from 'react';
import FormImg from '../../assets/Succes.svg';
import { Grid } from '@material-ui/core';
import { Email, VpnKey, Person } from '@material-ui/icons';
export default function Form() {
	return (
		<div className="register-form">
			<Grid container justify="center" alignItems="center" className="form-grid">
				<div className="form-element">
					<div className="form-header">
						<h1>Welcome</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, deleniti! At error
							aspernatur velit eum corporis culpa adipisci nihil vitae pariatur nostrum laboriosam, quam
							repellendus inventore animi. Animi, quam ab!
						</p>
						<div className="input">
							<Email />

							<input type="email" name="email" placeholder="Email" />
						</div>
						<div className="input">
							<Person />
							<input type="text" name="username" placeholder="Username" />
						</div>
						<div className="input">
							<VpnKey />
							<input type="password" name="password" placeholder="Password" />
						</div>
						<button> Register</button>
					</div>
				</div>
				<img src={FormImg} alt="Form Banner" />
			</Grid>
		</div>
	);
}
