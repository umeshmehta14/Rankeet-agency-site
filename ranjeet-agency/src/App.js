import content from "./components/content.js";
import React, { useState } from "react";
import "./App.css";

function App() {
  const BuyerList = [
    ...new Set(
      content.map((currEle) => {
        return currEle.buyer;
      })
    ),
    "All",
  ];

  const [dis, setDis] = useState(content);
  const [loc, setLoc] = useState("  ");
  const [selected, setSelected] = useState("All");

  const [Buyer, setBuyer] = useState(BuyerList);

  const Clickhandle = (item) => {
    setSelected(item);
    if (item === "All") {
      setDis(content);
      setLoc(" ");
    } else {
      const selectedBuyer = content.filter((e) => {
        return e.buyer === item;
      });
      const bloc = [...new Set(
        selectedBuyer.map((currEle) => {
          return currEle.location;
        })
      ),];
     setLoc(bloc);
      setDis(selectedBuyer);
    }
  };

  return (
    <>
      <div className="head-div container">
        <h1 className="head-h">Jay Ranjeet Agency</h1>
      </div>

      <div className="container">
        <nav className=" navi">
          <span className="buyer-btn">
            <ul>
              {Buyer.map((cur) => {
                return (
                  <button
                    className="btn btn-dark mx-2 my-2"
                    onClick={() => Clickhandle(cur)}
                  >
                    {cur}
                  </button>
                );
              })}
            </ul>
          </span>
        </nav>

        <h2>
          {selected}-Entries
        </h2>
          <h3>{loc}</h3>
      </div>
      <table className="table table-hover table-striped-columns">
        <thead>
          <tr className="table-dark ">
            <th scope="col">Buyer</th>
            <th scope="col">Date</th>
            <th scope="col">seller</th>
            <th scope="col">Total payment</th>
          </tr>
        </thead>
        <tbody>
          {dis.map((e) => {
            const { id, buyer, date, seller, payment, location } = e;
            return (
              <>
                <tr key={id}>
                  <th scope="row">{buyer}</th>
                  <td>{date}</td>
                  <td>{seller}</td>
                  <td>{payment}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
