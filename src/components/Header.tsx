import React from 'react'
import './Header.css'

type Props = {
    quantity: number
}

const Header = ({quantity}: Props) => {
  return (
    <header className={'Header'}>
       <p>You have {quantity} Todos</p>
    </header>
  )
}

export default Header