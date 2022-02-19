import React from 'react'
import './component.css'
import {PostListItem} from './item/'

const component = () => {
  return (
    <ul className='app-list list-group'>
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </ul>
  )
}

export default component
