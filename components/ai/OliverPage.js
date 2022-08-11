import React from "react";
import LoaderOli from "@/components/ai/LoaderOli";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { VoiceRSS } from "@/components/ai/voicerss";
import Oliver from "@/components/ai/OliverComponent";
import Select from "react-select";
import Link from "next/link";
import OliverModal from "./OliModal";

function OliverPage() {
  const [question, setQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [aiLoading, setAiLoading] = React.useState(false);
  const [oliModal, setOliModal] = React.useState(true);
  const [responseReceived, setResponseReceived] = React.useState(false);
  const [temp, setTemp] = React.useState(0.7);
  const [name, setName] = React.useState("");
  const [playing, setPlaying] = React.useState(false);
  const [kind, setKind] = React.useState({
    value: "therapist",
    label: "🛋️ Life Coach",
  });
  const options = [
    { value: "therapist", label: "🛋️ Therapist" },
    { value: "ceo", label: "🤵 CEO" },
    { value: "relationship", label: "👫 Relationship Coach" },
    { value: "friend", label: "🧑🏻 Kind Friend" },
    { value: "speaker", label: "💪 Motivational Speaker" },
    { value: "doctor", label: "👨‍⚕️ Doctor" },
  ];
  const getSpeechfromText = async (src) => {
    VoiceRSS.speech({
      key: "c1546d8358f042f29b5af513efe9077d",
      src: src,
      hl: "en-gb",
      v: "Harry",
      r: 0,
      c: "mp3",
      f: "44khz_16bit_stereo",
      ssml: false,
    });
  };

  //gpt3
  const onSubmitForm = async (values) => {
    let formData = values.input;
    setResponseReceived(false);

    await axios({
      method: "POST",
      url: "/api/openAI",
      //   url: "/api/openAi",
      data: {
        input: formData,
        kind: kind.value,
        name: name,
        temp: Number(temp),
      },
      // headers: headers,
    })
      .then((response) => {
        // console.log("Status: " + response.status);
        // console.log("limit: " + response.headers?.get('X-RateLimit-Limit'));
        // console.log("remaining: " + response.headers?.get('X-RateLimit-Remaining'));
        console.log(response.data);
        getSpeechfromText(response.data.results);

        console.log("Before delay");
        setTimeout(() => {
          console.log("After delay");
          setAnswer(response.data.results);
          setResponseReceived(true);
          setAiLoading(false);
          setPlaying(true);
        }, 2000);
        //This number I got below is hacky. I was unable to determine when the voice stops speaking, so I did 10 timed trials. I timed how long the voice was speaking for an amount of characters in the string, and then divided the time it took by the character count to get a ratio. After 10 trials, I took the average of the ratios and got 0.059. Roughly 16.95 characters per second.  Its hacky, but its the best it will get for now.
        let delay = response.data.results.length * 0.059;
        // console.log(response.data.results.length);
        // console.log(delay);
        setTimeout(() => {
          setPlaying(false);
        }, delay * 1000);

        return response;
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 429") {
          setResponseReceived(true);
          setAiLoading(false);
          setAnswer(
            "Rate limit exceeded, to many requests sent in one minute "
          );
        } else {
          setResponseReceived(true);
          setAiLoading(false);
          setAnswer("Something went wrong. Please try again later.");
        }
      });
  };

  return (
    <div className="relative page-container">
      {oliModal && (
        <OliverModal oliModal={oliModal} setOliModal={setOliModal} />
      )}
      <div className="flex w-full h-full md:flex-row sm:flex-col sm:items-end sm:justify-end md:items-start">
        <Link href="/ai">
          <a className="absolute top-5 sm:-top-3 sm:left-1 left-5 button-1 !px-2">
            <FaArrowLeft /> Back
          </a>
        </Link>
        <div className="flex flex-col items-center h-full md:w-2/3 sm:w-full ">
          <h1 className="mb-2 text-3xl font-bold text-center f1">
            Ask Oliver a question
          </h1>
          <div className="flex flex-col items-center w-full h-full gap-3 p-3 ">
            <div className="flex sm:gap-2 md:gap-10 md:items-end md:flex-row sm:flex-col-reverse sm:items-center">
              <div className="flex flex-col items-start w-fit">
                <p className="whitespace-nowrap">What&apos;s your first name?</p>
                <input
                  className="w-40 p-2 border-2 border-gray-300 rounded-lg placeholder:text-slate-200 f2"
                  type="text"
                  placeholder="Ty"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col ">
                <p>Oli&apos;s Profession</p>
                <Select
                  options={options}
                  className="min-w-[15em] f2 react-select-container "
                  classNamePrefix="react-select"
                  value={kind}
                  placeholder={options[0].label}
                  onChange={(e) => setKind({ value: e.value, label: e.label })}
                />
              </div>
              <button
                className="flex items-center justify-center gap-2 p-2 text-lg font-bold text-white transition rounded-lg shadow-xl md:w-1/4 sm:w-fit bg-sky-500 hover:bg-sky-600 hover:scale-110 active:scale-75 f1"
                onClick={() => {
                  setOliModal(!oliModal);
                }}
              >
                Who&apos;s Oliver?
              </button>
            </div>
            <div className="flex flex-col items-start w-full">
              <p>What&apos;s your question?</p>
              <div className="flex items-center w-full gap-2">
                <input
                  className="w-full p-2 border-2 border-gray-300 rounded-lg placeholder:text-slate-200 f2"
                  type="text"
                  maxLength={150}
                  placeholder="What's your question? (Max 150 characters)"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                <button
                  className="flex items-center justify-center w-1/4 gap-2 p-2 text-lg font-bold text-white transition rounded-lg shadow-xl bg-sky-500 hover:bg-sky-600 hover:scale-110 active:scale-75 f1"
                  type="submit"
                  onClick={() => {
                    setAiLoading(true);
                    onSubmitForm({ input: question, temp: temp });
                    //   setQuestion("");
                  }}
                >
                  {aiLoading ? (
                    <LoaderOli show={true} />
                  ) : (
                    <>
                      {" "}
                      Ask <FaArrowRight />
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="relative flex flex-col items-center w-2/3">
              <p
                className={
                  "absolute text-sm  right-16 -top-2 " +
                  (question.length > 149
                    ? " text-red-500 font-bold"
                    : " text-slate-300")
                }
              >
                {question.length + "/150"}
              </p>
            </div>
          </div>

          {/* <div className="flex flex-col items-center w-full h-full ">
              <p>Creativity</p>
              <p className="text-xs">I find 0.7 to be best, but </p>
  
              <input
                type="range"
                min="0"
                max="1.0"
                step="0.01"
                value={temp}
                onChange={(e) => setTemp(e.target.value)}
              />
  
            </div> */}
        </div>
        <div className="flex flex-col items-center rounded-lg md:mt-16 h-fit w-fit ring-2 sm:mb-96">
          <Oliver
            playing={playing}
            aiLoading={aiLoading}
            responseReceived={responseReceived}
            answer={answer}
            kind={kind.value}
          />
        </div>
      </div>
    </div>
  );
}

export default OliverPage;
