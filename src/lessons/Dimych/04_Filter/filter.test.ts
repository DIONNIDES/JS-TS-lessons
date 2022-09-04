import {CourseType} from './filter';

export {}

test('Should takes old men, older then 90', () => {
    const ages = [1, 2, 3, 5, 10, 21, 90, 100, 15, 14, 8, 22];


    /*    const predicate = (age: number) => {
            return age > 90;
        }*/

    /*    const predicate = (age: number) => age>90 //короткая запись предиката*/

    const oldAges = ages.filter((age: number) => age > 90);//теперь пишем еще более компактно

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);

})

test('Should take courses cheaper then 320$', () => {
    const courses = [
        {title: 'HTML', price: 300},
        {title: 'CSS', price: 300},
        {title: 'JS', price: 600},
        {title: 'React', price: 800},
        {title: 'Redux', price: 350}
    ];
    /*    const cheapPredicate = (course: CourseType) => {
            return course.price < 320;
        }*/

/*    const cheapPredicate = (course: CourseType) => course.price < 300;*///короткая запись предиката
    const cheapCourses = courses.filter((course: CourseType) => course.price < 300);//засовываем логику функции предиката в фильтр без создания отдельной функции

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe('HTML');
    expect(cheapCourses[0].price).toBe(300);
    expect(cheapCourses[1].title).toBe('CSS');
    expect(cheapCourses[1].price).toBe(300);

});

test('Get only completed tasks', ()=>{

    const tasks = [
        {id:2, title:'bread', isDone:false},
        {id:3, title:'tomatoes', isDone:true},
        {id:4, title:'milk', isDone:true},
        {id:5, title:'salt', isDone:false},
        {id:6, title:'sugar', isDone:false}
    ];

    const completedTasks = tasks.filter(task => task.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(3);
    expect(completedTasks[0].title).toBe('tomatoes');
    expect(completedTasks[1].id).toBe(4);
    expect(completedTasks[1].title).toBe('milk');
});