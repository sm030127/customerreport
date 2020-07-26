import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../css/Graph.css';

const Graph = props => {
	return (
		<div className="graph">
			<Bar
				data={props.data}
				options={{
					title: {
						display: true,
						text: 'Average number of orders placed by different customers',
						fontSize: 20,
					},
					legend: {
						display: true,
						position: 'right',
					},
				}}
			/>
		</div>
	);
};

export default Graph;
