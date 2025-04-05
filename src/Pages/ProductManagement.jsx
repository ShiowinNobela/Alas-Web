import Example from '../images/exmaplePic.jpg'
import Sidebar from '../components/sidebar.jsx'
import {Link} from 'react-router-dom'

function ProductManagement() {
  return (
    <>
    <div className='h-screen w-screen overflow-auto'>
    <Sidebar/>
      <div className='h-screen w-screen bg-[#E2E0E1] pl-[256px] flex'>
        <h1 className='pl-10 pt-5 text-xl font-semibold '>Product Management</h1>

        <div className='grid grid-cols-3 mt-10 w-6xl gap-x-10 '>
          
          <div className='flex flex-col items-center justify-center mb-10'>
            <img src={Example} alt="/" className='w-[300px] h-[300px] shadow-2xl' />
            <Link to='/EditProduct' >
              <div className='p-1 bg-[#FFB95D] rounded-2xl text-xl font-semibold mt-3 w-[90px] h-[40px] text-center cursor-pointer ' >
                <p>Edit</p>
              </div>
            </Link>
          </div>

          <div className='flex flex-col items-center justify-center mb-10'>
            <img src={Example} alt="/" className='w-[300px] h-[300px] shadow-2xl' />
            <Link to='/EditProduct' >
              <div className='p-1 bg-[#FFB95D] rounded-2xl text-xl font-semibold mt-3 w-[90px] h-[40px] text-center cursor-pointer ' >
                <p>Edit</p>
              </div>
            </Link>
          </div>

          <div className='flex flex-col items-center justify-center mb-10'>
            <img src={Example} alt="/" className='w-[300px] h-[300px] shadow-2xl' />
            <Link to='/EditProduct' >
              <div className='p-1 bg-[#FFB95D] rounded-2xl text-xl font-semibold mt-3 w-[90px] h-[40px] text-center cursor-pointer ' >
                <p>Edit</p>
              </div>
            </Link>
          </div>

          <div className='flex flex-col items-center justify-center mb-10'>
            <img src={Example} alt="/" className='w-[300px] h-[300px] shadow-2xl' />
            <Link to='/EditProduct' >
              <div className='p-1 bg-[#FFB95D] rounded-2xl text-xl font-semibold mt-3 w-[90px] h-[40px] text-center cursor-pointer ' >
                <p>Edit</p>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default ProductManagement