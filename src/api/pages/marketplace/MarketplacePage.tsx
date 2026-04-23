import { useEffect, useState } from 'react';
import './MarketplacePage.css';

interface Property {
    id: number;
    title: string;
    price: string;
    location: string;
    type: 'automotive' | 'real-estate';
    category: 'for-sale' | 'for-rent' | 'trade';
    image: string;
    seller: string;
    rating: number;
    priceRange: string;
    vehicleType?: string;
    propertyType?: string;
}

type TabId = 'all' | 'automotive' | 'real-estate' | 'for-sale' | 'for-rent' | 'trade';

const PROPERTIES: Property[] = [
    {
        id: 1,
        title: '2023 BMW M3 Competition',
        price: '$75,000',
        location: 'New York, NY',
        type: 'automotive',
        category: 'for-sale',
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'><rect fill='%23667eea' width='400' height='250'/><rect fill='%23764ba2' x='50' y='100' width='300' height='50' rx='25'/><text x='200' y='135' fill='white' text-anchor='middle' font-size='16' font-family='Arial'>BMW M3</text></svg>",
        seller: 'John Smith',
        rating: 4.8,
        priceRange: '50000-100000',
        vehicleType: 'sedan',
    },
    {
        id: 2,
        title: 'Modern Downtown Apartment',
        price: '$450,000',
        location: 'California, CA',
        type: 'real-estate',
        category: 'for-sale',
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'><rect fill='%23ff6b6b' width='400' height='250'/><rect fill='%23feca57' x='50' y='50' width='300' height='150' rx='10'/><text x='200' y='135' fill='white' text-anchor='middle' font-size='14' font-family='Arial'>Apartment</text></svg>",
        seller: 'Sarah Johnson',
        rating: 4.9,
        priceRange: '100000-500000',
        propertyType: 'apartment',
    },
    {
        id: 3,
        title: '2022 Tesla Model S Plaid',
        price: '$95,000',
        location: 'Texas, TX',
        type: 'automotive',
        category: 'for-sale',
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'><rect fill='%2348cab2' width='400' height='250'/><rect fill='%231dd1a1' x='50' y='100' width='300' height='50' rx='25'/><text x='200' y='135' fill='white' text-anchor='middle' font-size='16' font-family='Arial'>Tesla Model S</text></svg>",
        seller: 'Mike Wilson',
        rating: 4.7,
        priceRange: '50000-100000',
        vehicleType: 'sedan',
    },
    {
        id: 4,
        title: 'Luxury Villa with Pool',
        price: '$1,200,000',
        location: 'Florida, FL',
        type: 'real-estate',
        category: 'for-sale',
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'><rect fill='%23f093fb' width='400' height='250'/><rect fill='%23f5576c' x='50' y='50' width='300' height='150' rx='10'/><text x='200' y='135' fill='white' text-anchor='middle' font-size='16' font-family='Arial'>Luxury Villa</text></svg>",
        seller: 'Emma Davis',
        rating: 5.0,
        priceRange: '500000+',
        propertyType: 'house',
    },
    {
        id: 5,
        title: '2021 Range Rover Sport',
        price: '$68,000',
        location: 'Nevada, NV',
        type: 'automotive',
        category: 'for-rent',
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'><rect fill='%234facfe' width='400' height='250'/><rect fill='%2300f2fe' x='50' y='100' width='300' height='60' rx='30'/><text x='200' y='140' fill='white' text-anchor='middle' font-size='14' font-family='Arial'>Range Rover</text></svg>",
        seller: 'David Brown',
        rating: 4.6,
        priceRange: '50000-100000',
        vehicleType: 'suv',
    },
    {
        id: 6,
        title: 'Downtown Condo for Rent',
        price: '$2,500/month',
        location: 'New York, NY',
        type: 'real-estate',
        category: 'for-rent',
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'><rect fill='%23a8edea' width='400' height='250'/><rect fill='%23fed6e3' x='50' y='50' width='300' height='150' rx='10'/><text x='200' y='135' fill='black' text-anchor='middle' font-size='16' font-family='Arial'>Condo</text></svg>",
        seller: 'Lisa Garcia',
        rating: 4.8,
        priceRange: '0-50000',
        propertyType: 'condo',
    },
];

const TABS: { id: TabId; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'automotive', label: 'Automotive' },
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'for-sale', label: 'For Sale' },
    { id: 'for-rent', label: 'For Rent' },
    { id: 'trade', label: 'Trade' },
];

const SLIDE_COUNT = 3;

export default function MarketplacePage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTab, setActiveTab] = useState<TabId>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [lightboxId, setLightboxId] = useState<number | null>(null);

    useEffect(() => {
        const timer = setInterval(
            () => setCurrentSlide((prev) => (prev + 1) % SLIDE_COUNT),
            5000,
        );
        return () => clearInterval(timer);
    }, []);

    const filteredProperties = PROPERTIES.filter((p) => {
        if (activeTab !== 'all' && activeTab !== p.category && activeTab !== p.type) return false;
        const term = searchTerm.toLowerCase();
        if (term && !p.title.toLowerCase().includes(term) && !p.location.toLowerCase().includes(term)) return false;
        if (priceFilter && p.priceRange !== priceFilter) return false;
        if (locationFilter && !p.location.toLowerCase().includes(locationFilter)) return false;
        if (typeFilter && p.vehicleType !== typeFilter && p.propertyType !== typeFilter) return false;
        return true;
    });

    const lightboxProperty = lightboxId != null ? PROPERTIES.find((p) => p.id === lightboxId) ?? null : null;

    return (
        <div className="mp-page">
            {/* Header */}
            {/* <header className="mp-header">
                <nav className="mp-nav">
                    <div className="mp-logo">ProMarket</div>
                    <ul className="mp-nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#buy">Buy</a></li>
                        <li><a href="#sell">Sell</a></li>
                        <li><a href="#rent">Rent</a></li>
                        <li><a href="#trade">Trade</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header> */}

            {/* Hero */}
            <section className="mp-hero">
                <div className="mp-hero-slider">
                    {Array.from({ length: SLIDE_COUNT }, (_, i) => (
                        <div
                            key={i}
                            className={`mp-slide mp-slide-${i + 1}${currentSlide === i ? ' active' : ''}`}
                        />
                    ))}
                </div>
                <div className="mp-hero-content">
                    <h1>Your Premier Marketplace</h1>
                    <p>Buy, Sell, Rent &amp; Trade Automotive and Real Estate with Confidence</p>
                    <div className="mp-hero-buttons">
                        <a href="#browse" className="mp-btn mp-btn-primary">Start Browsing</a>
                        <a href="#sell" className="mp-btn mp-btn-secondary">List Your Property</a>
                    </div>
                </div>
            </section>

            {/* Main */}
            <main className="mp-main" id="browse">
                {/* Search */}
                <section className="mp-search-section">
                    <div className="mp-search-bar">
                        <input
                            type="text"
                            className="mp-search-input"
                            placeholder="Search for cars, homes, or anything..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && setSearchTerm(e.currentTarget.value)}
                        />
                        <button className="mp-search-btn" onClick={() => setSearchTerm(searchTerm)}>
                            Search
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="mp-category-tabs">
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                className={`mp-tab${activeTab === tab.id ? ' active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Filters */}
                    <div className="mp-filters">
                        <select
                            className="mp-filter-select"
                            value={priceFilter}
                            onChange={(e) => setPriceFilter(e.target.value)}
                        >
                            <option value="">All Prices</option>
                            <option value="0-50000">$0 – $50,000</option>
                            <option value="50000-100000">$50,000 – $100,000</option>
                            <option value="100000-500000">$100,000 – $500,000</option>
                            <option value="500000+">$500,000+</option>
                        </select>

                        <select
                            className="mp-filter-select"
                            value={locationFilter}
                            onChange={(e) => setLocationFilter(e.target.value)}
                        >
                            <option value="">All Locations</option>
                            <option value="new york">New York</option>
                            <option value="california">California</option>
                            <option value="texas">Texas</option>
                            <option value="florida">Florida</option>
                            <option value="nevada">Nevada</option>
                        </select>

                        <select
                            className="mp-filter-select"
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                        >
                            <option value="">All Types</option>
                            <option value="sedan">Sedan</option>
                            <option value="suv">SUV</option>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                            <option value="condo">Condo</option>
                        </select>
                    </div>
                </section>

                {/* Gallery */}
                <section className="mp-gallery">
                    {filteredProperties.map((p) => (
                        <div key={p.id} className="mp-card" onClick={() => setLightboxId(p.id)}>
                            <div
                                className="mp-card-image"
                                style={{ backgroundImage: `url('${p.image}')` }}
                            >
                                <div className="mp-card-badge">
                                    {p.category.replace('-', ' ').toUpperCase()}
                                </div>
                            </div>
                            <div className="mp-card-info">
                                <div className="mp-card-title">{p.title}</div>
                                <div className="mp-card-price">{p.price}</div>
                                <div className="mp-card-location">📍 {p.location}</div>
                                <div className="mp-card-rating">
                                    <span className="mp-stars">★★★★★</span>
                                    <span>{p.rating}</span>
                                    <span>• {p.seller}</span>
                                </div>
                                <div className="mp-card-actions">
                                    <button
                                        className="mp-action-btn mp-btn-contact"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Contact Seller
                                    </button>
                                    <button
                                        className="mp-action-btn mp-btn-favorite"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        ♥ Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>

            {/* Lightbox */}
            {lightboxProperty && (
                <div
                    className="mp-lightbox active"
                    onClick={() => setLightboxId(null)}
                >
                    <div
                        className="mp-lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="mp-lightbox-close" onClick={() => setLightboxId(null)}>
                            &times;
                        </button>
                        <div
                            className="mp-lightbox-image"
                            style={{ backgroundImage: `url('${lightboxProperty.image}')` }}
                        />
                        <h2>{lightboxProperty.title}</h2>
                        <p className="mp-lightbox-price">{lightboxProperty.price}</p>
                        <p>📍 {lightboxProperty.location}</p>
                        <div className="mp-lightbox-rating">
                            <span className="mp-stars">★★★★★</span>
                            <span>{lightboxProperty.rating} • {lightboxProperty.seller}</span>
                        </div>
                        <div className="mp-lightbox-actions">
                            <button className="mp-btn mp-btn-primary">Contact Seller</button>
                            <button className="mp-btn mp-btn-secondary">Schedule Viewing</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
