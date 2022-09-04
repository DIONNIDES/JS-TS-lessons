import {CityType, GovernmentBuildingsType} from '../02_objects/objects';

export function demolishHouseOntheStreet(city: CityType, street: string) {
    city.houses= city.houses.filter(house => house.address.street.title !== street);
}

export function getBulidingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingsType>, count: number) {
return buildings.filter(building => building.staffCount > count );
}