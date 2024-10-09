import React from 'react'
import Link from 'next/link'

function Navbar() {
  const links = [
    {id:0,title:'Home', href: '/'},
    {id:1,title:'About', href: '/about'},
    {id:2,title:'Products', href: '/products'},
  ]

  return (
      <div className=' bg-sky-900 p-10'>
       <div className=' container flex justify-between'>
        <h2 className=' text-lg font-bold text-neutral-300'>Logo</h2>
          <div className=' flex gap-10 items-center '>
           {links.map(({id,title,href})=>{
            return(
              <div key={id} className=' text-white  text-lg '>
                <Link href={href}>{title}</Link>
              </div>
            )
             })}
         </div>
        </div>
    </div>
  )
}

export default Navbar