import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../redux/charactersSlice";

function Home() {
  const characters = useSelector((state) => state.characters.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
      <Masonry
        breakpointCols={5}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.char_id}>
            <img src={character.img} alt="" className="character-img" />
                    <h3>{character.name}</h3>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Home;
