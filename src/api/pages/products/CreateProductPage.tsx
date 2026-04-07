import React, { useState } from "react";
import axios from "axios";
import apiClient from "../../core/apiClient";

export default function CreateProductPage() {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [productItemId, setProductItemId] = useState("");
    const [addressId, setAddressId] = useState("");
    const [category, setCategory] = useState("Property");
    const [condition, setCondition] = useState("New");
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Maps to [HttpPost("api/create")] CreateProduct()
            await apiClient.post("/products/api/create", {
                productName,
                price,
                description: description || null,
                categoryId: "1",
                categoryType: category,
                condition,
                productItemId,
                addressId,
            });
            setMessage("Product created successfully!");
        } catch (err: unknown) {
            const message = axios.isAxiosError(err)
                ? (err.response?.data?.title ?? err.message)
                : "An unexpected error occurred";
            setMessage(`Error: ${message}`);
        }
    };

    return (
        <div>
            <h1>Create Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name *</label>
                    <input value={productName} onChange={(e) => setProductName(e.target.value)} required />
                </div>
                <div>
                    <label>Price *</label>
                    <input type="number" step="0.01" value={price} onChange={(e) => setPrice(+e.target.value)} required />
                </div>
                <div>
                    <label>Product Item ID *</label>
                    <input value={productItemId} onChange={(e) => setProductItemId(e.target.value)} required />
                </div>
                <div>
                    <label>Address ID *</label>
                    <input value={addressId} onChange={(e) => setAddressId(e.target.value)} required />
                </div>
                <div>
                    <label>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label>Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Property">Property</option>
                        <option value="MarketPlace">MarketPlace</option>
                        <option value="Vehicle">Vehicle</option>
                        <option value="Job">Job</option>
                        <option value="Service">Service</option>
                    </select>
                </div>
                <div>
                    <label>Condition</label>
                    <select value={condition} onChange={(e) => setCondition(e.target.value)}>
                        <option value="New">New</option>
                        <option value="Used">Used</option>
                    </select>
                </div>
                <button type="submit">Create</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}