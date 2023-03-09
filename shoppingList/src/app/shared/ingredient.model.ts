export class Ingredient{
    public name: string;
    public amount: number;

    constructor(name:string, amount: number){
        this.name = name;
        this.amount = amount
    }

    //outro meio de declarar :direto no contrutor
    //daí fica menos verboso
    //constructor (public name: string, public amount: number){}
}