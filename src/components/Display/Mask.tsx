import React from 'react';
import mask from "../../images/alphas/mask-green-female.png";

const imgMap: any = {'../../images/alphas/mask-green-female.png': require('../../images/alphas/mask-green-female.png'), 
                    '../../images/alphas/mask-blue-female.png': require('../../images/alphas/mask-blue-female.png')}

export class Mask extends React.Component<any, any> {
    render() {
        return(
            <div className="mask-div" id="mask-female-div">
                <img className="masks" id="mask-green-female"  width="50%"
                    //src={imgMap[this.props.mask]} alt="mask"
                    //src= '../../images/alphas/mask-green-female.png' alt="mask" />
                     />
            </div>
        )
    }
} 