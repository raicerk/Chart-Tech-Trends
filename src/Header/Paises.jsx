import React  from 'react';
import { SingleSelect } from "react-select-material-ui";
import AppContext from '../AppContext';

const COUNTRYCODES = ['CL', 'AR', 'PE', 'MX', 'CO']

const Paises = React.memo((props) => (
    <AppContext.Consumer>
        {(context) => (
            <div className="paises">
              <SingleSelect
                defaultValue='CL'
                placeholder="País" 
                options={COUNTRYCODES}
                onChange={(pais) => context.setPais(pais)}   
                style={{ width: 100 }}  
              />
            </div>
        )}
    </AppContext.Consumer>
))

export default Paises;
