//Problem: 1
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  }
  return input.toUpperCase();
}

//Problem: 2
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

// Problem: 3
function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  arrays.map((item) => result.push(...item));
  return result;
}

// Problem: 4
class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel(): string {
    return `Model: ${this.model}`;
  }
}

//Problem: 5
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else return value * 2;
}

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

//Problem:8
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed)"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}


