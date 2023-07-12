import { useEffect, useState } from "react";


function KanyeQouteApp() {
  const [qoute, setQoute] = useState<string>();

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch(
        "https://api.kanye.rest/"
      );
      const jsonBody: string = await response.json();
      setQoute(jsonBody);
    };

    fetchJoke();
  }, []);

  // useEffect(() => {
  //   fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
  //     .then(response => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // }, [])

  return (
    <>
      <h1>Kanye Qoute App</h1>
      {qoute && (
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
            <b>{qoute}</b>
          </p>
        </>
      )}
    </>
  );
}

export default KanyeQouteApp;
