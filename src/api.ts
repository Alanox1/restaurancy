import Restaurant from "./types";

const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "The Golden Spoon",
    description:
      "A fine dining experience with a menu that changes daily based on the freshest ingredients available.",
    address: "123 Main St. Anytown USA",
    score: 4.5,
    ratings: 100,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    name: "La Piazza",
    description: "Authentic Italian cuisine in a cozy atmosphere with outdoor seating available.",
    address: "456 Oak Ave. Anytown USA",
    score: 4.2,
    ratings: 80,
    image: "https://images.unsplash.com/photo-1526234362653-3b75a0c07438?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    name: "The Sizzling Skillet",
    description:
      "A family-friendly restaurant with a wide variety of dishes. including vegetarian and gluten-free options.",
    address: "789 Elm St. Anytown USA",
    score: 4.8,
    ratings: 120,
    image: "https://images.unsplash.com/photo-1571705042748-55feda1cfadc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    name: "The Hungry Bear",
    description: "A rustic cabin-style restaurant serving hearty portions of comfort food.",
    address: "101 Forest Rd. Anytown USA",
    score: 4.0,
    ratings: 60,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    name: "The Spice Route",
    description: "A fusion restaurant that combines the flavors of India. Thailand. and China.",
    address: "246 Main St. Anytown USA",
    score: 4.6,
    ratings: 90,
    image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    name: "The Catch of the Day",
    description: "A seafood restaurant with a focus on locally-sourced. sustainable ingredients.",
    address: "369 Beach Blvd. Anytown USA",
    score: 4.3,
    ratings: 70,
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "7",
    name: "The Garden Cafe",
    description: "A vegetarian restaurant with a beautiful outdoor garden seating area.",
    address: "753 Maple St. Anytown USA",
    score: 4.9,
    ratings: 150,
    image: "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "8",
    name: "The Burger Joint",
    description: "A classic American diner with a wide variety of burgers. fries. and milkshakes.",
    address: "852 Oak Ave. Anytown USA",
    score: 3.9,
    ratings: 50,
    image: "https://images.unsplash.com/photo-1586999768265-24af89630739?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "9",
    name: "The Cozy Corner",
    description:
      "A small cafe with a warm and inviting atmosphere. serving breakfast and lunch dishes.",
    address: "963 Main St. Anytown USA",
    score: 4.7,
    ratings: 110,
    image: "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "10",
    name: "The Steakhouse",
    description: "A high-end restaurant specializing in premium cuts of beef and fine wines.",
    address: "1479 Elm St. Anytown USA",
    score: 4.1,
    ratings: 75,
    image: "https://images.unsplash.com/photo-1562050344-f7ad946cee35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "11",
    name: "The Taco Truck",
    description: "A casual Mexican restaurant serving authentic street tacos.",
    address: "753 Main St. Anytown USA",
    score: 4.4,
    ratings: 65,
    image: "https://images.unsplash.com/photo-1519690889869-e705e59f72e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "12",
    name: "The Ice Cream Parlor",
    description: "A family-friendly restaurant with a wide variety of ice cream flavors.",
    address: "852 Oak Ave. Anytown USA",
    score: 4.9,
    ratings: 150,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


const api = {
  list: async (): Promise<Restaurant[]> => {
    // Obtenemos la información de Google Sheets en formato texto y la dividimos por líneas, nos saltamos la primera línea porque es el encabezado
    const [, ...data] = await fetch(`${process.env.API_URL}`,{ next: { tags: ['restaurants'] , revalidate : 100} }).then(res => res.text()).then(text => text.split('\n'))
  
    // Convertimos cada línea en un objeto Restaurant, asegúrate de que los campos no posean `,`
    const restaurants: Restaurant[] = data.map((row) => {
     
      const [id, name, description, address, score, ratings, image] = row.split(',')
      return {
        id,
        name,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image
      }
    })

    // Lo retornamos
  
    return restaurants;
  },
  fetch: async (id: Restaurant["id"]): Promise<Restaurant> => {
      await sleep(750);

      const restaurant = restaurants.find((restaurant) => restaurant.id === id);

      if (!restaurant) {
        throw new Error(`Restaurant with id ${id} not found`);
      }

      return restaurant;
},
search: async (query: string): Promise<Restaurant[]> => {
  
  if(!query) {
     query = ""
   }

  const results = await api.list().then((restaurants) =>
    // Los filtramos por nombre
    restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase()),
    ),
  );

  // Los retornamos
  return results;
},

};

export default api;


