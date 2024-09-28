/**
 * This class used the Singleton design pattern 
 * The Singleton pattern ensures that a class has only one instance 
 * and provides a global point of access to it. 
 * This is useful when you need to control the creation of objects of a 
 * particular class and ensure that only one instance is used throughout your application.
 * 
 */
export class TheUserRemember {

    private static instance: TheUserRemember;
    private variables: { [key: string]: any };

    private constructor() {
        this.variables = {};
    }

    /**This is a static method that provides the only way to obtain an instance of the class.
    If the instance property is null (meaning there's no existing instance), 
    it creates a new instance and assigns it to the instance property.
    Then, it returns the instance to the caller. */

    static getInstance(): TheUserRemember {
        if (!TheUserRemember.instance) {
            TheUserRemember.instance = new TheUserRemember();
        }
        return TheUserRemember.instance;
    }

    /**
     * This method allows you to set a variable within the variables object using a given name and value.
     * @param name 
     * @param value 
     */
    setVariable(name: string, value: any) {
        this.variables[name] = value;
    }
    /**
     * This method allows you to retrieve the value of a variable stored in the variables object using its name
     * @param name 
     * @returns 
     */
    getVariable(name: string) {
        return this.variables[name];
    }

}