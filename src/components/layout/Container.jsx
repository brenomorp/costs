function Container({ children, customClass }) {
    return (
        <div className={`w-[1200px] mx-auto ${customClass}`}>{children}</div>
    );
}

export default Container;
