import axios from 'axios';
import { useState, Ref } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

export const App = () => {
  const [count, setCount] = useState('');
  const [dataResult, setDataResult] = useState([]);
  const styled = { textAlign: 'left', border: 'solid 1px' };

  axios
    .get('https://digimon-api.vercel.app/api/digimon')
    .then((response) => {
      // console.log(response.data[0].img);
      setCount(response.data.length);
      setDataResult(response.data);
    })
    .catch((error) => console.error('ERROR: ', error));

  return (
    <>
      <table style={{ width: '100%', fontFamily: 'Arial' }}>
        <thead>
          <tr style={styled}>
            <th style={styled}>Name</th>
            <th style={styled}>Level</th>
            <th style={{ border: 'solid 1px', textAlign: 'center' }}>Image</th>
          </tr>
        </thead>
        <tbody>
          {dataResult.map((item, index) => (
            <tr key={index} style={{ textAlign: 'left', border: 'solid 1px' }}>
              <td style={styled}>{item.name.toUpperCase()}</td>
              <td style={styled}>{item.level.toUpperCase()}</td>
              <td style={{ border: 'solid 1px', textAlign: 'center' }}>
                <img src={item.img} width={60} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {dataResult.map((data, index) => (
        <li key={index}>{data.name}</li>
      ))}
      {dataResult.map((img) => (
        <img key={img} src={img.img} />
      ))} */}
    </>
  );
};
