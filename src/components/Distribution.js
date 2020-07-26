import React from 'react';
import '../css/Distribution.css';

const Distribution = ({ distributionData } = {}) => {
	const distributionHeader = distributionData.headers.map(current => {
		return <th key={current}>{current}</th>;
	});
	const distributionList = distributionData.values.map(current => {
		return (
			<tr>
				<td key={current.label}>{current.label}</td>
				<td>{current.count}</td>
			</tr>
		);
	});
	return (
		<div className="Distribution">
			<div className="DistributionTitle">Customer Distribution</div>
			<table>
				<tr>{distributionHeader}</tr>
				{distributionList}
			</table>
		</div>
	);
};

export default Distribution;
