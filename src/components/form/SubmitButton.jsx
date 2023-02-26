function SubmitButton({ text }) {
    return (
        <button className="bg-[#222] text-white py-3 px-5 cursor-pointer duration-500 hover:text-[#ffbb33] w-fit">
            {text}
        </button>
    );
}

export default SubmitButton;
