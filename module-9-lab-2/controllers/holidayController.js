const { response } = require("express");
const Models = require("../models");
const fetch = import("node-fetch");
const axios = require("axios");



// const getHoliday = (req,res) => {
//   axios.get ('"https://date.nager.at/api/v3/PublicHolidays/2022/AU"')
//   .then(response =>{
   
//     const results = response.data;
//   })
// }

// const getHoliday = (req,res)=>{

//  axios.get ('https://date.nager.at/api/v3/PublicHolidays/2022/AU')
//  .then (response => {
//     const results =response.data.results;
//     const holidayInfo = results.map({})
//  })
// }


const getHoliday = (res) => {

    axios.get('https://date.nager.at/api/v3/PublicHolidays/2023/US')
    .then(response => {
       const rawData = response.data
       const data =  rawData.map(({date, name}) => {
        return ({
            date,
            name
        })
       });

       Models.Holiday.bulkCreate(data)
       .then(
        result =>{
            res.send(result);
        }
       )
       
        console.log({rawData, data});
    })
    .catch(err => {
        console.error('Error fetching data from external API:', err);
    });
  
}

module.exports = {
    getHoliday,

}