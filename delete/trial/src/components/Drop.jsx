import React from "react"
import './drop.css'

export default function Form() {

    const[prevFormData, setFormData] = React.useState({firstName:"",
                                                     lastName:"",
                                                     email: "",
                                                     comments: "",
                                                     isFriendly:true,
                                                     isfavorite:""
                                                    })
  

    function handleChange(){
        const{name,value, type, checked}= event.target
     setFirstName(()=> {
        return {
        ...prevFormData,
        [name] :type==="checkbox" ? checked:value
        }
     })
    }

    
return(
    <form className="form">
        <input 
        type = "text"
        placeholder = "firstName"
        onChange={handleChange}
        name ="firstName"
        value={prevFormData.firstname}
        />

        <input 
        type="text"
        placeholder = "lastname"
        onChange={handleChange}
        name="lastName"
        value ={prevFormData.lastname}
        />

        <input 
        type="email"
        placeholder = "email"
        onChange={handleChange}
        name="email"
        value={prevFormData.email}

        />
        /*textarea */
        <textarea 
        type="text"
        placeholder = "comments"
        onChange={handleChange}
        name="comments"
        value={prevFormData.comments}
        
        />

        <input 
        type="checkbox"
       id ="isFriendly"
       value= {prevFormData.isfriendly}
       onChange={handleChange}
       name ="isFriendly"
        />
        <label htmlFor="isFriendly" checked>Are you friendly?</label>
<br/>
<label htmlFor="isFriendly" checked>Are you friendly?</label>
<select
id="favorite"
name="favorite"
onChange={handleChange}
value="prevFormData.favorite"
>
    <optionvalue value="">==choose==</optionvalue>
    <optionvalue value="green">green</optionvalue>
    <optionvalue value="blue">blue</optionvalue>
    <optionvalue value="purple">purple</optionvalue>
    <optionvalue value="yellow">yellow</optionvalue>
</select>

    </form>
)

}