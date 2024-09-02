

import app from './app';
import { AppDataSource } from './db/connection';



//main function

async function main(){
    try {
        await AppDataSource.initialize();
        console.log('Connected to database');
        
    
        app.listen(3000, ()=> console.log('Servers running on port 3000'));
    } catch (error) {
        if(error instanceof Error){
            console.log(error.message);
        }
    }
}

main();
