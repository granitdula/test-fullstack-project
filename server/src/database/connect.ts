import mongoose from 'mongoose';

export async function connect(uri: string): Promise<void> {
    try {
        await mongoose.connect(uri, () => {
            console.log('Database connected');
        });
    } catch (error) {
        console.log('Error connecting database');
        console.error(error);
        process.exit(1);
    }
}
