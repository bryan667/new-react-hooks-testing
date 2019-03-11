import { useState, useEffect } from 'react';

const initialState = { count: 3, boolean: true, loading: false, starShips: {} };
//this is the initial state of starShip
//using starShip as an object

export default function ultimateStarship() {
  const [starShip, setStarship] = useState(initialState);

  async function getStarShip(count) {
    setStarship({ ...starShip, loading: true });

    const resData = await fetch(
      `https://swapi.co/api/starships/${count}/?format=json`,
    );
    const starShipData = await resData.json();

    setStarship({ ...starShip, starShips: starShipData, loading: false });
  }

  useEffect(() => {
    getStarShip(starShip.count);
    return () => {
      //unsubscribe
    };
  }, [starShip.count]);

  return { starShip, setStarship };
}
