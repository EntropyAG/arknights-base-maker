class Planner {


    // Singleton
    constructor() {
        if (Planner._instance) {
            return Planner._instance;
        }
        Planner._instance = this;
    }

    /**
     * Using a list of input operators and a base setup, sends back a 3-tiered rotation
     * 
     * @param {Array[Operator]} operators: list of operators owned by the player, as imported
     * @param {Object} setup: object with 4 properties indicating the number and levels of FAC/TPs
     * @param {Boolean} isMoraleMicro: true if the player is willing to micromanage the morale of specific
     * operators, such as Dusk / Ling in a PI combo or some workshop operators requiring those in dorm to have
     * a morale below a certain threshold
     * @param {Boolean} isAssumeE1: true if 4* or lower rarity operators are considered to be E1. This is because
     * upgrading them to E1 lvl 1 for base purposes is extremely cheap and has a very short delay to pay back the
     * investment required. For instance, newer players may not realize that Purestream is a a large 40/60% gold
     * productivity depending on setup, so it makes it easier to spot easy ways to improve the base.
     */
    planify(operators, setup, isMoraleMicro, isAssumeE1) {

        /***************************************************************
         ********** Evaluating combos and available operators **********
         ***************************************************************/

        // ========== SPECIAL ==========

        let piSrSquadScore = this.evaluatePerceptionInformationSoundlessResonance(operators, setup, isMoraleMicro);
        console.log(piSrSquadScore);
        let wpSquadScore = this.evaluateWordlyPlight(operators, setup, isMoraleMicro);
        console.log(wpSquadScore);
        let automationScore = this.evaluateAutomation(operators, setup);
        console.log(automationScore);
        let pinusScore = this.evaluatePinus(operators, setup, isAssumeE1);
        console.log(pinusScore);
        let glasgowScore = this.evaluateGlasgow(operators, setup, isAssumeE1);
        console.log(glasgowScore);
        let karlanScore = this.evaluateKarlanTrade(operators, setup, isAssumeE1);
        console.log(karlanScore);
        let monhunScore = this.evaluateMonHun(operators);
        console.log(monhunScore);
        let abyHuntScore = this.evaluateAbyssalHunters(operators);
        console.log(abyHuntScore);
        let jessBSWScore = this.evaluateJessicaBSW(operators);
        console.log(jessBSWScore);
        let dunMesScore = this.evaluateDungeonMeshi(operators);
        console.log(dunMesScore);
        let babelScore = this.evaluateBabel(operators);
        console.log(babelScore);
        let puddingScore = this.evaluatePudding(operators, isAssumeE1);
        console.log(puddingScore);

        // ========== FACTORY ==========

        // ---------- Teams ----------

        //let vermeilExpScore = this.evaluateVermeilExp(operators, assumeE1);
        //console.log(vermeilExpScore);


        // ---------- Singles ----------

        // ========== TRADING POST ==========

        // ---------- Teams ----------

        // ---------- Singles ----------

        // ========== RECEPTION ROOM ==========

        // ---------- Teams ----------
        // Any team that requires both operators

        // ---------- Solos ----------
        // Any operator that requires the 2nd slot to be empty

        // ---------- Singles ----------

        // ========== POWER PLANT ==========

        // ========== HUMAN RESOURCES (OFFICE) ==========

        /********************************************************************
         ********** Planning the rotations based on above findings **********
         ********************************************************************/


    }

    /**
     * Evaluate the player's roster to see whether it's viable to run PI/SR
     * @param {Array[Operator]} operators: list of operators owned by the player, as imported
     * @returns {Object}: with "rosmonPD" and "ebenPD" and their respective productivity
     * given the other operators
     */
    evaluatePerceptionInformationSoundlessResonance(operators, setup, isMoraleMicro) {
        let totalPI = 0;
        let totalSR = 0;
        let useDusk = false;
        let useLing = false;
        let useWhisperain = false;
        let useSaileach = false;
        let useArturia = false;
        let useCzerny = false;
        let useIris = false;

        // Dusk & Ling require micromanaging their morale for PI generation, so skip if the player doesn't want to
        if (isMoraleMicro) {
            let ling = operators.find(e => e.id === "char_2023_ling");
            let dusk = operators.find(e => e.id === "char_2015_dusk");
            if (ling && ling.elite === 2) {
                useLing = true;
                totalPI += 10;
            }

            if (dusk) {
                useDusk = true;
                totalPI += 10;
            }
        }

        // Next to see if we can add Whisperain (and possibly Saileach) to generate more PI
        let whisperain = operators.find(e => e.id === "char_436_whispr");
        if (whisperain && whisperain.elite === 2) {
            if (setup.HR === 2) {
                totalPI += 10;
                useWhisperain = true;
            } else if (setup.HR === 3) {
                totalPI += 20;
                useWhisperain = true;
            }

            let saileach = operators.find(e => e.id === "char_479_sleach");
            if (useWhisperain && saileach && saileach.elite === 2) {
                useSaileach = true;
            }
        }

        // Now to see how much SR/PI we get from dorms
        let arturia = operators.find(e => e.id === "char_245_cello");
        let czerny = operators.find(e => e.id === "char_4047_pianst");
        let iris = operators.find(e => e.id === "char_338_iris");
        if (arturia) {
            totalSR += 5;
            useArturia = true;
        }
        if (czerny && czerny.elite === 2) {
            totalPI += setup.DORM;
            useCzerny = true;
        }
        if (iris && iris.elite === 2) {
            totalPI += setup.DORM;
            useIris = true;
        }

        // Now for Roscat & Eben, first we take into account their first skill
        let rosmontis = operators.find(e => e.id === "char_391_rosmon");
        let ebenholz = operators.find(e => e.id === "char_4046_ebnhlz");
        if (rosmontis) {
            totalPI += 20;
        }
        if (ebenholz) {
            totalPI += 20;
            if (ebenholz.elite === 2) {
                totalSR += Math.floor(totalPI / 2);
            } else {
                totalSR += Math.floor(totalPI / 4);
            }
        }

        return {
            "rosmonPD": rosmontis ? totalPI : 0,
            "ebenPD": ebenholz ? totalSR : 0,
            "useWhisperain": useWhisperain,
            "useSaileach": useSaileach,
            "useArturia": useArturia,
            "useCzerny": useCzerny,
            "useIris": useIris,
            "useDusk": useDusk,
            "useLing": useLing,
        };
    }

    /**
     * Evaluate the player's roster to see whether it's viable to run WP.
     */
    evaluateWordlyPlight(operators, setup, isMoraleMicro) {
        let totalWP = 0;
        let useDusk = false;
        let useLing = false;
        let useMulberry = false;
        let useSaileach = false;
        let useMrNothing = false;
        let useChongyue = false;
        let useNian = false;
        let useShu = false;
        let useYu = false;
        let useJieyun = false;

        // Dusk & Ling require micromanaging their morale for PI generation, so skip if the player doesn't want to
        if (isMoraleMicro) {
            let ling = operators.find(e => e.id === "char_2023_ling");
            let dusk = operators.find(e => e.id === "char_2015_dusk");
            if (ling && ling.elite === 2) {
                useLing = true;
                totalWP += 15;
            }

            if (dusk) {
                useDusk = true;
                totalWP += 15;
            }
        }

        // Next to see if we can add Mulberry (and possibly Saileach) to generate more PI
        let mulberry = operators.find(e => e.id === "char_473_mberry");
        if (mulberry && mulberry.elite === 2) {
            if (setup.HR === 2) {
                totalWP += 10;
                useMulberry = true;
            } else if (setup.HR === 3) {
                totalWP += 20;
                useMulberry = true;
            }

            let saileach = operators.find(e => e.id === "char_479_sleach");
            if (useMulberry && saileach && saileach.elite === 2) {
                useSaileach = true;
            }
        }

        // Mr. Nothing. Only the WP part, the productivity is at the end
        let mrNothing = operators.find(e => e.id === "char_455_nothin");
        if (mrNothing && mrNothing.elite === 2) {
            totalWP += 20;
            useMrNothing = true;
        }

        // On to Chungus... We have to count how many Sui siblings can be put in the base
        let chongyue = operators.find(e => e.id === "char_2024_chyue");
        let nian = operators.find(e => e.id === "char_2014_nian");
        let shu = operators.find(e => e.id === "char_2025_shu");
        let yu = operators.find(e => e.id === "char_2026_yu");
        if (chongyue) {
            useChongyue = true;
            totalWP += 5;
            if (nian) {
                useNian = true;
                totalWP += 5;
            }

            if (shu) {
                useShu = true;
                totalWP += 5;
            }

            if (yu) {
                useYu = true;
                totalWP += 5;
            }

            if (useDusk) {
                totalWP += 5;
            }

            if (useLing) {
                totalWP += 5;
            }
        }

        // Separate check for Shu that doesn't depend on Chungus, since she can provide FAC productivity with WP
        if (shu && shu.elite === 2) {
            useShu = true;
        }

        // Jieyun check, even at E0 there is some productivity, even if that's not really worth really
        let jieyun = operators.find(e => e.id === "char_4078_bdhkgt");
        let jieyunPD = 0;
        if (jieyun) {
            useJieyun = true;
            jieyunPD = Math.floor(totalWP / 5);
            if (jieyun.elite === 2) {
                jieyunPD = Math.floor(totalWP / 5) * 2;
            }
        }

        return {
            "totalWP": totalWP,
            "useDusk": useDusk,
            "useLing": useLing,
            "useMulberry": useMulberry,
            "useSaileach": useSaileach,
            "useMrNothing": useMrNothing,
            "useNian": useNian,
            "useChongyue": useChongyue,
            "useShu": useShu,
            "useYu": useYu,
            "useJieyun": useJieyun,
            "mrNothingPD": useMrNothing ? totalWP : 0,
            "jieyunPD": useJieyun ? jieyunPD : 0,
            "shuPD": useShu ? Math.floor(totalWP / 3) : 0,
        };
    }

    /**
     * Evaluate the player's roster to see whether it's viable to automation.
     */
    evaluateAutomation(operators, setup) {
        let ppCount = setup.PP;
        let isLancetDead = false;
        let isLancetUsed = false;
        let isGreyyaltUsed = false;
        let isEunectesUsed = false;
        let isWeedyUsed = false;
        let isPassengerUsed = false;
        let isPurestreamUsed = false;
        let isWindflitUsed = false;
        let weedyPD = 0;
        let passengerPD = 0;
        let windflitPD = 0;
        let purestreamPD = 0;

        // First, we check for virtual power plants with Greyy alter/Zumama since they influence the other ops
        let greyyalt = operators.find(e => e.id === "char_1027_greyy2");
        if (greyyalt && greyyalt.elite === 2) {
            ppCount += 1;
            isLancetDead = true;
            isGreyyaltUsed = true;
        }

        let eunectes = operators.find(e => e.id === "char_416_zumama");
        if (eunectes && eunectes.elite === 2) {
            ppCount += 2;
            isEunectesUsed = true;
            isLancetUsed = true;
        }

        // Now to cover all the automation skills
        let weedy = operators.find(e => e.id === "char_400_weedy");
        if (weedy) {
            isWeedyUsed = true;
            weedyPD = ppCount * 10;
            if (weedy.elite === 2) {
                weedyPD = ppCount * 15;
            }
        }

        let purestream = operators.find(e => e.id === "char_385_finlpp");
        if (purestream && purestream.elite >= 1) {
            isPurestreamUsed = true;
            purestreamPD = (setup.TP3 + setup.TP2) * 20;
        }

        // Returns on Passenger & Windflit are too low with a 2 PP setup, with a measly 20% at full potential
        if (setup.PP === 3) {
            let passenger = operators.find(e => e.id === "char_472_pasngr");
            if (passenger && passenger.elite === 2) {
                isPassengerUsed = true;
                passengerPD = ppCount * 5;
            }

            // We only add Windflit if passenger is not used, due to the 3 slot limitation
            let windflit = operators.find(e => e.id === "char_433_windft");
            if (!isPassengerUsed && windflit && windflit.elite === 2) {
                isWindflitUsed = true;
                windflitPD = ppCount * 5;
            }
        }

        return {
            "isGreyyaltUsed": isGreyyaltUsed,
            "isWindflitUsed": isWindflitUsed,
            "isPassengerUsed": isPassengerUsed,
            "isEunectesUsed": isEunectesUsed,
            "isWeedyUsed": isWeedyUsed,
            "isLancetUsed": isLancetUsed,
            "isLancetDead": isLancetDead,
            "isPurestreamUsed": isPurestreamUsed,
            "weedyPD": weedyPD,
            "passengerPD": passengerPD,
            "windflitPD": windflitPD,
            "purestreamPD": purestreamPD,
            "totalPD": weedyPD + passengerPD + windflitPD + purestreamPD
        };
    }

    /**
     * Evaluate the player's roster to see whether it's viable to pinus sylvestris.
     * The evaluation first covers gold production, then EXP, since they are identical
     * apart from the introduction of Flametail
     */
    evaluatePinus(operators, setup, assumeE1) {
        let isVivianaUsed = false;
        let isWildmaneUsed = false;
        let isAshlockUsed = false;
        let isFartoothUsed = false;
        let isGravelUsed = false;
        let isJusticeKnightUsed = false;
        let wildmanePDGold = 0;
        let ashlockPDGold = 0;
        let fartoothPDGold = 0;
        let gravelPDGold = 0;

        // ============== Gold evaluation part ==============

        // Vivi first, since she is an amplifier for everyone
        let viviana = operators.find(e => e.id === "char_4098_vvana");
        if (viviana && viviana.elite === 2) {
            isVivianaUsed = true;
        }

        // Now for all FAC candidates
        let wildmane = operators.find(e => e.id === "char_496_wildmn");
        if (wildmane) {
            isWildmaneUsed = true;
            wildmanePDGold = 15;
            if (wildmane.elite === 2) {
                wildmanePDGold = 25;
            }

            if(isVivianaUsed){
                wildmanePDGold += 7;
            }

            let justiceKnight = operators.find(e => e.id === "char_4000_jnight");
            if(justiceKnight){
                isJusticeKnightUsed = true;
                wildmanePDGold += 5;
            }
        }

        let ashlock = operators.find(e => e.id === "char_431_ashlok");
        if (ashlock) {
            isAshlockUsed = true;
            ashlockPDGold = 15;
            if (ashlock.elite === 2) {
                ashlockPDGold = 25;
            }

            if(isVivianaUsed){
                ashlockPDGold += 7;
            }
        }

        let fartooth = operators.find(e => e.id === "char_430_fartth");
        if (fartooth) {
            isFartoothUsed = true;
            fartoothPDGold = 15;
            if (fartooth.elite === 2) {
                fartoothPDGold = 25;
            }

            if(isVivianaUsed){
                fartoothPDGold += 7;
            }
        }

        let gravel = operators.find(e => e.id === "char_237_gravel");
        if (gravel && (gravel.elite >= 1 || assumeE1)) {
            isGravelUsed = true;
            gravelPDGold = 35;

            if(isVivianaUsed){
                gravelPDGold += 7;
            }
        }

        let goldScore = {
            "isVivianaUsed": isVivianaUsed,
            "isWildmaneUsed": isWildmaneUsed,
            "isGravelUsed": isGravelUsed,
            "isAshlockUsed": isAshlockUsed,
            "isFartoothUsed": isFartoothUsed,
            "isJusticeKnightUsed": isJusticeKnightUsed,
            "wildmanePDGold": wildmanePDGold,
            "ashlockPDGold": ashlockPDGold,
            "fartoothPDGold": fartoothPDGold,
            "gravelPDGold": gravelPDGold,
            "totalPD": wildmanePDGold + ashlockPDGold + fartoothPDGold + gravelPDGold
        };

        // ============== EXP evaluation part ==============
        let isFlametailUsed = false;
        let flametail = operators.find(e => e.id === "char_420_flamtl");
        let wildmanePDEXP = wildmanePDGold;
        let ashlockPDEXP = ashlockPDGold;
        let fartoothPDEXP = fartoothPDGold;
        if (flametail && flametail.elite === 2) {
            isFlametailUsed = true;
            wildmanePDEXP = isWildmaneUsed ? wildmanePDGold + 10 : 0;
            ashlockPDEXP = isAshlockUsed ? ashlockPDGold + 10 : 0;
            fartoothPDEXP = isFartoothUsed ? fartoothPDGold + 10 : 0;
        }

        // Adjusting Gravel's prod if Flametail is being used.
        // For later calculations regarding rotations, Gravel will preferably be put on an async rotation
        // with only Vivi in CC or just used without Vivi/Flametail at all, for, e.g, a Bryophita metalwork team
        let gravelPDFlametail = gravelPDGold;
        if(isFlametailUsed && isGravelUsed){
            gravelPDFlametail -= 10;
        }

        let expScore = {
            "isFlametailUsed": isFlametailUsed,
            "isVivianaUsed": isVivianaUsed,
            "isWildmaneUsed": isWildmaneUsed,
            "isGravelUsed": isGravelUsed,
            "isAshlockUsed": isAshlockUsed,
            "isFartoothUsed": isFartoothUsed,
            "isJusticeKnightUsed": isJusticeKnightUsed,
            "wildmanePDEXP": wildmanePDEXP,
            "ashlockPDEXP": ashlockPDEXP,
            "fartoothPDEXP": fartoothPDEXP,
            "gravelPDGold": gravelPDFlametail,
            "totalPD": wildmanePDEXP + ashlockPDEXP + fartoothPDEXP + gravelPDFlametail
        };

        return {
            "exp": expScore,
            "gold": goldScore
        };
    }

    /**
     * Evaluate the player's roster to see whether it's viable to use the Glasgow Gang
     */
    evaluateGlasgow(operators) {
        // Morgan is the reason this squad is valid in the first place, hence why the early quit if she isn't built
        let morgan = operators.find(e => e.id === "char_154_morgan");
        if(!morgan || morgan.elite !== 2){
            return {
                "isMorganUsed": false,
                "isDelphineUsed": false,
                "isSiegeUsed": false,
                "isVinaUsed": false,
                "isIndraUsed": false,
                "isDagdaUsed": false,
                "totalPRD": 0
            };
        }

        let isMorganUsed = true;
        let isDelphineUsed = false;
        let isSiegeUsed = false;
        let isVinaUsed = false;
        let isIndraUsed = false;
        let isDagdaUsed = false;
        let totalPRD = 20; // Default for Morgan herself
        let delphine = operators.find(e => e.id === "char_4110_delphn");
        if(delphine && delphine.elite === 2){
            isDelphineUsed = true;
        }

        let siege = operators.find(e => e.id === "char_112_siege");
        if(siege){
            isSiegeUsed = true;
            totalPRD += 35;
        }

        // Vina isn't considered Glasgow, so she doesn't benefit from Morgan's 20%
        let vina = operators.find(e => e.id === "char_1019_siege2");
        if(vina){
            isVinaUsed = true;
            if(vina.elite === 2){
                totalPRD += 40;
            }else{
                totalPRD += 30;
            }
        }

        let currCount = this.__checkOperatorCount(isMorganUsed, isSiegeUsed, isIndraUsed, isDagdaUsed);
        if(currCount < 3){
            // Indra check
            let indra = operators.find(e => e.id === "char_155_tiger");
            if(indra){
                isIndraUsed = true;
                totalPRD += 20;
            }

            // Dagda check
            currCount = this.__checkOperatorCount(isMorganUsed, isSiegeUsed, isIndraUsed, isDagdaUsed);
            if(currCount < 3){
                let dagda = operators.find(e => e.id === "char_157_dagda");
                if(dagda){
                    isDagdaUsed = true;
                    totalPRD += 20;
                }
            }
        }

        if(isDelphineUsed){
            totalPRD +=  Math.min(currCount, 3) * 10;
        }

        return {
            "isMorganUsed": isMorganUsed,
            "isDelphineUsed": isDelphineUsed,
            "isSiegeUsed": isSiegeUsed,
            "isVinaUsed": isVinaUsed,
            "isIndraUsed": isIndraUsed,
            "isDagdaUsed": isDagdaUsed,
            "totalPRD": totalPRD
        };
    }

    /**
     * Evaluate the player's roster to see whether it's viable for Karlan Trade.
     * Because there are plenty of operators combos to test, we kinda have to list all the possible
     * combos within a TP
     */
    evaluateKarlanTrade(operators, setup) {
        let gnosis = operators.find(e => e.id === "char_206_gnosis");
        // No point in trying unless there is Gnosis, operators otherwise have subpar performance
        if(!gnosis || (gnosis && gnosis.elite < 2)){
            return {
                "isGnosisUsed": false
            };
        }

        let swireAlt = operators.find(e => e.id === "char_1033_swire2");
        let silverAsh = operators.find(e => e.id === "char_172_svrash");
        let degenbrecher = operators.find(e => e.id === "char_4116_blkkgt");
        let cliffheart = operators.find(e => e.id === "char_173_slchan");
        let courier = operators.find(e => e.id === "char_198_blackd");
        let matterhorn = operators.find(e => e.id === "char_199_yak");
        let jaye = operators.find(e => e.id === "char_272_strong");

        let operatorsToTest = [
            swireAlt, silverAsh, degenbrecher, cliffheart, courier, matterhorn, jaye
        ].filter(e => e !== undefined);

        let squads = this.__composeSquadsOf3(operatorsToTest);
        let bestPerforming;
        for(let squad of squads){
            let results = this.__getTradingPostStats(squad);
            if(!bestPerforming || results.totalProductivity > bestPerforming.totalProductivity){
                bestPerforming = results;
            }
        }

        return {
            "isGnosisUsed": true,
            "squad": bestPerforming
        };
    }

    /**
     * Evaluate the player's roster to see whether it's viable to use MonHun (Monster Hunter)
     * units.
     */
    evaluateMonHun(operators) {
        let isYatoAlterUsed = false;
        let isNoirCorneAlterUsed = false;
        let isTRCUsed = false;
        let isVermeilUsed = false;
        let trcFacPD = 0;
        let trcTPPD = 0;

        let yatoAlter = operators.find(e => e.id === "char_1029_yato2");
        let noirCorneAlter = operators.find(e => e.id === "char_1030_noirc2");
        let trc = operators.find(e => e.id === "char_4077_palico");
        let vermeil = operators.find(e => e.id === "char_190_clour");

        if(yatoAlter){
            isYatoAlterUsed = true;
        }

        if(noirCorneAlter){
            isNoirCorneAlterUsed = true;
        }

        // ========== TRC productivity ===========

        if(trc){
            trcFacPD = 5;
            trcTPPD = 5;
            isTRCUsed = true;

            if(isYatoAlterUsed){
                trcFacPD += 8;
                trcTPPD += 24;
            }

            if(isNoirCorneAlterUsed){
                trcFacPD += 4;
                trcTPPD += 12;
            }

            if(vermeil){
                isVermeilUsed = true;
                trcFacPD += 16;
            }
        }

        return {
            "isYatoAlterUsed": isYatoAlterUsed,
            "isNoirCorneAlterUsed": isNoirCorneAlterUsed,
            "isTRCUsed": isTRCUsed,
            "isVermeilUsed": isVermeilUsed,
            "facPD": trcFacPD,
            "tpPD": trcTPPD,
            "hasFacBuff": yatoAlter && yatoAlter.elite === 2,
            "hasTPBuff": noirCorneAlter && noirCorneAlter.elite === 2
        };
    }

    /**
     * Evaluate the player's roster to see whether it's viable to use Abyssal Hunters.
     */
    evaluateAbyssalHunters(operators) {
        let isGladiiaUsed = false;
        let isSkadiUsed = false;
        let isSpecterUsed = false;
        let isUlpianusUsed = false;
        let isAndreanaUsed = false;
        let isUnderflowUsed = false;
        let ahPD = 0;
        let underflowPD = 0;

        let gladiia = operators.find(e => e.id === "char_474_glady");
        let skadi = operators.find(e => e.id === "char_263_skadi");
        let specter = operators.find(e => e.id === "char_143_ghost");
        let ulpianus = operators.find(e => e.id === "char_4145_ulpia");
        let andreana = operators.find(e => e.id === "char_218_cuttle");
        let underflow = operators.find(e => e.id === "char_4137_udflow");

        if(underflow){
            isUnderflowUsed = true;
            if(underflow.elite === 2){
                underflowPD = 30;
                if(ulpianus){
                    isUlpianusUsed = true;
                    underflowPD += 10;
                }
            }else{
                underflowPD = 25;
                if(ulpianus){
                    underflowPD += 5;
                    isUlpianusUsed = true;
                }
            }
        }

        if(gladiia){
            isGladiiaUsed = true;
            if(skadi){
                isSkadiUsed = true;
            }
            if(specter){
                isSpecterUsed = true;
            }
            if(andreana){
                isAndreanaUsed = true;
            }
            if(ulpianus){
                isUlpianusUsed = true;
            }

            let abyssalHunterFacCount = this.__checkOperatorCount(isSkadiUsed, isSpecterUsed, isAndreanaUsed, isUlpianusUsed);
            ahPD = abyssalHunterFacCount * 5;
            if(gladiia.elite === 2){
                ahPD *= 2;
            }
        }

        return {
            "isGladiiaUsed": isGladiiaUsed,
            "isSkadiUsed": isSkadiUsed,
            "isSpecterUsed": isSpecterUsed,
            "isUlpianusUsed": isUlpianusUsed,
            "isAndreanaUsed": isAndreanaUsed,
            "isUnderflowUsed": isUnderflowUsed,
            "ahPD": ahPD,
            "underflowPD": underflowPD
        };
    }

    /**
     * Evaluate the player's roster to see whether it's viable to use Jessica alter with
     * a BSW (BlackSteel Worldwide) squad, along with Mizuki for Standardization skills
     */
    evaluateJessicaBSW(operators) {
        let isJessicaAltUsed = false;
        let isMizukiUsed = false;
        let isAlmondUsed = false;
        let almondPD = 0;
        let jessicaAndVanillaPD = 25;
        let mizukiPD = 0;

        let jessicaAlt = operators.find(e => e.id === "char_1034_jesca2");
        let mizuki = operators.find(e => e.id === "char_437_mizuki");
        let almond = operators.find(e => e.id === "char_4105_almond");

        // There is no need to check for Vanilla and OG Jessica, no way people don't have them
        if(jessicaAlt && jessicaAlt.elite === 2){
            isJessicaAltUsed = true;
            jessicaAndVanillaPD += 5;
        }

        if(mizuki && mizuki.elite === 2){
            isMizukiUsed = true;
            mizukiPD = 40; // 25 from E2 + 3*5 from E0 and having 2 other standard skills
        }

        if(almond){
            isAlmondUsed = true;
            almondPD = 25;
            if(isJessicaAltUsed){
                almondPD += 5;
            }
            if(almond.elite === 2){
                // 2% for each BSW operators in base, including Almond, excluding Jessica alt, 3x cap
                almondPD += 6;
            }
        }

        return {
            "isJessicaAltUsed": isJessicaAltUsed,
            "isMizukiUsed": isMizukiUsed,
            "isAlmondUsed": isAlmondUsed,
            "almondPD": almondPD,
            "jessicaAndVanillaPD": jessicaAndVanillaPD * 2,
            "mizukiPD": mizukiPD,
            "totalJessVaniMizuAlmondPD": almondPD + jessicaAndVanillaPD * 2 + mizukiPD, // lvl 3 FAC + single Gold
            "totalJessVaniAlmondPD": almondPD + jessicaAndVanillaPD * 2 // Single lvl 3 FAC
        };
    }

    /**
     * Evaluate the player's roster to see whether it's viable to use Jessica alter with
     * a BSW (BlackSteel Worldwide) squad, along with Mizuki for Standardization skills
     */
    evaluateDungeonMeshi(operators, setup) {
        let isSenshiUsed = false;
        let isMarcilleUsed = false;
        let isLaiosUsed = false;
        let isChilchuckUsed = false;
        let monsterMeal = 0;
        let laiosSpeedRR = 0;
        let chilchuckTP = 0;
        let marcilleFAC = 0;

        let senshi = operators.find(e => e.id === "char_4143_sensi");
        let marcille = operators.find(e => e.id === "char_4141_marcil");
        let laios = operators.find(e => e.id === "char_4142_laios");
        let chilchuck = operators.find(e => e.id === "char_4144_chilc");

        if(senshi && senshi.elite === 2){
            isSenshiUsed = true;
            monsterMeal = setup.DORM;
        }

        // Laios
        if(laios){
            isLaiosUsed = true;
            laiosSpeedRR = 29; // 5% innate + 20% base + 4% from rarity
            // + 0/8/16% based on promotion level
            if(laios.elite === 1){
                laiosSpeedRR += 8;
            }else if(laios.elite === 2){
                laiosSpeedRR += 16;
                laiosSpeedRR += (monsterMeal * 2);
            }
        }

        // Marcille
        // FAC 20% base (E0) or 30% (E2), +1% per monster meal
        if(marcille){
            isMarcilleUsed = true;
            marcilleFAC = 20;
            if(marcille.elite === 2){
                marcilleFAC += 10;
                marcilleFAC += monsterMeal;
            }
        }

        // Chilchuck
        // TP 30% (+1 cap but w/e) and +1% per monster meal
        if(chilchuck){
            isChilchuckUsed = true;
            chilchuckTP = 30;
            if(chilchuck.elite === 2){
                chilchuckTP += monsterMeal;
            }
        }

        return {
            "isSenshiUsed": isSenshiUsed,
            "isLaiosUsed": isLaiosUsed,
            "isMarcilleUsed": isMarcilleUsed,
            "isChilchuckUsed": isChilchuckUsed,
            "monsterMeal": monsterMeal,
            "laiosSpeedRR": laiosSpeedRR,
            "chilchuckTP": chilchuckTP,
            "marcilleFAC": marcilleFAC
        };
    }

    /**
     * Evaluate the player's roster to see whether it's viable to use the Babel squad,
     * which is centered around the Control Center and features Amiya, Civilight Eterna,
     * Wisadel, Ines, Hoederer and OG W.
     */
    evaluateBabel(operators) {
        let isCEUsed = false;
        let isWisadelUsed = false;
        let isInesUsed = false;
        let isHoedererUsed = false;
        let isWUsed = false;
        let hoedererPD = 0;
        let hoedererCapTP = 0;
        let wisadelInesBuffRR = 0;
        let inesSpeedRR = 0;
        let ceBuffRR = 0;
        let mdDrainGlobal = 0;

        // We don't need to check for Amiya, since everyone has her and she only needs E0
        let ce = operators.find(e => e.id === "char_4134_cetsyr");
        let wisadel = operators.find(e => e.id === "char_1035_wisdel");
        let ines = operators.find(e => e.id === "char_4087_ines");
        let hoederer = operators.find(e => e.id === "char_4088_hodrer");
        let w = operators.find(e => e.id === "char_113_cqbw");

        if(ce && ce.elite === 2){
            isCEUsed = true;
            ceBuffRR += 15;
        }

        if(wisadel){
            isWisadelUsed = true;
            wisadelInesBuffRR += 5;
            hoedererCapTP = 1;
            if(wisadel.elite === 2){
                mdDrainGlobal = 0.1;
                hoedererCapTP = 2;
                if(isCEUsed){
                    mdDrainGlobal = 0.2;
                }
            }
        }

        if(ines){
            isInesUsed = true;
            // 5% innate + 20% skill + 5% rarity bonus + 16% elite2 + external buffs
            inesSpeedRR = 30 + ceBuffRR + wisadelInesBuffRR;
            if(ines.elite === 2){
                inesSpeedRR += 16;
            }
        }

        if(w){
            isWUsed = true;
        }

        if(hoederer){
            isHoedererUsed = true;
            hoedererPD = 25;
            if(isInesUsed){
                hoedererPD += 5;
            }

            if(hoederer.elite === 2){
                hoedererPD += 5;
                if(isWUsed){
                    hoedererPD += 5;
                }
            }

        }

        return {
            "isCEUsed": isCEUsed,
            "isWisadelUsed": isWisadelUsed,
            "isInesUsed": isInesUsed,
            "isHoedererUsed": isHoedererUsed,
            "isWUsed": isWUsed,
            "hoedererPD": hoedererPD,
            "hoedererCapTP": hoedererCapTP,
            "wisadelInesBuffRR": wisadelInesBuffRR,
            "inesSpeedRR": inesSpeedRR,
            "ceBuffRR": ceBuffRR,
            "mdDrainGlobal": mdDrainGlobal
        };
    }

    /**
     * Evaluate the player's roster to see whether it's viable to use Pudding and robots
     * to get that extra 2% FAC productivity.
     * A very mediocre team, as the 2% PD does not stack with similar buffs like Kal'tsit's,
     * yet requires sacrificing some PP productivity.
     */
    evaluatePudding(operators, isAssumeE1) {
        let isPuddingUsed = false;
        let isFristonUsed = false;
        let isJKUsed = false;
        let isConfessUsed = false;
        let isPhonorUsed = false;
        let isCastle3Used = false;
        let isThrmXUsed = false;

        // We don't need to check for Amiya, since everyone has her and she only needs E0
        let pudding = operators.find(e => e.id === "char_4004_pudd");

        let friston = operators.find(e => e.id === "char_4093_frston");
        let jk = operators.find(e => e.id === "char_4000_jnight");
        let confess = operators.find(e => e.id === "char_4188_confes");
        let phonor = operators.find(e => e.id === "char_4136_phonor");
        let castle3 = operators.find(e => e.id === "char_286_cast3");
        let thrmx = operators.find(e => e.id === "char_376_therex");

        if(pudding && (pudding.elite >= 1 || isAssumeE1)){
            isPuddingUsed = true;
        }

        if(friston) isFristonUsed = true;
        if(jk) isJKUsed = true;
        if(confess) isConfessUsed = true;
        if(phonor) isPhonorUsed = true;
        if(castle3) isCastle3Used = true;
        if(thrmx) isThrmXUsed = true;

        return {
            "isPuddingUsed": isPuddingUsed,
            "isFristonUsed": isFristonUsed,
            "isJKUsed": isJKUsed,
            "isConfessUsed": isConfessUsed,
            "isPhonorUsed": isPhonorUsed,
            "isCastle3Used": isCastle3Used,
            "isThrmXUsed": isThrmXUsed,
            "isLancetUsed": true
        };
    }

    /**
     * Evaluate the player's roster to see the best partners for Vermeil (EXP version)
     */
    evaluateVermeilExp(operators, isAssumeE1) {
        let vermeil = operators.find(e => e.id === "char_190_clour");
        if(!vermeil || (vermeil && vermeil.elite === 0 && !isAssumeE1)){
            return {
                "isVermeilUsed": false
            };
        }

        let scene = operators.find(e => e.id === "char_336_folivo");
        let pallas = operators.find(e => e.id === "char_485_pallas");
        let ceobe = operators.find(e => e.id === "char_2013_cerber");
        let executorAlter = operators.find(e => e.id === "char_1032_excu2");
        let click = operators.find(e => e.id === "char_328_cammou");
        let tragodia = operators.find(e => e.id === "char_1042_phatm2");
        let msChristine = operators.find(e => e.id === "char_4198_christ");

        let operatorsToTest = [
            scene, pallas, ceobe, executorAlter, click, tragodia, msChristine
        ].filter(e => e !== undefined);

        // We build squads of 2, since Vermeil will always be in the first slot
        let squads = this.__composeSquadsOf2(operatorsToTest);
        let bestPerforming;
        for(let squad of squads){
            squad.push(vermeil);
            let results = this.__getFactoryStats(squad);
            if(!bestPerforming || results.totalProductivity > bestPerforming.totalProductivity){
                bestPerforming = results;
            }
        }

        // Extra check for Tragodia + Ms Christine, as they are best paired

        return {
            "isVermeilUsed": true,
            "squad": bestPerforming
        };
    }

    // ================ Internal functions used by above planners ================

    /**
     * Given a list of booleans, returns an integer matching how many are true, used for counting ops
     * @param  {...any} opsUsed: a list of booleans each matching whether an operator is used or not
     * @returns {Integer} count of operators used
     */
    __checkOperatorCount(...opsUsed){
        let count = 0;
        for(let opUsed of opsUsed){
            if(opUsed === true){
                count++;
            }
        }
        return count;
    }

    /**
     * Given a list of 3 operators, return the expected stats for a lvl 3 trading post
     * @param  {Array[Operator]} ops: An array containing 2 or 3 operators (functions with less)
     */
    __getTradingPostStats(ops, gnosisBuff = false){
        // As provided by the various operators, does not include the TP one
        let buffs = {
            "productivity_flat": 0,
            "productivity_per_external_cap": 0,
            "productivity_per_total_cap": 0,
            "productivity_per_diff_max_to_current": 0,
            "cap_flat": 0,
            "cap_per_10_external_productivity": 0,
            "productivity_per_5_external_cap": 0
        };

        for(let operator of ops){
            for(let skill of operator.getActiveSkills()){
                if(!SKILLS[skill.buffId]){
                    continue;
                }

                for(let effect of Object.keys(SKILLS[skill.buffId])){
                    if(buffs[effect] !== undefined){
                        buffs[effect] += SKILLS[skill.buffId][effect];
                    }
                }
            }

            // Gnosis effect added
            if(gnosisBuff && KARLAN_TRADE_OPERATORS.includes(operator.id)){
                buffs.productivity_flat -= 15;
                buffs.cap_flat += 6;
            }
        }

        // Capped at 100, not debuffed by Jaye
        let degenbrecherProductivity = Math.min(buffs.productivity_per_5_external_cap * Math.floor(buffs.cap_flat / 5), 100);

        let bonusCap =
            buffs.cap_flat
            // Jaye exclusive, cap reduction based on other ops productivity
            + buffs.cap_per_10_external_productivity * Math.floor((degenbrecherProductivity + buffs.productivity_flat) / 10);

        let totalProductivity =
            // Standard productivity
            buffs.productivity_flat
            // Swire alter exclusive
            + buffs.productivity_per_external_cap * bonusCap
            // Jaye exclusive
            + (
                + buffs.productivity_per_total_cap * (bonusCap + 10)
                + buffs.productivity_per_diff_max_to_current * (bonusCap + 10)
            ) / 2
            // Degenbrecher exclusive
            + degenbrecherProductivity
        ;

        return {
            "operator1": ops[0],
            "operator2": ops[1],
            "operator3": ops[2],
            "bonusCap": bonusCap,
            "totalCap": bonusCap + 10,
            "totalProductivity": totalProductivity
        };
    }

    /**
     * Given a list of 3 operators, return the expected stats for a factory
     * @param  {Array[Operator]} ops: An array containing 2 or 3 operators (functions with less)
     * @param  {Array[Object]} setup: An array listing details about the base (number of dorms,
     * FAC & TP distribution...)
     */
    __getFactoryStats(ops, setup){
        // As provided by the various operators
        let buffs = {
            // ======= General =======
            "productivity_flat": 0,
            "productivity_exp_flat": 0,
            "productivity_gold_flat": 0,
            "productivity_per_hour_5_stacks": 0,
            "cap_gold_flat": 0,
            "cap_exp_flat": 0,
            "cap_all_flat": 0,
            // ======= Specific combos =======
            // Tragodia / Ms Christine duo
            "tragodia_present": 0,
            "christine_feasting": 0,
            // Standardization (Mizuki/Highmore)
            "productivity_per_standard_skill": 0,
            "standardization_skill_count": 0,
            "convert_RT_PS_to_standard": 0,
            // Pinus Sylvestris
            "pinus_sylvestris_skill_count": 0,
            "has_wild_mane": 0,
            // Rhine Tech
            "productivity_per_rhine_tech_skill": 0,
            "rhine_tech_skill_count": 0,
            // Metalwork (Bryophyta, Thorns alter core)
            "productivity_per_metalwork": 0,
            "metalwork_skill_count": 0,
            // Vermeil
            "productivity_per_total_cap": 0,
            // Bubble
            "productivity_per_individual_cap_above_16": 0,
            "sum_of_cap_above_16": 0,
            // Narantuya
            "productivity_gold_per_dorm_sum": 0,
            // Thorns alter
            "productivity_gold_per_trading_post": 0,
            // Fang alter
            "productivity_per_A1_operator": 0

        };

        for(let operator of ops){
            for(let skill of operator.getActiveSkills()){
                if(!SKILLS[skill.buffId]){
                    continue;
                }

                for(let effect of Object.keys(SKILLS[skill.buffId])){
                    if(buffs[effect] !== undefined){
                        buffs[effect] += SKILLS[skill.buffId][effect];
                    }
                }
            }

            // ===== Complementary checks =====

            // sum_of_cap_above_16 (Bubble)
            // Bubble's skill takes precedence over Vermeil's skill

            // has_wild_mane (Wild Mane)
        }

        

        // Gold only
        let goldPD = productivity_gold_flat;

        // EXP only
        let expPD = 0;

        // Generalistic
        let allPD = 0;

        // Capped at 100, not debuffed by Jaye
        let degenbrecherProductivity = Math.min(buffs.productivity_per_5_external_cap * Math.floor(buffs.cap_flat / 5), 100);

        let bonusCap =
            buffs.cap_flat
            // Jaye exclusive, cap reduction based on other ops productivity
            + buffs.cap_per_10_external_productivity * Math.floor((degenbrecherProductivity + buffs.productivity_flat) / 10);

        let totalProductivity =
            // Standard productivity
            buffs.productivity_flat
            // Swire alter exclusive
            + buffs.productivity_per_external_cap * bonusCap
            // Jaye exclusive
            + (
                + buffs.productivity_per_total_cap * (bonusCap + 10)
                + buffs.productivity_per_diff_max_to_current * (bonusCap + 10)
            ) / 2
            // Degenbrecher exclusive
            + degenbrecherProductivity
        ;

        return {
            "operator1": ops[0],
            "operator2": ops[1],
            "operator3": ops[2],
            "bonus": bonusCap,
            "totalCap": bonusCap + 54, // 24/36/54 extra based on FAC lvl
            "totalAllProductivity": totalProductivity,
            "totalExpProductivity": totalProductivity,
            "totalGoldProductivity": totalProductivity
        };
    }

    /**
     * For a list of operators given as input, returns an array containing all combos of 3 operators possible
     * @param {Array[Operator]} operators: A list of at least 3 operators
     */
    __composeSquadsOf3(operators) {
        if(!operators || operators.length < 3){
            throw new Error("Squad composition requires at least 3 operators to function");
        }
        let compositions = [];
        let op1 = 0;
        let op2 = 1;
        let op3 = 2;
        while(true){
            compositions.push([operators[op1], operators[op2], operators[op3]]);
            if(op1 === operators.length - 3){
                return compositions;
            }

            op3++;
            if(op3 === operators.length){
                op2++;
                op3 = op2 + 1;

                if(op2 === operators.length - 1){
                    op1++;
                    op2 = op1 + 1;
                    op3 = op2 + 1;
                }
            }
        }
    }

    /**
     * For a list of operators given as input, returns an array containing all pairs of operators possible
     * @param {Array[Operator]} operators: A list of at least 2 operators
     */
    __composeSquadsOf2(operators) {
        if(!operators || operators.length < 2){
            throw new Error("Squad composition requires at least 2 operators to function");
        }
        let compositions = [];
        let op1 = 0;
        let op2 = 1;
        while(true){
            compositions.push([operators[op1], operators[op2]]);
            if(op1 === operators.length - 2){
                return compositions;
            }

            op2++;
            if(op2 === operators.length){
                op1++;
                op2 = op1 + 1;
            }
        }
    }
}

let akPlanner = new Planner();