let props:ManType;


export type LessonType = {
    title:string
}

export type AddressType = {
    street: StreetType
}

export type StreetType = {
    title:string
}
export type ManType = {
    name: string
    age: string
    lessons: Array<LessonType>
    address:AddressType

    }


beforeEach(()=>{
    props= {
        name: 'Dimych',
        age: '32',
        lessons: [
            {title: '1'},
            {title: '2'},
            {title: '3'},
        ],
        address:{
            street:{
                title: 'Nezavisimosti street'
            }
        }
    }
});


test('', () => {

    //const age = props.age;
    //const lessons = props.lessons;

   const {age, lessons} = props;//запись эквивалентна двум строкам сверху
    //const {age:a, lessons:l} = props;//найди свойство age и присвой его переменной a, найди свойство lessons и присвой переменной l
    const title = props.address.street.title

    expect(age).toBe('32');
    expect(lessons.length).toBe(3);
    expect(lessons[0].title).toBe('1');
    expect(lessons[1].title).toBe('2');
    expect(title).toBe('Nezavisimosti street');

});

test(' ',()=>{
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1, ls2, ...restLessons] = props.lessons;//только если знаем общее число элементов

    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2');
    expect(ls1.title).toBe('1');
    expect(ls2.title).toBe('2');
    expect(restLessons.length).toBe(1);
    expect(restLessons[0].title).toBe('3');
    expect(restLessons[0]).toStrictEqual({title: '3'});
})