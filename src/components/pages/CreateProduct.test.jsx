import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../config/redux/store";
import CreateProduct from "./CreateProduct.pages";
import ProductForm from "../organism/ProductForm.organism.jsx";

describe("Product Form Should be Correct", () => {
  test("Render Create Product", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const createProductTitle = getByText(`Create Product`);
    expect(createProductTitle).toBeInTheDocument();
  });

  test("Input Product Name", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductForm />
        </Provider>
      </BrowserRouter>
    );
    const productName = getByLabelText("Product Name");
    fireEvent.change(productName, { target: { value: "Test Product" } });
    expect(getByLabelText("Product Name")).toHaveValue("Test Product");
  });
});

test("Input Product Category", () => {
  const { getByLabelText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductForm />
      </Provider>
    </BrowserRouter>
  );
  const productCategory = getByLabelText("Product Category");
  fireEvent.change(productCategory, { target: { value: "Ipsum" } });
  expect(productCategory).toHaveValue("Ipsum");
});

test("Input Product Category", () => {
  const { getByLabelText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductForm />
      </Provider>
    </BrowserRouter>
  );
  const productCategory = getByLabelText("Product Category");
  fireEvent.change(productCategory, { target: { value: "New Ipsum" } });
  expect(productCategory).toHaveValue("New Ipsum");
});

test("Input Product Category", () => {
  const { getByLabelText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductForm />
      </Provider>
    </BrowserRouter>
  );
  const productCategory = getByLabelText("Product Category");
  fireEvent.change(productCategory, { target: { value: "Bad Ipsum" } });
  expect(productCategory).toHaveValue("Bad Ipsum");
});

test("Input Product Image", () => {
  const { getByLabelText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductForm />
      </Provider>
    </BrowserRouter>
  );
  const productImage = getByLabelText("Image of Product");
  fireEvent.change(productImage, { target: { files: ["test-image.jpg"] } });
  expect(productImage.files[0]).toEqual("test-image.jpg");

  test("Input Product Freshness", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductForm />
        </Provider>
      </BrowserRouter>
    );
    const productFreshnessBrandNew = getByLabelText("Brand New");
    fireEvent.click(productFreshnessBrandNew);
    expect(getByLabelText("Brand New")).toBeChecked("Brand New");
  });

  test("Input Product Freshness", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductForm />
        </Provider>
      </BrowserRouter>
    );
    const productFreshnessSecond = getByLabelText("Second Hand");
    fireEvent.click(productFreshnessSecond);
    expect(getByLabelText("Second Hand")).toBeChecked("Second Hand");
  });

  test("Input Product Freshness", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductForm />
        </Provider>
      </BrowserRouter>
    );
    const productFreshnessRefurbished = getByLabelText("Refurbished");
    fireEvent.click(productFreshnessRefurbished);
    expect(getByLabelText("Refurbished")).toBeChecked("Refurbished");
  });

  test("Form Should be Filled", async () => {
    const { getByRole, getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductForm />
        </Provider>
      </BrowserRouter>
    );

    const submitButton = getByRole("button", { name: "Submit" });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText("Nama Produk Harus diisi!")).toBeInTheDocument();
      expect(getByText("Kategori Produk Harus diisi!")).toBeInTheDocument();
      expect(getByText("Foto Produk Harus diisi!")).toBeInTheDocument();
      expect(getByText("Select Product Freshness")).toBeInTheDocument();
      expect(getByText("Harga Produk Harus diisi!")).toBeInTheDocument();
    });
  });

  test("Yup Validation Test", async () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Form />
        </Provider>
      </BrowserRouter>
    );
    const productName = getByLabelText("Product Name");
    fireEvent.change(productName, { target: { value: "$$$@!$$%^&*(!" } });

    await waitFor(() => {
      expect(
        getByText("Nama Produk tidak boleh mengandung karakter khusus!")
      ).toBeInTheDocument();
    });

    test("Max Length for Product Name Test", async () => {
      const { getByLabelText, getByText } = render(
        <BrowserRouter>
          <Provider store={store}>
            <Form />
          </Provider>
        </BrowserRouter>
      );
      const productName = getByLabelText("Product Name");
      fireEvent.change(productName, {
        target: {
          value: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        },
      });

      await waitFor(() => {
        expect(
          getByText("Nama Produk tidak boleh melebihi 25 karakter!")
        ).toBeInTheDocument();
      });
    });
  });
});
