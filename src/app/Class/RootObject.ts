//via JSON2ts

export interface FieldAliases {
    OBJECTID: string;
    GISID: string;
    NAAM: string;
    CATEGORIE: string;
    STRAAT: string;
    HUISNR: string;
    POSTCODE: string;
    DISTRICT: string;
    BEGINDATUM: string;
    TOESTELLEN: string;
    FINANCIERING: string;
    OPMERKING: string;
    FOTO1: string;
    NAAM_FOTO1: string;
    FENIKS_ID: string;
    COSMO_ID: string;
    FENIKS_ID_GETAL: string;
    X_COORD: string;
    Y_COORD: string;
    SHAPE_Length: string;
    SHAPE_Area: string;
}

export interface SpatialReference {
    wkid: number;
    latestWkid: number;
}

export interface Field {
    name: string;
    type: string;
    alias: string;
    length?: number;
}

export interface Attributes {
    OBJECTID: number;
    GISID: string;
    NAAM: string;
    CATEGORIE: string;
    STRAAT: string;
    HUISNR: string;
    POSTCODE: string;
    DISTRICT: string;
    BEGINDATUM: any;
    TOESTELLEN?: number;
    FINANCIERING: string;
    OPMERKING: string;
    FOTO1?: any;
    NAAM_FOTO1?: any;
    FENIKS_ID: string;
    COSMO_ID: string;
    FENIKS_ID_GETAL?: number;
    X_COORD?: number;
    Y_COORD?: number;
    SHAPE_Length: number;
    SHAPE_Area: number;
}

export interface Geometry {
    rings: number[][][];
}

export interface Feature {
    attributes: Attributes;
    geometry: Geometry;
}

export interface RootObject {
    displayFieldName: string;
    fieldAliases: FieldAliases;
    geometryType: string;
    spatialReference: SpatialReference;
    fields: Field[];
    features: Feature[];
}