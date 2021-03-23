import mongoose from 'mongoose';
import chalk from 'chalk';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      chalk.blueBright.underline
        .bold`MongoDB Connected: ${conn.connection.host} => ${conn.connection.name}`
    );
  } catch (error) {
    console.error(chalk.red.bold.underline`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
