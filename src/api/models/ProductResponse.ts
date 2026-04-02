/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from './Category';
import type { Condition } from './Condition';
export type ProductResponse = {
    id?: string;
    productItemId?: string | null;
    productFileId?: string | null;
    productName?: string | null;
    price?: number;
    addressId?: string | null;
    description?: string | null;
    productTypeId?: number;
    category?: Category;
    condition?: Condition;
    isActive?: boolean;
    dateCreated?: string;
    updatedAt?: string;
    createdBy?: string | null;
    updatedBy?: string | null;
    extension?: string | null;
};

