import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ProductForm = ({
  handleImageChange,
  imagePreview,
  handleInputChange,
  product,
  description,
  setDescription,
  saveProduct,
}) => {
  return (
    <div className="">
      <div className="card w-full mx-auto max-w-4xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className=" text-2xl font-semibold text-slate-600 italic">
            Add Product:
          </h1>
          <form onSubmit={saveProduct}>
            <div>
              <input
                type="file"
                className="input input-bordered w-full py-2 "
                onChange={(e) => handleImageChange(e)}
              />
              <small className=" text-slate-400">
                Supported Format: JPG, JPEG , PNG
              </small>
              {imagePreview != null ? (
                <div className="w-full h-full  max-h-[320px] bg-slate-300 p-2 rounded-lg overflow-hidden">
                  <img src={imagePreview} alt="product" />
                </div>
              ) : (
                <p>No image set for this poduct.</p>
              )}
            </div>
            <div className=" grid  grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Product Name"
                name="name"
                value={product?.name}
                onChange={handleInputChange}
                className="input input-bordered w-full mt-2 "
              />
              <input
                type="text"
                placeholder="Product Category"
                name="category"
                value={product?.category}
                onChange={handleInputChange}
                className="input input-bordered w-full mt-2 "
              />
            </div>
            <div className=" grid  grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Product Price"
                name="price"
                value={product?.price}
                onChange={handleInputChange}
                className="input input-bordered w-full mt-2 "
              />
              <input
                type="number"
                placeholder="Product Quantity"
                name="quantity"
                value={product?.quantity}
                onChange={handleInputChange}
                className="input input-bordered w-full mt-2 "
              />
            </div>
            <div>
              <ReactQuill
                className=" h-28 mt-3"
                theme="snow"
                placeholder="Product Description Here......"
                value={description}
                onChange={setDescription}
                modules={ProductForm.modules}
                formats={ProductForm.formats}
              />
            </div>
            <div>
              <input
                type="submit"
                className="btn mt-16 w-full max-w-xs bg-teal-800 hover:bg-teal-800 text-white"
                value="Add Product"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;
