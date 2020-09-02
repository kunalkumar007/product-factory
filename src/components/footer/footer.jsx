import React from 'react';
import { Grid } from '@material-ui/core';
import Logo from '../../assets/blackLogo.png';
import { Instagram, Facebook, Twitter } from '@material-ui/icons';

export default function Footer() {
	return (
		<div className="footer">
			<Grid container justify="space-evenly" alignItems="center" className="footer-grid" >
				<div className="footer-left">
					<Instagram fontSize="large" />
					<Facebook fontSize="large"/>
					<Twitter fontSize="large" />
				</div>
				<div className="footer-mid">
					<img src={Logo} alt="Logo" />
				</div>
				<div className="footer-right"> Product Name &#169; 2020 </div>
			</Grid>
		</div>
	);
}
