const Container = ({ children, customClass }) => {
    return (
        <div className={`w-[1200px] flex mx-auto flex-wrap ${customClass}`}>
            {children}
        </div>
    );
};

export default Container;
