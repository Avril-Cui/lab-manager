import Header from "@/components/header";
import styles from "@/styles/Home.module.css";
import Cell from "@/components/cell";
import Submit from "@/components/submit";
import SelectCell from "@/components/select_cell";

export default function Home() {
  const handleSubmit = (event: any) => {
    // event.preventDefault(props.user_uid, buyShares, sellShares);
    console.log("submitted");
  };

  const input_teachers = {
    "1": "Congleton",
    "2": "D. Lewis",
    "3": "M. Lewis",
    "4": "Spezzano",
    "5": "Vaughters",
    // <option value="congleton">Congleton</option>
    // <option value="dlewis">D. Lewis</option>
    // <option value="mlewis">M. Lewis</option>
    // <option value="spezzano">Spezzano</option>
    // <option value="vaughters">Vaughters</option>
  };

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
        <SelectCell
          text={"Your teacher's name"}
          input_type={"text"}
          placeholder={"Choose your teacher"}
          input={input_teachers}
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
