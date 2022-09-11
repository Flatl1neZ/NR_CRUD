import axios from "axios";
import { Button, Table } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const setData = (data) => {
  console.log(data);
  let { _id, email, password, checkbox } = data;
  localStorage.setItem("id", _id);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("checkbox", checkbox);
};

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/api/getAll`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const onDelete = (_id) => {
    axios.delete(`http://localhost:8080/api/delete/${_id}`).then(() => {
      getData();
    });
  };

  const getData = () => {
    axios.get(`http://localhost:8080/api/getAll`).then((getData) => {
      setAPIData(getData.data);
    });
  };
  return (
    <>
      <div className="btnDiv">
        <Link to="/create">
          <Button className="newBtn">New</Button>
        </Link>
      </div>
      <div>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>E-mail address</Table.HeaderCell>
              <Table.HeaderCell>Password</Table.HeaderCell>
              <Table.HeaderCell>Checked</Table.HeaderCell>
              <Table.HeaderCell>Update</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {APIData.map((data) => {
              return (
                <Table.Row>
                  <Table.Cell>{data._id}</Table.Cell>
                  <Table.Cell>{data.email}</Table.Cell>
                  <Table.Cell>{data.password}</Table.Cell>
                  <Table.Cell>
                    {data.checkbox ? "Checked" : "Unchecked"}
                  </Table.Cell>
                  <Link to="/update">
                    <Table.Cell>
                      <Button onClick={() => setData(data)}>Update</Button>
                    </Table.Cell>
                  </Link>
                  <Table.Cell>
                    <Button onClick={() => onDelete(data._id)}>Delete</Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
