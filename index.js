// Import the PrismaClient constructor from the @prisma/client node module
// const { PrismaClient } = require('@prisma/client')

// Instantiate PrismaClient
// const prisma = new PrismaClient()

// Define an async function named main to send queries to the database
// async function main() {
    // ...you will write your Prisma Client queries here
    // await prisma.user.create({
    //     data: {
    //         name: 'Henk van ´t Kruijs',
    //         email: 'hvtk1968@gmail.com',
    //         posts: {
    //             create: { title: 'Hello World' },
    //         },
    //         profile: {
    //             create: { bio: 'I like turtles' },
    //         },
    //     },
    // })

    // // This query will read all User records from the database and print the result
    // const allUsers = await prisma.user.findMany({
    //     include: {
    //         posts: true,
    //         profile: true,
    //     },
    // })

    // console.dir(allUsers, { depth: null })

//     const post = await prisma.post.update({
//         where: { id: 1 },
//         data: { published: true },
//     })
    
//     console.log(post)
// }

// // Call the main function
// main()
//     .then(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })