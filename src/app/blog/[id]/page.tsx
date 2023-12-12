import React, { Suspense } from 'react'
import Details from './blogDetails';
import Nav from '@/app/components/Header';
import Loading from '@/app/skills/loading';

export default function BlogDetail({params}) {
  const id = params.id;
  
  const headerStyle = { 
    backgroundColor: "#fff",
    position: 'fixed',
    width: '100%',
    top: 0,
    color: "slategray",
    boxShadow:  'rgba(50, 50, 93, 0.1) 0px 13px 27px -25px,rgba(0, 0, 0, 0.25) 0px 8px 16px -20px',

  }

  return (
    <div className='bg-whitesmoke py-10'>
      <Nav sty={headerStyle} />
      <Suspense fallback={<Loading />} >
      <Details id={id} />
      </Suspense>
    </div>
  )
}
