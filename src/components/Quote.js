import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_NINJAS_KEY;
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': apiKey,
        },
      };
      const url = 'https://api.api-ninjas.com/v1/quotes';
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Could not fetch data');
      }
      const text = response.json();
      return text;
    };
    fetchData()
      .then((data) => {
        setQuote(data[0]);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [setQuote, setIsLoading]);
  return (
    <div className="quote" data-testid="quote-cont">
      {error && <h2 className="message">{ error }</h2>}
      { isLoading && <h2 className="message">Loading...</h2> }
      { quote && (
      <h2 className="quote message" data-testid="quote-heading">
        { quote.quote }
        {quote.author && ` -- ${quote.author}`}
      </h2>
      )}
    </div>
  );
};

export default Quote;
