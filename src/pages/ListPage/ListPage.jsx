import React, { useEffect, useState } from "react";
import "./ListPage.css";
import { useNavigate, useParams } from "react-router-dom";
import ListComponent from "../../components/ListComponent/ListComponent";
import axios from "axios";

const ListPage = () => {
  const [list, setList] = useState();
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getDataFunc = async () => {
      const response = await axios.get(
        `https://acb-api.algoritmika.org/api/movies/list/${id}`
      );
      setList(response.data);
    };
    getDataFunc();
  }, [id]);

  return (
    <div>
      <button className="home" onClick={() => navigate("/")}>
        HOME
      </button>
      <h1 className="list-page__title">{list?.title}</h1>
      <ul className="list-ul">
        {list?.movies?.map((item) => {
          return (
            <li className="list-li" key={item}>
              <ListComponent id={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListPage;
