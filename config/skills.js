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
    // Popukar E0
    "manu_prod_spd&limit&cost[010]":{
        "productivity_flat": 25,
        "cap_all_flat": -12
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
    // Passenger E2, Windflit E2, Eunectes E0
    "manu_prod_spd&power[000]":{
        "productivity_per_power_plant": 5
    },
    // Weedy E0, Eunectes E2
    "manu_prod_spd&power[010]":{
        "productivity_per_power_plant": 10
    },
    // Weedy E2 (replaces)
    "manu_prod_spd&power[020]":{
        "productivity_per_power_plant": 15
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
    // Marcille E0
    "manu_prod_spd[004]":{
        "productivity_flat": 20
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
    // Marcille E2 (replaces)
    "manu_prod_spd[014]":{
        "productivity_flat": 30
    },
    // Mayer E2
    "manu_prod_spd[020]":{
        "productivity_flat": 30
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
    // Minimalist E0
    "manu_constrLv[000]":{
        "engineering_robot_per_facility_level_max_64": 1
    },
    // Minimalist E0
    "manu_prod_spd_bd[100]":{
        "productivity_per_16_engineering_robot": 5
    },
    // Minimalist E2 (replaces)
    "manu_prod_spd_bd[110]":{
        "productivity_per_8_engineering_robot": 5
    },
    // Marcille E2
    "manu_prod_spd_bd[400]":{
        "productivity_per_monster_meal": 1
    },
    // Fang alter E2
    "manu_prod_spd&fraction[000]":{
        "productivity_per_A1_operator": 10
    },
    // Vermeil E1
    "manu_prod_spd_variable[000]":{
        "productivity_per_total_cap_vermeil": 2
    },
    // Waai Fu E2
    "manu_prod_spd_variable2[000]":{
        "waai_fu_copy_productivity": 1
    },
    // Bubble E1
    "manu_prod_spd_variable3[000]":{
        "productivity_per_total_cap_bubble": 1,
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
    // Bryophyta E2
    "manu_skill_spd1[020]":{
        "productivity_gold_flat": 30,
        "productivity_per_metalwork": 5
    },
    // Totter E0
    "manu_prod_spd_reduce[000]":{
        "productivity_flat": 30,
        "productivity_reduction_per_4_morale_difference": 5
    },
    // Totter E2
    "manu_prod_spd_addition&cost[000]":{
        "productivity_flat_if_morale_diff_gt_12": 10,
        "cap_flat_if_morale_diff_gt_12": 6,
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
    // Aroma E2
    "manu_prod_spd_addition[100]":{
        "productivity_per_hour_up_10_stacks": 2
    },
    // Highmore E0
    "manu_skill_change[000]":{
        "convert_RT_PS_to_standard": 1
    },
    // Pallas 2
    "manu_formula_spd[000]":{
        "productivity_exp_flat": 25
    },
    // FEater E0, Vigna E0, Castle-3 E0, Shirayuki E1, Frostleaf E1
    "manu_formula_spd[010]":{
        "productivity_exp_flat": 30
    },
    // Conviction E1, FEater E2
    "manu_formula_spd[020]":{
        "productivity_exp_flat": 35
    },
    // Crownslayer E2
    "manu_formula_spd[022]":{
        "productivity_exp_flat": 35
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
    // Leto E2
    "manu_formula_spd_P[000]":{
        "leto_through_thick_and_thin": 1
    },
    // Alanna E0
    "manu_token_prod_spd[000]":{
        "productivity_gold_per_robot_in_pp": 5
    },
    // Alanna E2 (replaces)
    "manu_token_prod_spd[010]":{
        "productivity_gold_per_robot_in_pp": 10
    },
    // Almond E0
    "manu_formula_spd&cost[000]":{
        "productivity_gold_flat": 25
    },
    // Aroma E0
    "manu_formula_spd&cost[001]":{
        "productivity_gold_flat": 25
    },
    // Almond E2
    "manu_formula_spd&cost_bd[000]":{
        "productivity_gold_per_BSW_operator": 2
    },
    // Purestream E1
    "manu_prod_spd&trade[000]":{
        "productivity_gold_per_trading_post": 20,
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
    // Alanna E2
    "manu_prod_spd_double[000]":{
        "alanna_give_me_a_hand": 1
    },
    // Ms Christine E2
    "manu_prod_spd_double[100]":{
        "christine_feasting": 1
    },

    // ========================== TRADING POST =============================

    // Swire alter E0, Cuora E1
    "trade_ord_spd[000]":{
        "productivity_flat": 20
    },
    // Exusiai E0
    "trade_ord_spd[010]":{
        "productivity_flat": 20
    },
    // Exusiai E2
    "trade_ord_spd[020]":{
        "productivity_flat": 35
    },
    // Hoederer E0
    "trade_ord_par&per[000]":{
        "productivity_flat": 25,
        "productivity_if_ines_working": 5
    },
    // Hoederer E2 (replaces)
    "trade_ord_par&per[001]":{
        "productivity_flat": 30,
        "productivity_if_ines_or_w_working": 5
    },
    // Exusiai alter E2
    "trade_ord_spd_par[001]":{
        "productivity_per_laterano": 15
    },
    // Swire alter E2
    "trade_ord_spd_variable[000]": {
        "productivity_per_external_cap": 4
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
    // Lemuen E0
    "trade_ord_spd&multiPar[000]":{
        "productivity_flat": 20,
    },
    // Lemuen E2 (replaces...?)
    "trade_ord_spd&multiPar[100]":{
        "productivity_flat": 20,
        "productivity_if_exusiai_present": 35
    },
    // Archetto E0
    "trade_ord_spd&dorm&lv[000]":{
        "productivity_per_dorm": 1
    },
    // Archetto E2
    "trade_ord_spd&dorm&lv[010]":{
        "productivity_per_dorm": 2
    },
    // Jessica alter E0
    "trade_ord_spd&limit[001]":{
        "productivity_flat": 10,
        "cap_flat": 4
    },
    // Silverash E0, Courier E0, Matterhorn E0
    "trade_ord_spd&limit[020]": {
        "productivity_flat": 15,
        "cap_flat": 2
    },
    // Cliffheart E2
    "trade_ord_spd&limit[021]": {
        "productivity_flat": 15,
        "cap_flat": 4
    },
    // Silverash E2 (replaces)
    "trade_ord_spd&limit[022]": {
        "productivity_flat": 20,
        "cap_flat": 4
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

    // ========================== POWER PLANT =============================

    // Blaze E0, Ifrit E0
    "power_rec_spd[001]":{
        "productivity": 10
    },
    // Goldenglow E0
    "power_rec_spd[003]":{
        "productivity": 10
    },
    // Leizi alter E0
    "power_rec_spd[007]":{
        "productivity": 10
    },
    // Ifrit E2
    "power_rec_spd[013]":{
        "productivity": 15
    },
    // Goldenglow E2
    "power_rec_spd[023]":{
        "productivity": 20
    },
    // Blaze alter E2
    "power_rec_spd[1022]":{
        "productivity": 20
    },
    // Muelsyse E2
    "power_rec_rhine[000]":{
        "productivity": 10,
        "productivity_per_rhine_5_stacks": 3
    },

    // ========================== RECEPTION ROOM =============================

    // Angelina E0, Mostima E0
    "meet_spd&team[000]":{
        "clue_speed": 10
    },
    // Mostima E2
    "meet_spd&team[020]":{
        "clue_speed": 10,
        "clue_bias_penguin_logistics": 1
    },
    // Angelina E2 (replaces)
    "meet_spd&team[060]":{
        "clue_speed": 10,
        "clue_bias_rhodes_island": 1
    },
    // Ch'en E2
    "meet_spd&team[100]":{
        "clue_speed": 25
    },
    // Ho'olheyak E0
    "meet_spd&cost_condChar[001]":{
        "clue_speed_solo": 15
    },
    // Ho'olheyak E2
    "meet_spd&cost_condChar[011]":{
        "clue_speed_solo": 35
    },
    // Ines E2
    "meet_spd_hast[000]":{
        "clue_speed": 20,
        "clue_speed_per_hour_5_stacks": 2
    },

    // ========================== HUMAN RESOURCES =============================

    // Ines E0
    "hire_spd[001]":{
        "hire_speed": 35
    },
    // Eyja E2
    "hire_spd[011]":{
        "hire_speed": 45
    },
    // Lin E0
    "hire_spd_cost[111]":{
        "hire_speed": 20
    },
    // Penance E0
    "hire_spd_cost[210]":{
        "hire_speed": 50
    },
    // Lin E2
    "hire_spd_cost&extra[000]":{
        "hire_speed_per_extra_recruit_slot": 10
    },
    // Mountain E0
    "hire_spd&clue2[230]":{
        "hire_speed": 20
    },

    // ========================== CONTROL CENTER =============================

    // Nymph E2
    "control_dorm_rec[002]":{
        "dorm_morale_recovery": 0.05
    },
    // Ascalon E0
    "control_train_spd[010]":{
        "specialization_training_speed": 5
    },
    // Blaze alter E0
    "control_train_spd[011]":{
        "specialization_training_speed": 5
    },
    // Ascalon E2
    "control_tra_spd[030]":{
        "trading_post_productivity": 7
    },
    // Kal'tsit E2
    "control_prod_spd[000]":{
        "factory_productivity": 2
    },
    // Mon3tr E2
    "control_prod_spd[1000]":{
        "factory_productivity": 2
    },
    // Civilight Eterna E0
    "control_mp_cost_double[000]":{
        "amiya_civilight_morale_recovery": 0.05
    },
    // Civilight Eterna E2 (replaces)
    "control_mp_cost_double[001]":{
        "amiya_civilight_morale_recovery": 0.1
    },
    // Civilight Eterna E2
    "control_upMeetingSpeed[100]":{
        "clue_speed": 15
    },
    // Ch'en E0
    "control_mp_cost&faction[000]":{
        "morale_recovery_per_lungmen_department": 0.05
    },
    // Gnosis E0
    "control_mp_cost&faction[030]":{
        "morale_recovery_per_karlan_trade": 0.05
    },
    // Lee E0
    "workshop_proc_probability[010]":{ // Yes, the ID is weird, blame HG
        "morale_recovery_if_aak_present": 0.25
    },
    // Lee E2
    "control_mp_cost&faction2[000]":{
        "clue_speed": 25
    },
    // Chong Yue E0
    "control_mp_cost&bd_up[000]":{
        "world_plight_per_sui": 5
    },
    // Dusk E0
    "control_mp_cost&bd1[000]":{
        "morale_recovery": 0.05,
        "wordly_plight_below_half_morale": 15
    },
    // Dusk E0
    "control_mp_cost&bd2[000]":{
        "morale_recovery": 0.05,
        "perception_information_above_half_morale": 10
    },
    // Flametail E0
    "control_mp_cost[007]":{
        "morale_recovery": 0.05,
        "smiley_count": 1
    },
    // Mlynar E0
    "control_mp_cost[008]":{
        "morale_recovery": 0.05,
        "smiley_count": 1
    },
    // Mon3tr E0
    "control_mp_cost[012]":{
        "morale_recovery": 0.05,
        "smiley_count": 1
    },
    // Mlynar E2
    "control_mp_lonely[000]":{
        "morale_recovery_pp_hr_rr": 0.1,
        "recover_morale_for_others_from_smileys": 1
    },
    // Chong Yue E2
    "control_mp_bd_cost_expand[000]":{
        "morale_recovery_others": 0.05,
        "morale_recovery_others_per_20_wordly_plight": 0.05
    },

    // ========================== TRAINING ROOM =============================

    // Aak E2
    "train_spd&profession[170]":{
        "training_speed_medic": 60
    },
    // Carnelian E0
    "train_spd&profession[050]":{
        "training_speed_caster": 30
    },
    // Carnelian E2
    "train_spd&profession[150]":{
        "training_speed_caster": 60
    },
    // Ch'en alter E0
    "train_spd&profession2[040]":{
        "training_speed_sniper": 30
    },
    // Ch'en alter E2
    "train_spd&profession2[440]":{
        "training_speed_sniper": 30,
        "training_speed_sniper_M1": 65
    },
    // Ela E0
    "train_spd_tag[020]":{
        "training_speed_per_op_in_base_4_stacks": 10
    }


};