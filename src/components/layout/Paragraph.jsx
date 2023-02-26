function Paragraph({ children, customClass }) {
    return (
        <p className={`text-[#7b7b7b] text-2xl ${[customClass]}`}>{children}</p>
    );
}

export default Paragraph;