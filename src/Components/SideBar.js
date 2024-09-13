import CourseVideos from "./CourseVidoes";

const SideBar = ({
  subtopics,
  setSelectedSubTopic,
  selectedSubTopic,
  topicId,
}) => {
  return subtopics?.map((item) => (
    <CourseVideos
      item={item}
      setSelectedSubTopic={setSelectedSubTopic}
      selectedSubTopic={selectedSubTopic}
      topicId={topicId}
    />
  ));
};

export default SideBar;
