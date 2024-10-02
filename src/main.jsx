import { StrictMode } from 'react'
import ReactDOM from "react-dom"
import App from './App.jsx'
import './index.css'

const rootNode = document.getElementById('root');
// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>, rootNode);
