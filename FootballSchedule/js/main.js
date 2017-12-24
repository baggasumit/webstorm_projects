/**
 * Created by sumit_bagga on 10/2/17.
 */

axios.get('fixtures.json')
  .then(function (response) {
    let fixturesList = response.data.fixtures;
    populateFixtures(fixturesList);
  })
  .catch(function (error) {
    console.log(error);
  });

function populateFixtures(fixturesList) {
  let cl_fixtures = document.querySelector("#cl_fixtures");
  fixturesList.forEach(function (fixture) {
    console.log(fixture.homeTeamName, fixture.awayTeamName, fixture.date);
    let fixtureDate = moment(fixture.date).format("MMM DD, YYYY - hh:mm A");
    console.log("Date", fixtureDate);
    let fixture_li = document.createElement("li");
    fixture_li.innerHTML = `<strong>${fixture.homeTeamName}</strong> vs <strong>${fixture.awayTeamName}</strong> ${fixtureDate}`;
    cl_fixtures.appendChild(fixture_li);
  })
}