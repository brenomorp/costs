function Select({ text, name, options, value, handleOnChange }) {
    return (
        <label
            htmlFor={name}
            className="flex flex-col gap-2 mb-4 text-2xl font-bold"
        >
            {text}:
            <select
                name={name}
                id={name}
                value={value}
                onChange={handleOnChange}
                className="font-normal p-3 text-lg"
            >
                <option defaultChecked>Selecione uma opção</option>
                {options.map((item) => (
                    <option value={item.id} key={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
        </label>
    );
}

export default Select;
