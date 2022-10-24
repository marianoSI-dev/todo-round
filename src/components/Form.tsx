import React from 'react'

import './Form.css'
type Props = {
    text: string,
    addTask():void,
    setTaskText(value:string):void
}

const Form = ({text, addTask, setTaskText}: Props) => {
  return (
    <div className='FormContainer'>
      <input className='FormInput' placeholder='Enter item' type="text" value={text} onChange={(e) => setTaskText(e.target.value)} />
      <input className='FormButton' type="submit" value="Submit" onClick={addTask} />
    </div>
  )
}

export default Form