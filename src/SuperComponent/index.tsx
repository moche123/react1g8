import { ReactNode } from "react";
import "./superComponent.css"

export interface Props{
  type: string;
  children: ReactNode;
}

const SuperComponent = (props:Props) => {
  return (
    <div className={props.type}>
      <h1>Super Component</h1>
      <br />
      {props.children}
    </div>
  )
}

export default SuperComponent