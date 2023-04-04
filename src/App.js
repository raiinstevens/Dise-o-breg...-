import React from 'react';
import { Image } from 'primereact/image';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';

export default function BasicDemo() {
  return (
    <div className="bg-white p-5 flex flex-column gap-3">
      <div className=" flex justify-content-star">
        <div className=" p-3 bg-indigo-100 border-round-lg">
          <div className=" flex justify-content-start">
            <img src="https://i.ibb.co/QYRsD1j/Icon.png" />
          </div>
        </div>
      </div>

      <div className="flex flex-column gap-3">
        <p className="text-indigo-500 font-bold text-xl">
          Tutoriales por vista
        </p>
        <p className=" text-gray-500">
          Crea nuevos tutoriales en cualquier momento para tu personal de
          aaaaa.
        </p>
      </div>

      <div className="flex align-items-center gap-3 border-round-2xl border-2 border-gray-100 p-3 hover:border-purple-500">
        <div className=" p-2 bg-purple-100 border-round-lg">
          <i className="pi pi-star text-purple-500 border-round-lg border-purple-500 border-2 p-1"></i>
        </div>
        <div className="flex-1">
          <p className="text-purple-500 font-bold">aaaaa</p>
          <p>Administrador</p>
        </div>
        <div>
          <div className=" flex justify-content-end">
            <Button
              className="bg-purple-100 border-purple-100"
              icon="pi pi-trash text-lg text-purple-500"
            ></Button>
          </div>
        </div>
      </div>

      <div className="flex align-items-center gap-3 border-round-2xl border-1 border-gray-100 p-3 hover:border-cyan-500">
        <div className=" p-2 bg-cyan-100 border-round-lg">
          <i className="pi pi-star text-cyan-600 border-round-lg border-cyan-600 border-2 p-1"></i>
        </div>
        <div className="flex-1">
          <p className="text-cyan-600 font-bold">aaaaa</p>
          <p>Administrador</p>
        </div>
        <div>
          <div className=" flex justify-content-end">
            <Button
              className="bg-cyan-100 border-cyan-100"
              icon="pi pi-trash text-lg text-cyan-500"
            ></Button>
          </div>
        </div>
      </div>

      <div className="flex align-items-center gap-3 border-round-2xl border-1 border-gray-100 p-3 hover:border-teal-500">
        <div className=" p-2 bg-teal-100 border-round-lg">
          <i className="pi pi-star text-teal-700 border-round-lg border-teal-00 border-1 p-1"></i>
        </div>
        <div className="flex-1">
          <p className="text-teal-600 font-bold">aaaaan</p>
          <p>Administrador</p>
        </div>
        <div>
          <div className=" flex justify-content-end">
            <Button
              className="bg-teal-100 border-teal-100"
              icon="pi pi-trash text-lg text-teal-500"
            ></Button>
          </div>
        </div>
      </div>

      <div className="flex  align-items-center gap-3 border-round-2xl border-1 border-gray-100 p-3 hover:border-yellow-500">
        <div className=" p-2 bg-yellow-100 border-round-lg">
          <i className="pi pi-star text-yellow-700 border-round-lg border-yellow-700 border-1 p-1 "></i>
        </div>
        <div className="flex-1">
          <p className="text-yellow-600 font-bold">aaaaa</p>
          <p>Administrador</p>
        </div>
        <div>
          <div className=" flex justify-content-end">
            <Button
              className="bg-yellow-100 border-yellow-100"
              icon="pi pi-trash text-lg text-yellow-500"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
