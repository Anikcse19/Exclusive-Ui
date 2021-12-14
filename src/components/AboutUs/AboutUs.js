import React from 'react';
import puzzle from '../../images/puzzle.png'
import plant from '../../images/plant.png'
import balance from '../../images/balance.png'
import vector from '../../images/Vector.png'
import vector1 from '../../images/Vector1.png'
import vector2 from '../../images/Vector2.png'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div style={{
            width: '1440px',
            height: '6977px',
            backgroundColor: '#001435',
            color: 'white',

        }}>
            <h6 style={{ paddingTop: '78px', fontWeight: '700', fontSize: '17px', fontFamily: 'Raleway' }}>About Us</h6>
            <h1 style={{ fontSize: '38px', fontFamily: 'Roboto', fontWeight: '700' }}>We turn Ideas to <span style={{ color: '#14BBEA' }} >Companies</span></h1>
            <p className='text-center' style={{
                color: '#CCCCCC', lineHeight: '22px', fontSize: '16px', width: '1043px', marginLeft: '199px'
            }}>We believe that entrepreneurship can unlock human potential and make the world a better place. We're strategists, technologists, entrepreneurs, and academics who partner with companies and individuals to productize dreams and create awesome experiences. We're often praised for our business-centric approach and how that differentiates us.</p>

            <h2 style={{
                fontFamily: "Raleway", fontStyle: 'normal', fontWeight: 'bold',
                fontSize: '30px', lineHeight: '35px', marginTop: '54px', marginBottom: '104px'
            }}>Core Business Principles</h2>

            <div className='row' style={{ marginLeft: '271px' }}>
                <div className='col-12 col-md-3' style={{ backgroundColor: 'white', borderRadius: '19px', marginRight: '20px' }}>
                    <div style={{ marginTop: '50px' }}>
                        <img src={puzzle} alt="" />
                    </div>
                    <h6 style={{ color: 'black', margin: '10px', fontWeight: '800' }}>Solve a real Human Problem</h6>
                    <p style={{ color: 'black', fontFamily: 'Open Sans', fontSize: '15px', width: '214px', marginLeft: '33px', marginBottom: '86px' }}>Successful companies need to deliver solutions that are “need to haves”, not just “nice to haves”.</p>
                </div>
                <div className='col-12 col-md-3' style={{ backgroundColor: '#000000', borderRadius: '19px', marginRight: '20px' }}>
                    <div style={{ marginTop: '60px' }}>
                        <img src={balance} alt="" />
                    </div>
                    <h6 style={{ color: 'white', margin: '10px', fontWeight: '800' }}>Unit economics that Scale</h6>
                    <p style={{ color: '#CCCCCC', fontFamily: 'Open Sans', fontSize: '15px', width: '214px', marginLeft: '33px', marginBottom: '86px' }}>Every business needs a clear path to profitability, enabling responsible growth and leading to financing options beyond just venture capital.</p>
                </div>
                <div className='col-12 col-md-3' style={{ backgroundColor: 'white', borderRadius: '19px', }}>
                    <div style={{ marginTop: '60px' }}>
                        <img src={plant} alt="" />
                    </div>
                    <h6 style={{ color: 'black', margin: '10px', fontWeight: '800' }}>Sense of Responsibility</h6>
                    <p style={{ color: 'black', fontFamily: 'Open Sans', fontSize: '15px', width: '214px', marginLeft: '33px', marginBottom: '86px' }}>Businesses should deliver value to all stakeholders, not just shareholders, taking care of employees, vendors, and customers alike. </p>
                </div>
            </div>
            {/* services section  */}
            <h6 style={{ paddingTop: '78px', fontWeight: '700', fontSize: '17px', fontFamily: 'Raleway' }}>Our Services</h6>
            <h1 style={{ fontSize: '38px', fontFamily: 'Roboto', fontWeight: '700' }}>Stuff we do <span style={{ color: '#14BBEA' }} >best</span></h1>
            <p className='text-center' style={{
                color: '#CCCCCC', lineHeight: '22px', fontSize: '16px', width: '1043px', marginLeft: '199px', marginBottom: '30px'
            }}>Drawing on many years of experience on both sides of the negotiation table, as investors and an entrepreneurs, the Matrix team provides critical insight to help you achieve your company's growth and capital raising goals.</p>

            <div className='row' style={{ marginLeft: '200px', marginTop: '100px' }}>
                <div className='col-12 col-md-3'>
                    <h1>Strategic Consulting <span style={{
                        fontWeight: '800', color: 'yellow', width: '69px',
                        height: '75px'
                    }}>.</span></h1>
                </div>
                <div className='col-12 col-md-3' style={{
                    backgroundColor: '#000000', borderRadius: '19px', marginRight: '20px', marginTop: '80px', width: '248px', height: '330px'
                }}>
                    <div style={{ marginTop: '60px', marginLeft: '-140px' }}>
                        <img src={vector} alt="" />
                    </div>
                    <h6 style={{ color: 'white', margin: '10px', fontWeight: '800' }}>Unit economics that Scale</h6>
                    <p style={{ color: '#CCCCCC', fontFamily: 'Open Sans', fontSize: '15px', width: '214px', marginLeft: '5px', marginBottom: '86px' }}>Every business needs a clear path to profitability,enabling responsible growth and leading to financing options beyond just venture capital.</p>
                </div>
                <div className='col-12 col-md-3' >
                    <div style={{
                        backgroundColor: '#000000', borderRadius: '19px', marginRight: '20px', marginBottom: '10px', width: '357px', height: '196px'
                    }}>
                        <div style={{ paddingTop: '20px', marginLeft: '-200px' }}>
                            <img src={vector1} alt="" />
                        </div>
                        <h4 style={{ fontSize: '20px', marginTop: '10px', marginLeft: '-75px' }}>Corporate Research</h4>
                        <p style={{
                            textAlign: 'left',
                            width: '305.9px',
                            height: '41.58px', fontSize: '11px', marginTop: '10px', marginLeft: '50px', color: ' #CCCCCC;'
                        }}>Is there a specific topic you would like to learn more about within your industry / market?</p>
                    </div>
                    <div style={{
                        backgroundColor: 'white', borderRadius: '19px', marginRight: '20px', width: '357px', height: '196px'
                    }}>
                        <div style={{ paddingTop: '20px', marginLeft: '-200px' }}>
                            <img src={vector2} alt="" />
                        </div>
                        <h4 style={{ fontSize: '20px', marginTop: '10px', marginLeft: '-30px', color: 'black' }}>Go-To-Market Assessment </h4>
                        <p style={{
                            textAlign: 'left',
                            width: '305.9px',
                            height: '41.58px', fontSize: '11px', marginTop: '10px', marginLeft: '50px', color: ' #CCCCCC'
                        }}>Are you ready to launch your business?</p>
                    </div>
                </div>

            </div>
            <div className='row' style={{ marginLeft: '300px', marginTop: '20px' }}>
                <div className='col-12 col-md-3' style={{ backgroundColor: 'white', borderRadius: '19px', width: '248px', height: '330px' }}>
                    <div style={{ marginTop: '60px', marginLeft: '-140px' }}>
                        <img src={vector} alt="" />
                    </div>
                    <h6 style={{ color: 'black', margin: '10px', fontWeight: '800' }}>Unit economics that Scale</h6>
                    <p style={{ color: '#CCCCCC', fontFamily: 'Open Sans', fontSize: '15px', width: '214px', marginLeft: '5px', marginBottom: '86px' }}>Every business needs a clear path to profitability,enabling responsible growth and and leading to financing options beyond just venture capital.</p>
                </div>
                <div className='col-12 col-md-3'>
                    <div style={{
                        backgroundColor: 'white', borderRadius: '19px', marginRight: '20px', width: '335px', height: '196px'
                    }}>
                        <div style={{ paddingTop: '20px', marginLeft: '-200px' }}>
                            <img src={vector2} alt="" />
                        </div>
                        <h4 style={{ fontSize: '20px', marginTop: '10px', marginLeft: '-30px', color: 'black' }}>Go-To-Market Assessment </h4>
                        <p style={{
                            textAlign: 'left',
                            width: '305.9px',
                            height: '41.58px', fontSize: '11px', marginTop: '10px', marginLeft: '50px', color: ' #CCCCCC'
                        }}>Are you ready to launch your business?</p>
                    </div>
                </div>
                <div className='col-12 col-md-3' style={{
                    backgroundColor: '#000000', borderRadius: '19px', width: '248px', height: '330px', marginLeft: '70px'
                }}>
                    <div style={{ marginTop: '60px', marginLeft: '-140px' }}>
                        <img src={vector} alt="" />
                    </div>
                    <h6 style={{ color: 'white', margin: '10px', fontWeight: '800' }}>Unit economics that Scale</h6>
                    <p style={{ color: '#CCCCCC', fontFamily: 'Open Sans', fontSize: '15px', width: '214px', marginLeft: '5px', marginBottom: '86px' }}>Every business needs a clear path to profitability,enabling responsible growth and leading to financing options beyond just venture capital.</p>
                </div>


            </div>
        </div>
    );
};

export default AboutUs;