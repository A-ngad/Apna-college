import { Fragment, useState } from "react";
import VideoEmbed from "../Components/VideoEmbed";
import Tabs from "../Components/Tabs";
import SideBar from "../Components/SideBar";

const Subtopics = ({ data, setSelectedTopic }) => {
  const subtopics = data.subtopics;

  const [selectedSubTopic, setSelectedSubTopic] = useState(subtopics[0]);

  return (
    <div className="">
      <div className="d-flex bg-warning p-4">
        <button
          onClick={() => setSelectedTopic("")}
          className="bg-transparent border-0"
        >
          <img
            width="25"
            height="30"
            src="https://img.icons8.com/ios-filled/50/long-arrow-left.png"
            alt="long-arrow-left"
          />
        </button>
        <span className="fs-5 fw-bold">{data.name}</span>
      </div>
      <div className="d-flex gap-1 max-h-60">
        <div className="w-100 w-md-75 border">
          <VideoEmbed src={selectedSubTopic.video_url} />
        </div>
        <div className="w-25 border d-none d-md-block overflow-auto">
          <div className="p-3 fw-bold">Video Content</div>
          <SideBar
            subtopics={subtopics}
            selectedSubTopic={selectedSubTopic}
            setSelectedSubTopic={setSelectedSubTopic}
            topicId={data.topicId}
          />
        </div>
      </div>
      <div>
        <Tabs
          topicId={data.topicId}
          setSelectedSubTopic={setSelectedSubTopic}
          selectedSubTopic={selectedSubTopic}
          subtopics={subtopics}
        />
      </div>
    </div>
  );
};

export default Subtopics;
