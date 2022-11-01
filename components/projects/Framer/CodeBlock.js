import React from "react";
// import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
// import javascript from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
// import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

// SyntaxHighlighter.registerLanguage("javascript", javascript);
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";

// import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
// import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyBlock, nord } from "react-code-blocks";
import { FaTimes } from "react-icons/fa";

function CodeBlock({ code, setShowCode, showCode }) {
  return (
    <div className="w-2/3">
      <div className="mx-auto mt-10 rounded-lg shadow-lg shadow-slate-600/70 px-5 py-2 relative">
        <p className="heading-md !mb-0">Code</p>
        <button
          className="absolute text-3xl text-sky-600 dark:text-sky-200 top-2 right-2"
          onClick={() => {
            setShowCode(!showCode);
          }}
        >
          <FaTimes />
        </button>
        <CopyBlock
          text={code}
          language={"jsx"}
          showLineNumbers={true}
          theme={nord}
          wrapLines
          wrapLongLines
          codeBlock
        />
      </div>
    </div>
  );
}

export default CodeBlock;
