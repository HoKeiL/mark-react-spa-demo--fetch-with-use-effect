import { useEffect, useState } from "react";

interface Quote {
    quote: string;
}

function KanyeQuoteApp() {
  const [message, setMessage] = useState<Quote>();

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch(
        "https://api.kanye.rest/"
      );
      const jsonBody: Quote = await response.json();
      setMessage(jsonBody);
    };

    fetchQuote();
  }, []);

//   useEffect(() => {
//     fetch("https://api.kanye.rest/")
//       .then(response => response.json())
//       .then((jsonBody: Quote) => setMessage(jsonBody));
//   }, [])



  return (
    <>
      <h1>Kanye Quote App</h1>
      {message && (
        // This is a conditional rendering strategy
        //  using 'short-circuiting': if the left-hand
        //  side of an && is false, then JavaScript
        //  doesn't bother to evaluate the right-hand
        //  side (since the overall expression is false
        //  regardless)
        //
        // Exploiting that feature to conditional render JSX!
        <>
          <p>
            <b>{message.quote}</b>
          </p>
        </>
      )}
    </>
  );
}

export default KanyeQuoteApp;
