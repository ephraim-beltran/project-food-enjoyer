import { Search } from "../../features/Search";
import styled from "./Discover.module.css";
import { LocationCard } from "../../features/LocationCard";
import { LocationMap } from "../../features/Map";
import { useLocationData } from "../../hooks/useLocationData";
import { CurrentLocation } from "../../context/CurrentLocationContext";
import { useSearchParams } from "react-router-dom";
import { Loading } from "features/Loading";

export function Discover() {
  const [searchParams] = useSearchParams();
  const searchItem = searchParams.get("search");
  const search = searchItem ? searchItem : "none";
  const searchCategory = searchParams.get("category");
  const category = searchCategory ? searchCategory : "all";
  const { status, data } = useLocationData(search, category);
  const filteredData = data?.filter((item) => {
    if ((category != "all") & (item.type == category)) {
      return true;
    } else if (category == "all") {
      return true;
    } else {
      return false;
    }
  });
  const dataList = filteredData?.map((item) => {
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
      {status == "loading" && <Loading />}
      {status == "error" && <div>There was an error fetching data</div>}
      {status == "completed" && (
        <div className={`${styled.container} ${styled.result_container}`}>
          <div className={styled.list}>
            <h2>Results:</h2>
            {dataList.length > 0 && (
              <ul className={styled.data_list}>{dataList}</ul>
            )}
            {dataList.length == 0 && <p>No results found</p>}
          </div>
          <div className={styled.map}>
            <LocationMap locations={filteredData} />
          </div>
        </div>
      )}
    </CurrentLocation>
  );
}
