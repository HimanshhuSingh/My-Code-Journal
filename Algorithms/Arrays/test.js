function distributeTeams(skills) {
    skills.sort((a, b) => b - a);
    let team1 = [];
    let team2 = [];
    let sum1 = 0;
    let sum2 = 0;
    for(let i=0;i<skills.length;i++){
        if(sum1<=sum2  || team2.length>=skills.length/2){
            team1.push(skills[i]);
            sum1 += skills[i];
        }
        else{
            team2.push(skills[i]);
            sum2 += skills[i];
        }
    }
    console.log(team1, team2);
}