import Profile from "./components/Profile";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
// import Post from "./components/post";
// import Product from "./components/post";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [name, setTen] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const changeName = (event) => {
    setTen(event.target.value);
  };
  const changeAddress = (event) => {
    setAddress(event.target.value);
  };
  const changePhone = (event) => {
    setPhone(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (name === "" || address === "" || phone === "" || email === "") {
      alert("Please do not empty data fields");
    } else {
      axios
        .put("http://localhost:3000/info/1", { name, email, phone, address })
        .then((res) => {
          // console.log(res);
          setInfo(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchData();
    // console.log("get data");
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:3000/info").then((res) => {
      setInfo(res.data[0]);
      // console.log("request get:", res);
    });
  };
  // console.log(info);

  const print_current_page = (e) => {
    e.preventDefault();
    window.print();
  };

  return (
    <div className="App">
      <div class="flex-form">
        <form class="form">
          <p class="title">Change Info </p>
          <p class="message">Signup now and get full access to our app. </p>
          {/* <div class="flex">
            <label>
              <input
                class="input"
                type="text"
                placeholder=""
                required=""
              ></input>
              <span>Firstname</span>
            </label>

            <label>
              <input
                class="input"
                type="text"
                placeholder=""
                required=""
              ></input>
              <span>Lastname</span>
            </label>
          </div> */}

          <label>
            <input
              class="input"
              type="text"
              placeholder=""
              required
              onChange={changeName}
            ></input>
            <span>Name</span>
          </label>

          <label>
            <input
              class="input"
              type="text"
              placeholder=""
              required
              onChange={changeAddress}
            ></input>
            <span>Address</span>
          </label>
          <label>
            <input
              class="input"
              type="text"
              placeholder=""
              required
              onChange={changePhone}
            ></input>
            <span>Phonenumber</span>
          </label>
          <label>
            <input
              class="input"
              type="email"
              placeholder=""
              required
              onChange={changeEmail}
            ></input>
            <span>Email</span>
          </label>
          <button class="submit" onClick={handleClick}>
            Submit
          </button>
          <button class="submit" onClick={print_current_page}>
            Print
          </button>
        </form>
      </div>
      <Profile
        name={info ? info?.name : name}
        phone={info ? info?.phone : phone}
        address={info ? info?.address : address}
        email={info ? info?.email : email}
      ></Profile>
      {/* <Product></Product> */}
    </div>
  );
}

export default App;
