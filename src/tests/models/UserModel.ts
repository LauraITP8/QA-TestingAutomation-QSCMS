export class UserModel {
    
    private id: string;
    private userName: string;
    private email: string;
    private password: string;
    private roles: string;
    private firstName: string;
    private lastName: string;
    private fullName: string;

    constructor (id: string,userName: string,email: string,password: string,roles: string,firstName: string,lastName: string,fullName: string) {
        this.email = email;
        this.password = password;
        this.id = id;
        this.userName = userName;
        this.roles = roles;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
    }

    getEmail(): string {
        return this.email;
    }

    getPassword(): string {
        return this.password;
    }

    getId(): string {
        return this.id;
    }

    getUserName(): string {
        return this.userName;
    }

    getroles(): string {
        return this.roles;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLasttName(): string {
        return this.lastName;
    }

    getFullName(): string {
        return this.fullName;
    }


}