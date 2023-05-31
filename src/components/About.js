import React from "react";

export default function About() {
  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-striped table-success table-hover">
          <thead>
            <tr>
              <th scope="col">Column 1</th>
              <th scope="col">Column 2</th>
              <th scope="col">Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td>R1C1</td>
              <td>R1C2</td>
              <td>R1C3</td>
            </tr>
            <tr className="">
              <td>Item</td>
              <td>Item</td>
              <td>Item</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
