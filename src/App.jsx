import React, { useRef, useState } from "react";

import axios from "axios";

function App() {
  const [long_url, setURL] = useState("");
  const [short_URL, setShort_URL] = useState("");

  const shortURL = async () => {
    const bitlyAPI = "https://api-ssl.bitly.com/v4/shorten";

    const short = await axios.post(
      bitlyAPI,
      { long_url },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_BITLY_TOKEN}`,
        },
      }
    );
    setShort_URL(short.data.link);
  };

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={long_url}
        onChange={(e) => setURL(e.target.value)}
        placeholder="Enter URL"
      />
      <button onClick={shortURL}>ShortURL</button>
      <h1>
        short URL is :{" "}
        <a href={short_URL} target="_blank">
          {short_URL}
        </a>{" "}
        <button onClick={() => navigator.clipboard.writeText(short_URL)}>
          Copy!
        </button>
      </h1>{" "}
    </div>
  );
}

export default App;
