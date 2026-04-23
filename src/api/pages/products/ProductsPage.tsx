import { useEffect, useState } from "react";
import apiClient from "../../core/apiClient";

// Matches your ProductResponseDto (Dto suffix stripped by Swagger)
interface ProductResponse {
    id: string;
    productItemId: string;
    productName: string;
    price: number;
    description?: string;
    category: "Property" | "MarketPlace" | "Vehicle" | "Job" | "Service";
    condition: "New" | "Used";
    isActive: boolean;
    dateCreated: string;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<ProductResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        apiClient
            .get<ProductResponse[]>("/products") // Maps to [HttpGet] GetAll()
            .then((res) => setProducts(res.data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Condition</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <tr key={p.id}>
                            <td>{p.productName}</td>
                            <td>${p.price.toFixed(2)}</td>
                            <td>{p.category}</td>
                            <td>{p.condition}</td>
                            <td>{p.isActive ? "✅" : "❌"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}