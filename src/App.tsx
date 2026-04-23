import { Routes, Route, Link } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import ProductsPage from './api/pages/products/ProductsPage'
import CreateProductPage from './api/pages/products/CreateProductPage'
import MarketplacePage from './api/pages/marketplace/MarketplacePage'
import './App.css'

// function HomePage() {
//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>
//     </>
//   )
// }

function App() {
  return (
    <>

    {/* <nav>        <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/products/create">Create Product</Link> | <Link to="/marketplace">Marketplace</Link>
      </nav> */}
      <nav>
             <header className="mp-header">
                <nav className="mp-nav">
                    <div className="mp-logo">ProMarket</div>
                    <ul className="mp-nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/marketplace">Marketplace</Link></li>
                        <li><a href="#buy">Buy</a></li>
                        <li><a href="#sell">Sell</a></li>
                        <li><a href="#rent">Rent</a></li>
                        <li><a href="#trade">Trade</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
      </nav>
      <Routes>
        <Route path="/" element={<MarketplacePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/create" element={<CreateProductPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
      </Routes>
    </>
  )
}

export default App
