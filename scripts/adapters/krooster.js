class KroosterAdapter {

	// Singleton
	constructor() {
		if (KroosterAdapter._instance) {
			return KroosterAdapter._instance;
		}
		KroosterAdapter._instance = this;

	}

    fetchKroosterApiUserData(username){
        fetch("https://www.krooster.com/api/u/"+username).then(function(response) {
            return response.json();
          }).then(function(response) {
            let operators = kroosterAdapter.processOperators(response.data.roster);
            kroosterAdapter.forwardPlan(operators);
          }).catch(function(err) {
            console.log("Fetch Error while attempting to retrieve account data from Krooster:", err);
          });
    }

    processOperators(input){
        let operators = [];
        if(!(input instanceof Array)){
            input = Object.values(input);
        }
        for(let operator of input){
            if(INVALID_OPERATORS.indexOf(operator.op_id) !== -1){
                continue;
            }
            let tableMatch = CHARACTER_TABLE[operator.op_id];
            operators.push(new Operator(
              operator.op_id,
              operator.elite,
              tableMatch.appellation,
              parseInt(tableMatch.rarity.split("_")[1]),
            ));
        }
        return operators;
    }

    forwardPlan(operators){
        let base = new Base({
          controlCenter: 5,
          production:[
            { type: "PP", level: 3 },
            { type: "PP", level: 3 },
            { type: "TP", level: 3 },
            { type: "TP", level: 2 },
            { type: "FAC", level: 3 },
            { type: "FAC", level: 3 },
            { type: "FAC", level: 2 },
            { type: "FAC", level: 2 },
            { type: "FAC", level: 2 },
          ],
          dorms: [2,1,1,1],
          receptionRoom: 3,
          workshop:      3,
          trainingRoom:  3,
          office:        3
        });
        akPlanner.planify(
            operators,
            base,
            document.getElementById("moraleMicro").checked,
            document.getElementById("assumePromotionLevel").value
        );
    }
}

let kroosterAdapter = new KroosterAdapter();