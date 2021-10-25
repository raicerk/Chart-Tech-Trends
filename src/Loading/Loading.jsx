// Code Based on: https://loading.io/css/
// Also on: https://www.npmjs.com/package/@loadingio/css-spinner

import React from 'react';

import './Loading.scss';

const Loading = () => {
  return (
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
