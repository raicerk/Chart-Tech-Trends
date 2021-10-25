import Axios from 'axios';
import config from './config.json';

const pais = () => {
  return Axios.get(config.urlCountry);
};

const agrupadoPorMes = (pais) => {
  return Axios.post(config.urlGraphQL, {
    query: `{
      LaboralAgrupadoPorMes(where: {field: pais,value: "${pais}"}){
      skill
      datos{
          fecha
          cantidad
        }
      }
    }`
  }).then(res => {
    return res.data.data.LaboralAgrupadoPorMes
  }).catch(error => {
    console.log(error)
    return []
  })
}

const acumulado = (pais) => {
  return Axios.post(config.urlGraphQL, {
    query: `{
      LaboralAcumulado(where: {field: pais,value: "${pais}"}){
        skill
        cantidad
      }
    }`
  }).then(res => {
    return res.data.data.LaboralAcumulado
  }).catch(error => {
    console.log(error)
    return []
  })
}

const salarios = (pais) => {
  return Axios.post(config.urlGraphQL, {
    query: `{
      LaboralSalarios(where: {field: pais,value: "${pais}"}){
        skill
        salariominimo
        salariomaximo
        media
        cantidad
      }
    }`
  }).then(res => {
    return res.data.data.LaboralSalarios
  }).catch(error => {
    console.log(error)
    return []
  })
}

const otroSkill = (pais, skill) => {
  return Axios.post(config.urlGraphQL, {
    query: `{
                LaboralConOtrosSkill(country: {value: "${pais}"}, skill: {value: "${skill}"}){
                    skill
                    cantidad
                }
            }`
  }).then(res => {
    const datOtherSkill = res.data.data.LaboralConOtrosSkill
          .filter(iter => iter.skill !== skill)
          .slice(0, 10)
          .sort((a, b) => {
            return a.cantidad > b.cantidad ? 1 : -1
          })

    return datOtherSkill
  }).catch(error => {
    console.log(error)
  })
}

const cantidadSkills = (pais) => {
  return Axios.post(config.urlGraphQL, {
    query: `{
      LaboralAcumulado(where: {field: pais,value: "${pais}"}){
        cantidad
      }
    }`
  }).then(resAcunulado => {
    return resAcunulado.data.data.LaboralAcumulado.reduce((acc, element) => acc + element.cantidad, 0)
  }).catch(error => {
    console.log(error)
    return 0
  })
}

const cantidadOfertas = (pais) => {
  return Axios.post(config.urlGraphQL, {
    query: `{
      Laboral(where: {field: pais, value: "${pais}"}, order: {by: fecha, orientation: DESC}) {
        link
      }
    }`
  }).then(resOfertas => {
    return resOfertas.data.data.Laboral.length
  }).catch(error => {
    console.log(error)
    return 0
  })
}

export default {
  agrupadoPorMes,
  acumulado,
  salarios,
  otroSkill,
  cantidadSkills,
  cantidadOfertas,
  pais
}
