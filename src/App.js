import ClassCounter from "./component/useEffect/ClassCounter";
import HookCounter from "./component/useState/hookCounter";
import Input from "./component/useState/Input";
import Random from "./component/useState/Random";
import HookCouterTwo from "./component/useEffect/HookCounter";
import ClassMouse from "./component/useEffect/ClassMouse";
import HooksMouse from "./component/useEffect/HooksMouse";
import ToggleDisplay from "./component/useEffect/ToggleDisplay";
import IntervalCounterClass from "./component/useEffect/IntervalCounterClass";
import IntervalCounterHook from "./component/useEffect/IntervalCounterHook";
import DataFetching from "./component/useEffect/DataFetching";

function App() {
  return (
    <div className="App">

      {/* useState */}
      <HookCounter />
      <Input />
      <Random />

      {/* useEffect */}
      {/* <ClassCounter /> */}
      <HookCouterTwo />
      {/* <ClassMouse/> */}
      {/* <HooksMouse /> */}
      <ToggleDisplay/>
      <IntervalCounterClass/>
      <IntervalCounterHook/>
      <DataFetching/>
    </div>
  );
}

export default App;
