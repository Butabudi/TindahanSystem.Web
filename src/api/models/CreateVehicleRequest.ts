/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubCategory } from './SubCategory';
export type CreateVehicleRequest = {
    subCategory?: SubCategory;
    vehicleNumber?: string | null;
    make?: string | null;
    model?: string | null;
    year?: string | null;
    trimLevel?: string | null;
    bodyStyle?: string | null;
    transmissionType?: string | null;
    driveType?: string | null;
    engineDisplacementCc?: string | null;
    fuelType?: string | null;
    horsePower?: string | null;
    mileageKm?: string | null;
    vin?: string | null;
    interiorColor?: string | null;
    exteriorColor?: string | null;
    features?: Array<string> | null;
    dataExtensions?: string | null;
};

