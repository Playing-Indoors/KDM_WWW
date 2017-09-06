import axios from 'axios';
import { GET_SETTLEMENT } from './types';

const KDM_API = require('KDM_API');
axios.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');
axios.defaults.headers.post['Content-Type'] = 'application/json';

function getSettlementAsync(data) {
	return {
		type: GET_SETTLEMENT,
		payload: data,
	};
}

export function getSettlement() {
	return dispatch => {
		axios({
			method: 'get',
			url: `${KDM_API}/settlement/get/5681f9e7421aa93924b6d013`,
		}).then((res) => {
			console.log('SETTLEMENT', res);
			dispatch(getSettlementAsync(res.data));
		});
	};
}

export function createSettlement(){
	return dispatch => {
		axios({
			method: 'post',
			url: `${KDM_API}/new/settlement`,
			data: {
		    'campaign': 'Fred'
		  }
		}).then((res) => {
			console.log('CREATE', res);

		});
		// axios({
		// 	method: 'get',
		// 	url: `${KDM_API}/authorization/check`,
		// }).then((res) => {
		// 	console.log('AUTH CHECK', res);
		//
		// });
	};
}
