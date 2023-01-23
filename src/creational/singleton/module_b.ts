import { MyDataBasefunction } from './db/my-database-function'; 
import { myDatabaseClassic as myDataBaseFromModueA } from './module_a';

const myDatabaseClassic = MyDataBasefunction;
myDatabaseClassic.add({name: 'Zézin', age: 26});
myDatabaseClassic.add({name: 'Fazuéli', age: 70});
myDatabaseClassic.add({name: 'Geralda', age: 40});
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDataBaseFromModueA)