import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  Modal,
  Form,
  Container,
  Row,
  Col,
  Tab,
  Tabs,
  Nav,
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  //For tabs
  const [key, setKey] = useState("Users");

  //Users Function
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    role: 0,
  });
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setUserData({});
  };

  const handleAddUser = () => {
    setShowModal(true);
  };

  const addUser = async () => {
    try {
      await axios.post("http://localhost:3000/users", userData);
      fetchUsers(); // Fetch users again after adding new user
      setShowModal(false); // Close modal after successfully adding user
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const handleEditUser = (user) => {
    setUserData(user);
    setEditUserId(user.id); // Set editUserId to the ID of the user being edited
    setShowModal(true);
  };

  const editUser = async () => {
    try {
      await axios.put(`http://localhost:3000/users/${editUserId}`, userData);
      fetchUsers(); // Fetch users again after editing user
      setShowModal(false); // Close modal after successfully editing user
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  const handleDeleteUser = (id) => {
    // Hiển thị hộp thoại xác nhận trước khi xóa
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (confirmDelete) {
      // Nếu người dùng xác nhận xóa, thực hiện xóa người dùng
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    }
  };

  //Products Function

  return (
    <div>
      <Container>
        <Link to={"/"}>
          <h1 className="text-primary display-6 text-center mt-4 mb-4">
            Fruitables Dashboad
          </h1>
        </Link>

        <Row>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="Users" title="Users">
              <Row>
                <Col>
                  <h2 className="text-center">User Dashboard</h2>
                  <Button
                    onClick={handleAddUser}
                    style={{ marginBottom: "20px" }}
                  >
                    Add User
                  </Button>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>
                            <Button
                              variant="primary"
                              onClick={() => handleEditUser(user)}
                            >
                              Edit
                            </Button>{" "}
                            <Button
                              variant="danger"
                              onClick={() => handleDeleteUser(user.id)}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>

                  <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        {userData.id ? "Edit User" : "Add User"}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group controlId="formBasicUsername">
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={userData.username}
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                username: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter email"
                            value={userData.email}
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                email: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={userData.password}
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                password: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Role</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter password"
                            value={userData.role}
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                role: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={editUserId ? editUser : addUser}
                      >
                        {userData.id ? "Save Changes" : "Add User"}
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Products" title="Products">
              Tab content for Profile
            </Tab>
            <Tab eventKey="Categories" title="Categories">
              Tab content for Profile
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default UserDashboard;
