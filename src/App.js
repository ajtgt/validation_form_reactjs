import { useState, useEffect } from "react";
import "./App.css";
import validate from "./validate";

function App() {
  const initialValues = { username: "", email: "", phone: "", pin: "", address: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    let emailRegex = /^([a-z\d\.]+)@([a-z\d-]+)\.([a-z]{2,})$/;
    let nameRegex = /[^a-z]/gi;
    let phoneRegex = /^\d{10}$/;
    if (nameRegex.test(formValues.username) && emailRegex.test(formValues.email) && phoneRegex.test(formValues.phone)) {
      alert(JSON.stringify(formValues, null, 2))
    } else {
      return null;
    }


  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);

    }
  }, [formErrors]);


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
                value={formValues.username}
                onChange={handleChange}
              />

            </div>
            <p>{formErrors.username}</p>
            <div className='form-inputs'>
              <label className='form-label'>Email<span>*</span>:</label>
              <input
                className='form-input'
                type='email'
                name='email'

                value={formValues.email}
                onChange={handleChange}
              />

            </div>
            <p>{formErrors.email}</p>
            <div className='form-inputs'>
              <label className='form-label'>Phone<span>*</span>:</label>
              <input
                className='form-input'
                type='number'
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
              />

            </div>
            <p>{formErrors.phone}</p>
            <div className='form-inputs'>
              <label className='form-label'>PIN:</label>
              <input
                className='form-input'
                type="number"
                name='pin'

                onInput={(e) => e.target.value = e.target.value.slice(0, 6)}
                value={formValues.pin}
                onChange={handleChange}
              />

            </div><p></p>


            <div className='form-inputs'>
              <label className='form-label'>Address:</label>
              <textarea
                className='form-input'
                type='text'
                name='address'

                value={formValues.address}
                onChange={handleChange}
              />

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

export default App;