import Header from "@/components/header";
import styles from "@/styles/Home.module.css";
import Cell from "@/components/cell";
import Submit from "@/components/submit";

export default function Home() {
  return (
    <div style={{marginBottom: "30vh"}}>
      <Header />
      <div style={{ marginTop: "8em" }}>
        <p className={styles.title}>Welcome to academic tutoring lab!</p>
        <Cell
          text={"Your Full Name"}
          input_type={"text"}
          input_text={"Enter name"}
        />
        <Cell
          text={"Subject you had help with"}
          input_type={"select"}
          input_text={"Subject"}
        />
        <Cell
          text={"Course you are in"}
          input_type={"text"}
          input_text={"Enter name"}
        />
        <Cell
          text={"Your tutor's name"}
          input_type={"text"}
          input_text={"Enter name"}
        />
        <Cell
          text={"Type of help you received"}
          input_type={"text"}
          input_text={"Enter name"}
        />
        <Submit />
      </div>
    </div>
  );
}
