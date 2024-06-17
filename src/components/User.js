
import{useState} from"react"
const User = ({name})=>{
    const [count]=useState(0);
    const[count2]=useState(1);
    return (
        <div className="user-card">
            <h3>NAME :{ name}</h3>
            <h2>{count}</h2>
            <h2>{count2}</h2>
            <h3>LOCATION:</h3>
            <h3>EMAIL:</h3>
        </div>
    )
}
export default User;