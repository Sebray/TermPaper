import { Users } from './data/Users';

export class DataProviderUsers {

    static users = Users();


    static findUserByIdPredicate = (user, id) => user.id === id;


    static getAllUsersShortInfo = () =>
        Promise.resolve(
            this.users.map((user) => ({ id: user.id, firstName: user.firstName }))
        );



    static getUserByID = (id) =>
        new Promise((resolve, reject) => {
            const result = this.users.find((user) =>
                this.findUserByIdPredicate(user, id)
            );

            if (!result) {
                reject(`user с id ${id} не найдено`);
            }

            resolve(result);
        });

    static getLoginByID = (id) =>
        new Promise((resolve, reject) => {
            const result = this.users.find((user) =>
                this.findUserByIdPredicate(user, id)
            );

            if (!result) {
                reject(`login с id ${id} не найдено`);
            }

            resolve(result.login);
        });



     static getUserByrEmailAndPassword = (email, password) => {
       return new Promise((resolve, reject) => {
         const result = this.users.filter((user) => user.email === email && user.password === password);

         if (result.length === 0) {
           reject(`user с email, password ${email} не найдено`);
         }
         resolve(result[0]);
       });
     };


    static updateUser = (newUserData) => {
        return new Promise((resolve, reject) => {
            const userIndex = this.users.findIndex((user) =>
                this.findUserByIdPredicate(user, newUserData.id)
            );

            if (userIndex < 0) {
                reject(`user с id ${newUserData.id} не найдено`);
            }

            this.users[userIndex] = newUserData;
            resolve(userIndex);
        });
    };



    static putUser = (newUser) => {
        const newUserIndex = this.users.push({
            ...newUser,
            id: new Date(),
        });

        return Promise.resolve(newUserIndex);
    };

    static deleteUser = (id) => {
        return new Promise((resolve, reject) => {
            const index = this.users.findIndex((user) =>
                this.findUserByIdPredicate(user, id)
            );

            if (index < 0) {
                reject(`user с id ${id} не найдено`);
            }

            this.users.splice(index, 1);
            resolve(this.users.length);
        });
    };



}
