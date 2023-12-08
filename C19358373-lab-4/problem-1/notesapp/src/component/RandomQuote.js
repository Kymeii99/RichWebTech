
import React from 'react';

const RandomQuote = ({ quote, onFetchRandomQuote }) => {
  return (
    <div className="quote_display">
      <h2>Quote of the day</h2>
      <p>{quote}</p>
      <button onClick={onFetchRandomQuote}>Get Another Quote</button>
    </div>
  );
};

export default RandomQuote;
