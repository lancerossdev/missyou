import { useRouter } from "next/router";
import { useState } from "react";

function MissYou() {
  const router = useRouter();
  const [name, setName] = useState("");

  function confessionClick() {
    router.push(`/confess/${name}/`);
  }

  function missyouClick() {
    router.push(`/missyou/${name}/`);
  }

  return (
    <div className="flex flex-col items-center justify-center px-3 py-5">
      <input
        type="text"
        id="name-input"
        className="bg-zinc-800 focus:ring-3 rounded-md px-4 py-2 mt-5 w-full"
        placeholder="Enter their name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex flex-col sm:flex-row sm:space-x-5 w-full">
        <button className="bg-zinc-800 hover:ring-2 transition rounded-md px-4 py-2 mt-5 w-full" onClick={confessionClick}>
          Confession
        </button>
        <button className="bg-zinc-800 hover:ring-2 transition rounded-md px-4 py-2 mt-5 w-full" onClick={missyouClick}>
          Miss you
        </button>
      </div>
    </div>
  );
}

export default MissYou;
