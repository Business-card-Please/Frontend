import {
  useState,
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler
} from "react";

export default function AutoCompleteInput(props: any) {
  const fruits = [
    "apple",
    "banana",
    "orange",
    "lemon",
    "lime",
    "pure",
    "peach",
    "berry",
    "dorian",
    "mango",
    "starfruit",
    "dragonFruit",
    "almond",
    "walnut",
    "grape",
    "persimmon",
    "대구가톨릭대학",
    "대구대학",
    "경북대학"
  ];
  const [isHidden, setIsHidden] = useState(true);
  const [liOver, setLiOver] = useState(false);
  const [result, setResult] = useState("");
  const [search, setSearch] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;
    setSearch(value);
  };
  const onFocusIn: FocusEventHandler<HTMLInputElement> = (e) => {
    setIsHidden(false);
  };
  const onFocusOut: FocusEventHandler<HTMLInputElement> = (e) => {
    if (liOver) return;
    setIsHidden(true);
  };
  const onMouseOver: MouseEventHandler<HTMLLIElement> = (e) => {
    setLiOver(true);
    e.currentTarget.style.background = "pink";
  };
  const onMouseLeave: MouseEventHandler<HTMLLIElement> = (e) => {
    setLiOver(false);
    e.currentTarget.style.background = "none";
  };
  const onAddResultClick: MouseEventHandler<HTMLLIElement> = (e) => {
    const { textContent } = e.currentTarget;
    setResult(textContent as string);
    setIsHidden(true);
  };
  return (
    <main className="container">
      <section>
        <input
          type={"search"}
          onFocus={onFocusIn}
          onBlur={onFocusOut}
          onChange={onChange}
          value={search}
        />
        <ul hidden={isHidden}>
          {fruits.map((fruit, idx) => (
            <li
              key={idx}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
              onClick={onAddResultClick}
              style={{ cursor: "pointer" }}
              hidden={!fruit.includes(search)}
            >
              {fruit}
            </li>
          ))}
        </ul>
      </section>
      <div>{result}</div>
    </main>
  );
}
