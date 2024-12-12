const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting database : ", error.message);
    process.exit(1);
  }
};

module.exports = { prisma, connectDB };
