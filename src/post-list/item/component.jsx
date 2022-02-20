import React, {Component} from 'react'
import './component.css'

class PostListItem extends Component {
  state = {
    isImportant: false,
    isLike : false
  }
  constructor (props) {
    super(props)
  }
  reverseImportant =  () => {
    this.setState(({isImportant}) => (
      { isImportant: !isImportant }
    ))
  }
  reverseLike =  () => {
    this.setState(({isLike}) => (
      { isLike: !isLike }
    ))
  }

  render () {
    const {label = '...'} = this.props
    const {isImportant, isLike} = this.state
    let classNames = [
      'app-list-item',
      'd-flex',
      'justify-content-between'
    ]
    if (isImportant) {
      classNames.push('important')
    }
    if (isLike){
      classNames.push('like');
    }
    const result = (
      <li className={classNames.join(' ')}>
        <span
          className='app-list-item-label'
          onClick={this.reverseLike}
          >
          {label}
        </span>
        <div className='d-flex justify-content-center align-items-center'>
          <button
            className='btn-star btn-sm'
            onClick={this.reverseImportant}
            >
            <i className='fa fa-star' />
          </button>
          <button className='btn-trash btn-sm'>
            <i className='fa fa-trash-o' />
          </button>
          <i className='fa fa-heart' />
        </div>
      </li>
    )
    return result
  }
};

export default PostListItem
