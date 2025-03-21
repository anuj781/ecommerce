import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Cart = () => {
   let ctx = useContext(UserContext)
    console.log(ctx)
    const handleDelete = (obj,i) => {
      console.log(obj);
      console.log(i);
      let copyArr = [...ctx.userDetails]
       copyArr.splice(i,1);
       ctx.setuserDetails(copyArr);
    }

  
    const handleIncrease = (obj,i) => {
      console.log(i);
      console.log(obj.price)
     obj.price = obj.price + (obj.price/obj.quantity)
     obj.quantity = obj.quantity+1;

     console.log(obj);
     let copyArr = [...ctx.userDetails]
     copyArr[i] = obj
     ctx.setuserDetails(copyArr);
    }

    const handleDecrease = (obj,i) => {
      console.log(i);
     obj.price = obj.price - (obj.price/obj.quantity)
     obj.quantity = obj.quantity-1;

     console.log(obj);
     let copyArr = [...ctx.userDetails]
     copyArr[i] = obj
     ctx.setuserDetails(copyArr);
    }  
  return (
    <div>
      
<div className="relative  bg-white overflow-x-auto mt-[80px] z-10">
  <table className="w-full border-4 bg-white text-center border-green-400 text-black text-sm  rtl:text-right">
    <thead className="text-xs">
      <tr>
        <th scope="col" className="px-6 py-3">
          Sno
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Quantity
        </th>
        <th scope="col" className="px-6 py-3">
      
        </th>
      </tr>
    </thead>
    <tbody>
     {
      ctx.userDetails.map((ele,i)=>{
        return  <tr className="bg-w border-b border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
          {i+1}
        </th>
        <td className="px-6 py-4">
          <img src={ele.thumbnail} className='w-[100px] m-auto h-[100px]' alt="" />
        </td>
        <td className="px-6 py-4">
          {ele.price.toFixed(2)}
        </td>
        <td className="px-6 py-4">
          <button onClick={()=> handleIncrease(ele,i)} className='bg-blue-700 rounded-md px-3 py-2 text-white mx-1'>+</button>
           {ele.quantity} 
          <button onClick={()=> handleDecrease(ele,i)} className='bg-green-700 rounded-md px-3 py-2 text-white mx-1'>-</button> 
        </td>
        <td>
          <button onClick={()=> handleDelete(ele,i)} className='bg-red-700 text-white hover:bg-red-600 px-3 py-2 rounded-md'>Delete</button>
        </td>
      </tr>
      })
     }
   
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Cart
