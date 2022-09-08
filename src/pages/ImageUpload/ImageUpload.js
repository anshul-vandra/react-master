import React, { useRef, useState } from "react";

const RenderImageField = ({ uploadedimage, onChangeFunction, isMultiple }) => {
  let ref = useRef();

  return (
    <>
      <div className="d-flex">
        {uploadedimage && (
          <div className="image-item">
            <img src={uploadedimage} alt={uploadedimage} height="90px" />
          </div>
        )}
        <div className="upload-input">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              ref.current.click();
            }}
          >
            Upload Butoon
          </button>
        </div>
      </div>
      <input
        style={{ display: "none" }}
        ref={ref}
        multiple={isMultiple}
        onChange={(e) => {
          onChangeFunction(e.target.files);
        }}
        className={"d-none"}
        type={"file"}
        accept="image/jpeg,image/png,image/jpg"
      />
    </>
  );
};

const ImageUpload = () => {
  const [Image, setImage] = useState({});
  console.log("Image: ", Image);

  const onImageChange = (imageList) => {
    setImage(Object.values(imageList));
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Image Upload </h2>
      <br />
      <div>
        <RenderImageField isMultiple={true} onChangeFunction={onImageChange} />
      </div>
      <ul>
        {Image.length ? (
          Image.map((val) => {
            return <li>{val.name}</li>;
          })
        ) : (
          <li>No images selected</li>
        )}
      </ul>
    </>
  );
};

export default ImageUpload;
