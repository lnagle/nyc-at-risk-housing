## About

This project uses NYC Open Data (https://opendata.cityofnewyork.us/) to analyze the impact of climate change on housing in NYC.

## Installing and Running

Prerequisites:
- A local instance of Postgres against which you have access to run `psql` commands
- NodeJS

1. In index.sql, update the COPY command to use your absolute path to FormattedHousingDB_post2010.csv
2. In the root directory, run `psql -f index.sql`
3. Execute a command against the database in which the COPY was run. For example: `SELECT count(*) FROM new_housing;`

### Updating the Format of the Original Data Set

Note that this repo already comes loaded with a formatted and paired down data set. That said, if you'd like to transform the original data set yourself:

1. Download the original data set from the link in the Housing Data section. Save it to the root directory of this project.
2. Follow the instuctions in ./js/README.md
3. Repeat step 2 from the main Installing and Running instructions

## Roadmap

- [x] Make filtered and formatted housing data ingestible into a local DB instance

## Notes

### Housing Data

- Data set source: https://www.nyc.gov/site/planning/data-maps/open-data/dwn-housing-database.page
- 5627 / 26132 (21.5%) of the formatted records do not contain data about how many livable units are in the new building. The average unit count among the 78.5% of records is 16.5 (rounded).
- Boroughs are represented by a 1-5 range. The mappings are:
  - 1: Manhattan
  - 2: Bronx
  - 3: Brooklyn
  - 4: Queens
  - 5: Staten Island
- BIN stands for Building Identification Number and identifies each unique building in the city. It is 7 digit string starting with the borough code and 6 digit unique building number

## Lessons Learned

