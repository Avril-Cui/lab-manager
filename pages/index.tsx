import Header from "@/components/header";
import styles from "@/styles/Home.module.css";
import Cell from "@/components/cell";
import Submit from "@/components/submit";
import SelectCell from "@/components/select_cell";
import Copyright from "@/components/copyright";

export default function Home() {
  const handleSubmit = (event: any) => {
    console.log("submitted");
  };

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

  return (
    <div style={{ marginBottom: "30vh" }}>
      <Header />
      <div style={{ marginTop: "8em" }}>
        <p className={styles.title}>Welcome to academic tutoring lab!</p>
        <form onSubmit={handleSubmit}></form>
        <Cell
          text={"Your Full Name"}
          input_type={"text"}
          input_text={"Enter name"}
        />
        <SelectCell
          text={"Subject you had help with"}
          input_type={"select"}
          placeholder={"Choose your subject"}
          input={input_subject}
        />
        <SelectCell
          text={"Course you are in"}
          input_type={"select"}
          placeholder={"Choose your course"}
          input={input_course}
        />
        <SelectCell
          text={"Your teacher's name"}
          input_type={"text"}
          placeholder={"Choose your teacher"}
          input={input_teachers}
        />
        <SelectCell
          text={"Your tutor's name"}
          input_type={"select"}
          placeholder={"Choose your tutor"}
          input={tutor_list}
        />
        <SelectCell
          text={"Type of help you received"}
          input_type={"text"}
          placeholder={"Select support type"}
          input={support_type}
        />
        <Submit />
      </div>
      <Copyright />
    </div>
  );
}
