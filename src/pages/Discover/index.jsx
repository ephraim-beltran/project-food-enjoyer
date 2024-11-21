import { Search } from "../../features/Search";
import styled from "./Discover.module.css";
import { LocationCard } from "../../features/LocationCard";
import { LocationMap } from "../../features/Map";
import { useLocationData } from "../../hooks/useLocationData";
import { CurrentLocation } from "../../context/CurrentLocationContext";
import { useParams } from "react-router-dom";

export function Discover() {
  let { searchItem } = useParams();
  const { status, data } = useLocationData(searchItem);
  const dataList = data?.map((item) => {
    return (
      <li key={item.id} className={styled.listItem}>
        <LocationCard location={item} />
      </li>
    );
  });
  return (
    <CurrentLocation>
      <div className={styled.container}>
        <Search />
      </div>
      {status == "loading" && <div>Loading...</div>}
      {status == "error" && <div>There was an error fetcing data</div>}
      {status == "completed" && (
        <div className={`${styled.container} ${styled.result_container}`}>
          <div className={styled.list}>
            <h2>Results:</h2>
            <ul className={styled.data_list}>{dataList}</ul>
          </div>
          <div className={styled.map}>
            <LocationMap locations={data} />
          </div>
        </div>
      )}
    </CurrentLocation>
  );
}
