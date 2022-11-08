import React from "react";
import axios from "axios";
//Cant get this to work :(
function useOpenAI() {
  const [loading, setLoading] = React.useState(false);
  const [aiResponse, setAiResponse] = React.useState("");

  //   React.useEffect(() => {
  //     if (url) {
  //       //   submitToAI(input, url);
  //     }
  //   }, []);
  const submitToAI = async (input, url) => {
    setLoading(true);
    await axios({
      method: "POST",
      url: url,
      data: {
        input: input,
        // kind: screen.name,
      },
      // headers: headers,
    })
      .then((response) => {
        console.log(response);
        if (typeof response.data.results !== "string") {
          setAiResponse("Sorry, an error occurred 😕");
        } else {
          setAiResponse(response.data.results);
        }
        setLoading(false);
        return response;
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 429") {
          setResponseReceived(true);
          setLoading(false);
          setAiResponse(
            "Rate limit exceeded, to many requests sent in one minute "
          );
        } else {
          setLoading(false);
          setAiResponse("Something went wrong. Please try again later.");
        }
      });
  };

  return { aiResponse, loading, submitToAI };
}

export default useOpenAI;
