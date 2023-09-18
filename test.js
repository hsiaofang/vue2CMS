function Person(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const user1 = new Person("Harry", "Xie");

console.log(user1);