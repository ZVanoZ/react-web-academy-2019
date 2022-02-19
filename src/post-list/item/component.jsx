import React from 'react'
import './component.css'

const component = () => {
  return (
    <li className='app-list-item d-flex justify-content-between'>
      <span className='app-list-item-label'>
            Item xxx2
        </span>
      <div className='d-flex justify-content-center align-items-center'>
        <button className='btn-star btn-sm'>
          <i className='fa fa-star' />
        </button>
        <button className='btn-trash btn-sm'>
          <i className='fa fa-trash-o' />
        </button>
        <i className='fa fa-heart' />
      </div>
    </li>
  )
}
/*
<button className='btn-trash btn-sm'>
  <i className='fa fa-heart' />
</button>
<i className='fa fa-heart-o' />
<i className="fa fa-heart" aria-hidden="false"></i>

*/

export default component
