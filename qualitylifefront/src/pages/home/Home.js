import React from 'react';

const Home = () => {
    const modules = [
       
        { name: 'Сabinets for separate roles'},
        { name: 'Information module' },
        { name: 'Processing information from external systems' },
        { name: 'Patient surveys'},
        { name: 'Vital signs analysis' },
        { name: 'Communication management'},
      ];
      

      return (
        <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
          {modules.map((module) => (
            <button className='homebutton' key={module.name} style={{ margin: '10px' }}>
              {module.name}
            </button>
          ))}
        </div>
      );
}

export default Home;