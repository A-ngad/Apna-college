import { Fragment } from "react";
import topics from "../Data/Topics.json";
import Subtopics from "./Subtopics";
import { useState } from "react";

const Course = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  if (selectedTopic)
    return (
      <Subtopics data={selectedTopic} setSelectedTopic={setSelectedTopic} />
    );

  return (
    <Fragment>
      <div className="p-4 bg-warning fs-2 fw-bold">Topics</div>
      <div className="p-4 p-lg-5">
        <div className="topic-grid">
          {topics.map((item) => (
            <div className="m-2 border cursor-pointer rounded-2">
              <div
                key={item.topicId}
                className=" position-relative topic-card"
                onClick={() => {
                  setSelectedTopic(item);
                }}
              >
                <img
                  src={item.image}
                  className="object-fit-cover position-absolute w-100 h-100 z-0"
                />
              </div>
              <div className="bg-white z-1 border-3 promise-relative p-2 fs-6 fw-bold">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Course;
