import './Login.css'
import bulet1 from '../../assets/bulet1.svg'
import bulet2 from '../../assets/bulet2.svg'
import bulet3 from '../../assets/bulet3.svg'
import bulet4 from '../../assets/bulet4.svg'
import Line from '../../assets/Line.svg'
import Decoration from '../../assets/decoration1.svg'
import Decoration2 from '../../assets/decoration2.svg'
import Logo from '../../assets/logo.svg'
import Bola1 from '../../assets/decorationBola1.svg'
import Bola2 from '../../assets/decorationBola2.svg'
import Bola3 from '../../assets/decorationBola3.svg'



const Login = () => {
    return(<>
        


        <section className="login">
        <img src={bulet1} alt="" className="logo1"/>
        <img src={bulet2} alt="" className="logo2"/>
        <img src={bulet3} alt="" className="logo3"/>
        <img src={bulet4} alt="" className="logo4"/>

        <div className="loginBox">
            <div className="box1">
             <img src={Decoration} alt="" className="decoration1"/>
             <img src={Decoration2} alt="" className="decoration2"/>
             <img src={Bola1} alt="" className="bola1"/>
             <img src={Bola2} alt="" className="bola2"/>
             <img src={Bola3} alt="" className="bola3"/>
             <img src={Logo} alt="" className="logoLogin"/>
             <h3 className="loginsHeader">Welcome Page</h3>
             <h3 className="loginsbody">Sign In To<br /> Continue Access</h3>
             <h3 className="logoText">Rangga Arsy</h3>

                
            </div>
            <div className="box2">
                <h3>Login</h3>
                <input type="text" className="formEmail" placeholder="Email address"/>
               <img src={Line} alt="" className="line1"/>
                
                <input type="password" className="formpassword" placeholder="Password"/>
               <img src={Line} alt="" className="line2"/>

               <button className="btn-login" type="submit">CONTINUE</button>
               <h4 className="logintext">Or Login With</h4>

               <button className="btn-google" >Sign In With Google</button>
               <button className="btn-facebook" >Sign In With Facebook</button>


            </div>

        </div>


        </section>
        </>
    )
}

export default Login