import Header from "@/components/header";
import styles from "@/styles/Home.module.css";
import Cell from "@/components/cell";
import Submit from "@/components/submit";
import SelectCell from "@/components/select_cell";
import Copyright from "@/components/copyright";
import { useState } from "react";
import { google } from "googleapis";

export async function getServerSideProps({ query }: any) {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const { id } = query;
  const range = `teacher_form_types!A1:D32`;
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  // let response: { subject: string; course: string; teacher: string; email: string } = {
  //   subject: "",
  //   course: "",
  //   teacher: "",
  //   email: "",
  // };

  // if (res.data.values) {
  //   const [subject, course, teacher, email] = res.data.values[0];
  //   response = {
  //     subject,
  //     course,
  //     teacher,
  //     email,
  //   };
  // }
  const response = res.data.values;

  return {
    props: {
      response,
    },
  };
}

export default function Home({ response }: any) {
  console.log("response");
  console.log(response);
  const input_teachers = [
    "Congleton",
    "D. Lewis",
    "M. Lewis",
    "Spezzano",
    "Vaughters",
  ];

  const input_subject = ["Writing", "Math"];

  const input_course = ["HUM 1", "HUM 2", "American Studies"];

  const tutor_list = [
    "Avril Cui",
    "Blake O'Connor",
    "Christina Xiang",
    "Cami Hart",
  ];

  const support_type = ["Homework questions", "Quiz/test preparation", "Other"];

  const [isSubmit, setIsSubmit] = useState(false);
  const [submissionData, setSubmissionData] = useState({
    name: "",
    subject: "",
    course: "",
    teacher: "",
    tutor: "",
    support: "",
  });

  // console.log(submissionData);

  const handleSubmit = (event: any) => {
    event.preventDefault(submissionData);
    console.log("data");
    setIsSubmit(true);
    console.log(submissionData);
    fetch("/api/email_sender", {
      method: "POST",
      body: JSON.stringify(submissionData),
    })
      .then(() => {
        console.log("submitted");
        // console.log(submissionData);
      })
      .catch((err) => {
        console.log(err);
      });
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
            handler={(new_value: any) => {
              setSubmissionData({
                ...submissionData,
                name: new_value,
              });
            }}
          />
          <SelectCell
            text={"Subject you had help with"}
            input_type={"select"}
            placeholder={"Choose your subject"}
            input={input_subject}
            handler={(new_value: any) => {
              setSubmissionData({
                ...submissionData,
                subject: new_value,
              });
            }}
          />
          <SelectCell
            text={"Course you are in"}
            input_type={"select"}
            placeholder={"Choose your course"}
            input={input_course}
            handler={(new_value: any) => {
              setSubmissionData({
                ...submissionData,
                course: new_value,
              });
            }}
          />
          <SelectCell
            text={"Your teacher's name"}
            input_type={"text"}
            placeholder={"Choose your teacher"}
            input={input_teachers}
            handler={(new_value: any) => {
              setSubmissionData({
                ...submissionData,
                teacher: new_value,
              });
            }}
          />
          <SelectCell
            text={"Your tutor's name"}
            input_type={"select"}
            placeholder={"Choose your tutor"}
            input={tutor_list}
            handler={(new_value: any) => {
              setSubmissionData({
                ...submissionData,
                tutor: new_value,
              });
            }}
          />
          <SelectCell
            text={"Type of help you received"}
            input_type={"text"}
            placeholder={"Select support type"}
            input={support_type}
            handler={(new_value: any) => {
              setSubmissionData({
                ...submissionData,
                support: new_value,
              });
            }}
          />
          <Submit isSubmit={isSubmit} />
        </form>
      </div>
      <Copyright />
    </div>
  );
}
