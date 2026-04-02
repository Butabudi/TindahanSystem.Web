/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductRequest } from '../models/CreateProductRequest';
import type { CreateProductResponse } from '../models/CreateProductResponse';
import type { PatchProductRequest } from '../models/PatchProductRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductsService {
    /**
     * @param productGuid
     * @param xCorrelationId
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static patchProducts(
        productGuid: string,
        xCorrelationId?: string,
        requestBody?: PatchProductRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/products/{productGuid}',
            path: {
                'productGuid': productGuid,
            },
            headers: {
                'X-Correlation-Id': xCorrelationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @param xCorrelationId
     * @returns any Success
     * @throws ApiError
     */
    public static getProducts(
        xCorrelationId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products',
            headers: {
                'X-Correlation-Id': xCorrelationId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @param categoryId
     * @param pageNumber
     * @param pageSize
     * @param xCorrelationId
     * @returns any Success
     * @throws ApiError
     */
    public static getProductsApiGetfilteredproducts(
        categoryId?: number,
        pageNumber?: number,
        pageSize?: number,
        xCorrelationId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/api/getfilteredproducts',
            headers: {
                'X-Correlation-Id': xCorrelationId,
            },
            query: {
                'CategoryId': categoryId,
                'PageNumber': pageNumber,
                'PageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @param productId
     * @param xCorrelationId
     * @returns any Success
     * @throws ApiError
     */
    public static getProductsApiGet(
        productId: string,
        xCorrelationId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/api/get/{productId}',
            path: {
                'productId': productId,
            },
            headers: {
                'X-Correlation-Id': xCorrelationId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Create a new Product
     * @param xCorrelationId
     * @param requestBody
     * @returns CreateProductResponse Created
     * @throws ApiError
     */
    public static postProductsApiCreate(
        xCorrelationId?: string,
        requestBody?: CreateProductRequest,
    ): CancelablePromise<CreateProductResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products/api/create',
            headers: {
                'X-Correlation-Id': xCorrelationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @param id
     * @param xCorrelationId
     * @returns void
     * @throws ApiError
     */
    public static deleteProductsApiDelete(
        id?: string,
        xCorrelationId?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/products/api/delete',
            headers: {
                'id': id,
                'X-Correlation-Id': xCorrelationId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
}
