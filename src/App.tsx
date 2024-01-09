import './App.css'
import { DropDownComponent } from './component/DropDown';
import dropdownItems from './data/items.json';
function App() {

  return (
    <>
      <DropDownComponent props={dropdownItems} />
    </>
  )
}

export default App
