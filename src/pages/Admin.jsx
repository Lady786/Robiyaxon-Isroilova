import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../constantas/backendUrl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseAuth from "./UseAuth";


const Admin = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  UseAuth()
 

  const handleSubmit = async () => {
    if ( !title || !subtitle || !image || !description || !rate || !price || !size || !color ) {
      toast.error('Toldirilmagan maydonlar mavjud!!!', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        
        });
    }
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      };
      const data = {
        title: title,
        subtitle: subtitle,
        image: image,
        description: description,
        rate: rate,
        price: price,
        size: size,
        color: color,
      };
      const response = await axios.post(`${backendUrl}/products`, data, {
        headers: headers,
      });
  
      if (response.data) {
        navigate("/");
      }
    } catch (error) {
      console.log("Xatolik yuz berdi", error);
    }
  };

  return (
    <div>
      <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
      <div className="shop wh-[1440px] h-[auto]  m-auto">
        <div className="w-[1200px] h-[auto] border m-auto mt-[20px] bg-[#FAF3EA]">
          <div>
            <div className=" wh-[1440px] border m-auto">
              <div className="flex justify-center gap-[200px] p-10">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[32px] font-bold mb-3">
                    Billing details
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-2">
                      <label>Title</label>
                      <input
                        type="text"
                        className="border rounded-md p-4 outline-none"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label>Subtitle</label>
                      <input
                        type="text"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        className="border rounded-md p-4 outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Image</label>
                    <input
                      type="text"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      className="border rounded-md p-4 outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Description</label>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="border rounded-md p-4 outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Rate</label>
                    <input
                      type="number"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                      className="border rounded-md p-4 outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Price</label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="border rounded-md p-4 outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Size</label>
                    <input
                      type="text"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      placeholder="Western Province"
                      className="border rounded-md p-4 outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Color</label>
                    <input
                      type="text"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="border rounded-md p-4 outline-none"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="border bg-black text-white text-20px"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
