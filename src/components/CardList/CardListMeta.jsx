import React from "react";
import PropTypes from "prop-types";

const CardListMeta = ({ value }) => (
  <div className="cardList-meta-item">{value}</div>
);

CardListMeta.propTypes = {
  value: PropTypes.string
};

export default CardListMeta;
