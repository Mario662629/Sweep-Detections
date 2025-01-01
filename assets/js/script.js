let teams = {}; // Will hold the team IDs and their full names
let sweeps = []; // Will hold the sweep data for the selected season

// Fetch the NBA teams data from the external JSON file
fetch('../data/nba/teams.json')
    .then(response => response.json())
    .then(data => {
        console.log("Teams data loaded:", data); // Log teams data to the console
        // Map team IDs to team names for easier lookup
        teams = data.reduce((acc, team) => {
            acc[team.teamId] = team.teamName; // Map team ID to full team name
            return acc;
        }, {});
        loadSeasonData('2024-25'); // Initialize the page with the default season (2024-25)
    })
    .catch(error => console.error('Error loading teams data:', error));

// Function to update the page content dynamically based on the selected season
function loadSeasonData(season) {
    console.log("Loading data for season:", season); // Log the selected season

    // Update page title and description
    document.getElementById('page-title').textContent = `NBA ${season} Season Sweeps`;
    document.title = `NBA ${season} Season Sweeps`; // Update the browser tab title

    // Fetch the sweep data for the selected season
    fetch(`../data/nba/sweeps/${season}.json`)
        .then(response => response.json())
        .then(data => {
            console.log(`Sweep data loaded for ${season}:`, data); // Log sweep data
            sweeps = data; // Store the sweeps data
            populateSweepTable(); // Populate the table after sweeps data is loaded
        })
        .catch(error => console.error(`Error loading sweeps data for ${season}:`, error));
}

// Function to populate the table with sweep data
function populateSweepTable() {
    const tableBody = document.querySelector('#sweep-table tbody');
    
    // Ensure there is no content before inserting new rows
    tableBody.innerHTML = '';

    // If there is no sweep data, log a message
    if (!sweeps || sweeps.length === 0) {
        console.log("No sweep data available for this season.");
    }

    sweeps.forEach(sweep => {
        const row = document.createElement('tr');

        // Debugging: Log the sweep data and check if team IDs exist
        console.log("Sweep entry:", sweep);
        console.log("Team IDs: ", sweep.swept, sweep.sweptBy);

        // Ensure the team IDs exist in the `teams` object
        const teamThatSwept = teams[sweep.sweptBy] || `${sweep.sweptBy}`; // Log missing teams if any
        const teamThatWasSwept = teams[sweep.swept] || `${sweep.swept}`; // Log missing teams if any

        // Log what teams are being displayed
        console.log(`Team that swept: ${teamThatSwept}, Team that was swept: ${teamThatWasSwept}`);

        // Insert each column data into the row
        row.innerHTML = `
            <td class="team-name">${teamThatSwept}</td>
            <td class="team-name">${teamThatWasSwept}</td>
            <td>${sweep.date}</td>
            <td>${sweep.games}</td>
            <td><a class="link" href="${sweep.link}" target="_blank">Game Link</a></td>
        `;
        
        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

// Event listener for when the season dropdown changes
document.getElementById('season-dropdown').addEventListener('change', function(event) {
    const selectedSeason = event.target.value; // Get the selected season
    loadSeasonData(selectedSeason); // Load the corresponding data for that season
});
