import keyConceptsImage from "./assets/images/key-concepts.png";
import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";
import Header from "./Components/header";
import Concepts from "./Components/concepts";

const concepts = [
  {
    title: "Key React Concepts",
    image: keyConceptsImage,
    description: "Selected key React concepts you should know about",
    alt: "Medal badge with a star",
  },
  {
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

function App() {
  return (
    <div>
      <Header
        src={concepts[0].image}
        alt={concepts[0].alt}
        title={concepts[0].title}
        description={concepts[0].description}
      />
      <ul id="concepts">
        <Concepts
          src={concepts[1].image}
          alt={concepts[1].title}
          title={concepts[1].title}
          description={concepts[1].description}
        />
        <Concepts
          src={concepts[2].image}
          alt={concepts[2].title}
          title={concepts[2].title}
          description={concepts[2].description}
        />
        <Concepts
          src={concepts[3].image}
          alt={concepts[3].title}
          title={concepts[3].title}
          description={concepts[3].description}
        />
      </ul>
    </div>
  );
}

export default App;
