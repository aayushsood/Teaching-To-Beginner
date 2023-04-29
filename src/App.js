import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ChildComponentA from "./ChildComponents/ChildComponentA";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function App() {
  const [animalDetails, setAnimalDetails] = useState({
    animalName: "",
    animalLife: "",
  });

  const [arrayElements, setArrayElements] = useState([
    {
      animalName: "Dog",
      animalLife: "14 years",
    },
    {
      animalName: "Elephant",
      animalLife: "100 years",
    },
    {
      animalName: "Monkey",
      animalLife: "30 years",
    },
  ]);

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     backgroundColor: "ThreeDDarkShadow",
    //     height: 100,
    //     alignItems: "center",
    //   }}
    // >
    //   {console.log("hi")}
    //   <button
    //     style={{
    //       color: "red",
    //       textAlign: "center",
    //       background: "#fff",
    //       borderRadius: "2px",
    //       fontWeight: "bold",
    //       padding: 9,
    //     }}
    //     onClick={() => {
    //       setShowHellow(!showHellow);
    //     }}
    //   >
    //     {showHellow ? <p>Hello</p> : <p>Wassup</p>}
    //   </button>
    // </div>

    <div className="">
      <ChildComponentA />
      <div className="d-flex justify-content-center">
        <div className="w-50">
          {arrayElements.map((val, index) => {
            return (
              <div key={index} className="d-flex ">
                <p className="">{val.animalName}</p>
                <p style={{ paddingLeft: 20 }}>{val.animalLife}</p>
              </div>
            );
          })}
        </div>
        <div>
          <Form>
            <Form.Group
              className="mb-3 w-100"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Animal Name</Form.Label>
              <Form.Control
                type="text"
                value={animalDetails.animalName}
                placeholder="Animal Name"
                onChange={(e) => {
                  setAnimalDetails({
                    ...animalDetails,
                    animalName: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 w-100"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Animal Life</Form.Label>
              <Form.Control
                type="text"
                value={animalDetails.animalLife}
                placeholder="Aimal Life"
                onChange={(e) => {
                  setAnimalDetails({
                    ...animalDetails,
                    animalLife: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Button
              variant="info"
              onClick={() => {
                if (
                  animalDetails.animalLife !== "" &&
                  animalDetails.animalName !== ""
                ) {
                  const tempArray = [...arrayElements];
                  tempArray.push({ ...animalDetails });
                  setArrayElements([...tempArray]);
                }
              }}
            >
              Submit Animal
            </Button>{" "}
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
