class KroosterAdapter {

	// Singleton
	constructor() {
		if (KroosterAdapter._instance) {
			return KroosterAdapter._instance;
		}
		KroosterAdapter._instance = this;

	}

    retrieve(username){
        if(!username){
            let input = JSON.parse(document.getElementById("krooster").value);
            return this.processOperators(input);
        }

        this.fetchKroosterApiUserData(username);
    }

    fetchKroosterApiUserData(username){
        fetch("https://www.krooster.com/api/u/"+username).then(function(response) {
            return response.json();
          }).then(function(response) {
            let operators = kroosterAdapter.processOperators(response.data.roster);
            kroosterAdapter.forwardPlan(operators);
          }).catch(function(err) {
            console.log("Fetch Error:", err);
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
            operators.push(new Operator(operator.op_id, operator.elite));
        }
        return operators;
    }

    forwardPlan(operators){
        akPlanner.planify(
            operators,
            {
                "FAC3": parseInt(document.getElementById("lvl3fac").value),
                "FAC2": parseInt(document.getElementById("lvl2fac").value),
                "TP3": parseInt(document.getElementById("lvl3tp").value),
                "TP2": parseInt(document.getElementById("lvl2tp").value),
                "HR": parseInt(document.getElementById("lvlHR").value),
                "DORM": parseInt(document.getElementById("highestDorm").value),
                "PP": parseInt(document.getElementById("ppCount").value),
            },
            document.getElementById("moraleMicro").checked,
            document.getElementById("assumeE1").checked
        );
    }
}

let kroosterAdapter = new KroosterAdapter();