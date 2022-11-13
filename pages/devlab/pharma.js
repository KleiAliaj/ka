import useOpenAI from "@/lib/hooks/useOpenAI";
import Head from "next/head";
import React from "react";
import {
  FaCalculator,
  FaEnvelope,
  FaImage,
  FaPaperPlane,
} from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";
// "Manufacturing Record for BioGen Inc. 11/8/2022 On this manufacturing run, hundreds of units were produced aseptically in a clean room facility. In the results of the run, we had a score of 8 out of allowed range of 10"
function Pharma() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [imgBase64, setImgBase64] = React.useState(null);

  const [ocrText, setOcrText] = React.useState(
    "Manufacturing Record for BioGen Inc. 11/8/2022 On this manufacturing run, hundreds of units were produced aseptically in a clean room facility. In the results of the run, we had a score of 5 out of allowed range of 10"
  );
  const [rangeOk, setRangeOk] = React.useState("");
  const [emailSent, setEmailSent] = React.useState(false);

  let { aiResponse, loading, submitToAI } = useOpenAI(
    ocrText,
    "/api/devlab/getStats"
  );
  //   console.log(imgBase64);
  const OCR = async (e) => {
    // console.log(imgBase64);
    const data = {
      url: imgBase64,
      // url: "test",
    };
    console.log(data);
    console.log(JSON.stringify(data));
    await fetch("/api/devlab/ocr", {
      method: "post",
      body: JSON.stringify(data),
      //   body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        response.json().then((data) => console.log(data));
        console.log(response.body);
        // setOcrText(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const determineInRange = (value) => {
    const split = value.split(" ");
    let score = Number(split[0]);
    let range = Number(split[2]);
    let lowerBound = 7;
    // let upperBound = 10;
    let inSpec = score <= range && score >= lowerBound;
    if (inSpec) {
      setRangeOk("Result is in Spec!");
    } else {
      setRangeOk("Result is OOC!");
    }
  };

  const notifyStakeholders = async (e) => {
    const data = rangeOk
      ? {
          message: `This batch is in spec, with a score of ${aiResponse}`,
          stakeHolder: "dylan.merideth@gmail.com",
        }
      : {
          message: "This batch is OOC! Please review immediately",
          stakeHolder: "dylan.merideth@gmail.com",
        };

    console.log(data);
    await fetch("/api/devlab/notify", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then(() => {
        toast.success("Message sent! ✉️");
        setEmailSent(true);
      })
      .catch(() => {
        toast.error("Message failed to send :( ");
      });
  };

  return (
    <>
      <Head>
        <title>Devlab Pharma QA</title>
        <meta name="description" content={`test page`} />
      </Head>
      <div className="page-container">
        <h1 className="heading-lg">Pharma QA Test</h1>

        <div className="flex flex-col gap-10 ring-2 rounded-lg ring-sky-500 w-2/3 px-5 py-2 divide-y-2 divide-slate-700/70">
          <div className="flex justify-between">
            <div className="flex flex-col items-center gap-2">
              <h2 className="heading-md !mb-0">1. OCR():</h2>
              <input
                type="file"
                name="myImage"
                onChange={(event) => {
                  let base64String;
                  function imageUploaded() {
                    var file =
                      document.querySelector("input[type=file]")["files"][0];
                    var reader = new FileReader();
                    reader.onload = function () {
                      base64String = reader.result
                        .replace("data:", "")
                        .replace(/^.+,/, "");
                      console.log(base64String);
                      setImgBase64(base64String);
                    };
                    reader.readAsDataURL(file);
                  }

                  imageUploaded();
                  console.log(event.target.files[0]);
                  console.log(URL.createObjectURL(event.target.files[0]));
                  setSelectedImage(event.target.files[0]);
                }}
              />

              {selectedImage ? (
                <button
                  className={"button-1 "}
                  onClick={() => {
                    // if (selectedImage) {
                    OCR();
                    // }
                  }}
                >
                  Decode
                  <FaImage />
                </button>
              ) : null}
            </div>
            <div className="w-2/3 flex gap-5">
              {selectedImage && (
                <div className="relative flex flex-col">
                  <img
                    alt="uploaded image"
                    className="w-auto h-32"
                    src={URL.createObjectURL(selectedImage)}
                  />
                  <button
                    className="button-1 !px-1 !py-0 mt-1 !bg-rose-500 text-xs w-fit !shadow-rose-700 mx-auto"
                    onClick={() => setSelectedImage(null)}
                  >
                    Remove
                  </button>
                </div>
              )}
              <p className="w-2/3">{ocrText}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col items-center gap-2">
              <h2 className="heading-md">2. getStatsFromText():</h2>
              <button
                className="button-1"
                onClick={() => {
                  submitToAI(ocrText, "/api/devlab/getStats");
                }}
              >
                Send
                <FaPaperPlane />
              </button>
            </div>
            <p className="w-2/3 text-center mt-10 text-2xl font-bold ">
              {aiResponse ? aiResponse : "Result will dislpay here"}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col items-center gap-2">
              <h2 className="heading-md">3. determineInRange():</h2>{" "}
              <button
                className="button-1"
                onClick={() => {
                  determineInRange(aiResponse);
                }}
              >
                Compute
                <FaCalculator />
              </button>
            </div>
            <p
              className={
                "w-2/3 text-center mt-10 text-2xl font-bold" +
                (rangeOk === "Result is in Spec!"
                  ? " text-green-500"
                  : " text-rose-600")
              }
            >
              {rangeOk}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col items-center gap-2">
              <h2 className="heading-md">4. notifyStakeholders():</h2>
              <button
                className="button-1"
                onClick={() => {
                  notifyStakeholders();
                }}
              >
                Send Email
                <FaEnvelope />
              </button>
            </div>
            {emailSent ? (
              <p className="w-2/3 text-center mt-10 text-2xl font-bold ">
                Email sent
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pharma;
