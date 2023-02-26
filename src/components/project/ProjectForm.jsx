import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({ btnText }) {
    return (
        <form className="flex flex-col gap-6 w-[25%]">
            <Input
                type="text"
                placeholder="Insira o nome do projeto"
                text="Nome do projeto"
                name="name"
            />
            <Input
                type="number"
                placeholder="Insira o orçamento total"
                text="Orçamento do projeto"
                name="budget"
            />
            <Select name="category_id" text="Selecione a categoria" />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default ProjectForm;
