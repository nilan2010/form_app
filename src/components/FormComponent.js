import { useState } from 'react';
import { Row, Col } from 'antd';
import  Input  from './Input';
import  Dropdown  from './Dropdown';
import bussinessInfoArr from '../data/businessInfo.json';

//import './FormComponent.css';
const FormComponent = () => {
  
  const bussinessInfo=bussinessInfoArr[0];
  const [identifier, setIdentifier] = useState(bussinessInfo.identifier);
  const [name, setName] = useState(bussinessInfo.name);
  const [displayName, setDisplayName] = useState(bussinessInfo.displayName);
  const [type, setType] = useState(bussinessInfo.type);
  const [businessClasification, setBusinessClasification] = useState(bussinessInfo.businessClasification);
  const [registrationNumber, setRegistrationNumber] = useState(bussinessInfo.registrationNumber);
  const [businessDescription, setBusinessDescription] = useState(bussinessInfo.displayName);
  const [address, setAddress] = useState(bussinessInfo.address);
  const [appartment, setAppartment] = useState(bussinessInfo.appartment);
  const [suburb, setSuburb] = useState(bussinessInfo.suburb);
  const [PostCode, setPostCode] = useState(bussinessInfo.PostCode);
  const [state, setState] = useState(bussinessInfo.state);
  const [country, setCountry] = useState(bussinessInfo.country);
  const [landLine, setLandLine] = useState(bussinessInfo.landLine);
  const [mobileNumber, setMobileNumber] = useState(bussinessInfo.mobileNumber);
  const [website, setWebsite] = useState(bussinessInfo.website);
  const [manager, setManager] = useState(bussinessInfo.manager);
  const [email, setEmail] = useState(bussinessInfo.email);

  const [formData, updateFormData] = useState({});
  
  const handleChange = (e,n) => {
    
    updateFormData({
      ...formData, [n]: e.trim()
    });
  };
  


   const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    
  };

  
    const states=[
        {
            "value" : 1,
            "label": "New South Whales"
        },
        {
            "value" : 2,
            "label": "Victoria"
        },
        {
            "value" : 3,
            "label": "Queensland"
        },
        {
            "value" : 4,
            "label": "Western Australia"
        },
        {
            "value" : 5,
            "label": "Tasmania"
        }
    ];

    const busClassification=[
        {
            value : 1,
            label: "Liquor Store"
        },
        {
            value : 2,
            label: "Minimarket"
        },
        {
            value : 3,
            label: "Butchery"
        },
        {
            ivalue : 4,
            label: "Supermarket"
        },
        {
            value : 5,
            label: "Gas Station"
        }
    ];


  
    return (
      <div className="form-style-5">
        <form  onSubmit={handleSubmit} id="infoForm">
        <Row>
            <Col align="left"  span={24}>
                <h2><b>Information</b></h2>
            </Col>
          </Row>

          <Row gutter={[16, 16]} >
            <Col  align="left"   span={4}>
                <Input type="number" label="Identifier" name="identifier" value={identifier} onChange={handleChange} />
            </Col>
            <Col  align="left"    span={7}>
                <Input type="text" label="Name" name="name" value={name} onChange={handleChange}/>
            </Col>
            <Col  align="left"   span={8}>
                <Input type="text" label="Display Name" name="displayName" value={displayName} onChange={handleChange}/>
            </Col>
            <Col  align="left"   span={5}>
                <Input type="text" label="Type" name="type" value={type} onChange={handleChange}/>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col  align="left"   span={6}>
                <Dropdown  label="Busines Clasification" name="businessClasification" value={businessClasification} options={busClassification} onChange={handleChange} />
            </Col>
            <Col  align="left"   span={6}>
                <Input type="number" label="Registration Number(ABN)" name="registrationNumber" value={registrationNumber} onChange={handleChange}/>
            </Col>
            <Col  align="left"   span={6}>
                <Input type="number" label="Registration Number(ACN)" name="acn" value="" onChange={handleChange}/>
            </Col>
            <Col span={17}>
                &nbsp;
            </Col>
          </Row>

          <Row>
            <Col  align="left"    span={24}>
                <Input type="text" label="Business Description" name="businessDescription" value={businessDescription} onChange={handleChange}/>
            </Col>
          </Row>

          <Row >
            <Col align="left"   span={24}>
                <Input type="text" label="Short Business Description" name="short_bus_description" value="" onChange={handleChange}/>
            </Col>
          </Row>
          <Row>
            <Col align="left"  span={24}>
                <h2><b>Address</b></h2>
            </Col>
          </Row>
          <Row >
            <Col align="left"   span={7}>
                <Input type="text" label="Address" name="address" value={address} onChange={handleChange}/>
            </Col>
            <Col align="left"   span={1}>
                &nbsp;
            </Col>
            <Col align="left"   span={7}>
                <Input type="text" label="Apartment ,Suit,Bulding Name" name="appartment" value={appartment} onChange={handleChange}/>
            </Col>
            <Col align="left"   span={1}>
                &nbsp;
            </Col>
            <Col align="left"   span={7}>
                <Input type="text" label="Suburb" name="suburb" value={suburb} onChange={handleChange}/>
            </Col>
            <Col align="left"   span={1}>
                &nbsp;
            </Col>
          </Row>

          <Row >
            <Col align="left"   span={7}>
                <Input type="text" label="Postcode" name="PostCode" value={PostCode} onChange={handleChange}/>
            </Col>
            <Col align="left"   span={1}>
                &nbsp;
            </Col>
            <Col align="left"   span={7}>
                <Dropdown  label="State" name="state" options={states} onChange={handleChange}/>
            </Col>
            <Col align="left"   span={1}>
                &nbsp;
            </Col>
            <Col align="left"   span={7}>
                <Input type="text" label="Country" name="country" value={country} onChange={handleChange}/>
            </Col>
            <Col align="left"   span={1}>
                &nbsp;
            </Col>
          </Row>
          <Row>
            <Col align="left"  span={24}>
                <h2><b>Business Contact Information</b></h2>
            </Col>
          </Row>
          <Row >
            <Col align="left"   span={7}>
                <Input type="tel"  label="Land Line" name="landLine" value={landLine} onChange={handleChange}/>
            </Col>
            <Col align="left"   span={1}>
                &nbsp;
            </Col>
            <Col align="left"   span={7}>
                <Input type="text" label="Mobile Number" name="mobileNumber" value={mobileNumber} onChange={handleChange}/>
            </Col>
            <Col align="left"   span={1}>
                &nbsp;
            </Col>
            <Col align="left"   span={7}>
                <Input type="url" label="Website" name="website" value={website} onChange={handleChange}/>
            </Col>
            <Col align="left"   span={1}>
                &nbsp;
            </Col>
          </Row>

          <Row >
            <Col align="left"   span={11}>
                <Input type="text" label="Manager" name="manager" value={manager} onChange={handleChange}/>
            </Col>
            <Col align="left"   span={1}>
                &nbsp;
            </Col>
            <Col align="left"   span={11}>
                <Input  type="text" label="Email" name="email" value={email} onChange={handleChange}/>
            </Col>
            <Col align="left"   span={1}>
                
            </Col>
          </Row> 
          <Row >
            <Col align="left"   span={20}>
                &nbsp;
            </Col>
            <Col align="left"   span={4}>
                <input type="submit" value="Save"/> 
            </Col>
          </Row>
            
        </form>
      </div>
    );
  };

  export default FormComponent;