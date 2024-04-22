## About

Housing stock is always in short supply in New York City. Although more is being built every day, it's clear that sea level changes and extreme weather due to climate change will have negative effects on the supply. This project uses NYC Open Data (https://opendata.cityofnewyork.us/) to analyze the impacts of climate change on housing in NYC.

## Roadmap

- [x] Load housing data into geopandas
- [x] Load extreme weather and sea level data from NYC Open Data.
  - It may also be useful to seek out data about the impacts of hurricanes Sandy and Ida, as FEMA flood hazard zones seem to have a quite specific meaning
- [ ] Identify which new housing developments are at risk due to climate change in the next few decades by determining whether or not their lat/lon coordinates fall within flood plains
  - [ ] Assess the impact to each borough individually
  - [ ] Assess the impact against the number of livable units specifically (buildings alone are too course grained)

### Backlog / Post-MVP 
- [ ] Expand assessment to include existing buildings
- [ ] Examine the socioeconomics of neighborhoods that are impacted the most
  - For example, East Harlem seems to be particularly prone to flooding, whereas the Upper East Side does not

## Installing and Running

Under Construction

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

