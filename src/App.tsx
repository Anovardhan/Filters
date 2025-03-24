import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const items = ["chinnu", "prabhas", "kohli"];
  const [search, setsearch] = useState("");
  const [selected, setselected] = useState("");
  const [filter, setFilter] = useState(items);
  useEffect(() => {
    console.log("running");
    if (selected == "all") {
      setFilter(items);
    }
    var filtered = items;
    if (selected != "all") {
      filtered = items.filter((item) =>
        item.toLowerCase().includes(selected.toLowerCase())
      );
    }
    if (search == "") {
      setFilter(filtered);
      return;
    }
    filtered = filtered.filter((i) =>
      i.toLowerCase().includes(search.toLowerCase())
    );
    setFilter(filtered);
    console.log(filtered);
  }, [selected, search]);
  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="search for items"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <select value={selected} onChange={(e) => setselected(e.target.value)}>
          <option value="all">All</option>
          {items.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </form>
      {filter.length > 0 ? (
        filter.map((i) => <li>{i}</li>)
      ) : (
        <p> reaults not found</p>
      )}
    </div>
  );
}
