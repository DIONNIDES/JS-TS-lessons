export type UsersType = {
    [key:string]:{id:number, name:string}
}
let users:UsersType
beforeEach(()=>{
    users = {
        '101': {id:101, name:'Dima'},
        '402': {id:402, name:'Ivan'},
        '555': {id:555, name:'Artem'},
        '777': {id:777, name:'Victor'},
    }
});

test('should update corresponding user', ()=>{
    users['777'].name = 'Doker';

    expect(users['777'].name).toBe('Doker');
    expect(users['777']).toEqual({id:777, name:'Doker'});
});

test('should delete corresponding user', ()=>{
   delete users['777'];

    expect(users['777']).toBeUndefined();
});