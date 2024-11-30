import {ChildAsFC} from './Child'

const Parent = () => {
    return <ChildAsFC color="blue" onClick={() => console.log("OnClick Clicked") }>
                Lorem Ipsem
           </ChildAsFC>
}

export default Parent;

export {}