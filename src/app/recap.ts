const username:string = "Rocio";

const suma = (a : number, b: number) => {
  return a + b
}

suma(1,3);

class Person {
  // private age: number;
  // lastname: string;

  // constructor(age: number, lastname: string){
  //   this.age = age;
  //   this.lastname = lastname;
  // }

  constructor(public age: number, public lastname: string){}
}

const rocio = new Person(29, "Julio");
