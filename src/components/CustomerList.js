import React from 'react';

import '../css/CustomerList.css';

const CustomerList = ({ data } = {}) => {
	const renderCustomer = data.customers.map(current => <li>{current.Name}</li>);
	return (
		<div className="CustomerList">
			<div className="CustomerHeader">{data.text}</div>
			<div className="CustomerName">{renderCustomer}</div>
		</div>
	);
};

export default CustomerList;
