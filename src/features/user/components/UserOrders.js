import React, { useEffect } from 'react'
import { fetchLoggedInUserOrderAsync, selectUserOrders } from '../userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedInUser } from '../../auth/authSlice'
import { Link } from 'react-router-dom'

const UserOrders = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectLoggedInUser)
    const orders = useSelector(selectUserOrders)

    useEffect(()=>{
        dispatch(fetchLoggedInUserOrderAsync(user.id))

    },[user.id])
  return (
    <div>
        {
            orders.map((order)=>(
                <div>
                     <div>
        <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
             ORDER NUMBER IS #{order.id}
            </h1>
            <h3 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
              <small>STATUS :{order.status}</small>
            </h3>
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {order.items.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                         src={item.thumbnail}
                         alt={item.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                          <a href={item.href}>{item.title}</a>
                          </h3>
                          <p className="ml-4">${item.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                        {item.brand}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="text-gray-500">
                          <label
                            htmlFor="quantity"
                            className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                          >
                            qty: {item.quentity}
                          </label>
                         
                        </div>

                    
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$ {order.totalAmount}</p>
            </div>
            
          </div>
        </div>
      </div>
                </div>
            ))
        }
      
    </div>
  )
}

export default UserOrders
