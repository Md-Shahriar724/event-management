import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom'

const SocialLogin = () => {

    const navigate = useNavigate()
    const{ googleLogin, githubLogin} = useContext(AuthContext)

    const handleSocialLogin = (media)=>{
        media()
        .then( result => {
          console.log(result)
        //   toast.success('You have Successfully loged in!')
          navigate('/')
        })
        .catch( err => console.log(err))
      }

    return (
        <div>
             <p className="text-center">Sign in with</p>
                  <div className="flex justify-around items-center">
                      <FcGoogle className="w-8 h-8 cursor-pointer" onClick={()=>handleSocialLogin(googleLogin)} />
                      <BsGithub className="w-8 h-8 cursor-pointer "onClick={()=>handleSocialLogin(githubLogin)}/>
                      <BsFacebook className="w-8 h-8 cursor-pointer" />
                  </div>
        </div>
    );
};

export default SocialLogin;