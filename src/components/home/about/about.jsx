import React from 'react';
import assetVid from "../../../assets/expect-image.mp4";
import { Twitter, Instagram, Facebook } from '@material-ui/icons';
export default function About() {
	return (
		<div className="folder" >
			<div className="top">
					<video className="video"  autoPlay={true} loop >
						<source src={assetVid} type="video/mp4" />
					</video>
				<div className="top-right">
					<h2 className="text-folder">About Us</h2>
					<div className="icons">
						<Facebook fontSize="large" /> <br />
						<Instagram fontSize="large" /> <br />
						<Twitter fontSize="large" /> <br />
					</div>
				</div>
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus fuga blanditiis fugiat, quisquam
				dolor voluptates assumenda sit reprehenderit sint, expedita tenetur incidunt voluptatem! Repellat minus
				dignissimos mollitia a deleniti itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
				saepe perspiciatis quod ea nisi molestiae incidunt! Eum sint laboriosam vero corporis delectus iusto at
				aspernatur, enim, error ducimus itaque voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing
				elit. Sapiente incidunt maiores adipisci, asperiores pariatur ipsam ut, porro, praesentium perspiciatis
				numquam autem aut est molestias deleniti nulla in debitis, nam ea.
			</p>
		</div>
	);
}
