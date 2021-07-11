import { useState } from 'react';
import { authService } from '../fbase';


const Auth = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    
    const onChange = (e) => {
        const {target : {name, value}} = e;
        if (name === "id") {
            setId(value);
        } else if (name === "pw"){
            setPw(value);
        }
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await authService.signInWithEmailAndPassword(id, pw)
            setId("");
            setPw("");
        } catch (error) {
            alert(error);
        }
       
    }
    return (
        <div>
            <form onSubmit={onSubmit} method="post">
                <input type="text" name="id" onChange={onChange} value={id}/>
                <input type="password" name="pw" onChange={onChange} value={pw}/>
                <input type="submit" value="Sign in" />
            </form>
        </div>
    );
};


export default Auth;


