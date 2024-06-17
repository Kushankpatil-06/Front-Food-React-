import React from "react"

class UserClass extends React.Component{
  constructor(props){
            super(props)
            this.state={
                UserInfo:{
               name : "fggg",
               location :"sgfg",
               email:"sagg@",
               avatar_url: "jgsfg@jjasff.com"
                }
            }
        }
        ;

        
        
        
     async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Kushankpatil-06");
        const json = await data.json();
        this.setState({UserInfo:json})
     }
    render(props){
      const{name,location,email,avatar_url}=this.state.UserInfo
        return(
            <div className="user-card">
                <img src={avatar_url} alt="" />
            <h3>NAME :{name}</h3>
            <h3>LOCATION:{location}</h3>
            <h3>EMAIL:</h3>
        </div>
        )
    }
}
export default UserClass;