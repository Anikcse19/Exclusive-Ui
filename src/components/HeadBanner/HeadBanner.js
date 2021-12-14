import React from 'react';
import './HeadBanner.css'

const HeadBanner = () => {
    return (
        <div className='row banner-bg' style={{ height: '780px', widht: '1440px', overflowX: 'hidden' }} >
            <div className='col-md-5 col-12'>
                <h1 style={{ fontSize: '30px', marginTop: '154px', marginLeft: '116px', color: '#14BBEA', fontWeight: 'bold', fontFamily: 'Raleway' }}>MATRIX VENTURE STUDIO</h1>
                <h1 style={{ marginLeft: '116px', lineHeight: '77px', width: '441px', height: '228px', fontWeight: '800', fontSize: '65px', color: 'white' }}>Ideation. <span className='text-warning'>Innovation.</span> Incubation.</h1>
            </div>

        </div>
    );
};

export default HeadBanner;