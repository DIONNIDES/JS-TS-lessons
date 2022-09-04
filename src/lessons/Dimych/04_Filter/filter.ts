export const ages = [1, 2, 3, 5, 10, 21, 90, 100, 15, 14, 8, 22];

export const predicate = (age: number) => {//всегда используем стрелочный синтаксис
    return age > 90;
}
export const oldAges = [100];

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'HTML', price: 300},
    {title: 'CSS', price: 300},
    {title: 'JS', price: 600},
    {title: 'React', price: 800},
    {title: 'Redux', price: 350}
];

export const cheapPredicate = (course: CourseType) => {
    return course.price <320;
}

const cheapCourses = [
    {title: 'HTML', price: 300},
    {title: 'CSS', price: 300},
];