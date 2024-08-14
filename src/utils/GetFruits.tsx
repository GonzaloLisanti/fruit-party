export const getFruits = (size: number) => {
  const fruits = [
    "/Anana.jpg",
    "/Banana.jpg",
    "/Coco.jpg",
    "/Frutilla.jpg",
    "/Kiwi.jpg",
    "/Mango.jpg",
    "/Manzana.jpg",
    "/Naranja.jpg",
    "/Sandía.jpg"
  ];

  const newFruits = fruits.slice(0, size);
  const doubledFruits = newFruits.flatMap((item) => [item, item]);

  // Función para mezclar el array de forma aleatoria usando el algoritmo de Fisher-Yates
  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return shuffleArray(doubledFruits);
};
