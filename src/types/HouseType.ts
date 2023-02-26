export interface HouseType {
    id: String,
    name: String,
    longitude: Number,
    latitude: Number,
    residency: ResidencyType[],
    created: Number,
    updated: Number
}

interface ResidencyType {
    date: any,
    birds: Number,
    eggs: Number
}