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

function CodeBlock({ code }) {
  return (
    <div className="w-1/3">
      <div className="mx-auto mt-10 rounded-lg ">
        {/* <SyntaxHighlighter
          wrapLines
          showLineNumbers
          wrapLongLines
          useInlineStyles={false}
          language="jsx"
          style={docco}
        >
          {code}
        </SyntaxHighlighter> */}
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
