import React from 'react';

import data from '../data/data';
import Graph from './Graph';
import Distribution from './Distribution';
import CustomerList from './CustomerList';

import '../css/App.css';

// *** CALCULATING TOTAL ORDER AMOUT ***
const calcTotal = (acc, current) => acc + current.Amount;

// *** CALCULATING TOTAL ORDER AMOUT ***
const arrayWithCount = data.map(customer => {
	return { ...customer, count: 1 };
});

// ***FILTER CUSTOMER COUNT BASED ON NUMBER OF ORDERS PLACED ***
const newArr = [];
arrayWithCount.forEach(cur => {
	const x = newArr.findIndex(item => item.Name === cur.Name);
	if (x === -1) {
		newArr.push({ Name: cur.Name, count: cur.count, Amount: cur.Amount, Phone: cur.Phone });
	} else {
		newArr[x].count++;
		newArr[x].Amount += cur.Amount;
	}
});

// ***CALCULATING CUSTOMER COUNT BASED ON NUMBER OF ORDERS PLACED ***
const oneOrder = newArr.filter(cur => cur.count === 1);
const twoOrder = newArr.filter(cur => cur.count === 2);
const threeOrder = newArr.filter(cur => cur.count === 3);
const fourOrder = newArr.filter(cur => cur.count === 4);
const fiveOrMore = newArr.filter(cur => cur.count >= 5);
const myArray = [oneOrder.length, twoOrder.length, threeOrder.length, fourOrder.length, fiveOrMore.length];
const myArray1 = ['1 Order', '2 Orders', '3 Orders', '4 Orders', '5 or more Orders'];

// *** GRAPH CONFIG OBJECT ***
let graphObj = {
	labels: myArray1,
	datasets: [
		{
			label: 'Orders',
			backgroundColor: 'rgba(75,192,192,1)',
			borderColor: 'rgba(0,0,0,1)',
			borderWidth: 2,
			data: myArray,
		},
	],
};

// *** DISTRIBUTION CONFIG OBJECT ***
const distributionData = {
	headers: ['No. of orders', 'Count of customers'],
	values: [
		{ label: '1', count: oneOrder.length },
		{ label: '2', count: twoOrder.length },
		{ label: '3', count: threeOrder.length },
		{ label: '4', count: fourOrder.length },
		{ label: '5', count: fiveOrMore.length },
	],
};

// *** CUSTOMERLIST CONFIG OBJECT ***
const cuatomerListConfig = {
	text: 'Customers who ordered only once',
	customers: oneOrder,
};

const App = () => {
	const total = data.reduce(calcTotal, 0);
	return (
		<div className="App">
			<div className="Container">
				<div className="GenericInfo">
					Generic Info
					<div className="TotalOrders">
						Total Orders :<span>{data.length}</span>
					</div>
					<div className="Total Amount">
						Total Amount :<span>{total}</span>
					</div>
				</div>
				<CustomerList data={cuatomerListConfig} />
				<Distribution distributionData={distributionData} />
				<Graph data={graphObj} />
			</div>
		</div>
	);
};

export default App;
