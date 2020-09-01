export interface ITest{
    Add():void
}
 class Test{
    name:string="";
    Add(){
        
    }
}

export class TestChild extends Test{
    ChildName():void{
        
        console.log("Test has been inherited !")
    }
}
