import React from 'react';
import { SingleSelect } from "react-select-material-ui";
import AppContext from '../AppContext';

const countries = [
  { label: "Chile", value: "CL" },
  { label: "Argentina", value: "AR" },
  { label: "Perú", value: "PE" },
  { label: "México", value: "MX" },
  { label: "Colombia", value: "CO" }
];


const Paises = React.memo((props) => (
      <AppContext.Consumer>
          {(context) => (
              <div className="paises">
                <SingleSelect
                  placeholder="País" 
                  options={countries}
                  onChange={country => context.setPais(country)}   
                  style={{ width: 100 }}  
                />
              </div>
          )}
      </AppContext.Consumer>
    )
)

export default Paises;
