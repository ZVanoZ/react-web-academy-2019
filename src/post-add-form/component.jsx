import React from 'react'
import './component.css'

const component = () =>{
  return (
    <form className='bottom-panel d-flex'>
      <input
        type='text'
        placeholder='О чем Вы думаете сейчас?'
        className='form-control new-post-label'
        />
      <button
        type='submit'
        className='btn btn-outline-secondary'>Добавить</button>
    </form>
  );
}

export default component;
