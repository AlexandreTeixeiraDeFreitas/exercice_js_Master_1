import "./styles.css";

const input = [1, 2, 3, 4, 5];

const result = input.map((num) => num * num);
console.log("Exercice - Javascript - 01 : " + result);

const input2 = [1, -4, 12, 0, -3, 29, -150];

function sumOfPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const result2 = sumOfPositiveNumbers(input2);
console.log("Exercice - Javascript - 02 : " + result2); // Output: 42 (car la somme des nombres positifs est 1 + 12 + 29)

const input3 = [12, 46, 32, 64];

function average(numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

function median(numbers) {
  const sorted = numbers.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  } else {
    return sorted[middleIndex];
  }
}

function calculateStats(arr) {
  const avg = average(arr);
  const med = median(arr);
  return { moyenne: avg, mediane: med };
}

const result3 = calculateStats(input3);
console.log("Exercice - Javascript - 03 : " + result3); // Output: { moyenne: 38.5, mediane: 39 }

const input4 = "George Raymond Richard Martin";

function abbreviation(name) {
  const words = name.split(" "); // Séparer les mots par l'espace
  const initials = words.map((word) => word.charAt(0)); // Obtenir la première lettre de chaque mot
  return initials.join(""); // Joindre les initiales en une seule chaîne
}

const result4 = abbreviation(input4);
console.log("Exercice - Javascript - 04 : " + result4);

const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] },
];

const result5 = students
  .map((student) => {
    const averageScore =
      student.scores.reduce((acc, score) => acc + score, 0) /
      student.scores.length;
    return { name: student.name, averageScore: averageScore };
  })
  .filter((student) => student.averageScore > 90);

console.log("Exercice - Javascript - 05 :", JSON.stringify(result5));

const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
  { name: "Product 9", price: 40, category: "Food" },
];

const categoryPrices = {};

// Parcourir le tableau products
products.forEach((product) => {
  // Vérifier si la catégorie du produit existe déjà dans categoryPrices
  if (!categoryPrices[product.category]) {
    // Si la catégorie n'existe pas, initialisez-la avec un objet contenant total: 0 et count: 0
    categoryPrices[product.category] = { total: 0, count: 0 };
  }
  // Ajouter le prix du produit au total de la catégorie
  categoryPrices[product.category].total += product.price;
  // Incrémenter le nombre de produits dans la catégorie
  categoryPrices[product.category].count++;
});

const averagePrices = Object.keys(categoryPrices).map((category) => {
  return {
    category: category,
    averagePrice:
      categoryPrices[category].total / categoryPrices[category].count,
  };
});

const result6 = averagePrices.filter((item) => item.averagePrice > 50);

console.log("Exercice - Javascript - 06 :", result6);

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>`;
