export class TheUserRemember {

    private static instance: TheUserRemember;
    private variables: { [key: string]: any };

    private constructor() {
        this.variables = {};
    }

    static getInstance(): TheUserRemember {
        if (!TheUserRemember.instance) {
            TheUserRemember.instance = new TheUserRemember();
        }
        return TheUserRemember.instance;
    }

    setVariable(name: string, value: any) {
        this.variables[name] = value;
    }
    getVariable(name: string) {
        return this.variables[name];
    }

}