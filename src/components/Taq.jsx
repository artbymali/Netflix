import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

function Faq() {
  const [active, setActive] = useState(false);



  return (
    <div>
      <div className="tab">
        <div
          className="question"
          onClick={() => {
            setActive(!active);
          }}
        >
          <h3>What is Netflix</h3>
          {active ? (
            <IoChevronUp onClick={() => setActive(!active)} />
          ) : (
            <IoChevronDown onClick={() => setActive(!active)} />
          )}
        </div>
        {active && (
          <div className="answer">
          <p>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices.
          </p>
          <p>
            You can watch as much as you want, whenever you want without a
            single commercial – all for one low monthly price. There's always
            something new to discover and new TV shows and movies are added
            every week!
          </p>
        </div>
        )}
      </div>
    </div>
  );
}

export default Faq;
