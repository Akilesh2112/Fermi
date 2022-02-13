import React, { useState, Component } from 'react';
import Counter from 'react-number-counter'
import Select from 'react-select'

import Loading from "./loading.jsx";


import Button from '@mui/material/Button';
import Gama from "./Gama.jsx";

import './style/calc.css'

const planetData = [
    {
        value: 1.9891E30,
        label: "sun"
    },
    {
        value: 3.285E23,
        label: "mercury"
    },
    {
        value: 4.867E24,
        label: "venus"
    },
    {
        value: 6.0456E24,
        label: "earth"
    },
    {
        value: 7.34767309E22,
        label: "moon"
    },
    {
        value: 6.39E23,
        label: "mars"
    },
    {
        value: 1.89813E27,
        label: "jupiter"
    },
    {
        value: 5.683E26,
        label: "saturn"
    },
    {
        value: 8.681E25,
        label: "uranus"
    },
    {
        value: 1.024E26,
        label: "neptune"
    },
];


const accData = [
    {
        value: 0.0085,
        label: "pencil"
    },
    {
        value: 40823.0,
        label: "planet"
    },
    {
        value: 18.0,
        label: "dog"
    },
    {
        value: 2.0,
        label: "toaster"
    }

];




function expo ( x, f )
{
    return Number.parseFloat( x ).toExponential( f );
}

function calc ( planets, household_object )
{

    var quotient = expo( planets / household_object, 2 );
    var values = {
        outQuotient: quotient,
        coefficient: quotient.substring( 0, 4 ),
        exponent: quotient.substring( 6, quotient.length )
    }
    console.log( values );


    return values;
}



function Calculator ()
{
    
    // set value for default selection
    const [ selectedValueP, setSelectedValueP ] = useState( 3 );
    const [ selectedValueA, setSelectedValueA ] = useState( 3 );

    // handle onChange event of the dropdown
    const handleChangeP = e =>
    {
        setSelectedValueP( e.value );
    }


    const handleChangeA = e =>
    {
        setSelectedValueA( e.value );
    }



    return (

        <div class="mail">
            <div >
                <section>
                    <div class="content">
                        <h2>SpaceFermi</h2>
                        <h2>SpaceFermi</h2>
                    </div>
                </section>
            </div>
            <div clas="calcMain">


                <Select
                    placeholder="Select Planet"
                    value={ planetData.filter( obj => obj.value === selectedValueP ) } // set selected value
                    options={ planetData } // set list of the planetData
                    onChange={ handleChangeP } // assign onChange function
                />
                <br></br>
                <Select
                    placeholder="Select Item"
                    value={ accData.filter( obj => obj.value === selectedValueA ) } // set selected value
                    options={ accData } // set list of the accData
                    onChange={ handleChangeA } // assign onChange function
                />
                {
                    selectedValueP && <div style={ { marginTop: 20, lineHeight: '25px' } }>
                        <div>
                            <b>
                                Mass of the planet:
                            </b>
                            { selectedValueP }
                        </div>
                    </div>
                }

                {
                    selectedValueA && <div style={ { marginTop: 20, lineHeight: '25px' } }>
                        <div>
                            <b>
                                Mass of the product:
                            </b>
                            { selectedValueA }
                        </div>
                    </div>
                }



                <Button variant="contained" onClick={ () => calc( selectedValueP, selectedValueA ) }>
                    Calculate
                </Button>
            </div>

        </div>
    );
}

export default Calculator;