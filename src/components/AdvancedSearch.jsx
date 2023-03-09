import "./AdvancedSearch.scss";
import { useState } from "react";

export default function AdvancedSearch() {
  let [cuisines, setCuisines] = useState([
    { name: "African", checked: false },
    { name: "British", checked: false },
    { name: "American", checked: false },
    { name: "Chinese", checked: false },
    // add other cuisines here
  ]);
  return (
    <div className="mt-3 advanced-search">
      <h5 className="advanced-search_title">Advanced Search</h5>
      <div className="advanced-search_checks">
        {cuisines.map((cuisine) => (
          <div key={cuisine.name} className="form-check ">
            <input
              className="form-check-input"
              type="checkbox"
              name={cuisine.name}
              id={cuisine.name}
              checked={cuisine.checked}
              onChange={() =>
                setCuisines(
                  cuisines.map((c) =>
                    c.name === cuisine.name ? { ...c, checked: !c.checked } : c
                  )
                )
              }
            />
            <label className="form-check-label" htmlFor={cuisine.name}>
              {cuisine.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
