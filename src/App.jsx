import Header from "./components/Header";

const App = () => {
  const name = "pras";

  const renderAge = () => {
    return new Date().getFullYear() - 1993;
  };

  const renderGender = (gender) => {
    let result =
      gender === "m"
        ? "I am Male"
        : gender === "f"
        ? "I am Female"
        : "Non Binary";
    return (
      <div>
        <p>{result}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>hai my name {name}</h1>
      <p>my age {renderAge()}</p>
      {renderGender("p")}
      <Header />
    </div>
  );
};

export default App;
