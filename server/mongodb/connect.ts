import mongoose from 'mongoose';

const connectDB = (url: string) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
        .then(() => console.log('mongo connection established'))
        .catch((err) => console.log(err));
}

export default connectDB
