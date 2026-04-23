/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateVehicleRequest } from '../models/CreateVehicleRequest';
import type { CreateVehicleResponse } from '../models/CreateVehicleResponse';
import type { UpdateVehicleRequest } from '../models/UpdateVehicleRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VehicleService {
    /**
     * @param subCategoryName
     * @param xCorrelationId
     * @param requestBody
     * @returns CreateVehicleResponse Success
     * @throws ApiError
     */
    public static postVehicle(
        subCategoryName?: string,
        xCorrelationId?: string,
        requestBody?: CreateVehicleRequest,
    ): CancelablePromise<CreateVehicleResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vehicle',
            headers: {
                'subCategoryName': subCategoryName,
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
     * @param id
     * @param xCorrelationId
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static patchVehicle(
        id?: string,
        xCorrelationId?: string,
        requestBody?: UpdateVehicleRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/vehicle',
            headers: {
                'id': id,
                'X-Correlation-Id': xCorrelationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
