const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    // Get all Users
    const users = await prisma.user.findMany();
    console.log(users);

    // Get all Profiles
    const profiles = await prisma.profile.findMany();
    console.log(profiles);

    // Get all Posts from database
    const posts = await prisma.post.findMany();
    console.log(posts);

    // Update a post with it's id
    const post = await prisma.post.update({
        where: { id: 1 },
        data: { published: false }
    });
    console.log(post);

    // Find a user with it's id
    const searchedUser = await prisma.user.findFirst({
        where: { id: 5 },
    });
    console.log(searchedUser);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });