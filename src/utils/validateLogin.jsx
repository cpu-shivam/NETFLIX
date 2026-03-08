
// learn how to show something like-
// missing uppercase,misssing lowercase, mising number  
const validateLogin=(email,password)=>{
    const isEmail=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);

    const isPassword=/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/.test(password);
    if(!isEmail) return "email is not valid";
    if(!isPassword) return "password is not valid";

    return null;
};

export default validateLogin;