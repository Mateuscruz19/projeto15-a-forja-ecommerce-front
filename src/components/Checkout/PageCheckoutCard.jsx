import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Container, Title, Description, LowerContainer, SubmitBtn, CheckoutConfirm} from "./CheckoutStyles";
import axios from "axios";
import { useState } from "react";

export default function App() {
    const [finalized, setFinalized] = useState(false);
    const url =  "http://localhost:5000"
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const Authorization = "5a284611-1be4-42f9-a3f3-0e196394b29e"
    const id = "63d529ed943a7ff029a61e4b"
    // const { Authorization, id } = useContext(AuthContext);
    const navigate = useNavigate()

    function onSubmit(data){
        data.id = id
        const header = Authorization
        console.log(data)
        const config = {
            headers: {
              Authorization: Authorization,
            }
          }
        const response = axios.post(`${url}/paymentinfo`, data, config)
        response.then(() => setFinalized(true))
        response.catch((error) => {
            console.log(error.response)
            return error.response;
        });
    };
  
    if(!finalized){return(
        <>
        
        <Container>
        
        <Title>
        
        <span><h1>A Forja</h1> <br/></span>
        </Title>
        <Description>
       
        <div><h3> Preco:</h3> <h3>&emsp;&nbsp;R$</h3> <br/></div>
        
        </Description>
        <div>
        <form onSubmit={handleSubmit(onSubmit)} {...register("membershipId")}>
        
        <div><input placeholder="Nome impresso no cartao" id='name' name="name" type="name" {...register("cardName", {required:true})} /></div>
        {errors.email && <div><h3>Insira seu Email</h3></div>}

        <div><input placeholder="Digitos do cartao" id='number' name="number" type="number" {...register("cardNumber", {required:true})} /></div>
        {errors.email && <div><h3>Digite Seu CPF</h3></div>}

        <LowerContainer>
        <div><input placeholder="codigo de seguranca" id='number' name="number" type="number" {...register("securityNumber", {required:true , valueAsNumber:true})} /></div>
        {errors.email && <div><h3>Insira seu Email</h3></div>}
        
        <div><input id='pwd' name="pwd" placeholder="validade" type="month" {...register("expirationDate", { required: true })} /></div>
        {errors.password && <div>Digite sua senha correta!</div>}
        </LowerContainer>
    <SubmitBtn> <input value="Cadastrar" style={{background:"#ffa375", color:'white'}} type="submit" /></SubmitBtn>
    </form>
        </div>
        </Container>
        </>
    )}
    else{return(
        <>
        
        <Container>
        
        <Title>
        
        <span><h1>A Forja</h1> <br/></span>
        </Title>
        <Description>
       
        <div><h3> Preco:</h3> <h3>&emsp;&nbsp;R$</h3> <br/></div>
        
        </Description>
        <div>
        <form onSubmit={handleSubmit(onSubmit)} {...register("membershipId")}>
        
        <div><input placeholder="Nome impresso no cartao" id='name' name="name" type="name" {...register("cardName", {required:true})} /></div>
        {errors.email && <div><h3>Insira seu Email</h3></div>}

        <div><input placeholder="Digitos do cartao" id='number' name="number" type="number" {...register("cardNumber", {required:true})} /></div>
        {errors.email && <div><h3>Digite Seu CPF</h3></div>}

        <LowerContainer>
        <div><input placeholder="codigo de seguranca" id='number' name="number" type="number" {...register("securityNumber", {required:true , valueAsNumber:true})} /></div>
        {errors.email && <div><h3>Insira seu Email</h3></div>}
        
        <div><input id='pwd' name="pwd" placeholder="validade" type="month" {...register("expirationDate", { required: true })} /></div>
        {errors.password && <div>Digite sua senha correta!</div>}
        </LowerContainer>
    <SubmitBtn> <input value="Cadastrar" style={{background:"#ffa375", color:'white'}} type="submit" /></SubmitBtn>
    </form>
        </div>
        <CheckoutConfirm >
            <p> Você acaba de concluir sua compra no valor de (R$ ).</p>
            <p> Em breve seu pedido será enviado. </p>
            <button style={{background:'#ffa375'}} onClick={() => navigate("/")}>Finalizar.</button>
         </CheckoutConfirm>
        </Container>
        </>
    )

    }
}