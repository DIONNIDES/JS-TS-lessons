
export type Address2Type = {
    street:StreetType
}

export type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: Address2Type
}

export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    id?:number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

