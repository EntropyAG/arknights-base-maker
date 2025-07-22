const SKILLS = {
    // ============================= FACTORY ================================

    // Vermeil E0
    "manu_prod_limit&cost[0000]":{
        "cap_all_flat": 8
    },
    // Beanstalk E1
    "manu_prod_limit&cost[001]":{
        "cap_all_flat": 8
    },
    // Ceobe E0
    "manu_prod_limit&cost[002]":{
        "cap_all_flat": 8
    },
    // Pallas E0
    "manu_prod_limit&cost[003]":{
        "cap_all_flat": 8
    },
    // Bubble E0
    "manu_prod_limit&cost[010]":{
        "cap_all_flat": 10
    },
    // Narantuya E0
    "manu_prod_limit&cost[011]":{
        "cap_all_flat": 10
    },
    // Ms Christine E0
    "manu_prod_limit&cost[012]":{
        "cap_all_flat": 8
    },
    // Asbestos E2
    "manu_prod_limit&cost[020]":{
        "cap_all_flat": 16
    },
    // Cement E2
    "manu_prod_limit&cost[021]":{
        "cap_all_flat": 10
    },
    // Wulfenite E2
    "manu_prod_limit&cost[1020]":{
        "cap_all_flat": 16
    },
    // Noir Corne E0, Cuora E0
    "manu_prod_spd&limit[001]":{
        "productivity_flat": 10,
        "cap_all_flat": 10
    },
    // Vulcan E0
    "manu_prod_spd&limit&cost[000]":{
        "productivity_flat": -5,
        "cap_all_flat": 16
    },
    // Vulcan E2 (replaces)
    "manu_prod_spd&limit&cost[001]":{
        "productivity_flat": -5,
        "cap_all_flat": 19
    },
    // Asbestos E0
    "manu_prod_spd&limit&cost[011]":{
        "productivity_flat": 25,
        "cap_all_flat": -12
    },
    // Bena E0
    "manu_prod_spd&limit&cost[020]":{
        "productivity_flat": -20,
        "cap_all_flat": 17
    },
    // Figurino E0
    "manu_prod_spd&limit&cost[100]":{
        "productivity_flat": 20
    },
    // Figurino E2 (replaces)
    "manu_prod_spd&limit&cost[200]":{
        "productivity_flat": 25,
        "cap_all_flat": 6
    },
    // Wulfenite E0
    "manu_prod_spd&limit&cost[300]":{
        "productivity_flat": 20,
        "cap_all_flat": -8
    },
    // Cement E0
    "manu_prod_spd[000]":{
        "productivity_flat": 15,
        "standardization_skill_count": 1
    },
    // Silence E0, Ptilopsis E0, Astgenne E0
    "manu_prod_spd[001]":{
        "productivity_flat": 15,
        "rhine_tech_skill_count": 1
    },
    // Wild Mane E0, Ashlock E0, Fartooth E0
    "manu_prod_spd[002]":{
        "productivity_flat": 15,
        "pinus_sylvestris_skill_count": 1
    },
    // Beanstalk E0
    "manu_prod_spd[003]":{
        "productivity_flat": 15
    },
    // Dorothy E2, Silence E2, Ptilopsis E2, Astgenne E2 (replaces)
    "manu_prod_spd[011]":{
        "productivity_flat": 25,
        "rhine_tech_skill_count": 1
    },
    // Highmore E2, Mizuki E2, Jessica E0, Vanilla E0, Perfumer E1, Roberta E1, Steward E1
    "manu_prod_spd[010]":{
        "productivity_flat": 25,
        "standardization_skill_count": 1
    },
    // Wild Mane E2, Ashlock E2, Fartooth E2 (replaces)
    "manu_prod_spd[012]":{
        "productivity_flat": 25,
        "pinus_sylvestris_skill_count": 1
    },
    // Silence alter E2
    "manu_prod_spd[021]":{
        "productivity_flat": 30,
        "rhine_tech_skill_count": 1
    },
    // Fang alter E0
    "manu_prod_spd[1000]":{
        "productivity_flat": 15,
        "standardization_skill_count": 1
    },
    // Fang alter E2
    "manu_prod_spd&fraction[000]":{
        "productivity_per_A1_operator": 10
    },
    // Vermeil E1
    "manu_prod_spd_variable[000]":{
        "productivity_per_total_cap": 2
    },
    // Bubble E1
    "manu_prod_spd_variable3[000]":{
        "productivity_per_total_cap": 1,
        "productivity_per_individual_cap_above_16": 2,
    },
    // Mizuki E0
    "manu_skill_spd1[000]":{
        "productivity_per_standard_skill": 5
    },
    // Dorothy E0
    "manu_skill_spd1[010]":{
        "productivity_per_rhine_tech_skill": 5
    },
    // Fang E0
    "manu_prod_spd_addition[030]":{
        "productivity_flat": 20,
        "productivity_per_hour_5_stacks": 1
    },
    // Ceobe E2
    "manu_prod_spd_addition[031]":{
        "productivity_flat": 20,
        "productivity_per_hour_5_stacks": 1
    },
    // Kroos E0
    "manu_prod_spd_addition[040]":{
        "productivity_flat": 15,
        "productivity_per_hour_up_5_stacks": 2
    },
    // Scene E0
    "manu_prod_spd_addition[041]":{
        "productivity_flat": 15,
        "productivity_per_hour_up_5_stacks": 2
    },
    // Highmore E0
    "manu_skill_change[000]":{
        "convert_RT_PS_to_standard": 1
    },
    // Pallas 2
    "manu_formula_spd[000]":{
        "productivity_exp_flat": 25
    },
    // Fedex E0
    "manu_formula_spd[030]":{
        "productivity_exp_flat": 20
    },
    // Fedex E2 (replaces)
    "manu_formula_spd[031]":{
        "productivity_exp_flat": 30
    },
    // Bryophyta E0, Spot E1, Haze E0
    "manu_formula_spd[100]":{
        "productivity_gold_flat": 30,
        "metalwork_skill_count": 1
    },
    // Warmy E2
    "manu_formula_spd[101]":{
        "productivity_gold_flat": 30,
        "metalwork_skill_count": 1
    },
    // Thorns alt E0
    "manu_formula_spd[102]":{
        "productivity_gold_flat": 30,
        "metalwork_skill_count": 1
    },
    // Gravel E1
    "manu_formula_spd[110]":{
        "productivity_gold_flat": 30,
        "metalwork_skill_count": 1
    },
    // Bryophyta E2
    "manu_skill_spd1[020]":{
        "productivity_gold_flat": 30,
        "productivity_per_metalwork": 5
    },
    // Thorns alt E2
    "manu_prod_spd&trade[1000]":{
        "productivity_gold_per_trading_post": 3,
    },
    // Narantuya E2
    "manu_formula_spd&dorm&lv[000]":{
        "productivity_gold_per_dorm_sum": 1
    },
    // Scene E2
    "manu_formula_limit[0000]":{
        "cap_exp_flat": 12
    },
    // Click E1
    "manu_formula_limit[010]":{
        "cap_exp_flat": 15
    },
    // Fedex E2
    "manu_formula_limit[020]":{
        "cap_exp_flat": 4
    },
    // Tragodia E0
    "manu_formula_spd&limit&cost[000]":{
        "productivity_exp_flat": 20,
        "tragodia_present": 1
    },
    // Tragodia E2
    "manu_formula_spd&limit&cost[010]":{
        "productivity_exp_flat": 35,
        "tragodia_present": 1
    },
    // Ms Christine E2
    "manu_prod_spd_double[100]":{
        "christine_feasting": 1
    },
    // ========================== TRADING POST =============================

    // Swire alter E0
    "trade_ord_spd[000]": {
        "productivity_flat": 20
    },
    // Swire alter E2
    "trade_ord_spd_variable[000]": {
        "productivity_per_external_cap": 4
    },
    // Silverash E0, Courier E0, Matterhorn E0
    "trade_ord_spd&limit[020]": {
        "productivity_flat": 15,
        "cap_flat": 2
    },
    // Silverash E2 (replaces)
    "trade_ord_spd&limit[022]": {
        "productivity_flat": 20,
        "cap_flat": 4
    },
    // Jaye E0
    "trade_ord_limit_count[000]":{
        "productivity_per_total_cap": 4,
        "cap_per_10_external_productivity": -1
    },
    // Jaye E1
    "trade_ord_limit_diff[000]":{
        "productivity_per_diff_max_to_current": 4
    },
    // Degenbrecher E0
    "trade_ord_spd&limit[100]": {
        "productivity_flat": 20,
        "cap_flat": -2
    },
    // Degenbrecher E2 (replaces)
    "trade_ord_spd&limit[101]": {
        "productivity_flat": 25,
        "cap_flat": -6
    },
    // Degenbrecher E2
    "trade_ord_spd_variable3[000]": {
        "productivity_per_5_external_cap": 25
    },
    // Cliffheart E2
    "trade_ord_spd&limit[021]": {
        "productivity_flat": 15,
        "cap_flat": 4
    }

};