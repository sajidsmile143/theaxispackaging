import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@/lib/store'
import { BrowserRouter } from 'react-router-dom'
import '@/app/globals.css'
import App from './App'
import { Toaster } from '@/components/ui/toaster'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
				<Toaster />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
) 