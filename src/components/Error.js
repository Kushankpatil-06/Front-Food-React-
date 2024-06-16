import {useRouteError} from "react-router-dom"

const Error = ()=>{
    const err = useRouteError();
    return(
        <div>
            <h2>Somehthing went Wrong</h2>
      <h3>PleaseAgainLater</h3>
      <h2>{err.status}</h2>
        </div>
      
    )

}
export default Error;