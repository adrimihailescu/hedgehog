import React, { useRef } from "react";
import { BASE_API } from "../../../../constants/api";

const AddNewUser = ({ addNewUser }) => {
  const nameRef = useRef();
  const jobRef = useRef();

  const addNewToDatabase = async (name, job) => {
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
    return { newUserData, status: res.status };
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { status, newUserData } = await addNewToDatabase();
    if (status === 201 && newUserData !== null) {
      addNewUser({
        name: nameRef.current.value,
        job: jobRef.current.value,
        id: newUserData.id,
      });
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
      </form>
    </div>
  );
};

export default AddNewUser;
