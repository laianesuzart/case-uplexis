import { useDetailsContext } from "../context/details";

export function Details() {
  const { currentApp } = useDetailsContext();

  return (
    <div>
      <h1>{currentApp.category}</h1>

      <p>{currentApp.description}</p>

      <div>
        <span>{currentApp.price}</span>
      </div>
    </div>
  );
}
