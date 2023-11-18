function Location({streetName = '1190 Derek Street', state= 'Louisiana', country = 'US', zipCode= 70520}){
    return (
        <div>
           <div className ="Address Info" >
            {streetName} {zipCode} is in the state of {state}, in {country}
           </div>

        </div>
    );
}
Location.propTypes
  
Location.defaultProps = {
    streetName: 'Street Name',
    state: 'State',
    country: 'US',
    zipCode: 'Zip'
};

export default Location;