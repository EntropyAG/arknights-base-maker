class Base {

	controlCenter = 1;
	production = [];
	dorms = [];
	receptionRoom = 0;
	workshop = 0;
	office = 0;
	trainingRoom = 0;

	constructor(setup) {
		if(setup === null || setup === undefined){
			throw new Error("The base must be initialized by describing all its facilities and levels");
		}
		this.initializeBase(setup);
	}

	/**
	 * Initialize a base based on inputs, fulling describing each facility type (e.g: factory)
	 * and level (1, 2, 3 or 0 if unbuilt)
	 * @param {Object} setup: object containing the full base description, requires a structure as follows:
	 * {
	 *   controlCenter: Integer[1-5],
	 *   production:    Array(length = 9) of Object{ type: [FAC/TP/PP], level: [0-3] },
	 *   dorms:         Array(length = 4) of Integer[0-5],
	 *   receptionRoom: Integer[0-3],
	 * 	 workshop:      Integer[0-3],
	 * 	 trainingRoom:  Integer[0-3],
	 * 	 office:        Integer[0-3]
	 * }
	 */
	initializeBase(setup){
		// Command Center - a single integer matching the CC's level
		if(!setup.controlCenter){
			throw new Error("Command center level must be an integer between 1 and 5");
		}
		this.controlCenter = setup.controlCenter;

		// Left-side facilities - an array of objects, containing a type and level fields
		if(!setup.production || setup.production.length !== 9){
			throw new Error("The array describing left-side production must have a length of 9");
		}

		for(let facility of setup.production){
			if(!facility.type || !facility.level){
				throw new Error("Each facility on the left side must have a defined type and level");
			}

			if(!["PP","FAC","TP"].includes(facility.type)){
				throw new Error("Left-side facilities must have a type between: PP, FAC, TP");
			}

			if(facility.level < 0 || facility.level > 3){
				throw new Error("Left-side facilities must have a level from 0 (unbuilt) to 3");
			}

			this.production.push({
				"type": facility.type,
				"level": facility.level
			});
		}

		// Dorms - an array of 4 integers, each matching a dorm level
		if(!setup.dorms || setup.dorms.length !== 4){
			throw new Error("The array describing dorms production must have a length of 4");
		}

		for(let dorm of setup.dorms){
			if(dorm < 0 || dorm > 5){
				throw new Error("Dorms must have a level from 0 (unbuilt) to 5");
			}

			this.dorms.push(dorm);
		}

		// Right side (Reception Room, Workshop, Training Room and Office)
		for(let facility of ["receptionRoom","workshop","trainingRoom","office"]){
			if(setup[facility] === undefined || setup[facility] === null){
				throw new Error("Right-side facilities must have a level between 0 (unbuilt) and 3.");
			}

			this[facility] = setup[facility];
		}
	}

	getHighestDormLevel(){
		let currentHighest = 0;
		for(let dorm of this.dorms){
			if(dorm > currentHighest){
				currentHighest = dorm;
			}
		}
		return currentHighest;
	}

	getSumOfDormLevels(){
		let sum = 0;
		for(let dorm of this.dorms){
			sum += dorm;
		}
		return sum;
	}

	getSumOfFacilityLevels(){
		let sum = this.controlCenter
			+ this.receptionRoom
			+ this.workshop
			+ this.trainingRoom
			+ this.office
			+ this.getSumOfDormLevels()
		;

		for(let facility of this.production){
			sum += facility.level;
		}

		return sum;
	}

	getPowerPlantCount(){
		let count = 0;
		for(let facility of this.production){
			if(facility.type === "PP"){
				count++;
			}
		}
		return count;
	}

	getTradingPostCount(){
		let count = 0;
		for(let facility of this.production){
			if(facility.type === "TP"){
				count++;
			}
		}
		return count;
	}
}