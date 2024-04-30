import Header from "@/components/header";
import styles from "@/styles/Home.module.css";
import Cell from "@/components/cell";
import Submit from "@/components/submit";
import SelectCell from "@/components/select_cell";
import Copyright from "@/components/copyright";
import { useState } from "react";

export default function Home() {
  const input_teachers = [
    "Congleton",
    "D. Lewis",
    "M. Lewis",
    "Spezzano",
    "Vaughters",
  ];

  const input_subject = [
    "Writing",
    "Science",
    "Math",
    "Latin",
    "French",
    "Spanish",
    "Latin",
    "Art",
  ];

  const input_course = ["HUM 1", "HUM 2", "American Studies"];

  const tutor_list = [
    "Avril Cui",
    "Blake O'Connor",
    "Christina Xiang",
    "Cami Hart",
  ];

  const support_type = ["Homework questions", "Quiz/test preparation", "Other"];

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [course, setCourse] = useState("");
  const [teacher, setTeacher] = useState("");
  const [tutor, setTutor] = useState("");
  const [support, setSupport] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault(name, subject, course, teacher, tutor, support);
    const data = {
      name: name,
      subject: subject,
      course: course,
      teacher: teacher,
      tutor: tutor,
      support: support,
    };
    console.log("submitted");
    console.log(data);
  };

  return (
    <div style={{ marginBottom: "30vh" }}>
      <Header />
      <div style={{ marginTop: "8em" }}>
        <p className={styles.title}>Welcome to academic tutoring lab!</p>
        <form onSubmit={handleSubmit}>
          <Cell
            text={"Your Full Name"}
            input_type={"text"}
            input_text={"Enter name"}
            handler={setName}
          />
          <SelectCell
            text={"Subject you had help with"}
            input_type={"select"}
            placeholder={"Choose your subject"}
            input={input_subject}
            handler={setSubject}
          />
          <SelectCell
            text={"Course you are in"}
            input_type={"select"}
            placeholder={"Choose your course"}
            input={input_course}
            handler={setCourse}
          />
          <SelectCell
            text={"Your teacher's name"}
            input_type={"text"}
            placeholder={"Choose your teacher"}
            input={input_teachers}
            handler={setTeacher}
          />
          <SelectCell
            text={"Your tutor's name"}
            input_type={"select"}
            placeholder={"Choose your tutor"}
            input={tutor_list}
            handler={setTutor}
          />
          <SelectCell
            text={"Type of help you received"}
            input_type={"text"}
            placeholder={"Select support type"}
            input={support_type}
            handler={setSupport}
          />
          <Submit />
        </form>
      </div>
      <Copyright />
    </div>
  );
}
