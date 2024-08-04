class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* Change code below this line */ }
          <NonCitrus />
          <Citrus />
          { /* Change code above this line */ }
        </div>
      );
    }
};
  
class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
          <Fruits />
          { /* Change code above this line */ }
          <Vegetables />
        </div>
      );
    }
};

/* PREVIEW

Types of Food:

    Fruits:

    Non-Citrus:
        Apples
        Blueberries
        Strawberries
        Bananas
    Citrus:
        Lemon
        Lime
        Orange
        Grapefruit
    Vegetables:
        Brussel Sprouts
        Broccoli
        Squash
*/