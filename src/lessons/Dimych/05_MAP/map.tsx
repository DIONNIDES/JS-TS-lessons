import {GovernmentBuildingsType, HouseType} from '../02_objects/objects';

export type ManType = {
    name:string
    age:number
}

export const people:Array<ManType> = [
    {name: 'Andrey Ivanov', age:33},
    {name: 'Alexander Petrov', age:24},
    {name: 'Dmitriy Sidorov', age:18},
];

const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-INCUBATOR`);

export const createGreetingMessages = (array:Array<ManType>) =>{
    return array.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-INCUBATOR`);
};

export const getStreetsTitlesOfGovernmentBuildings = (buildings:Array<GovernmentBuildingsType>) =>{
    return buildings.map( building => building.address.street.title);
}

export const getStreetsTitlesOfHouses = (houses:Array<HouseType>) =>{
    return houses.map(houses => houses.address.street.title);
}

export function getMessagesForStreets(houses: Array<HouseType>) {
    return houses.map(house =>
     `Hello, people from ${house.address.street.title}`);
}

