import {addSkill, doesStudentLive, makeStudentActive, StudentType, sum} from './functions';
import {v1} from 'uuid';

let student: StudentType;

beforeEach(() => {
    student = {
        name: 'Dmitriy',
        age: 25,
        isActive: false,
        address: {streetTitle: 'Rybna',},
        technologies: [
            {id: v1(), skill: 'React+Redux'},
            {id: v1(), skill: 'JS/TS'},
            {id: v1(), skill: 'HTML'},
            {id: v1(), skill: 'CSS'},
        ]
    };
});



test('New teach skill should be added', () => {

        expect(student.technologies.length).toBe(4);

        addSkill(student, 'API');
        expect(student.technologies[0].skill).toBe('React+Redux');
        expect(student.technologies[1].skill).toBe('JS/TS');
        expect(student.technologies[2].skill).toBe('HTML');
        expect(student.technologies[3].skill).toBe('CSS');
        expect(student.technologies[4].skill).toBe('API');
        expect(student.technologies[4].skill).toBeDefined();
        expect(student.technologies.length).toBe(5);
    }
);

test('Student should be made active',()=>{

    expect(student.isActive).toBe(false);

    makeStudentActive(student);
    expect(student.isActive).toBe(true);
})

test('Does student live in current street',()=>{
    expect(student.address.streetTitle).toBe('Rybna');

    let result1 = doesStudentLive(student, 'Rybna');
    let result2 = doesStudentLive(student, 'Soborna');
    expect(result1).toBe(true);
    expect(result2).toBe(false);

    }
);