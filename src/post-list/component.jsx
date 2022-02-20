import React from 'react'
import './component.css'
import {PostListItem} from './item/'

const component = ({
  posts
}) => {
  const elements = posts.map((post) => {
    return (
      <React.Fragment key={post.id}>
        <PostListItem
          label={post.label}
          isImportant={post.isImportant}
        />
      </React.Fragment>
    )
  })
  return (
    <ul className='app-list list-group'>
      {elements}
    </ul>
  )
}

export default component
