import React, { useState, useEffect } from "react";
import useWindowWidth from "../useWindoWidth/useWindowWidth";
import { Radio, RadioGroup, Stack, useToast } from "@chakra-ui/react";
import axios from "axios";

function MainProfile() {
  const width = useWindowWidth();
  const toast = useToast();
  const userData = JSON.parse(localStorage.getItem("logged_user"));
  const [firstName, setFirstName] = useState(userData.name.split(" ")[0]);
  const [lastName, setLastName] = useState(
    userData.name.split(" ").slice(1).join(" ")
  );
  const [dateOfBirth, setDateOfBirth] = useState(userData.dob);
  const [gender, setGender] = useState(userData.gender);
  const [email, setEmail] = useState(userData.email);
  const [mobileNumber, setMobileNumber] = useState(userData.phone);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("logged_user"));
  }, []);

  const [editStatus, setEditStatus] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  function isEmpty(data) {
    for (const k in data) {
      if (k !== "dob" && data[k].length === 0) return true;
    }
    return false;
  }

  function handleEditClick(num) {
    setEditStatus((prev) => ({ ...prev, [num]: true }));
  }

  async function handleUpdate() {
    const sendData = {
      name: firstName + " " + lastName,
      dob: dateOfBirth,
      mobile: mobileNumber,
    };
    if (isEmpty(sendData)) {
      toast({
        title: "Cannot Update Blank Values",
        description: "Please fill values to update",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      await axios
        .post("/updateProfile", { ...sendData, id: userData._id })
        .then((res) => {
          const newuserData = res.data.data;
          localStorage.setItem("logged_user", JSON.stringify(newuserData));
          setEditStatus({
            1: false,
            2: false,
            3: false,
            4: false,
          });
          toast({
            title: "Details Updated",
            description: "User Details Updated Successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: "Internal Server Error",
            description: "Something went wrong!",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
    }
  }

  return (
    <div>
      <h2>Personal Information</h2>
      <form>
        <div className="name-content">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              disabled={editStatus[1] ? false : true}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                if (editStatus[1]) handleUpdate();
                else handleEditClick(1);
              }}
            >
              {editStatus[1] ? "UPDATE" : "EDIT"}
            </button>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              disabled={editStatus[2] ? false : true}
              onChange={(e) => setLastName(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                if (editStatus[2]) handleUpdate();
                else handleEditClick(2);
              }}
            >
              {editStatus[2] ? "UPDATE" : "EDIT"}
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>Your Date of Birth</label>
          <input
            type="date"
            value={dateOfBirth}
            disabled={editStatus[3] ? false : true}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              if (editStatus[3]) handleUpdate();
              else handleEditClick(3);
            }}
          >
            {editStatus[3] ? "UPDATE" : "EDIT"}
          </button>
        </div>
        <div className="form-group">
          <label>Your Gender</label>
          <RadioGroup onChange={setGender} value={gender}>
            <Stack direction="row">
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </Stack>
          </RadioGroup>
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            value={mobileNumber}
            disabled={editStatus[4] ? false : true}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              if (editStatus[4]) handleUpdate();
              else handleEditClick(4);
            }}
          >
            {editStatus[4] ? "UPDATE" : "EDIT"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default MainProfile;
