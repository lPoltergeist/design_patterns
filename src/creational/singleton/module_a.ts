import { MyDataBasefunction } from "./db/my-database-function";

const myDatabaseClassic = MyDataBasefunction;
myDatabaseClassic.add({name: 'Gabriel', age: 26});
myDatabaseClassic.add({name: 'Mariazinha', age: 70});
myDatabaseClassic.add({name: 'Joséfa', age: 40});

export {myDatabaseClassic}
