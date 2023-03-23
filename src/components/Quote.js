import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '1rcwC4O7dhqSluVRUuGwGQ==SE9TcCVPoQLRGnat';
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': apiKey,
        },
      };
      const category = 'success';
      const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Could not fetch data');
      }
      const text = response.json();
      return text;
    };
    fetchData()
      .then((data) => {
        setQuote(data[0].quote);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [setQuote, setIsLoading]);
  return (
    <div>
      {error && <h2>{ error }</h2>}
      { isLoading && <h2>Loading... </h2> }
      <h2 className="quote-list">{ quote }</h2>
    </div>
  );
};

export default Quote;
