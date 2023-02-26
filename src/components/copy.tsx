import { useState } from 'react';

const CopyButton = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-zinc-800 hover:ring-2 transition rounded-md px-4 text-lg py-2 mt-5"
    >
      {isCopied ? 'Copied to clipboard!' : 'Share this page'}
    </button>
  );
};

export default CopyButton;
