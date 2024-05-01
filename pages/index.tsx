import Header from "@/components/header";
import styles from "@/styles/Home.module.css";
import Cell from "@/components/cell";
import Submit from "@/components/submit";
import SelectCell from "@/components/select_cell";
import Copyright from "@/components/copyright";
import { useState } from "react";
import { google } from "googleapis";
import SelectCourse from "@/components/select_course";
import SelectTeacher from "@/components/select_teacher";
import SelectTutor from "@/components/select_tutor";

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

  const res2 = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "tutor_name!A1:B39",
  });

  const response = res.data.values;
  const tutor = res2.data.values;

  return {
    props: {
      response,
      tutor,
    },
  };
}

export default function Home({ response, tutor }: any) {
  const input_teachers = [
    "Congleton",
    "D. Lewis",
    "M. Lewis",
    "Spezzano",
    "Vaughters",
  ];

  const input_subject = ["Writing", "Math"];

  const support_type = [
    "homework questions",
    "quiz/test preparation",
    "essay revision",
    "essay idea brainstorming",
    "thesis statement",
    "research",
    "citation",
  ];

  const [isSubmit, setIsSubmit] = useState(false);
  const [submissionData, setSubmissionData] = useState({
    name: "",
    subject: "",
    course: "",
    teacher: "",
    tutor: "",
    support: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault(submissionData);
    setIsSubmit(true);
    fetch("/api/email_sender", {
      method: "POST",
      body: JSON.stringify(submissionData),
    })
      .then(() => {
        console.log("submitted");
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
          <SelectCourse
            text={"Course you are in"}
            input_type={"select"}
            placeholder={"Choose your course"}
            handler={(new_value: any) => {
              setSubmissionData({
                ...submissionData,
                course: new_value,
              });
            }}
            data={response}
            subject={submissionData.subject.toLowerCase()}
          />
          <SelectTeacher
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
            data={response}
            course={submissionData.course}
          />
          <SelectTutor
            text={"Your tutor's name"}
            input_type={"select"}
            placeholder={"Choose your tutor"}
            handler={(new_value: any) => {
              setSubmissionData({
                ...submissionData,
                tutor: new_value,
              });
            }}
            data={tutor}
            subject={submissionData.subject.toLowerCase()}
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
