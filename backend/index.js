const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030;
const cors = require('cors')
const fetch = require('node-fetch');


var Chance = require('chance');
const { saveDoctor, Doctor, fetchDoctorsFromDB } = require('./doctor')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?inc=picture&gender=male');
      const data = await response.json();
      return data.results[0];
    } catch (error) {
      console.error('Error fetching random user:', error);
      return null;
    }
  };

 app.get('/:type',async (req, res) => {
      const type = req.params.type
      console.log(type)
      try {
       const doctors = await fetchDoctorsFromDB(type);
  
       if (doctors) {
         res.json(doctors);
       } else {
         res.status(500).json({ error: 'Error fetching doctors from the database' });
       }
     } catch (error) {
       console.error('Error:', error);
       res.status(500).json({ error: 'Internal Server Error' });
     }
    
  
 })
// app.get('/:genrate', async (req, res) => {
//   const type = req.params.type
//   var chance = new Chance();
//       const fakeDoctors = [];
//       for (let i = 0; i < 4; i++) {
//           const imageUrl = await fetchData();
//             const fakeDoctor = new Doctor({
//               name: chance.name(),
//               speciality: type,
//               experience: chance.integer({ min: 1, max: 30 }),
//               fees: chance.integer({ min: 50, max: 500 }),
//               address: chance.address(),
//               clinic: chance.company(),
//               rating: chance.floating({ min: 1, max: 5, fixed: 1 }),
//               stories: chance.integer({ min: 1, max: 100 }),
//               image: imageUrl.picture.large,
//             });
//             fakeDoctors.push(fakeDoctor);
//           }      
         
//           await Promise.all(fakeDoctors.map(saveDoctor))
//           res.json(fakeDoctors)
    
//  })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

