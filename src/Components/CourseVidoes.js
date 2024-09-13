import { useState, Fragment, useContext } from "react";
import leetcodeProblems from "../Data/LeetcodeProblems.json";
import classNames from "classnames";
import UserContext from "../Context/userContext";

const CourseVideos = ({
  item,
  setSelectedSubTopic,
  selectedSubTopic,
  topicId,
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [user, setUser] = useContext(UserContext);

  const filteredProblems = leetcodeProblems.filter((problem) =>
    item?.problems?.includes(problem.id)
  );

  const topicDetails = user?.progress?.find((data) => data.topicId === topicId);

  const subtopics = topicDetails?.subtopics || null;

  const handleChange = (id) => {
    const updatedUser = {
      ...user,
      progress: user?.progress?.map((topic) =>
        topic.topicId === topicId
          ? {
              ...topic,
              subtopics: [...topic?.subtopics, id],
            }
          : topic
      ),
    };

    setUser(updatedUser);
  };

  return (
    <div className={classNames("px-2 pb-1 pt-2 border-bottom")}>
      <div className="d-flex gap-2" key={item.id}>
        <input
          type="checkbox"
          checked={subtopics && subtopics.includes(item.subTopicId)}
          onChange={() => handleChange(item.subTopicId)}
        />
        <div onClick={() => setSelectedSubTopic(item)}>{item.name}</div>
      </div>
      {item.problems && (
        <>
          <div className="d-flex w-100 justify-content-end px-3">
            <button
              className="fs-11 border-1 rounded-3 bg-white"
              onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            >
              Problems
            </button>
          </div>
          {isDropdownVisible && (
            <div className="position-absolute bg-white rounded px-3 py-1 pop-down">
              {filteredProblems.map((problem) => (
                <div key={problem.id}>
                  <a
                    href={problem.url}
                    className=" text-dark fs-12"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      class="h-3 w-3"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.167 6a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V7.414l-6.46 6.46a1 1 0 01-1.414-1.414L16.753 6h-2.586zM18 14.533a1 1 0 112 0v3.6A2.867 2.867 0 0117.133 21H5.867A2.867 2.867 0 013 18.133V6.867A2.867 2.867 0 015.867 4h3.6a1 1 0 110 2h-3.6A.867.867 0 005 6.867v11.266c0 .479.388.867.867.867h11.266a.867.867 0 00.867-.867v-3.6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-1">{problem.name}</span>
                  </a>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default CourseVideos;
