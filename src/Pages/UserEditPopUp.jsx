
function UserEditPopUp({open,onClose}) {
  return (
    <>
    <div onClick={onClose} className={open? " fixed flex items-center justify-center inset-0 transition-colors bg-black/20 " : "hidden"}>
        <div onClick={e => e.stopPropagation()} className={open?"flex flex-col w-3xl shadow-2xl bg-white p-10 space-y-3 transition-all scale-100 opacity-100" : "scale-125 opacity-0"}> 
            <div className="flex justify-center text-3xl font-semibold"> <span>User Information</span></div>
            <div className="flex flex-row gap-x-21.5">
                <h1>Name:</h1>
                <input className='border-b-1 w-[300px]' type="text" name="userName" id="userName" />
            </div>
            <div className="flex flex-row gap-x-18">
                <h1>Address:</h1>
                <input className='border-b-1 w-[500px]' type="text" name="userAddress" id="userAddress" />
            </div>
            <div className="flex flex-row gap-x-3">
                <h1>Contact Number:</h1>
                <input className='border-b-1' type="number" name="userNumber" id="userNumber" />
            </div>
            <div className="flex flex-row gap-x-19">
                <label for="Role">Role:</label>
                <select name="Role" id="Role" className='ml-5'>
                    <option value="Admin">Admin</option>
                    <option value="Staff">Staff</option>
                    <option value="Customer">Customer</option>
                </select>
            </div>

            
            <button className=" mt-10 px-10 py-5 bg-orange-300 hover:bg-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-red-400 active:bg-red-500 mx-auto text-xl rounded-4xl cursor-pointer">Save</button>
            <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600" > X </button>
        </div>
    </div>
    </>
  )
}

export default UserEditPopUp