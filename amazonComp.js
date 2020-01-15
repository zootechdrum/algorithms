//This function is supposed to return the top competitors for amazon. 
//The amount of competitors indicated as topNCompetitors is the amount of competitors 
//that should return from the function.

//For example if topNcompany is equal 2. Then only 2 companies need to return

function topNCompetitors(
    numCompetitors,
    topNCompetitors,
    competitors,
    numReviews,
    reviews
  ) {
    const company = {};
    const topCompany = [];
    let mentions = 0;
  
    //Loop that will itereate over all competitiors and set their mentions to 0
    for (let i = 0; i < numCompetitors; i++) {
      company[competitors[i]] = 0;
    }
  
    //Iterates over competitors and reviews and checks to see if review conatins company name
    //if it does then the company mentions is going to increase by +1.
    for (let j = 0; j < numCompetitors; j++) {
      for (let k = 0; k < numReviews; k++) {
        if (reviews[k].indexOf(competitors[j]) > -1) {
          company[competitors[j]] = +company[competitors[j]] + 1;
        }
      }
    }
    //Loop that runs until topCompanies has the number of competitiors required by function to return
  
    while (topCompany.length !== topNCompetitors) {
      //get values from company object
      const arr = Object.values(company);
      //gets the max value of the array
      const max = Math.max(...arr);
      //sets mentions to max.
      mentions = max;
  
      for (const property in company) {
        if (company[property] === max) {
          topCompany.push(property);
          company[property] = 0;
          if (topCompany.length === topNCompetitors) {
            console.log(topCompany);
            return topCompany;
          }
        }
      }
    }
  }
  topNCompetitors(3, 2, ["ana", "bell", "goods", "ZZ"], 4, [
    "I order from ZZ",
    "bell is cool",
    "this was ana",
    "bell was great",
    "bell was awesome",
    "this was ana",
    "this was ana",
    "I order from ZZ",
    "I order from ZZ"
  ]);
  