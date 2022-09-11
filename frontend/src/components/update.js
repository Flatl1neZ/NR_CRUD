import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Update() {
  const [id, setID] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    setID(localStorage.getItem("id"));
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
    setCheckbox(localStorage.getItem("checkbox"));
  }, []);
  const updateAPIData = () => {
    console.log(id, email, password, checkbox);
    axios.patch(`http://localhost:8080/api/update/${id}`, {
      email,
      password,
    });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>E-mail</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Link to="/read">
          <Button onClick={updateAPIData} type="submit">
            Update
          </Button>
        </Link>
      </Form>
    </div>
  );
}
