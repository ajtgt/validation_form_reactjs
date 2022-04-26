import React, { useState } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';


const FormSignup = ({ submitForm }) => {
    const { handleSubmit, handleInput, errors } = useForm(
        submitForm,
        validate
    );

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pin, setPin] = useState("");
    const [address, setAddress] = useState("");
    return (



        <div className='main'>

            <div id="root" className="container">
                <div>
                    <img src="tti.png" alt="logo" className="photo" />
                </div>

                <div className='form-content-right'>
                    <form onSubmit={handleSubmit} className='form' noValidate>
                        <h1 className='header'>
                            Timing Technologies
                        </h1>
                        <div className='form-inputs'>
                            <label className='form-label'>Name<span>*</span>:</label>
                            <input
                                className='form-input'
                                type='text'

                                name='username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {errors.username && <p>{errors.username}</p>}
                        </div>
                        <div className='form-inputs'>
                            <label className='form-label'>Email<span>*</span>:</label>
                            <input
                                className='form-input'
                                type='email'
                                name='email'

                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                        <div className='form-inputs'>
                            <label className='form-label'>Phone<span>*</span>:</label>
                            <input
                                className='form-input'
                                type='number'
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                            />
                            {errors.phone && <p>{errors.phone}</p>}
                        </div>
                        <div className='form-inputs'>
                            <label className='form-label'>PIN:</label>
                            <input
                                className='form-input'
                                type="number"
                                name='pin'

                                onInput={(e) => e.target.value = e.target.value.slice(0, 6)}
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                            />
                            {errors.pin && <p>{errors.pin}</p>}
                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'>Address:</label>
                            <textarea
                                className='form-input'
                                type='text'
                                name='address'

                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            {errors.address && <p>{errors.address}</p>}
                        </div>
                        <button className='form-input-btn' type='submit'>
                            Register
                        </button>

                    </form>
                </div>
            </div>


        </div>



    )
}

export default FormSignup