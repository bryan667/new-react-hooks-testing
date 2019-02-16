import React from 'react';
import ultimateStarship from './hooks';

export default function StarShipComponent() {
  const { starShip, setStarship } = ultimateStarship();

  return (
    <div>
      <div>{'StarShips'}</div>
      <button
        onClick={() => {
          if (!starShip.loading) {
            setStarship({ ...starShip, count: starShip.count + 1 });
          }
        }}
      >{`Increase`}</button>
      <button
        onClick={() => {
          if (starShip.count > 0 && !starShip.loading) {
            setStarship({ ...starShip, count: starShip.count - 1 });
          }
        }}
      >{`Decrease`}</button>
      <div>{`count: ${starShip.count}`}</div>
      <div>{`boolean: ${starShip.boolean}`}</div>
      <div>{`loading: ${starShip.loading}`}</div>
      <pre>{JSON.stringify(starShip.starShips, null, 2)}</pre>
    </div>
  );
}
