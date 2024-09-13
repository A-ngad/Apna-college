import problems from "../Data/LeetcodeProblems.json";
import { useState, useContext } from "react";
import UserContext from "../Context/userContext";
import classNames from "classnames";

const Problems = ({ topicId }) => {
  const [user, setUser] = useContext(UserContext);

  const [selectedDifficulty, setSelectedDifficuty] = useState("");

  const [showFilters, setShowFilters] = useState(false);

  const currectTopicProblems = problems.filter(
    (problem) => problem.topicId === topicId
  );

  const filteredTopicProblems = selectedDifficulty
    ? currectTopicProblems.filter(
        (problem) => problem.difficulty === selectedDifficulty
      )
    : currectTopicProblems;

  const userProblems = user?.progress?.find((data) => data.topicId == topicId);

  const completedProblems = userProblems?.completedProblems || null;

  const handleChange = (id) => {
    const updatedUser = {
      ...user,
      progress: user?.progress?.map((topic) =>
        topic.topicId === topicId
          ? {
              ...topic,
              completedProblems: [...topic?.completedProblems, id],
            }
          : topic
      ),
    };

    setUser(updatedUser);
  };

  return (
    <div className="p-3">
      <div className="d-flex gap-2">
        <span className="fw-bold" onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? "Hide Filters " : "Show Filters"}{" "}
          <span className={classNames({ "rotate-180": showFilters })}>
            {" "}
            &#11208;
          </span>
        </span>
        {showFilters && (
          <div className="d-flex gap-2">
            <span
              className={classNames(
                " text-decoration-underline cursor-pointer",
                {
                  "text-info": selectedDifficulty === "easy",
                }
              )}
              onClick={(e) => setSelectedDifficuty("easy")}
            >
              Easy
            </span>
            <span
              className={classNames(
                " text-decoration-underline cursor-pointer",
                {
                  "text-info": selectedDifficulty === "medium",
                }
              )}
              onClick={(e) => setSelectedDifficuty("medium")}
            >
              Medium
            </span>
            <span
              className={classNames(
                " text-decoration-underline cursor-pointer",
                {
                  "text-info": selectedDifficulty === "hard",
                }
              )}
              onClick={(e) => setSelectedDifficuty("hard")}
            >
              Hard
            </span>
            {selectedDifficulty && (
              <span
                className="text-danger text-decoration-underline cursor-pointer"
                onClick={(e) => setSelectedDifficuty("")}
              >
                Remove Filter
              </span>
            )}
          </div>
        )}
      </div>
      <div className="grid-container p-3">
        {filteredTopicProblems.map((problem) => (
          <div
            key={problem.id}
            className="text-decoration-none d-flex gap-2 align-items-center"
          >
            {" "}
            <input
              type="checkbox"
              checked={
                completedProblems && completedProblems.includes(problem.id)
              }
              onChange={() => {
                handleChange(problem.id);
              }}
            />
            <a
              href={problem.url}
              target="_blank"
              className="text-decoration-none text-dark"
            >
              {problem.name}
            </a>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problems;
