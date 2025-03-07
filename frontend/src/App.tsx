// Brandon Fromm
// Mission 9
import './App.css';
// imports the CollegeBasketballTeams.json file
import schoolsData from "./CollegeBasketballTeams.json";

// interface for the CollegeBasketballTeams.json file
interface CollegeInfo {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

// my title function/component
function Title() {
  return <h1>NCAA Basketball College Information</h1>;
}

// my college function/component that gets the info that I want to display
function College({ school, name, city, state }: CollegeInfo) {
  return (
    <>
      <h2>{school}</h2>
      <h3>Mascot Name: {name}</h3>
      <h3>Location: {city}, {state}</h3>
      <br />
    </>
  );
}

// my college list function/component that maps through the CollegeBasketballTeams.json file
function CollegeList() {
  return (
    <>
      {schoolsData.teams.map((college: CollegeInfo, index: number) => (
        <College key={index} {...college} />
      ))}
    </>
  );
}

// my main App function that returns the Title and CollegeList components
function App() {
  return (
    <>
      <Title />
      <CollegeList />
    </>
  );
}

export default App;
