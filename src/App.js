import { Fragment, useState } from "react";
import Login from "./Pages/Login";
import Course from "./Pages/Course";
import Navbar from "./Components/NavBar";
// import Subtopics from "./Pages/Subtopics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./Context/userContext";

import "./styles.css";
import "./bootstrap.min.css";

// 1. Login page for the students.
// 2. Topics wise chapters/ topics/ problems (related to DSA)
// 3. Sub topics/problems related to the chapter (for example - problem 1, problem 2, problem 3 etc.)
// 4. YouTube tutorial link (referring the topic/problem)
// 5. Leadcode /codeforce link
// 6. Article link
// 7. Level of the topics link (Easy /Medium/Tough)
// 8. Create a check box with each topics/ problem so that students can click on that check box

export default function App() {
  const [login, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Course />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/{:topicId}" element={<Subtopics data={}/>} /> */}
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
