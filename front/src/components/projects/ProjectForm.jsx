import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((resp) => {
              resp.json();
            })
            .then((data) => setCategories(data))
            .catch((error) => console.log(`Erro: ${error}`));
            
    }, [])
  return (
    <>
      <form className={styles.form}>
        <Input
          type="text"
          text="Nome do projeto"
          name="Name"
          placeholder="Insira o nome do projeto"
        />
        <Input
          type="number"
          text="Orçamento do projeto"
          name="budget"
          placeholder="Insira o orçamento total"
        />
        <Select name="category_id" text="Selecione a categoria" options={categories} />
        <div>
          <SubmitButton text={btnText} />
        </div>
      </form>
    </>
  );
}

export default ProjectForm;
