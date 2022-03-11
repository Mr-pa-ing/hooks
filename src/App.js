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
import ComponentC from "./component/useContext/ComponentC";
import CounterOne from "./component/useReducer/CounterOne";
import CounterTwo from "./component/useReducer/CounterTwo";
import CounterThree from "./component/useReducer/CounterThree";
import PComponent from "./component/Reducer&Context/PComponent";
import DataFetchingWithReducer from "./component/useReducer/DataFetchingWithReducer";
import DataFetchingTwo from "./component/useReducer/DataFetchingTwo";
import ParentComponent from "./component/useCallback/ParentComponent";


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

      {/* useContext */}
      <ComponentC/>

      {/* useReducer */}
      <CounterOne/>
      <CounterTwo/>
      <CounterThree/>

      {/* useReducer with useContext */}
      <PComponent/>
      <DataFetchingWithReducer/>
      <DataFetchingTwo/>

      {/* useCallback */}
      <ParentComponent/>

    </div>
  );
}

export default App;
