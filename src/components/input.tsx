import { useRouter } from 'next/router';
import { useState } from 'react';

function MissYou() {
  const router = useRouter();
  const [name, setName] = useState('');

  function handleClick() {
    router.push(`/missyou/${name}`);
  }

  return (
    <div className="flex flex-col items-center justify-center px-3 py-5">
      <input
        type="text"
        id="name-input"
        className="bg-gray-200 focus:ring-3 ring-blue-300 rounded-md px-4 py-2 mt-5 w-full"
        placeholder="Enter name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-gray-200 hover:ring-2 transition rounded-md px-4 py-2 mt-5 w-full"
        onClick={handleClick}
      >
        Generate!
      </button>
    </div>
  );
}

export default MissYou;
