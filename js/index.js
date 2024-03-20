import csv from 'csv-parser';
import { stringify } from 'csv-stringify/sync'
import fs from 'fs';

const headerMap = {
  Job_Number: "job_number",
  Job_Type: "job_type",
  BIN: "bin",
  CompltYear: "completion_year",
  ClassANet: "class_a_net",
  Units_CO: "units_count",
  Boro: "borough_code",
  Latitude: "latitude",
  Longitude: "longitude",
  AddressNum: "address_number",
  AddressSt: "address_street"
}

const mapHeader = ({ header }) => headerMap[header] || null

const csvOptions = {
  // First line contains the title of the doc
  skipLines: 1,
  // Maps csv column names to database column names
  mapHeaders: mapHeader
}

const results = [];

function transformCsv(file) {
  fs.createReadStream(file)
    .pipe(csv(csvOptions))
    .on('data', (data) => results.push(data))
    .on('end', () => {
      const newBuildings = results
        // Filter so that all records are new constuction
        .filter(({ job_type }) => job_type === 'New Building')
        // Remove 4 anomolous records that were lacking coordinates. 
        .filter(({ latitude }) => Boolean(latitude))
        .map(record => {
          delete record.job_type
          return record;
        });

      const stringifiedRecords = stringify(newBuildings);

      fs.writeFileSync("../FormattedHousingDB_post2010.csv", stringifiedRecords);

      console.log('Writing complete')
    });
}

transformCsv('../HousingDB_post2010.csv');
