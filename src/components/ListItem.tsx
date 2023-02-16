import { CSSProperties } from "react";

type ListItemProps = {
  name: string;
  index: number;
  virtualizeStyles: CSSProperties;
};

const ListItem = ({ name, index, virtualizeStyles }: ListItemProps) => {
  return (
    <div style={virtualizeStyles}>
      <li className="listItem">
        <div>
          <strong>Name {" -> "}</strong>
          <p>{name}</p>
        </div>
        <p>index: {index}</p>
      </li>
    </div>
  );
};

export default ListItem;
