import UserContext from "../Context/userContext";
import { useContext, useState } from "react";

const Notes = ({ topicId, subTopic }) => {
  const [user, setUser] = useContext(UserContext);

  const [newNote, setNewNote] = useState("");

  const currentTopic = user?.progress?.find((note) => note.topicId === topicId);

  const currentNotes = currentTopic?.notes?.filter(
    (note) => note.subTopicId === subTopic.subTopicId
  );
  console.log(
    currentNotes,
    "currentSubtopicNotes",
    currentTopic,
    subTopic.subTopicId
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user,
      progress: user.progress.map((topic) =>
        topic.topicId === topicId
          ? {
              ...topic,
              notes: [
                ...(topic.notes || []), // Existing notes or empty array if none
                {
                  subTopicId: subTopic.subTopicId,
                  note: newNote,
                  timeStamp: new Date().toLocaleTimeString(),
                }, // Add the new note
              ],
            }
          : topic
      ),
    };

    console.log(updatedUser, "updatedUser");

    // Update the state with the new user object
    setUser(updatedUser);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="d-fex p-2">
        <input
          type="text"
          placeholder="I can make notes here..."
          className="w-50"
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button className=" border-1 mx-3 rounded"> Save </button>
      </form>
      {currentNotes?.map((note) => (
        <div className="d-flex gap-2">
          <div className="">{note.timeStamp} -</div>
          <div> {note.note}</div>
        </div>
      ))}
    </>
  );
};

export default Notes;
