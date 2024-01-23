class Key {
    private sign: number = Math.random();
       
    getSignature(): number {
      return this.sign;
    }
  }
  
  class Person {
   
    constructor(private key: Key, protected name: string) {} // name застосував для красивого виводу в консолі, бо [object Object] entered the house не дуже звучить)

    getKey(): Key {
      return this.key;
      
    }

    getName(): string {
       return this.name; 
    }
  }
  
  abstract class House {
    protected door: boolean = false;
    protected tenants: Person[] = [];
  
    constructor(protected key: Key) {}
  
    abstract openDoor(key: Key): void;
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log(`${person.getName()} entered the house.`);
      } else {
        console.log('The door is closed.');
      }
    }
  }
  
  class MyHouse extends House {
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('The door is opened.');
      } else {
        console.log('Invalid key. The door remains closed.');
      }
    }
  }


const key = new Key();
const house = new MyHouse(key);
const person = new Person(key, 'John');

house.openDoor(person.getKey());
house.comeIn(person);

export {};