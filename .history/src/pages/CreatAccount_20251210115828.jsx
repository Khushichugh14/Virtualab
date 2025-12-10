import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ACCOUNT_KEY = "virtualrAccount";   // persistent account
const SESSION_KEY = "virtualrSession";   // current login session

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const account = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      };

      // save persistent account
      localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));

      // log user in (session)
      localStorage.setItem(SESSION_KEY, JSON.stringify({ email: account.email }));

      toast.success("Account created successfully!");
      setIsLoading(false);

      navigate("/"); // home, navbar will now show Logout
    }, 800);
  };

  return (
    // ... your existing JSX (unchanged)
    // (use the same JSX you already have for the form)
  );
};

export default CreateAccount;
