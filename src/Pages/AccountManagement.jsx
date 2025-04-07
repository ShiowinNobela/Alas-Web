import Sidebar from '../components/sidebar.jsx'
import UserEditPopUp from './UserEditPopUp.jsx';
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import exampleDb from './records.json'


function AccountManagement() {

  const [Open, setOpen] = useState(false) //Modal
  const [Id, setId] = useState(0)
  


  return (
    <>
    <div className='h-screen w-screen'>
    <Sidebar/>
        <div className="h-screen w-screen bg-[#E2E0E1] pl-[256px] flex flex-col items-center">
            <h1 className='py-5 text-3xl font-semibold '>Account Management</h1>
            <div className="w-7xl">
              <div className='flex justify-center items-center'>
              <ul className="flex justify-between w-3xl py-5">
                <li > 
                  <button className="text-center px-10 py-3 rounded-2xl font-semibold bg-orange-300 hover:bg-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-red-400 active:bg-red-500">
                    All
                  </button>
                </li>
                <li > 
                  <button className="text-center px-10 py-3 rounded-2xl font-semibold bg-orange-300 hover:bg-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-red-400 active:bg-red-500">
                    Admin
                  </button>
                </li>
                <li > 
                  <button className="text-center px-10 py-3 rounded-2xl font-semibold bg-orange-300 hover:bg-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-red-400 active:bg-red-500">
                    Staff
                  </button>
                </li>
                <li > 
                  <button className="text-center px-10 py-3 rounded-2xl font-semibold bg-orange-300 hover:bg-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-red-400 active:bg-red-500">
                    User
                  </button>
                </li>
                <li>
                  <input className="p-3 border-1 border-black rounded-2xl" type="text" name="Search" id="Search"  placeholder="Search!"/>
                </li>
              </ul>  
              </div>    
            </div>
            <div className="flex justify-center items-center pt-10 ">

              <table className="border-1 border-black w-7xl text-center">
               <tr>
                  <th className="p-2.5 border-black border-1">Name</th>
                  <th className="p-2.5 border-black border-1">Address</th>
                  <th className="p-2.5 border-black border-1">Contact Num#</th>
                  <th className="p-2.5 border-black border-1">Role</th>
                  <th className="p-2.5 border-black border-1">Edit</th>
                </tr>

                { exampleDb.map( d => { return (
                  <tr>
                    <td className="p-2.5 border-black border-1"> {d.name} </td>
                    <td className="p-2.5 border-black border-1"> {d.address} </td>
                    <td className="p-2.5 border-black border-1"> {d.contactNum} </td>
                    <td className="p-2.5 border-black border-1"> {d.role} </td>
                    <td className="p-2.5 border-black border-1">
                    <FaEdit className="mx-auto cursor-pointer w-[30px] h-[30px] " onClick={() => 
                    {
                      setOpen(true)
                      setId(d.id)
                    }
                     }/>
                    </td>
                  </tr>
                )})
               
                } 
              </table>
            </div>

            <UserEditPopUp open={Open} id={Id} onClose={() => setOpen(false)} />
          

        </div>        
    </div>

    </>
  )
}

export default AccountManagement