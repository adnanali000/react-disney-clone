import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <div>
            <Container>
                <CTA>
                    <CTALogoOne src = "/images/cta-logo-one.svg" />
                    <SignUp>Get All There </SignUp>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio voluptatem dolorum, accusamus soluta fugit quas amet voluptatum consectetur nostrum quam!
                    </Description>    
                    <CTALogoTwo src = "/images/cta-logo-two.png" />
                        
                </CTA>   
            </Container>   
        </div>
    )
}

export default Login

const Container = styled.div`
    position:relative;
    height:calc(100vh - 70px);
    display:flex;
    align-items:top;
    justify-content:center;


    &:before{
        position:absolute;
        content:"";
        top:0;
        bottom:0;
        left:0;
        right:0;
        background-image:url("/images/login-background.jpg");
        z-index:-1;
        background-position:top;
        background-size:cover;
        background-repeat:no-repeat;
        opacity:0.7;
    }

`

const CTA = styled.div`
        padding:80px 40px;
        max-width:650px;
        width: 80%;
        display:flex;
        flex-direction:column;
        align-items:center;


`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0px;
    color:#f9f9f9;
    border-radius:4px;
    text-align:center;
    font-size:18px;
    cursor:pointer;
    transition: all 250ms;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:12px;

    &:hover{
        background: #0483ee;
    }

`

const Description=styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;

`

const CTALogoTwo = styled.img`
        width:90%;

`