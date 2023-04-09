import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function Home() {
  const [prompt, setPrompt] = useState("");
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    "An Impassionate Artist......"
  );
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    setPlaceholder(`Search ${prompt}..`);
    setLoading(true);
    const res = await openai.createImage({
      prompt: prompt,
      n: 3,
      size: "512x512",
    });
    setLoading(false);
    setResult1(res.data.data[0].url);
    setResult2(res.data.data[1].url);
    setResult3(res.data.data[2].url);
  };
  return (
    <>
    <div className="app-main">
      {loading ? (
        <>
          <h2>Generating..Please Wait..</h2>
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      ) : (
        <>
          <h2>Generate an Image</h2>

          <textarea
            className="app-input"
            placeholder={placeholder}
            onChange={(e) => setPrompt(e.target.value)}
            rows="50"
            cols="80"
          />
          <button onClick={generateImage}>Generate</button>
          {((result1.length > 0)&&(result2.length > 0)&&(result3.length > 0) )? (
           <div className="image-cont">
            <img className="result-image" src={result1} alt="result" />
            <img className="result-image" src={result2} alt="result" />
            <img className="result-image" src={result3} alt="result" />
           </div>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
    </>
  );
}

export default Home;
