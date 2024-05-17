import React, { useEffect, useState } from "react";
import "./ListComponent.css";
import axios from "axios";

const ListComponent = ({ id }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const getMainDataFunc = async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=9feadf10&i=${id}`
      );
      setData([response.data]);
    };
    getMainDataFunc();
  }, [id]);
  return (
    <div>
      <div>
        {data?.map((item) => {
          return (
            <a
              key={item.imdbID}
              href={`https://www.imdb.com/title/${item.imdbID}`}
              target="_blank"
            >
              <p>
                {item.Title} ({item.Year})
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ListComponent;
