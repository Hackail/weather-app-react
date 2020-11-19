import React from 'react'
import {render}from '@testing-library/react'
import CityInfo from './CityInfo' //SUT: Subject Under Testing (Objeto bajo pruebas)

test("CityInfo render", async () => { // "Nombre de qué se está testeando"
    //AAA
    //Arange
    //Act
    //Assert

    const city = "Buenos Aires"
    const country = "Argentina"
    //Render: renderiza el componente y retorna una serie de funciones de utilidad
    // En este caso se utiliza findAllByRole para "consultar" a nuestro componente
    // Vamos a analizar su estado en el "Assert"
    const {findAllByRole} = render(<CityInfo city={city} country={country}></CityInfo>)

    //Assert
    //findAllByRole nos va a buscar (En este caso) todos los componentes que sean "heading" (H1,H2,H3, etc)
    //El resultado es un array de componentes
    const cityAndCountryComponents = await findAllByRole("heading")

    // ¿Cuando va a ser el test correcto?
    // DEFINICIÓN:
    // Cuando en el primer elemento (heading) se encuentre la ciudad "Buenos Aires"
    // y cuando en el segundo elemento se encuentre el país Argentina

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)

    // Si estas dos condiciones se cumplen (expect) el test está ok

})