export interface HouseType {
    id: String,
    name: String,
    longitude: Number,
    latitude: Number,
    residency: ResidencyType[],
    created: Number,
    updated: Number
}

export interface ResidencyType {
    date: any,
    birds: Number,
    eggs: Number
}