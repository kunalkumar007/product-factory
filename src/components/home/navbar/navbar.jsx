import React, { useState } from 'react';
import Logo from '../../../assets/whiteLogo.png';
import { Link } from 'react-router-dom';
import { Menu } from '@material-ui/icons';
export default function Navbar() {
	const [menu, setmenu] = useState(false);

	return (
		<div className="nav">
			<div className="navbar">
				<div className="left">
					<Menu fontSize="large" onClick={() => setmenu(!menu)} className="menu-icon" />
					<Link to="/">
						<img src={Logo} alt="Logo" />
					</Link>
					<div className={menu ? 'true-menu' : 'false-menu'}>
						<Link to="/">Masters</Link>
						<Link to="/classes">Classes</Link>
						<Link to="/">Course</Link>
						<Link to="/register">About us</Link>
					</div>
				</div>
				<div className="right">
					<Link to="/register">
						<button>Register</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
