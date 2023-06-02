import logoFatec from "../Assets/logoFatec.png"
import LogoFatecProps from "../Types/LogoFatecProps";

const LogoFatec = ({width}: LogoFatecProps) =>{
  return(
    <div>
      <img src={logoFatec} alt="Logotipo Fatec" width={width} />
    </div>
  )
}

export default LogoFatec;