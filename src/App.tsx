import { useRecoilState } from "recoil";
import { minuteState } from "./atom";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const onMinuteChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minutes}
        onChange={onMinuteChange}
        type="number"
        placeholder="Minutes"
        name=""
        id=""
      />
      <input type="number" placeholder="Hours" name="" id="" />
    </div>
  );
}

export default App;
