import {v1} from 'uuid';
import {CityType, GovernmentBuildingsType, HouseType} from '../02_objects/objects';

export function sum  (a:number, b:number) {
    return a+b;
};



export type StudentType = {
    name:string
    age:number
    isActive:boolean
    address:AddressType
    technologies:Array<SkillType>
}

export type SkillType = {
    id:string
    skill:string
}

export type AddressType = {
    streetTitle:string
}

export const addSkill = (student:StudentType, skill:string) =>{
    student.technologies.push(
        {id:v1(), skill:skill}
    );
};

export const makeStudentActive = (s:StudentType) => {
   s.isActive = true
}

export const doesStudentLive = (st:StudentType, streetTitle:string) =>{
    return st.address.streetTitle === streetTitle;
}


export function addMoneyToBudget(building:GovernmentBuildingsType, budget:number) {
    building.budget += budget;
}

export const repairHouse = (house:HouseType) =>{
    house.repaired = true;
}

export function toFireStaff(building:GovernmentBuildingsType, staffCount:number){
building.staffCount -=staffCount;
}

export function toHireStaff(building:GovernmentBuildingsType, staffCount:number){
    building.staffCount += staffCount;
}

export function createMessage(city: CityType) {
    return `Hello ${city.title} citizens. Hello all ${city.citizensNumber} people.`
}