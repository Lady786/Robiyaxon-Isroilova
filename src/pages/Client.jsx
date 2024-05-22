
import axios from "axios";

import { UseGetData } from "./UseGetData";


const Client = () => {
 
 
 const products = UseGetData("products");


  const handleDelete = async (id) => {
   try {
    
     const response = await axios.delete(
       `https://ecommerce-backend-fawn-eight.vercel.app/api/products/${id}`,{
         headers:{
           "Content-type": "aplication/json",
           Authorization: localStorage.getItem("token"),
         }
       }
     );
  console.log(response.data);
   } catch (error) {
    console.log("Xatolik mavjud", error);
   }
  }

  return (
    <div className="relative home w-[1540px] m-auto">
      <div className="our__products w-[1540px] h-[auto]  m-auto flex justify-around flex-wrap mt-[10px] ">
        {products &&
        products.map((product) => (
          <div key={product._id} className="product w-[700px]  h-[500px] flex justify-between bg-[#F9F1E7]">
            <img src={product.image} className="w-[350px] h-[300px]  mt-[20px] ml-[20px]" alt="" />
            <div className="product__info w-[300px] h-400 ">
              <h1 className="text-[36px] mt-[20px]">{product.title}</h1>
              <h1 className="text-[24px] mt-[20px] text-[#9F9F9F]">Rs {product.price}</h1>
              <h1 className="text-[24px] mt-[10px] text-[#9F9F9F] "> Rate -  {product.rate}  <span className="text-[16px] text-black font-bold">5 Customer Review</span>  </h1>
              <h1 className="w-[100%] mt-[10px]">{product.description}</h1>
              <h1 className="mt-[10px]">Size: {product.size}</h1>
              <h1 className="mt-[10px]">Color: {product.color}</h1>
            <button onClick={() => handleDelete (product._id)} className="mt-[40px] border w-[150px] bg-[#B88E2F] text-white rounded-xl">Delete</button>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default Client;
