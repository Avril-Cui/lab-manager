const axios = require('axios');
const csv = require('csv-parse');

let config = {
  method: 'get',
  url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSSVAIP2Y41laOxzDkvs_EWcSaabKEvo-UiXCfpxy94qVjxLOaEjw0WfDDFYK2Uwj1eLhsS0c_xJuDQ/pub?output=csv',
};

axios(config)
  .then((response) => {
    csv.parse(response.data, {
      columns: true,
      skip_empty_lines: true
    }, (err, records) => {
      if (err) {
        console.error(err);
      } else {
        // Replace 'Column Name' with the name of the column you want to extract data from
        records.forEach(row => console.log(row['teachers']));
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });