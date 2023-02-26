function Input({ type, text, name, placeholder, value, handleOnChange }) {
    return (
        <label
            htmlFor={name}
            className="flex flex-col gap-2 mb-4 text-2xl font-bold"
        >
            {text}:
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
                className="font-normal p-3 placeholder:text-[#7b7b7b] text-lg"
            />
        </label>
    );
}

export default Input;
