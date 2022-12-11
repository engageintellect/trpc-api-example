import { useState, useEffect } from 'react';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const GetDataFeed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

	// console.log(data);

  return (
    <div className='text-white'>
			<div className='text-4xl font-semibold mb-2'>Response Data</div>
      {data.map((item) => (
        <div key={item['id']} className='bg-slate-800 my-5 p-5 rounded-lg shadow-lg border-2 border-slate-800 hover:border-slate-500 text-white'>
          <div><strong className='pr-1'>id:</strong>{item['id']}</div>
          <div><strong className='pr-1'>title:</strong>{item['username']}</div>
          <div><strong className='pr-1'>body:</strong>{item['email']}</div>
        </div>
      ))}
    </div>
  );
};

export default GetDataFeed;