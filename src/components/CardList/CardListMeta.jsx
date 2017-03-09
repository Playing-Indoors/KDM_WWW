import React from 'react';

const CardListMeta = ({ value }) => (
	<div className="cardList-meta-item">
		{value}
	</div>
);

CardListMeta.propTypes = {
	value: React.PropTypes.string,
};

export default CardListMeta;
