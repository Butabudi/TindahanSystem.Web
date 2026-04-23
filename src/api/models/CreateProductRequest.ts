/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from './Category';
import type { Condition } from './Condition';
export type CreateProductRequest = {
    productName?: string | null;
    price?: number;
    description?: string | null;
    categoryId?: string | null;
    categoryType?: Category;
    condition?: Condition;
    createdBy?: string | null;
    dataExtensions?: string | null;
    productItemId?: string | null;
    fileId?: string | null;
    addressId?: string | null;
};

