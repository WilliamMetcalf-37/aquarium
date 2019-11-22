/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
  {
      image: "goldie-fish.jpg",
      name: "Bart",
      species: "monkey",
      size: "5in",
      location: "the water",
      food: ["algae", "crustaceans"]
  },
  {
    image: "goldie-fish.jpg",
    name: "Bitey",
    species: "Piranha",
    size: "24in",
    location: "the Swamp",
    food: ["Humans"]
  },
  {
    image: "goldie-fish.jpg",
    name: "Jawsie",
    species: "Shark",
    size: "264",
    location: "South Africa",
    food: ["seals"]
  },
  {
    image: "goldie-fish.jpg",
    name: "Dangler",
    species: "Angler Fish",
    size: "12in",
    location: "Marianas Trench",
    food: ["minnows"]
  },
  {
    image: "goldie-fish.jpg",
    name: "Barry",
    species: "Barracuda",
    size: "70in",
    location: "Coral Reefs",
    food: ["salmon"]
  },
  {
    image: "goldie-fish.jpg",
    name: "Snappy",
    species:"Red Snapper",
    size: "30in",
    location: "Gulf of Mexico",
    food: ["eels"]
  },
  {
    image: "goldie-fish.jpg",
    name:"Mr. Bubbles",
    species: "Goldfish",
    size: "2in",
    location: "Pets Mart",
    food: ["flakes"]
  }
  
  // {
  //   name:
  //   species:
  //   size:
  //   location:
  //   food:
  // }

]

// This is new code. Add this.
export const useFish = () => {
    return fishCollection
}