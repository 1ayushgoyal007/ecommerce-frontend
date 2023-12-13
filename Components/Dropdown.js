import React from 'react';

const Dropdown = ({ label = "Category", items, value, onChange }) => {
    return (
        <>
            <label  >{label}</label>
            <select
                style={{ width: '100%', padding: '6px' }}
                value={value}
                onChange={onChange}
            >
                {items.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Dropdown;