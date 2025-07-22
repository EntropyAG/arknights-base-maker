class Operator {

	id;
	elite; // 0, 1, 2
	skills; // As retrieved from original config files, check building_data.chars.{any}.buffChar

	constructor(id, elite) {
		if(id === undefined || elite === undefined || id === null || elite === null){
			throw new Error("Operators must be initialized by specifying both their ID and promotion level");
		}
		this.id = id;
		this.elite = elite;
	}

	getSkills(){
		if(!this.skills){
			this.skills = BUILDING_DATA.chars[this.id].buffChar;
		}
		return this.skills;
	}

	getActiveSkills(){
		let activeSkills = [];
		for(let buff of this.getSkills()){
			// Operators may have a skill that gets upgraded/replaced with promotion, so we gotta
			// grab the highest one possible for their promotion level.
			// We go in reverse order to grab the best skill
			for(let i=buff.buffData.length; i>0; i--){
				if(parseInt(buff.buffData[i-1].cond.phase.split("_")[1]) <= this.elite){
					activeSkills.push(buff.buffData[i-1]);
					break;
				}
			}
		}
		return activeSkills;
	}
}