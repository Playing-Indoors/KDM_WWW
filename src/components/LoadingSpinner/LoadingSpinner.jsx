import React from "react";
// Credit: https://codepen.io/aurer/pen/jEGbA?q=loading&limit=all&type=type-pens
const LoadingSpinner = (absolute = false) => (
  <div
    className={`loadingSpinner${absolute ? " loadingSpinner--absolute" : ""}`}
  >
    <svg
      version="1.1"
      x="0px"
      y="0px"
      width="42px"
      height="30px"
      viewBox="0 0 42 30"
      style={{ enableBackground: "new 0 0 50 50" }}
    >
      <rect x={0} y={0} width={10} height={10} fill="#333">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin={0}
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x={16} y={0} width={10} height={10} fill="#333">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x={32} y={0} width={10} height={10} fill="#333">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.4s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  </div>
);

export default LoadingSpinner;
