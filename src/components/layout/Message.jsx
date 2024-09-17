import { useState, useEffect } from 'react';

function Message({ type, msg }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!msg) {
            setVisible(false);
        }

        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [msg]);

    const typeClassMap = {
        error: 'error',
        success: 'success',
    };

    const typeClass = type ? typeClassMap[type] : null;

    return (
        <>
            {visible && (
                <div
                    className={`flex items-center justify-center w-[1200px] p-4 border border-solid border-black rounded-md absolute right-1/2 translate-x-1/2 ${
                        typeClass || ''
                    }`}
                >
                    {msg}
                </div>
            )}
        </>
    );
}

export default Message;
