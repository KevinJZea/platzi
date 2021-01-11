
const kevs = {
    name: 'Kevs',
    lastName: 'Zea',
    age: 21
}

// const cumpleanos = persona => persona.age++;

const cumpleanosInmutable = persona => ({
    ...persona,
    age: persona.age + 1,
})

