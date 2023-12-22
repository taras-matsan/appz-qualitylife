import React, {useState} from 'react';

const TestItem = ({test, onChange}) => {
    const [value, setValue] = useState(test.value);
    const [filename, setFilename] = useState('');


    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (test.type === 'file') {
            const file = event.target.files[0];
            setFilename(file ? file.name : '');
            const ret = {test, file};
            onChange(ret); // When it's a file, we pass the file object instead of the value
        } else {
            const ret = {test, newValue};
            onChange(ret);
        }
    };


    const inputField = () => {
        switch (test.type) {
            case 'number':
                return <input type="text" pattern="/^[\d]+.?[\d]*-?[\d]+.?[\d]*$/" value={value} onChange={handleChange}/>;
            case 'text':
                return <input type="text" value={value} onChange={handleChange}/>;
            case 'file':
                return (
                    <div className="file-input-container">
                        <label htmlFor="file-upload">{filename || 'Choose a file'}</label>
                        <input id="file-upload" type="file" onChange={handleChange}/>
                    </div>
                );
            case 'dropdown':
                return (
                    <select value={value} onChange={handleChange}>
                        {test.options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                );
            default:
                return <input type="text" value={value} onChange={handleChange}/>;
        }
    };

    return (
        <div className="test-item">
            <label>{test.name}</label>
            {inputField()}
        </div>
    );
};

export default TestItem;
