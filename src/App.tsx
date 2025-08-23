import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/app/page'
import AboutPage from '@/app/about/page'
import ContactPage from '@/app/contact/page'
import ProductsPage from '@/app/products/page'
import QuotePage from '@/app/quote/page'
import SustainabilityPage from '@/app/sustainability/page'
import TermsPage from '@/app/terms/page'
import PrivacyPage from '@/app/privacy/page'
import MOQPage from '@/app/moq/page'

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="/products" element={<ProductsPage />} />
			<Route path="/quote" element={<QuotePage />} />
			<Route path="/sustainability" element={<SustainabilityPage />} />
			<Route path="/terms" element={<TermsPage />} />
			<Route path="/privacy" element={<PrivacyPage />} />
			<Route path="/moq" element={<MOQPage />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	)
}

export default App 