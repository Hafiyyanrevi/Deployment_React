import React, { useState } from "react";
import "./organism.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gql, useQuery, useMutation } from "@apollo/client";

const ProductForm = () => {
  const [submitMessage, setSubmitMessage] = useState("");
  // const [products, setProducts] = useState([]);

  const GetProduct = gql`
    query MyQuery {
      product {
        id
        name
        category
        image
        freshness
        description
        price
      }
    }
  `;

  // const [deleteProduct] = useMutation(gql`
  //   mutation MyMutation($name: Text!) {
  //     delete_product_by_pk(name: $name) {
  //       name
  //     }
  //   }
  // `);

  const [addProduct] = useMutation(gql`
    mutation MyMutation(
      $name: String!
      $category: String!
      $image: String!
      $freshness: String!
      $description: String!
      $price: numeric!
    ) {
      insert_product_one(
        object: {
          name: $name
          category: $category
          image: $image
          freshness: $freshness
          description: $description
          price: $price
        }
      ) {
        id
        name
        category
        image
        freshness
        description
        price
      }
    }
  `);

  const onSubmit = async (values, { resetForm }) => {
    try {
      const { data } = await addProduct({
        variables: {
          name: values.name,
          category: values.category,
          image: values.image,
          freshness: values.freshness,
          description: values.description,
          price: parseFloat(values.price),
        },
      });
      setSubmitMessage(`Product ${data.createProduct.name} created!`);
      resetForm();
    } catch (err) {
      console.error(err);
      setSubmitMessage("Failed to create product!");
    }
  };

  const { data, loading, error } = useQuery(GetProduct);

  if (loading) {
    console.log("Loading . . .");
  }

  if (error) {
    console.log(error);
    return null;
  }

  const handleGenerateRandomNumber = () => {
    const randomNumber = Math.random();
    console.log(randomNumber);
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .max(25, "Nama Produk tidak boleh melebihi 25 karakter!")
      .matches(
        /^[^@!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]*$/,
        "Nama Produk tidak boleh mengandung karakter khusus!"
      )
      .required("Nama Produk Harus diisi!"),
    category: Yup.string().required("Kategori Produk Harus diisi!"),
    image: Yup.string().required("Foto Produk Harus diisi!"),
    freshness: Yup.string().required("Kondisi Produk Harus diisi!"),
    price: Yup.number().required("Harga Produk Harus diisi!"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      image: "",
      freshness: "",
      description: "",
      price: "",
    },
    onSubmit,
    validationSchema: schema,
  });

  // const handleDeleteProduct = async (id) => {
  //   try {
  //     await deleteProduct({ variables: { id: id } });
  //     setProducts(products.filter((product) => product.id !== id));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div>
      <div className="createProduct-container text-center">
        <form className="form text-start" onSubmit={formik.handleSubmit}>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleGenerateRandomNumber}
          >
            Generate Random Number
          </button>
          <br />
          <br />
          <h4>Detail Product</h4>
          <br />
          {/*input untuk Product Name*/}
          <div className="col-md-4">
            <label htmlFor="validationServer01" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationServer01"
              placeholder="Please input the Product Name"
              required=""
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && (
              <div className="invalid-text">{formik.errors.name}</div>
            )}
          </div>
          <br />
          {/*input untuk Product Category*/}
          <div className="mb-3">
            <label className="form-label" htmlFor="category">
              Product Category
            </label>
            <select
              className="form-select"
              required=""
              id="category"
              name="category"
              onChange={formik.handleChange}
              value={formik.values.category}
            >
              <option value="">Please Select the Category</option>
              <option value="Ipsum">Ipsum</option>
              <option value="New Ipsum">New Ipsum</option>
              <option value="Bad Ipsum">Bad Ipsum</option>
            </select>
            {formik.errors.category && (
              <div className="invalid-text">{formik.errors.category}</div>
            )}
          </div>
          {/*input untuk Image of Product*/}
          <br />
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image of Product
            </label>
            <input
              type="file"
              className="form-control"
              required=""
              id="image"
              name="image"
              onChange={formik.handleChange}
              value={formik.values.image}
            />
            {formik.errors.image && (
              <div className="invalid-text">{formik.errors.image}</div>
            )}
          </div>
          <br />
          {/*input untuk Product Freshness*/}
          Product Freshness
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="validationFormCheck1"
              required=""
              name="freshness"
              checked={"Brand New" === formik.values.freshness}
              value="Brand New"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="validationFormCheck1">
              Brand New
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="validationFormCheck2"
              required=""
              name="freshness"
              checked={"Second Hand" === formik.values.freshness}
              value="Second Hand"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="validationFormCheck2">
              Second Hand
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              type="radio"
              className="form-check-input"
              id="validationFormCheck3"
              required=""
              name="freshness"
              checked={"Refurbished" === formik.values.freshness}
              value="Refurbished"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="validationFormCheck3">
              Refurbished
            </label>
          </div>
          {formik.errors.freshness && (
            <div className="invalid-text">{formik.errors.freshness}</div>
          )}
          <br />
          {/*input untuk Product Description*/}
          <div className="mb-3">
            <div className="description">
              <label htmlFor="validationTextarea" className="form-label">
                Additional Description
              </label>
              <textarea
                className="form-control"
                id="validationTextarea"
                placeholder="Please input the description"
                rows={3}
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </div>

            <br />
            <br />
            <div className="col-md-6">
              <label htmlFor="validationServer03" className="form-label">
                Product Price
              </label>
              <input
                type="number"
                className="form-control"
                id="validationServer03"
                aria-describedby="validationServer03Feedback"
                placeholder="$"
                name="price"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
            </div>
            {formik.errors.price && (
              <div className="invalid-text">{formik.errors.price}</div>
            )}
            <br />
            <br />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
          {submitMessage && <p>{submitMessage}</p>}
        </form>

        <h2>List Product</h2>
        <table className="table-primary">
          <tbody>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Image of Product</th>
              <th>Freshness</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>

            {/* {data.product.map((value, idx) => ( */}
            {data &&
              data.product &&
              data.product.map((value, idx) => (
                <tr key={value.idx}>
                  <td>{idx + 1}</td>
                  <td>{value.name}</td>
                  <td>{value.category}</td>
                  <td>
                    <img
                      src={value.image}
                      alt={value.name}
                      width="100"
                      height="100"
                    />
                  </td>
                  <td>{value.freshness}</td>
                  <td>{value.description}</td>
                  <td>{value.price}</td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductForm;
