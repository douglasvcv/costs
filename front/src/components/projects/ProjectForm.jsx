import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}){
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
           <Select
           name="category_id"
           text="Selecione a categoria"
           />
            <div>
                <SubmitButton text={btnText}/>
            </div>
        </form>
        </>
    )
}

export default ProjectForm