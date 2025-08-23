# Axis Packaging Website

A modern, responsive website for Axis Packaging, showcasing their packaging solutions and services. Built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with custom branding
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Product Showcase**: Display of various packaging solutions
- **Instant Quote System**: Interactive quote calculator
- **Contact Forms**: Easy communication with customers
- **Sustainability Focus**: Dedicated section for eco-friendly packaging
- **Industry Solutions**: Tailored packaging for different industries
- **Testimonials**: Customer reviews and success stories

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library with shadcn/ui
- **State Management**: Redux Toolkit
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

## 📁 Project Structure

```
axis-packaging/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products page
│   ├── quote/             # Quote page
│   ├── sustainability/    # Sustainability page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── hero.tsx          # Hero section
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Footer component
│   └── ...               # Other components
├── lib/                  # Utility functions and store
│   ├── slices/           # Redux slices
│   ├── store.ts          # Redux store configuration
│   └── utils.ts          # Utility functions
├── public/               # Static assets
│   └── images/           # Image files
└── styles/               # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/axis-packaging.git
cd axis-packaging
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Colors
The project uses CSS custom properties for theming. Main colors are defined in `app/globals.css`:

```css
:root {
  --axis-dark-blue: #1e3a8a;
  --axis-light-blue: #3b82f6;
  --axis-accent: #f59e0b;
}
```

### Components
All UI components are located in `components/ui/` and can be customized as needed.

## 📱 Pages

- **Home** (`/`) - Landing page with hero section and featured products
- **About** (`/about`) - Company information and story
- **Products** (`/products`) - Complete product catalog
- **Quote** (`/quote`) - Instant quote calculator
- **Sustainability** (`/sustainability`) - Eco-friendly packaging solutions
- **Contact** (`/contact`) - Contact information and form
- **MOQ** (`/moq`) - Minimum order quantities
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For any questions or support, please contact:
- Email: theasxis.packaging@gmail.com
- Website: https://axispackaging.com

---

Built with ❤️ for Axis Packaging 