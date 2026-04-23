/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from './Category';
import type { Condition } from './Condition';
export type PatchProductRequest = {
    productName?: string | null;
    price?: number;
    addressId?: number;
    description?: string | null;
    productTypeId?: number;
    category?: Category;
    condition?: Condition;
    isActive?: boolean;
    updatedAt?: string;
    updatedBy?: string | null;
};

