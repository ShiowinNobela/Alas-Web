import {Link} from 'react-router-dom'

function LoginAdmin() {
  return (
    <>
    <section className="h-screen w-screen bg-gradient-to-r from-slate-300 to-slate-500 p-30 flex items-center justify-center text-3xl ">
            <div className="flex flex-col items-center shadow-2xl p-5 pb-10 space-y-10 ">
                <p>Admin Login</p>
                  <div className='flex flex-col text-lg text-left gap-1'>
                    <span>Username</span>
                    <input type="text" className='rounded-md p-1 border-1 outline-none focus:border-black focus:bg-slate-100' />
                  </div>

                  <div className='flex flex-col text-lg text-left gap-1'>
                    <span>Password</span>
                    <input type="text" className='rounded-md p-1 border-1 outline-none focus:border-black focus:bg-slate-100' />
                  </div>
                  <Link to='/DashBoard' >
                  <button className='px-10 py-2 text-lg rounded-md bg-gradient-to-tr from-red-600 to-yellow-400 cursor-pointer'>Login</button>
                  </Link>
            </div>
    </section>
    </>
  )
}

export default LoginAdmin