export interface ShowAddSwitch {
	confirm: boolean;
	dead: boolean;
	nowConfirm: boolean;
	nowSevere: boolean;
	localConfirm: boolean;
	all: boolean;
	suspect: boolean;
	heal: boolean;
	importedCase: boolean;
	noInfect: boolean;
	localinfeciton: boolean;
}

export interface Total {
	nowConfirm: number;
	showHeal: boolean;
	provinceLocalConfirm: number;
	continueDayZeroLocalConfirmAdd: number;
	confirm: number;
	showRate: boolean;
	heal: number;
	mediumRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
	mtime: string;
	adcode: string;
	dead: number;
	wzz: number;
	highRiskAreaNum: number;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: number;
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
}

export interface Total {
	mediumRiskAreaNum: number;
	dead: number;
	heal: number;
	showHeal: boolean;
	provinceLocalConfirm: number;
	continueDayZeroConfirm: number;
	nowConfirm: number;
	confirm: number;
	showRate: boolean;
	wzz: number;
	highRiskAreaNum: number;
	continueDayZeroConfirmAdd: number;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	adcode: string;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: number;
	local_confirm_add: number;
}

export interface Total {
	dead: number;
	heal: number;
	continueDayZeroLocalConfirmAdd: number;
	showHeal: boolean;
	mtime: string;
	adcode: string;
	nowConfirm: number;
	confirm: number;
	wzz: number;
	provinceLocalConfirm: number;
	mediumRiskAreaNum: number;
	showRate: boolean;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface Children {
	date: string;
	today: Today;
	total: Total;
	children: Children[];
	name: string;
	adcode: string;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface AreaTree {
	total: Total;
	children: Children[];
	name: string;
	today: Today;
}

export interface ChinaTotal {
	noInfectH5: number;
	local_acc_confirm: number;
	localConfirmAdd: number;
	localConfirm: number;
	importedCase: number;
	suspect: number;
	noInfect: number;
	showlocalinfeciton: number;
	localConfirmH5: number;
	localWzzAdd: number;
	mediumRiskAreaNum: number;
	dead: number;
	nowSevere: number;
	confirmAdd: number;
	nowLocalWzz: number;
	deadAdd: number;
	mtime: string;
	highRiskAreaNum: number;
	nowConfirm: number;
	confirm: number;
	mRiskTime: string;
	showLocalConfirm: number;
	heal: number;
}

export interface ChinaAdd {
	importedCase: number;
	heal: number;
	dead: number;
	suspect: number;
	noInfect: number;
	localConfirm: number;
	noInfectH5: number;
	localConfirmH5: number;
	confirm: number;
	nowConfirm: number;
	nowSevere: number;
}

export interface Diseaseh5Shelf {
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
}

export interface LocalCityNCOVDataList {
	date: string;
	local_confirm_add: number;
	local_wzz_add: string;
	highRiskAreaNum: number;
	province: string;
	city: string;
	adcode: string;
	isUpdated: boolean;
	mtime: string;
	mediumRiskAreaNum: number;
	isSpecialCity: boolean;
}

export interface Data {
	diseaseh5Shelf: Diseaseh5Shelf;
	localCityNCOVDataList: LocalCityNCOVDataList[];
}

export interface RootObject {
	ret: number;
	info: string;
	data: Data;
}