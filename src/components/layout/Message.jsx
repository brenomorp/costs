import { useState, useEffect } from 'react';

const Message = ({ type, msg }) => {
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
                    className={`w-40 h-20 p-4 border border-solid border-black mb-8 rounded-md text-center ${
                        typeClass || ''
                    }`}
                >
                    {msg}
                </div>
            )}
        </>
    );
};

export default Message;
