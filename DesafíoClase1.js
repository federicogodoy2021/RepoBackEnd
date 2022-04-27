class User {
    constructor (name, lastName, books, pets){

        this.name = name
        this.lastName = lastName
        this.books = books
        this.pets = pets
    }

        static initial = 0
        

        getFullName = () => {
            console.log(`The user is ${this.name} ${this.lastName}`)
        }
        addPet = () => {
            let listPets = []
            listPets.push(this.pets)
            console.log(listPets)
        }
        countPets = () => {
            User.initial =+ 1
                        
        }
        AddBook = () => {
            let booksNames = []
            booksNames.push({title: this.title})
            console.log(booksNames)    
            
        }
        getBookNames = () => {
            let titlesNames = booksNames.get(booksNames.title)
            console.log(titlesNames)
        }
    
}

const user1 = new User ('Fede','Godoy', {title:'Cumbres Borrascosas',author: 'Emily Brontë'}, 'perro')
const user2 = new User ('Luis','Perez', {title:'El extranjero',author: 'Albert Camus'}, 'gato')
const user3 = new User ('Carlos','Gonzalez', {title:'Ficciones',author: 'Jorge Luis Borges'}, 'tortuga')
const user4 = new User ('Manuel','Garcia', {title:'Decamerón',author: 'Giovanni Boccaccio'},'conejo')

user1.getFullName()
user2.getFullName()
user3.getFullName()
user4.getFullName()

user1.addPet()
user2.addPet()
user3.addPet()
user4.addPet()

user1.countPets()
user2.countPets()
user3.countPets()
user4.countPets()

user1.getBookNames()
user2.getBookNames()
user3.getBookNames()
user4.getBookNames()