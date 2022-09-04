
import {CityType} from '../02_objects/objects';
import {createGreetingMessages, ManType} from './map';
import {getStreetsTitlesOfGovernmentBuildings} from './map';

let people: Array<ManType> = [];
let city : CityType;

beforeEach(() => {
        people = [
            {name: 'Andrey Ivanov', age: 33},
            {name: 'Alexander Petrov', age: 24},
            {name: 'Dmitriy Sidorov', age: 18},
        ]
    }
);

test('Should get array of greeting messages', () => {

    /*const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-INCUBATOR`);*/

    let messages = createGreetingMessages(people);//эквивалетная запись

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Andrey. Welcome to IT-INCUBATOR');
    expect(messages[1]).toBe('Hello Alexander. Welcome to IT-INCUBATOR');
    expect(messages[2]).toBe('Hello Dmitriy. Welcome to IT-INCUBATOR');

});


