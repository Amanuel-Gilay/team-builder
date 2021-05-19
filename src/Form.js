import React from 'react'
function Form(props) {
    const {value, update, submit} = props;
    const onChange = evt => {
        const {name, value} = evt.target;
        update(name, value);
    }
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name
                <input
                    name='name'
                    type='text'
                    value={value.name}
                    placeholder='name'
                    onChange={onChange}
                    />
                </label>
                <label>Email
                <input
                    name='email'
                    type='text'
                    value={value.email}
                    placeholder='email'
                    onChange={onChange}
                    />
                </label>
                <label>role
                    <select
                        name='role'
                        value={value.role}
                        onChange={onChange}>
                            <option value=''>-- Select a Role --</option>
                            <option value='fullstack'>fullstack</option>
                            <option value='frontend'>frontend </option>
                            <option value='backend'>backend</option>
                    </select>
                </label>
            <div className='submit'>
                <button>submit</button>
            </div>
        </div>
    </form>
    )
}
export default Form;