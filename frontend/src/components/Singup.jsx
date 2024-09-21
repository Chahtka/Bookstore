import React from 'react'
import Login from './Login'

export default function Singup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>console.log(data);
  return (
    <>
    <div className='flex h-screen item-center justify-center'>
    <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>

          <h3 className="font-bold text-lg">Singup</h3>

          <div className="mt-4 space-y-2">
            <span>Name</span><br/>
            <input type="text" placeholder="Enter your name"
            className="w-80 px-3 py-1 rounded-md outline-none" 
            {...register("email", {required : true})}/>
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="mt-4 space-y-2">
            <span>Email</span><br/>
            <input type="email" placeholder="Enter your Email"
            className="w-80 px-3 py-1 rounded-md outline-none" 
            {...register("email", {required : true})}/>
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}

          </div>

          <div className="mt-4 space-y-2">
          <span>Password</span><br/>
            <input type="password" placeholder="Enter your Email"
            className="w-80 px-3 py-1 rounded-md outline-none" 
            {...register("email", {required : true})}
            />
            <br/>
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="flex justify-around mt-4">
            <button className="bg-pint-500 text-white rounded-md px-3 py-1 hover:bg-pint-700 duration-200">Singup</button>
            <p className='text-xl'>Have Account
                <button to="/" className="underline text-blue cursor-pointer"
                onclick={()=>{
                    document.getElementById("my_modal_3").showModal()
                }}>login</button>
                <Login/>
            </p>
          </div>

          </form>
        </div>
      </div>
    </div>
    </>
  )
}
