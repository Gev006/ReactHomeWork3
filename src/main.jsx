import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TicTacToe from './TicTacToe/tictactoe'
import Minesweeper from './Minesweeper/minesweeper/minesweeper'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <TicTacToe/> */}
    <Minesweeper/>
  </React.StrictMode>,
)
