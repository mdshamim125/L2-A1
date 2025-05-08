// console.log("Hello World");

//Problem: 1
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  }
  return input.toUpperCase();
}
// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));

//Problem: 2
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book D", rating: 2.8 },
  { title: "Book E", rating: 4.0 },
];
// console.log(filterByRating(books));

// Problem: 3
function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  arrays.map((item) => result.push(...item));
  return result;
}
// console.log(concatenateArrays([1, 2], [3, 4], [5]));
// console.log(concatenateArrays(["a", "b"], ["c"]));

// Problem: 4
class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo(): string {
    return `"Make: ${this.make}, Year: ${this.year}"`;
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel(): string {
    return `"Model: ${this.model}"`;
  }
}
// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel());

//Problem: 5
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else return value * 2;
}
// console.log(processValue("hello"));
// console.log(processValue(10));

//Problem: 6
interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  let mostExpensiveProduct = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensiveProduct.price) {
      mostExpensiveProduct = products[i];
    }
  }
  return mostExpensiveProduct;
}
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

// console.log(getMostExpensiveProduct(products));

//Problem: 7
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function getDayType(day: Day): string {
  if (
    day === Day.Monday ||
    day === Day.Tuesday ||
    day === Day.Wednesday ||
    day === Day.Thursday ||
    day === Day.Friday
  ) {
    return "Weekday";
  } else return "Weekend";
}
// console.log(getDayType(Day.Sunday));

//Problem:8
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative)"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}

// squareAsync(0).then(console.log);
// squareAsync(-3).catch(console.error);    
