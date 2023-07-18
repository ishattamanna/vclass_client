import React from 'react';

const IconCircleButton = ({ className, children, onClick }) => {
    return (
        <div onClick={onClick} className={`bg-[steelblue] text-white transition ease-in-out delay-150 font-bold p-2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full ${className} `}>
            {children}
        </div>
    );
};

export default IconCircleButton;