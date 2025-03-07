const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const crypto = require("crypto");

async function main() {
  try {
    const expire = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const data = await prisma.session.create({
      data: {
        sid: crypto.randomUUID(),
        sess: {
          cookies: "Example User",
        },
        expire: expire,
      },
    });
    console.dir(data, null);
  } catch (err) {
    console.error(err);
  }
}

main();
