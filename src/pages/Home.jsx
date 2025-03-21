import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

const Home = () => {
  let ctx = useContext(UserContext)
  console.log(ctx)
    const [allProducts, setallProducts] = useState([]);
    const getData = async() => {
        let res = await fetch ('https://www.dummyjson.com/products?limit=0');
        let data = await res.json();
        console.log(data.products);
        setallProducts(data.products);
    }
    useEffect(()=>{
        getData();
    },[])


    
  return (
    <div className=' grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 w-[98%] m-auto mt-[80px]'>
      {
        allProducts.map((ele,i)=>{
            return<div className=' flex flex-col justify-around items-center bg-gray-400 rounded-md text-white text-xl h-[450px]'>
         
         <img src={ele.thumbnail} alt="" />
          <p className='text-center'>{ele.title}</p>
          <div><button className='bg-black px-4 rounded-md' onClick={()=>ctx.AddtoCart(ele)}>Add to cart</button></div>
          <button className='bg-black px-4 rounded-md'><Link to="/view">View Details</Link></button>
         
            </div>
        })
      }
    </div>
  )
}

export default Home
