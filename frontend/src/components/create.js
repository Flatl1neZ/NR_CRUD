import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

export default function Create() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const postData = () => {
    axios.post("http://localhost:8080/api/post", {
      email,
      password,
      checkbox,
    });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>E-mail</label>
          <input onChange={(e) => setEmail(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={() => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Form.Field className="alignButton">
          <Link to="/read">
            <Button onClick={postData} type="submit">
              Submit
            </Button>
          </Link>
        </Form.Field>
      </Form>
    </div>
  );
}
