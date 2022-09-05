import {
    addCompany,
    addNewBookToUser,
    makeHairstyle,
    moveUser,
    removeBookForUser,
    updateBookForUser,
    updateCompanyTitle,
    updateCompanyTitleAssociativeArray,
    upgradeUserLaptop,
    UserType,
    userWithLaptopAndBooks,
    UserWithLaptopType,
    WithCompanies
} from './10_immutability';


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }


    const awesomeUser = makeHairstyle(user, 2);

    expect(awesomeUser.hair).toBe(16);
    expect(user.hair).toBe(32);
    expect(user.address.title).toBe(awesomeUser.address.title);
})

test('change address type test', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        }
    }


    const movedUser = moveUser(user, 'Kyiv');

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.title).toBe('Kyiv');

});

test('upgrade laptop to macbook test', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        }
    }


    const upgradedLaptopUser = upgradeUserLaptop(user, 'Macbook');

    expect(user).not.toBe(upgradedLaptopUser);
    expect(user.address).toBe(upgradedLaptopUser.address);
    expect(user.laptop).not.toBe(upgradedLaptopUser.laptop)
    expect(upgradedLaptopUser.laptop.title).toBe('Macbook');
    expect(user.laptop.title).toBe('Zenbook');

});

test('upgrade new book test', () => {
    let user: userWithLaptopAndBooks = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'react']
    }


    const userWithNewBook = addNewBookToUser(user, ['redux', 'ts']);

    expect(user).not.toBe(userWithNewBook);
    expect(user.address).toBe(userWithNewBook.address);
    expect(user.laptop).toBe(userWithNewBook.laptop);
    expect(user.books).not.toBe(userWithNewBook.books);
    expect(userWithNewBook.books[4]).toBe('redux');
    expect(userWithNewBook.books[5]).toBe('ts');
    expect(user.books[4]).toBeUndefined();

});

test('update js to ts test', () => {
    let user: userWithLaptopAndBooks = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'react']
    }


    const userWithNewBook = updateBookForUser(user, 'js', 'ts');

    expect(user).not.toBe(userWithNewBook);
    expect(user.address).toBe(userWithNewBook.address);
    expect(user.laptop).toBe(userWithNewBook.laptop);
    expect(user.books).not.toBe(userWithNewBook.books);
    expect(userWithNewBook.books[2]).toBe('ts');
    expect(user.books[2]).toBe('js')

});

test('remove js test', () => {
    let user: userWithLaptopAndBooks = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'react']
    }


    const userWithRemovedBook = removeBookForUser(user, 'js');

    expect(user).not.toBe(userWithRemovedBook);
    expect(user.address).toBe(userWithRemovedBook.address);
    expect(user.laptop).toBe(userWithRemovedBook.laptop);
    expect(user.books).not.toBe(userWithRemovedBook.books);
    expect(userWithRemovedBook.books[2]).toBe('react');
    expect(user.books[2]).toBe('js')

});

test('add copmanies test', () => {
    let user: userWithLaptopAndBooks & WithCompanies = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'react'],
        companies: [
            {id: 1, title: 'EPAM'},
            {id: 2, title: 'Itransition'},
            {id: 3, title: 'Mailru'},
            {id: 4, title: 'Yandex'},
        ]
    }


    const userWithNewCompany = addCompany(user, {id: 5, title: 'Google'});

    expect(user).not.toBe(userWithNewCompany);
    expect(user.address).toBe(userWithNewCompany.address);
    expect(user.laptop).toBe(userWithNewCompany.laptop);
    expect(user.books).toBe(userWithNewCompany.books);
    expect(user.companies).not.toBe(userWithNewCompany.companies);
    expect(userWithNewCompany.companies[4].id).toBe(5);
    expect(user.companies[4]).toBeUndefined()

});

test('update copmanies test', () => {
    let user: userWithLaptopAndBooks & WithCompanies = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'react'],
        companies: [
            {id: 1, title: 'EPAM'},
            {id: 2, title: 'Itransition'},
            {id: 3, title: 'Mailru'},
            {id: 4, title: 'Yandex'},
        ]
    }


    const userWithNewCompany = updateCompanyTitle(user, 1, 'Google');

    expect(user).not.toBe(userWithNewCompany);
    expect(user.address).toBe(userWithNewCompany.address);
    expect(user.laptop).toBe(userWithNewCompany.laptop);
    expect(user.books).toBe(userWithNewCompany.books);
    expect(user.companies).not.toBe(userWithNewCompany.companies);
    expect(userWithNewCompany.companies[0].title).toBe('Google');
    expect(user.companies[4]).toBeUndefined()

});

test('update copmany title assiciative array test', () => {
    let user: userWithLaptopAndBooks = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'react']

    }

    let companies: any = {
        ['Dimych']: [
            {id: 1, title: 'EPAM'},
            {id: 2, title: 'Itransition'},
            {id: 3, title: 'Mailru'},
            {id: 4, title: 'Yandex'},
        ],
        ['Artem']: [
            {id: 1, title: 'Home'},
            {id: 2, title: 'Zavod'}
        ]
    }


    const updatedCompanies = updateCompanyTitleAssociativeArray(companies, 'Dimych', 3, 'YouTube');

    expect(companies).not.toBe(updatedCompanies);
    expect(companies['Artem'][0].title).toBe('Home');
    expect(updatedCompanies['Artem'][0].title).toBe('Home');
    expect(companies['Artem'][1].title).toBe('Zavod')
    expect(updatedCompanies['Artem'][2]).toBeUndefined();

    expect(updatedCompanies['Dimych'][2].title).toBe('YouTube');

});