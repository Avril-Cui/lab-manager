import Header from "../components/header";
import styles from "../styles/Home.module.css";
import Cell from "../components/cell";
import Submit from "../components/submit";
import SelectCell from "../components/select_cell";
import Copyright from "../components/copyright";
import SelectCourse from "../components/select_course";
import SelectTeacher from "../components/select_teacher";
import SelectTutor from "../components/select_tutor";
import Submitted from "@/components/submitted";

import { useState } from "react";
import { google } from "googleapis";
import { JWT } from "google-auth-library";

export async function getServerSideProps({ query }: any) {
  const credentials = {
    type: "service_account",
    project_id: "sglabs",
    private_key_id: "4cb293950f7e29c357ba3d096181428c354b83e2",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDK2fxKhwlj8Mam\nsEty2eyBhjyOrLPxgoyRxKdDh1eP0iiGjOx6hyp8nVe/Ul5EqWsH7MtuJQ8RaymQ\nMo4ejME0lCd7+W/FUuKt5xNYmeD3gufDPWPxvKj9v4p293+UMntzQjkdaGMBtM3M\n7rveHZGfbcCGRqO0fZUeGHQ2n26GmL7FB3QdQVsmOYNldBVaKu7CYXynIAdklQto\nvscJVnueeW5Z8FQAcWXVQSibs1xQxb3rUxm7o/y8TkEXPwpAsXv0qUbPL5viGs8X\nezNrqJsEtwRsxgkDqMDn6+0nsSRQHZ/iKzQIlObgRFtY+SftjQZ3BJxqE3an0nH8\n9kDcr4SxAgMBAAECggEADVRerj0KYm1XeGucQZtNXcOG5i82EdgsyYVdImRZ3iMG\ns7S9810/bvnd4r4UYLmrRVWLlpzLzS64B/gye5JvPbfAknZ1IEfOinPlQwy1ij4p\nYZx+nUty5V25SREBaqkYkJ3Y5/RMkTei0GUdpj5WK95H6OrqZflcm6IqvM4kMqbn\nzuttxUVPNGTgHCtWD/YY6tySNeCv1kRO8Nt2/ZwSXsaxxGQkfEsCX2756xOfaK8J\nlo60EFwNX6AgXNd5meZtJ38onEoprdI1qxoLQHshJa++MgCpse73sg8hKeb2ay+G\nD6Pzgga6M/NJAght6eCKGU3T8TuBjzXrfxQfnu0yIwKBgQD4WkdorKYbKJXnXw8+\nM7mr23jm+vQiTQvEolWfCNodrrvKdTmzw8gtsyOh2fJqOASHFpCxlR068OHSBpMz\nXQLO1xMGCNrMIdOEJOXZUw6fjjizK2viq8fvr22JRJu2l3F9JjDYhdbB2QtAUW3s\nAH9WDhMtry4sSd1Q6oMu4oh9KwKBgQDRGQdlqmHbdQeYg9sXsJVKz4SBMl/tHqk3\nQALcQ7bkSpGl+AnTme45n282cYe7D+aPKSdtK3uvtngdkWEe00Yb9JS7FgBIVhYp\nfcLlQWNJBRQvcjlxed7/HFPBPlqiHQTfV/YCWDIjUs7hOuDeKbhMOYKkYCfpOJFe\nPbflTR5vkwKBgHFgzZ7UytQ1OBIzjILqHEZ/4HcadB/AqrGvJoV/Bgxs++BWmewe\nYiGy2X6HQCsLvc1qGM5pc7m3xHAcflEBkkmZWF715eUxQB3gtmn7h/6BcBMjrJID\nuDgND2WOQ8Qc6TuoFr6Sg1Nl4cQQKK2IIJnJvSmrAtpHMllBZngeBQ+XAoGAAZUe\n6TYQ54hLNmxJDDTZ7GcFqbSn5TOGNFTXsLMSf0fRMmBeMqvHkcgTH2ZckJ3eMNcu\n5TSfCwVmg1LGWWVf8nY3afMQrXt5T3cUMof8KGFRdcp3hNRXS7b7K0s9hFyT3Nzd\nj8b7GilWR34alZPbQThuNLBFnQ5Ai2YMLkAXKuECgYApTawoeL4xsunzbJNqFHQz\njkxBpDAH6hVuyty6u7x6/IN/YX57RwdV6MCoe7B42WArgifPruiIo29T6cuZdUth\nRbyddmRQBaeB5ZGzIRRVLeAJirjJH61/qgjnKNlSTHj3J8XoxG6hbFwtTbN77zhf\nQ0IZKG9MVyy+UeeptkU6JQ==\n-----END PRIVATE KEY-----\n",
    client_email: "sglabs@sglabs.iam.gserviceaccount.com",
    client_id: "112449005235412284628",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/sglabs%40sglabs.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  };

  const auth = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  await auth.authorize();

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
  const input_subject = ["Writing", "Math"];

  const support_type = [
    "homework questions",
    "quiz/test preparation",
    "essay revision",
    "essay idea brainstorming",
    "thesis statement",
    "research",
    "citation",
    "other"
  ];

  const [isSubmit, setIsSubmit] = useState(false);
  const [submissionData, setSubmissionData] = useState({
    name: "",
    subject: "",
    course: "",
    teacher: "",
    tutor: "",
    support: "",
    teacher_email: "",
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
    <div className={styles.container}>
      <Header />
      {isSubmit ? (
        <Submitted />
      ) : (
        <div style={{ marginTop: "8em" }}>
          <p className={styles.title}>Welcome to academic tutoring lab!</p>
          {/* <p className={styles.copyright}>© Website made by Avril Cui</p> */}
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
              handler={(new_value: any, teacher_email: any) => {
                setSubmissionData({
                  ...submissionData,
                  teacher: new_value,
                  teacher_email: teacher_email,
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
      )}
      <Copyright />
    </div>
  );
}
