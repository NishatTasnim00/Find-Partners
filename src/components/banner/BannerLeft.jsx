import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const BannerLeft = () => {
  const [accountants, setAccountants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get('https://find-partners-server-rho.vercel.app/charteredAccountants')
      .then(response => {
        console.log(response.data);
        setAccountants(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]); 
    } else {
      const results = accountants.filter(accountant =>
        accountant.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [searchTerm, accountants]);

  console.log(searchTerm);
  console.log(searchResults);

  return (
    <div className='pl-32 pr-5'>
      <h1 className='font-bold text-[65px]'>Find <span className='color-text'>Partners</span> (CAs) available online</h1>
      <p className='text-[#616161] font-bold text-xl pb-5'>CONNECT with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
      <div className='relative text-lg font-bold'>
        <input
          type="text"
          className='w-full h-16 rounded-lg border-2 border-gray-200 pl-7'
          placeholder='Search by name'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className='w-[186px] h-16 bg-[#0076CE] rounded-lg absolute top-0 right-0 text-white'>Search</button>
      </div>
      {/* Display search results */}
      <ul>
        {searchResults?.map(accountant => (
          <Link to={`/AccountantDetails/${accountant?.id}`}>
          <li key={accountant._id}>{accountant?.name}</li></Link>
        ))}
      </ul>
    </div>
  );
};

export default BannerLeft;
