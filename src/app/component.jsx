import React from 'react'
// import logo from '../logo.svg'
import './component.css'

import {AppHeader} from '../app-header/'
import {SearchPanel} from '../search-panel/'
import {PostStatusFilter} from '../post-status-filter/'
import {PostList} from '../post-list/'
import {PostAddForm} from '../post-add-form/'

const component = () => {
  const data = {
    posts: [
      {
        id: 1,
        label: 'Going to learn React.',
        isImportant: true
      }, {
        id: 2,
        label: 'That is so good.'
      }, {
        id: 3,
        label: 'I need a break...'
      }]
  }
  return (
    <div className='app'>
      <AppHeader />
      <div className='search-panel d-flex'>
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data.posts} />
      <PostAddForm />
    </div>
  )
}

export default component
