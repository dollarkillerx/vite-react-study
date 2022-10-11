import React from "react"

interface RobotProps {
    id: number,
    name: string,
    email: string
}

// const Robot: React.FC<RobotProps> = (props) => {
// 自动展开语法
const Robot: React.FC<RobotProps> = ({id,name,email}) => {
    // const id = props.i
    return(
        <li>
            <img src={`https://robohash.org/${id}`} alt="robot"/>
            <h2>{name}</h2>
            <p>{email}</p>
        </li>
    )
}

export default Robot