import "./AdvancedSearch.scss";

export default function AdvancedSearch({
  cuisines,
  setCuisines,
  saveFilterHandler,
}) {
  return (
    <div className="mt-3 advanced-search">
      <p className="advanced-search_title">Advanced Search</p>
      <div className="container advanced-search_checks">
        <div className="row">
          {cuisines.map((cuisine) => (
            <div key={cuisine.name} className="form-check col-md-4 col-lg-3">
              <input
                className="form-check_checkbox"
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
              <label className="form-check_label" htmlFor={cuisine.name}>
                {cuisine.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="advanced-search_btn_container">
        <button
          onClick={saveFilterHandler}
          type="submit"
          className="btn btn-primary advanced-search_btn"
        >
          Save
        </button>
      </div>
    </div>
  );
}
