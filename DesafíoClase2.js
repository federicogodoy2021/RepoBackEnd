class User {

    constructor (name, lastName){

        this.name = name
        this.lastName = lastName
        this.books = []
        this.qtyPets = []

    }

        getFullName = () => {
            return `The user is ${this.name} ${this.lastName}`
        }
        
        addPet = (pet) => {
            this.qtyPets.push(pet)
            return this.qtyPets
        }
       
        counterPets = () => {
            let totalQtyPets = this.qtyPets            
            return console.log(totalQtyPets[0].length)
        }
        totalQtyPets = () =>{
            return (
                this.qty
            )
        }
        addBook = (title, author) => {
            this.books.push({titleBook: `${title}`, authorBook: `${author}`})
            return console.log(this.books)
        }
        getBookNames = () => {
            let namesBooks = this.books[0].titleBook
            return console.log(namesBooks)
        }
        }
    

const user1 = new User ('Fede','Godoy')
const user2 = new User ('Luis','Perez')
const user3 = new User ('Carlos','Gonzalez')
const user4 = new User ('Manuel','Garcia')

console.log(user1.getFullName())
console.log(user2.getFullName())
console.log(user3.getFullName())
console.log(user4.getFullName())

console.log(user1.addPet(['perro','loro']))
console.log(user2.addPet(['gato', 'hamster']))
console.log(user3.addPet(['tortuga','iguana','caballo']))
console.log(user4.addPet(['conejo','cobayo']))

user1.counterPets()
user2.counterPets()
user3.counterPets()
user4.counterPets()


user1.addBook('Cumbres Borrascosas','Emily Brontë')
user2.addBook(['El extranjero','Albert Camus'])
user3.addBook(['Ficciones','Jorge Luis Borges'])
user4.addBook(['Decamerón','Giovanni Boccaccio'])

user1.getBookNames()
user2.getBookNames()
user3.getBookNames()
user4.getBookNames()




