import { useState, useEffect } from 'react';
import validateInfo from './validateInfo';



const useForm = (callback, validate) => {
    // const [values, setValues] = useState({
    //     username: '',
    //     email: '',
    //     phone: '',
    //     pin: '',
    //     address: ''
    // });

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pin, setPin] = useState("");
    const [address, setAddress] = useState("");

    const [errors, setErrors] = useState({});
    const [records, setRecords] = useState([]);




    const handleSubmit = e => {
        e.preventDefault();




        const newRecord = {


        }

        console.log(records);
        setRecords([...records, newRecord]);



        const alertBox = (props) => {
            alert(`Name: ${this.props.values}`);
        }




    };








    return { handleSubmit, errors };
};

export default useForm;