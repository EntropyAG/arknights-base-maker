const INVALID_OPERATORS = [
    "char_1001_amiya2", // Amiya guard
    "char_1037_amiya3"  // Amiya medic
];

const KARLAN_TRADE_OPERATORS = [
    "char_173_slchan", // Cliffheart
    "char_172_svrash", // Silverash
    "char_174_slbell", // Pramanix
    "char_206_gnosis", // Gnosis
    "char_199_yak",    // Matterhorn
    "char_198_blackd", // Courier
    "char_4013_kjera", // Kjera
    "char_422_aurora", // Aurora
    "char_4116_blkkgt" // Degenbrecher
];

const A1_OPERATORS = [
    "char_123_fang",   // Fang
    "char_124_kroos",  // Kroos
    "char_122_beagle", // Beagle
    "char_120_hibisc", // Hibiscus
    "char_121_lava"    // Lava
];

const BSW_OPERATORS = [
    "char_235_jesica",  // Jessica
    "char_240_wyvern",  // Vanilla
    "char_4105_almond", // Almond
    "char_107_liskam",  // Liskarm
    "char_106_franka"   // Franka
];

const VERMEIL_AND_BUBBLE_TEAM_CANDIDATES = [
    "char_336_folivo",  // Scene
    "char_485_pallas",  // Pallas
    "char_2013_cerber", // Ceobe
    "char_1032_excu2",  // Executor alter
    "char_328_cammou",  // Click
    "char_1042_phatm2", // Tragodia
    "char_4198_christ", // Miss Christine
    "char_4138_narant", // Narantuya
    "char_4155_talr",   // Figurino
    "char_4171_wulfen", // Wulfenite
    "char_464_cement",  // Cement
    "char_378_asbest",  // Asbestos
    "char_452_bstalk",  // Beanstalk
    "char_500_noirc",   // Noir Corne
    "char_150_snakek",  // Cuora
    "char_163_hpsts",   // Vulcan
    "char_369_bena"     // Bena
];

/**
 * Excludes operators that are only viable candidates thanks to Vermeil/Bubble, like Bena/Bubble/Click
 * Evaluation should be done on general + gold OR general + Exp operators, to limit how many checks are
 * being done.
 * Note that operators that solely have special effects will NOT be added below, as they are already
 * part of special squad evaluation, meaning all the ops listed have at least 1 helpful effect outside
 * of their dedicated squad (if applicable).
 */
const FAC_GOLD_OPERATORS = [
    "char_4138_narant", // Narantuya
];

const FAC_EXP_OPERATORS = [
    "char_1502_crosly", // Crownslayer
    "char_1032_excu2",  // Executor alter
    "char_485_pallas",  // Pallas
];

const FAC_GENERALIST_OPERATORS = [
    "char_2013_cerber", // Ceobe
    "char_4048_doroth", // Dorothy
    "char_416_zumama",  // Eunectes
    "char_430_fartth",  // Fartooth
    "char_4141_marcil", // Marcille
    "char_437_mizuki",  // Mizuki
];

const TP_OPERATORS = [
    "char_332_archet",  // Archetto
    "char_4116_blkkgt", // Degenbrecher
    "char_103_angel",   // Exusiai
    "char_1041_angel2", // Exusiai alter
    "char_4088_hodrer", // Hoederer
    "char_1034_jesca2", // Jessica alter
    "char_4193_lemuen", // Lemuen
];

const PP_OPERATORS = [
    "char_017_huang",   // Blaze
    "char_1040_blaze2", // Blaze alter
    "char_377_gdglow",  // Goldenglow
    "char_134_ifrit",   // Ifrit
    "char_1043_leizi2", // Leizi alter
    "char_249_mlyss",   // Muelsyse
];

const HR_OPERATORS = [
    "char_180_amgoat", // Eyja
    "char_4087_ines",  // Ines
    "char_4080_lin",   // Lin
    "char_264_f12yin", // Mountain
    "char_4065_judge", // Penance
];

// Only operators that change clue speed will be included, since clue bias is a scam
const RR_OPERATORS = [
    "char_291_aglina", // Angelina
    "char_010_chen",   // Ch'en
    "char_4027_heyak", // Ho'olheyak
    "char_4087_ines",  // Ines
    "char_213_mostma", // Mostima
];

const CC_OPERATORS = [
    "char_4132_ascln",  // Ascalon
    "char_1040_blaze2", // Blaze alter
    "char_010_chen",    // Ch'en
    "char_2024_chyue",  // Chong Yue
    "char_4134_cetsyr", // Civilight Eterna
    "char_2015_dusk",   // Dusk,
    "char_416_zumama",  // Eunectes
    "char_420_flamtl",  // Flametail
    "char_206_gnosis",  // Gnosis
    "char_003_kalts",   // Kal'tsit
    "char_226_hmau",    // Lee
    "char_4179_monstr", // Mon3tr
    "char_4064_mlynar", // Mlynar
    "char_4146_nymph",  // Nymph
    //"char_614_acsupo",  // Raidian - CN game data not updated yet
];

// I dunno, I'm just keeping track, who knows, might be useful at some point
const TR_OPERATORS = [
    "char_225_haak",   // Aak
    "char_426_billro", // Carnelian
    "char_1013_chen2", // Ch'en alter
    "char_4123_ela",   // Ela
];

/**
 * Includes operators that don't have any direct for any of the aforementioned facilities, however they might
 * have some interest due to synergy with other operators (e.g: Sui sibling, Rhine lab...).
 * Most of those are already evaluated through the "special" squads, so ops listed here are mostly to keep track
 * of who doesn't neatly fit anywhere without relying on combos
 */
const SYNERGY_OPERATORS = [

];