export default function validateInfo(values) {
  let errors = {};
  let emailRegex = /^([a-z\d\.]+)@([a-z\d-]+)\.([a-z]{2,})$/;
  let nameRegex = /[^a-z]/gi;



  /**
    * ! UserName here
  
  **/



  if (!values.username.trim()) {
    errors.username = '*Name cannot empty';
  } else if (!nameRegex.test(values.username)) {
    errors.username = '*Give your full name i.e. First and Last Name';
  } else {
    errors.username = '';
  }


  /**
    * ! Email validation here
  **/

  if (!values.email) {
    errors.email = '*Email can not be empty';
  } else if (!emailRegex.test(values.email)) {
    errors.email = '*Please enter a valid email address';
  } else {
    errors.email = '';
  }



  /**
    * ! Phone Number validation here
  **/


  let phoneRegex = /^\d{10}$/;

  if (!values.phone) {
    errors.phone = '*Phone can not be empty';
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = " *Please enter a valid Phone Number i.e. 10 digit  ";
  } else {
    errors.phone = "";
  }


  // const alertBox = () => {

  //   if (nameRegex.test(values.username) && emailRegex.test(values.email) && phoneRegex.test(values.phone)) {


  //     alert("NAME : " + values.username + "     " + "EMAIL : " + values.email + "      "
  //       + "PHONE NUMBER : " + values.phone + "      " + "PIN : " + values.pin + "      " +
  //       "ADDRESS : " + values.address + "      ");
  //     return true;

  //   } else {
  //     return false;

  //   }

  // }


  return errors;



}