'use client';

import Image from 'next/image';
import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/outline'; // Importing an icon for the delete button

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Throwback Hip Bag',
      description: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
      price: 90.00,
      quantity: 1,
      inStock: true,
      shipInfo: 'In stock',
      image: '/vinyle-img.png',
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      description: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
      price: 32.00,
      quantity: 1,
      inStock: false,
      shipInfo: 'Ships in 3–4 weeks',
      image: '/vinyle-img.png',
    },
    // Add more items as needed
  ]);

  const [selectedItem, setSelectedItem] = useState(cartItems[0]);

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems(cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  return (
    <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <TrashIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cartItems.map(item => (
                          <li key={item.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
                              <Image
                                src={item.image}
                                alt={item.description}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">{item.name}</a>
                                  </h3>
                                  <p className="ml-4">${item.price.toFixed(2)}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.shipInfo}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="relative">
                                  <select
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    value={item.quantity}
                                    className="block appearance-none bg-white border border-gray-300 text-gray-700 py-1 px-2 rounded-md focus:outline-none focus:border-indigo-500"
                                  >
                                    {[...Array(10).keys()].map((value) => (
                                      <option key={value} value={value + 1}>{value + 1}</option>
                                    ))}
                                  </select>
                                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path fillRule="evenodd" d="M10 3a1 1 0 01.293.707l.022.082.002.008v.05l-.001.003-.001.002-.002.005-.005.013-.012.024-.024.036-.036.05-.05.053-.053.05-.062.055-.052.052-.05.042-.036.03-.02.018-.005.006-.001.003-.001.002v.002l-.002.003-.001.001h-.001l-.002.001-.001.001h-.002l-.003.002-.002.001h-.005l-.011.005-.006.002-.017.006-.024.005-.022.003-.007.001H6.708a.75.75 0 010-1.5h6.584l-.01-.15c0-.037.004-.072.012-.105a.75.75 0 01.013-.046l.006-.013.012-.027.023-.046.032-.047.03-.037.043-.044.04-.04.053-.04.05-.035.048-.03.045-.025.052-.02.06-.018.063-.014.067-.01.075-.003h.077a1 1 0 01.106.013l.032.01.037.012.029.01.073.027.013.005c.011.003.022.007.032.012l.003.001.002.001.034.015c.035.014.07.033.102.056a.75.75 0 01.001 1.122A1.2                                  1 1 0 0110 3zm-1.75 8.25a.75.75 0 111.5 0v5.25a.75.75 0 01-1.5 0v-5.25zM4.5 9.75a.75.75 0 111.5 0v3a.75.75 0 01-1.5 0v-3zM2.75 12a.75.75 0 111.5 0v1.5a.75.75 0 01-1.5 0v-1.5z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    onClick={() => handleRemoveItem(item.id)}
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or
                      <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-auto w-1/3 p-4">
            <h1 className="text-2xl font-bold mb-4">Selected Item</h1>
            <div className="relative w-full h-96">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold text-black">{selectedItem.name}</h2>
              <p className="text-gray-600">{selectedItem.description}</p>
              <p className="text-lg font-semibold mt-2 text-gray-600">${selectedItem.price.toFixed(2)}</p>
              <p className="text-gray-600">{selectedItem.inStock ? 'In stock' : 'Ships in 3–4 weeks'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

