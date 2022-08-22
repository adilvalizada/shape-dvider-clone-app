import React from "react";
import useClipboard from "react-use-clipboard";
function ClipboardBtns(data) {
  const [copiedHtml, setCopiedHtml] = useClipboard(data.data.html + "", {
    successDuration: 1000,
  });
  const [copiedCss, setCopiedCss] = useClipboard(data.data.css + "", {
    successDuration: 1000,
  });

  return (
    <>
      <button className="mx-3" onClick={setCopiedHtml}>
        {copiedHtml ? "Copied 👍🏻" : "Copy Html"}
      </button>
      <button className="mx-3" onClick={setCopiedCss}>
        {copiedCss ? "Copied 👍🏻" : "Copy Css"}
      </button>
    </>
  );
}

export default ClipboardBtns;
