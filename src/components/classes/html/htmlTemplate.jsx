import React from 'react';
import assetVid from '../../../assets/expect-image.mp4';
import data from '../../../data/html-1.json';

export default function HtmlTemplate() {
	const [next, setnext] = React.useState(1);

	return (
		<div className="html-template">
			<div className="video-template-div">
				<video className="video-template" autoPlay={true} loop controls>
					<source src={assetVid} type="video/mp4" />
				</video>
			</div>
			<h1 className="html-heading">{data[`html${next}`].title}</h1>
			<p>{data[`html${next}`].body}</p>
			<div className="btn-template">
				{/* you have to update next every time you enter data. */}
				{next < 2 ? (
					<button disabled>Previous</button>
				) : (
					<button onClick={() => setnext(next - 1)}>Previous</button>
				)}
				{next > 2 ? <button disabled>Next</button> : <button onClick={() => setnext(next + 1)}>Next</button>}
			</div>
		</div>
	);
}
