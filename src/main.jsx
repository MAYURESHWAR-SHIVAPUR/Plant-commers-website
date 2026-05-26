import "./index.css";
import "./styles/global.css";
import "./styles/variable.css";
import "./assets/fonts/fonts.css";


import { Provider } from "react-redux";
import { store } from "./redux/store.js"
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>

)