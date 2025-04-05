import { Link } from "react-router-dom"
import { HiDocumentReport } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import {AiOutlineMoneyCollect, AiOutlineUser, AiOutlineUnorderedList, AiOutlineNotification } from "react-icons/ai";
function sidebar() {
  return (
    <>
    <div className="fixed top-0 left-0 z-40 w-[256px] h-screen transition-transform translate-x-0 ">
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
            <ul> 
                <Link to='/DashBoard'>
                <li className="flex items-center p-2 pb-4 pt-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                    <IoHomeOutline  className=" mx-3 h-[30px] w-[30px]"/>  <span className="flex-1 ml-3 text-left whitespace-nowrap">Home</span> 
                </li>
                </Link>
                <Link  to='/AccountManagement'>
                <li className="flex items-center p-2 pb-4 pt-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                    <AiOutlineUser className=" mx-3 h-[30px] w-[30px]"/><span className="flex-1 ml-3 text-left whitespace-nowrap">User Management</span>
                </li>
                </Link>
                <Link to='/Sales'>
                <li className="flex items-center p-2 pb-4 pt-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                    <AiOutlineMoneyCollect  className=" mx-3 h-[30px] w-[30px]"/><span className="flex-1 ml-3 text-left whitespace-nowrap">Sales</span>
                </li>
                </Link>
                <Link to='/ProductManagement'>
                <li className="flex items-center p-2 pb-4 pt-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                    <AiOutlineUnorderedList  className=" mx-3 h-[30px] w-[30px]"/><span className="flex-1 ml-3 text-left whitespace-nowrap">Product Management</span>
                </li>
                </Link>
                <li className="flex items-center p-2 pb-4 pt-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                    <AiOutlineNotification  className=" mx-3 h-[30px] w-[30px]"/><span className="flex-1 ml-3 text-left whitespace-nowrap">Notifications</span>
                </li>
                <Link to='/AddProduct' >
                <li className="flex items-center p-2 pb-4 pt-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                    <HiDocumentReport  className=" mx-3 h-[30px] w-[30px]"/><span className="flex-1 ml-3 text-left whitespace-nowrap">Add Product</span>
                </li>
                </Link>
                <Link to='/' >
                <div className="fixed bottom-0 left-0 mb-3 ">
                    <div className="flex items-center p-2 pb-4 pt-4 ml-15 text-base  font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                    <IoIosLogOut className=" mx-2 h-[30px] w-[30px]" /> <span className="flex-1 ml-1 text-left whitespace-nowrap"> Logout</span> 
                    </div>
                </div>
                </Link>
            </ul>
        </div>
    </div>
    
    </>
  )
}

export default sidebar