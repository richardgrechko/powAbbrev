let abbreviations = [
	["K", "M", "B", "T", "Qd", "Qn", "Sx", "Sp", "Ot", "No"],
	["", "U", "D", "T", "Qd", "Qn", "Sx", "Sp", "Ot", "No"],
	["", "De", "Vg", "Tg", "Qdg", "Qng", "Sxg", "Spg", "Otg", "Nog"],
	["", "Ce", "Dc", "Tc", "Qdc", "Qnc", "Sxc", "Spc", "Otc", "Noc"],
	["", "Mil", "Mic", "Nan", "Pic", "Fmt", "Att", "Zep", "Yoc", "Xon", "Vec", "Mec", "Duec", "Trec", "Ttrec", "Pntec", "Hxec", "Hpec", "Ocec", "Enec", "Ico", "MeIco", "DueIco", "TreIco", "TtrIco", "PntIco", "HxeIco", "HpeIco", "OceIco", "EneIco", "Tic", "MeTic", "DueTic", "TreTic", "TtrTic", "PntTic", "HxeTic", "HpeTic", "OceTic", "EneTic", "Ttc", "MeTtc", "DueTtc", "TreTtc", "TtrTtc", "PntTtc", "HxeTtc", "HpeTtc", "OceTtc", "EneTtc", "Pnc", "MePnc", "DuePnc", "TrePnc", "TtrPnc", "PntPnc", "HxePnc", "HpePnc", "OcePnc", "EnePnc", "Hxc", "MeHxc", "DueHxc", "TreHxc", "TtrHxc", "PntHxc", "HxeHxc", "HpeHxc", "OceHxc", "EneHxc", "Hpc", "MeHpc", "DueHpc", "TreHpc", "TtrHpc", "PntHpc", "HxeHpc", "HpeHpc", "OceHpc", "EneHpc", "Occ", "MeOcc", "DueOcc", "TreOcc", "TtrOcc", "PntOcc", "HxeOcc", "HpeOcc", "OceOcc", "EneOcc", "Enc", "MeEnc", "DueEnc", "TreEnc", "TtrEnc", "PntEnc", "HxeEnc", "HpeEnc", "OceEnc", "EneEnc", "Hct", "MeHct", "DueHct"],
]
function t2abbrev(n,layer)
{
	n = Math.floor(n)
	layer = Math.floor(layer)
	if (layer == 1)
	{
		return ((n == 1n) ? "" : (abbreviations[1][BigInt(n%10)] + abbreviations[2][BigInt(Math.floor(n/10)%10)] + abbreviations[3][BigInt(Math.floor(n/100))])) + abbreviations[4][BigInt(layer)]
	}
	else if (n >= 100)
	{
		return abbreviations[1][BigInt(n%10)] + abbreviations[2][BigInt(Math.floor(n/10)%10)] + abbreviations[3][BigInt(Math.floor(n/100))]
	}
	else if (n >= 10)
	{
		return abbreviations[1][BigInt(n%10)] + abbreviations[2][BigInt(Math.floor(n/10))]
	}
	else if (n >= 0)
	{
		return abbreviations[0][BigInt(n)]
	}
}
class powAbbrev
{
	constructor(base,pow)
	{
		this.result = 0n;
		this.base = base;
		this.pow = pow;
		let n = Math.log10(base)*pow;
		let m = Math.log10(n)/3;
		if (n >= 3n)
		{
			this.result = ((n >= 1_000_000n) ? "" : Math.pow(10,n%3).toFixed(3)) + ((n == Math.floor(n/1000**Math.floor(m))*(1000**Math.floor(m))) ? t2abbrev(n/1000**Math.floor(m),m) : (t2abbrev(n/1000**Math.floor(m),m)+"-"+t2abbrev((n/1000**Math.floor(m-1))%1000,m-1)))
		}
		else
		{
			this.result = Math.pow(10,n).toFixed(3)
		}
		return this.result
	}
}
