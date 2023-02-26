function Title({ children, customClass }) {
    return (
        <h1 className={`text-6xl font-bold ${[customClass]}`}>{children}</h1>
    );
}

export default Title;
