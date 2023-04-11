import { useState, useMemo } from "react";
import JRadio from ".";

const Test = () => {
    const [value, setValue] = useState<String>("1");
    const options = useMemo(() => {
      return [
        {
          label: "1",
          name: "test",
          value,
        },
        {
          label: "2",
          name: "test",
          value,
        },
      ];
    }, [value]);
    return (
      <>
        {options.map((item) => {
          return (
            <JRadio
              label={item.label}
              value={item.value}
              name={item.name}
              update={setValue}
              key={item.label}
            >
              {item.name}- {item.label}
          </JRadio>
          );
        })}
      </>
    );
  };