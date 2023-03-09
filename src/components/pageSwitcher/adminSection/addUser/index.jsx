import React, { useRef, useState } from "react";
import { BASE_API } from "../../../../constants/api";

const AddNewUser = ({ addNewUser }) => {
  const [error, setError] = useState(null);

  const nameRef = useRef();
  const jobRef = useRef();

  const addNewToDatabase = async (name, job) => {
    try {
      const res = await fetch(`${BASE_API}users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameRef.current.value,
          job: jobRef.current.value,
        }),
      });

      const newUserData = await res.json();

      setError(null);
      nameRef.current.value = "";
      jobRef.current.value = "";

      return { newUserData, status: res.status };
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let submitError = "";

    if (!nameRef.current.value.length) {
      submitError = "Name cannot be blank. | ";
    }

    if (!jobRef.current.value.length) {
      submitError += "Job cannot be blank.";
    }

    if (submitError?.length) {
      setError(submitError);
    } else {
      const { status, newUserData } = await addNewToDatabase();
      if (status === 201 && newUserData !== null) {
        addNewUser({
          name: newUserData.name,
          job: newUserData.job,
          id: newUserData.id,
        });
      }
    }
  };

  return (
    <div>
      <p>Add New User</p>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name
          <input type="text" name="name" ref={nameRef} />
        </label>
        <label>
          Job
          <input type="text" name="job" ref={jobRef} />
        </label>
        <button type="submit">Add</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default AddNewUser;
