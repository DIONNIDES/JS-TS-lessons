function increaseAge(u:UserType){
    u.age = u.age+1;
}

export type AddressType = {
    title:string
}

export type UserType = {
    name:string
    age:number
}

export type UserType2 = {
    name:string
    age:number
    address:AddressType
}

test('referense type test', ()=>{
    let user:UserType = {
        name:'Dimych',
        age:32
    }

    increaseAge(user)

    expect(user.age).toBe(33)

    let superman  = user;

    superman.age = 1000;

    expect(user.age).toBe(1000)
});

test('Array referense test', ()=>{
    let users = [
        {
            name:'Dimych',
            age:32
        },
        {
            name:'Oleg',
            age:228
        }
    ];

    let admins = users;

    admins.push({name:'Banduygan', age:10});

    expect(users.length).toBe(3);
    expect(users[2]).toEqual({name:'Banduygan', age:10});
})

test('value test', ()=>{
    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount++;

    expect(usersCount).toBe(100);
    expect(adminsCount).toBe(101);

})

test('referenseNew type test', ()=>{
    let user:UserType2 = {
        name:'Dimych',
        age:32,
        address:{
            title:'Minsk'
        }
    }

    let user2:UserType2 = {
        name:'Natasha',
        age:30,
        address:user.address
    }

    user2.address.title='Kanary'
    expect(user.address.title).toBe('Kanary');
});

test('referenseNew array type test', ()=>{

    let user:UserType2 = {
        name:'Dimych',
        age:32,
        address:{
            title:'Minsk'
        }
    }

    let user2:UserType2 = {
        name:'Natasha',
        age:30,
        address:user.address
    }

    let users = [user, user2, {name:'Misha', age:4, address:user.address}]
    users[2].address.title='Kyiv'

    expect(user.address.title).toBe('Kyiv');
});


