import React  from 'react';
import AppContext from '../AppContext';

const OPTIONS = [
    {
        "code": "CL",
        "nombre": "Chile"
    },
    {
        "code": "AR",
        "nombre": "Argentina"
    },
    { 
        "code": "PE",
        "nombre": "Peru"
    },
    {
        "code": "MX",
        "nombre": "Mexico"
    },
    {
        "code": "CO",
        "nombre": "Colombia"
    }
]

const Paises = React.memo((props) => (
    <AppContext.Consumer>
        {(context) => (
            <div className="paises">
                <label for="pais_select" className="sr-only">Pa&iacute;s:</label>
                <select
                    id="pais_select"
                    onChange={(e) => { context.setPais(e.target.value) }}
                    value={context.pais}
                >
                    {
                        OPTIONS.map(
                            (pais) =>
                                <option 
                                    key={String(pais.code)}
                                    value={pais.code}
                                >
                                    { pais.nombre }
                                </option>
                        )
                    }
                </select>
            </div>
        )}
    </AppContext.Consumer>
))

export default Paises;
