import "./AdvancedSearch.scss";

export default function AdvancedSearch({
  cuisines,
  setCuisines,
  saveFilterHandler,
}) {
  return (
    <div className="mt-3 advanced-search">
      <h5 className="advanced-search_title">Advanced Search</h5>
      <div className="container advanced-search_checks">
        <div className="row">
          {cuisines.map((cuisine) => (
            <div key={cuisine.name} className="form-check col-md-3">
              <input
                className="checkbox"
                type="checkbox"
                name={cuisine.name}
                id={cuisine.name}
                checked={cuisine.checked}
                onChange={() =>
                  setCuisines(
                    cuisines.map((c) =>
                      c.name === cuisine.name
                        ? { ...c, checked: !c.checked }
                        : c
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
      <div className="advanced-search_btn_container">
        <button
          onClick={saveFilterHandler}
          type="sumbit"
          className="btn btn-primary advanced-search_btn"
        >
          Save
        </button>
      </div>
    </div>
  );
}
