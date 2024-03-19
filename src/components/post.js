import { useState, useEffect } from "react";
import "../components/post.css";
import axios from "axios";

function Product() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [productIdToUpdate, setProductIdToUpdate] = useState(null);
  const [selectedProductData, setSelectedProductData] = useState(null);
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Thêm state cho từ khóa tìm kiếm
  const [searchResults, setSearchResults] = useState([]); // State để lưu kết quả tìm kiếm

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changePrice = (event) => {
    setPrice(event.target.value);
  };

  const changeDescription = (event) => {
    setDescription(event.target.value);
  };

  const changeImage = (event) => {
    setImage(event.target.value);
  };

  const resetForm = () => {
    setName("");
    setPrice("");
    setDescription("");
    setImage("");
    setIsEditMode(false);
    setProductIdToUpdate(null);
    setSelectedProductData(null);
  };

  const addProduct = () => {
    if (name === "" || price === "" || description === "" || image === "") {
      alert("Vui lòng nhập đầy đủ thông tin !");
    } else {
      const newProduct = {
        name: name,
        price: price,
        description: description,
        image: image,
      };

      axios
        .post("http://localhost:3000/products", newProduct)
        .then((response) => {
          alert("Product added successfully!");
          fetchData();
          resetForm();
        })
        .catch((error) => {
          alert("Error adding product: " + error.message);
        });
    }
  };

  const updateProduct = () => {
    const updatedProduct = {
      name: name,
      price: price,
      description: description,
      image: image,
    };

    axios
      .put(
        `http://localhost:3000/products/${productIdToUpdate}`,
        updatedProduct
      )
      .then((response) => {
        alert("Product updated successfully!");
        fetchData();
        resetForm();
      })
      .catch((error) => {
        alert("Error updating product: " + error.message);
      });
  };

  const handleEditClick = (productId) => {
    setIsEditMode(true);
    setProductIdToUpdate(productId);

    axios
      .get(`http://localhost:3000/products/${productId}`)
      .then((response) => {
        const productData = response.data;
        setName(productData.name);
        setPrice(productData.price);
        setDescription(productData.description);
        setImage(productData.image);
      })
      .catch((error) => {
        alert("Error fetching product data: " + error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, [selectedProductData]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Cập nhật từ khóa tìm kiếm khi người dùng nhập
  };

  const searchProduct = () => {
    axios
      .get(`http://localhost:3000/products?name_like=${searchTerm}`)
      .then((response) => {
        setSearchResults(response.data); // Cập nhật kết quả tìm kiếm
      })
      .catch((error) => {
        console.error("Error searching for products: ", error);
      });
  };

  const fetchData = () => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Error fetching product data: ", error);
      });
  };

  const deleteProduct = (productId) => {
    const isConfirmed = window.confirm("Bạn có chắc muốn xóa sản phẩm này?");
    if (isConfirmed) {
      axios
        .delete(`http://localhost:3000/products/${productId}`)
        .then((response) => {
          alert("Product deleted successfully!");
          fetchData();
        })
        .catch((error) => {
          alert("Error deleting product: " + error.message);
        });
    }
  };
  return (
    <div className="post">
      <div className="center">
        <div className="form-container">
          <h2 className="text-center">
            {" "}
            {isEditMode ? "EDIT Product" : "ADD A NEW Product"}
          </h2>
          <form className="form">
            <div className="form-group">
              <label htmlFor="text">Name</label>
              <input
                type="text"
                id="text"
                required
                value={name}
                onChange={changeName}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                required
                value={price}
                onChange={changePrice}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="price">URL IMAGE</label>
              <input
                type="text"
                id="price"
                name="price"
                required
                value={image}
                onChange={changeImage}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                rows="10"
                cols="50"
                required
                onChange={changeDescription}
                value={description}
              />
            </div>
            <button
              className="form-submit-btn"
              type="button"
              onClick={isEditMode ? updateProduct : addProduct}
            >
              {isEditMode ? "Edit" : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.trim())}
          placeholder="Enter keyword"
        />
        <button className="search-btn" onClick={searchProduct}>
          Search
        </button>
      </div>
      <div className="center">
        {product
          .filter((item, index) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => (
            <div className="card" key={index}>
              <div className="header">
                <div className="image">
                  <img src={item.image} alt="img"></img>
                </div>
                <div className="content">
                  <span className="title1">{item.name}</span>
                  <p className="message">${item.price}</p>
                  <p className="message">{item.description}</p>
                </div>
                <div className="actions">
                  <button
                    className="desactivate"
                    type="button"
                    onClick={() => deleteProduct(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="cancel"
                    type="button"
                    onClick={() => handleEditClick(item.id)}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Product;
