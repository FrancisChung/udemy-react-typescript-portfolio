import {Child} from './Child'

const Parent = () => { 
    return <Child color="blue" onClick={() => console.log("OnClick Clicked") } />
}

export default Parent;