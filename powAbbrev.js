let abbreviations = [
	["K", "M", "B", "T", "Qd", "Qn", "Sx", "Sp", "Ot", "No"],
	["", "U", "D", "T", "Qd", "Qn", "Sx", "Sp", "Ot", "No"],
	["", "De", "Vg", "Tg", "Qdg", "Qng", "Sxg", "Spg", "Otg", "Nog"],
	["", "Ce", "Dc", "Tc", "Qdc", "Qnc", "Sxc", "Spc", "Otc", "Noc"],
	["", "Mil", "Mic", "Nan", "Pic", "Fmt", "Att", "Zep", "Yoc", "Xon", "Vec", "Mec", "Duec", "Trec", "Ttrec", "Pntec", "Hxec", "Hpec", "Ocec", "Enec", "Ico", "MeIco", "DueIco", "TreIco", "TtrIco", "PntIco", "HxeIco", "HpeIco", "OceIco", "EneIco", "Tic", "MeTic", "DueTic", "TreTic", "TtrTic", "PntTic", "HxeTic", "HpeTic", "OceTic", "EneTic", "Ttc", "MeTtc", "DueTtc", "TreTtc", "TtrTtc", "PntTtc", "HxeTtc", "HpeTtc", "OceTtc", "EneTtc", "Pnc", "MePnc", "DuePnc", "TrePnc", "TtrPnc", "PntPnc", "HxePnc", "HpePnc", "OcePnc", "EnePnc", "Hxc", "MeHxc", "DueHxc", "TreHxc", "TtrHxc", "PntHxc", "HxeHxc", "HpeHxc", "OceHxc", "EneHxc", "Hpc", "MeHpc", "DueHpc", "TreHpc", "TtrHpc", "PntHpc", "HxeHpc", "HpeHpc", "OceHpc", "EneHpc", "Occ", "MeOcc", "DueOcc", "TreOcc", "TtrOcc", "PntOcc", "HxeOcc", "HpeOcc", "OceOcc", "EneOcc", "Enc", "MeEnc", "DueEnc", "TreEnc", "TtrEnc", "PntEnc", "HxeEnc", "HpeEnc", "OceEnc", "EneEnc"],
]
let abbreviations2 = ["", "Mil-", "Mic-", "Nan-", "Pic-", "Fmt-", "Att-", "Zep-", "Yoc-", "Xon-", "Vec-", "Mec-", "Duec-", "Trec-", "Ttrec-", "Pntec-", "Hxec-", "Hpec-", "Ocec-", "Enec-", "Ico-", "MeIco-", "DueIco-", "TreIco-", "TtrIco-", "PntIco-", "HxeIco-", "HpeIco-", "OceIco-", "EneIco-", "Tic-", "MeTic-", "DueTic-", "TreTic-", "TtrTic-", "PntTic-", "HxeTic-", "HpeTic-", "OceTic-", "EneTic-", "Ttc-", "MeTtc-", "DueTtc-", "TreTtc-", "TtrTtc-", "PntTtc-", "HxeTtc-", "HpeTtc-", "OceTtc-", "EneTtc-", "Pnc-", "MePnc-", "DuePnc-", "TrePnc-", "TtrPnc-", "PntPnc-", "HxePnc-", "HpePnc-", "OcePnc-", "EnePnc-", "Hxc-", "MeHxc-", "DueHxc-", "TreHxc-", "TtrHxc-", "PntHxc-", "HxeHxc-", "HpeHxc-", "OceHxc-", "EneHxc-", "Hpc-", "MeHpc-", "DueHpc-", "TreHpc-", "TtrHpc-", "PntHpc-", "HxeHpc-", "HpeHpc-", "OceHpc-", "EneHpc-", "Occ-", "MeOcc-", "DueOcc-", "TreOcc-", "TtrOcc-", "PntOcc-", "HxeOcc-", "HpeOcc-", "OceOcc-", "EneOcc-", "Enc-", "MeEnc-", "DueEnc-", "TreEnc-", "TtrEnc-", "PntEnc-", "HxeEnc-", "HpeEnc-", "OceEnc-", "EneEnc-"]
function abbrev(n)
{
	n = Math.floor(n)
	if (n >= 100)
	{
		return abbreviations[1][n%10] + abbreviations[2][Math.floor(n/10)%10] + abbreviations[3][Math.floor(n/100)]
	}
	else if (n >= 10)
	{
		return abbreviations[1][n%10] + abbreviations[2][Math.floor(n/10)]
	}
	else if (n >= 0)
	{
		return abbreviations[0][n]
	}
}
function t2abbrev(n,tier2)
{
	n = Math.floor(n)
	tier2 = Math.floor(tier2)
	if (tier2 == 1)
	{
		return ((n == 1) ? "" : (abbreviations[1][n%10] + abbreviations[2][Math.floor(n/10)%10] + abbreviations[3][Math.floor(n/100)])) + ((n == 1000**Math.floor(Math.log10(n)/3)/10) ? abbreviations[4][tier2] : abbreviations2[tier2]) + ((tier2 < 1) ? abbrev(Math.floor(n*1000)%1000) : t2abbrev(Math.floor(n*1000)%1000,tier2-1))
	}
	else
	{
		return abbrev(n)
	}
}
class powAbbrev
{
	constructor(base,pow)
	{
		this.result = 0;
		this.base = base;
		this.pow = pow;
		if (Math.log10(base)*pow >= 3)
		{
			this.result = ((Math.log10(base)*pow >= 1_000_000) ? "" : Math.pow(10,(Math.log10(this.base)*this.pow)%3).toFixed(3)) + t2abbrev((Math.log10(this.base)*this.pow)/1000**Math.floor(Math.log10(Math.log10(this.base)*this.pow)/3),1000**Math.floor(Math.log10(Math.log10(this.base)*this.pow)/3))
		}
		else
		{
			this.result = Math.pow(10,(Math.log10(this.base)*this.pow)%3).toFixed(3)
		}
		return this.result
	}
}
