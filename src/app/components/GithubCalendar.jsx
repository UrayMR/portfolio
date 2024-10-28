import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="mb-5 mt-10 flex flex-col items-center pb-10">
      <h1 className="mb-14 text-3xl font-bold md:text-4xl">
        Days I{" "}
        <strong className="bg-gradient-to-tl from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Code
        </strong>
      </h1>
      <GitHubCalendar
        username="UrayMR"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
      <div className="mt-[5rem]">
        <h1 className="w-1/2 animate-[bounce_10s_linear_infinite] text-3xl font-extrabold [white-space:nowrap] md:w-fit md:text-6xl">
          MAAF SEPI
        </h1>
      </div>
    </div>
  );
}

export default Github;
