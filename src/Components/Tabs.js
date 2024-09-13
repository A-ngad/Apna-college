import { Fragment, useState, useEffect } from "react";
import classNames from "classnames";
// import data from "../Data/Topics.json";
import Problems from "./Problems";
import SideBar from "./SideBar";
import Notes from "./Notes";

const Tabs = ({
  topicId,
  subtopics,
  selectedSubTopic,
  setSelectedSubTopic,
}) => {
  const [showVideoinTabs, setShowVideoInTabs] = useState(
    window.innerWidth < 768
  );

  const tabOptions = [
    {
      name: "Video Content",
      description: "",
      component: (
        <SideBar
          subtopics={subtopics}
          selectedSubTopic={selectedSubTopic}
          setSelectedSubTopic={setSelectedSubTopic}
          topicId={topicId}
        />
      ),
      show: showVideoinTabs,
    },
    {
      name: "Overview",
      description: "Video Details/ Topics Details can be added here",
      show: true,
    },
    {
      name: "Problems",
      description:
        "Here you can find some questions we suggest you try solving on your own after going through our lectures",
      component: <Problems topicId={topicId} />,
      show: true,
    },
    {
      name: "Q&A",
      description:
        "Here you can as any queries you have and even go through what others have asked",
      show: false,
    },
    {
      name: "Notes",
      description:
        "Here you can write up any notes, We promise to keep your secrets safe with us",
      show: true,
      component: <Notes topicId={topicId} subTopic={selectedSubTopic} />,
    },
  ];

  const [selectedTab, setSelectedTab] = useState(
    showVideoinTabs ? tabOptions[0] : tabOptions[1]
  );

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setShowVideoInTabs(true);
    } else {
      setShowVideoInTabs(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  if (selectedTab.show)
    return (
      <Fragment>
        <div className="d-flex px-3">
          {tabOptions.map(
            (tab) =>
              tab.show && (
                <button
                  onClick={() => setSelectedTab(tab)}
                  className={classNames("bg-transparent border-0", {
                    " border-bottom border-3 border-warning ":
                      selectedTab.name === tab.name,
                  })}
                >
                  {" "}
                  {tab.name}{" "}
                </button>
              )
          )}
        </div>
        <div className="p-3">
          <div>{selectedTab.description}</div>
          {selectedTab.component}
        </div>
      </Fragment>
    );
};

export default Tabs;
