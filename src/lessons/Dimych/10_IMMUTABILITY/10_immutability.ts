export type UserType = {
    name: string
    hair: number
    address: AddressType
}

export type AddressType = {
    title: string
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type userWithLaptopAndBooks = UserWithLaptopType & {
    books: Array<String>
}

export type WithCompanies = {
    companies: Array<{ id: number, title: string }>
}

export function makeHairstyle(u: UserType, power: number) {

    const userCopy = {
        ...u
    }
    userCopy.hair = userCopy.hair / power
    return userCopy;
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {...u, address: {...u.address, title: city}}
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {...u, laptop: {...u.laptop, title: laptop}}
}

export function addNewBookToUser(u: userWithLaptopAndBooks, [book1, book2]: Array<String>) {
    return {...u, books: [...u.books, book1, book2]}
}

export function updateBookForUser(u: userWithLaptopAndBooks, book: string, updatedBook: string) {
    return {...u, books: u.books.map(b => b === book ? updatedBook : b)}
}

export function removeBookForUser(u: userWithLaptopAndBooks, removedBook: string) {
    return {...u, books: u.books.filter(b => b !== removedBook)}
}

export function addCompany(u: userWithLaptopAndBooks & WithCompanies, company: { id: number, title: string }) {
    return {...u, companies: [...u.companies, company]}
}

export function updateCompanyTitle(u: userWithLaptopAndBooks & WithCompanies, id: number, title: string) {
    return {...u, companies: u.companies.map(c => c.id === id ? {...c, title} : c)}
}

export function updateCompanyTitleAssociativeArray(companies: any, keyToArray: string, companyID: number, newCompanyTitle: string) {
    return {...companies, [keyToArray]:companies[keyToArray].map((c: { id: number, title:string })=>c.id===companyID ? {...c, title:newCompanyTitle}:c)}
}