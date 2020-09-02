import React from 'react';
import WebDev from '../components/classes/webDev';
import AndroidDev from '../components/classes/androidDev';
import IosDev from '../components/classes/iosDev';

export default function Classes() {
	return (
		<React.Fragment>
			<WebDev />
            <AndroidDev/>
            <IosDev/>
		</React.Fragment>
	);
}
