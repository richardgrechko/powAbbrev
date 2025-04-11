let abbreviations = [
	["K", "M", "B", "T", "Qd", "Qn", "Sx", "Sp", "Ot", "No"],
	["", "U", "D", "T", "Qd", "Qn", "Sx", "Sp", "Ot", "No"],
	["", "De", "Vg", "Tg", "Qdg", "Qng", "Sxg", "Spg", "Otg", "Nog"],
	["", "Ce", "Dc", "Tc", "Qdc", "Qnc", "Sxc", "Spc", "Otc", "Noc"],
	["", "Mil", "Mic", "Nan", "Pic", "Fmt", "Att", "Zep", "Yoc", "Xon", "Vec", "Mec", "Duec", "Trec", "Ttrec", "Pntec", "Hxec", "Hpec", "Ocec", "Enec", "Ico", "MeIco", "DueIco", "TreIco", "TtrIco", "PntIco", "HxeIco", "HpeIco", "OceIco", "EneIco", "Tic", "MeTic", "DueTic", "TreTic", "TtrTic", "PntTic", "HxeTic", "HpeTic", "OceTic", "EneTic", "Ttc", "MeTtc", "DueTtc", "TreTtc", "TtrTtc", "PntTtc", "HxeTtc", "HpeTtc", "OceTtc", "EneTtc", "Pnc", "MePnc", "DuePnc", "TrePnc", "TtrPnc", "PntPnc", "HxePnc", "HpePnc", "OcePnc", "EnePnc", "Hxc", "MeHxc", "DueHxc", "TreHxc", "TtrHxc", "PntHxc", "HxeHxc", "HpeHxc", "OceHxc", "EneHxc", "Hpc", "MeHpc", "DueHpc", "TreHpc", "TtrHpc", "PntHpc", "HxeHpc", "HpeHpc", "OceHpc", "EneHpc", "Occ", "MeOcc", "DueOcc", "TreOcc", "TtrOcc", "PntOcc", "HxeOcc", "HpeOcc", "OceOcc", "EneOcc", "Enc", "MeEnc", "DueEnc", "TreEnc", "TtrEnc", "PntEnc", "HxeEnc", "HpeEnc", "OceEnc", "EneEnc", "Hct", "MeHct", "DueHct"],
]
function illionNames(n,layer)
{
	n = Math.floor(n)
	layer = Math.floor(layer)
	if (layer >= 1)
	{
		return ((n == 1) ? "" : (abbreviations[1][n%10] + abbreviations[2][Math.floor(n/10)%10] + abbreviations[3][Math.floor(n/100)])) + abbreviations[4][layer]
	}
	else if (n >= 100)
	{
		return abbreviations[1][n%10] + abbreviations[2][Math.floor(n/10)%10] + abbreviations[3][Math.floor(n/100)]
	}
	else if (n >= 10)
	{
		return abbreviations[1][n%10] + abbreviations[2][Math.floor(n/10)%10]
	}
	else if (n >= 0)
	{
		return abbreviations[0][n]
	}
	else
	{
		return undefined
	}
}
function illion(n)
{
	n = Math.floor(n)
	if (n >= 1_000_000)
	{
		return illionNames(n/(1000**Math.floor(Math.log10(n)/3)),Math.log10(n)/3) + ((Math.floor(n/(1000**Math.floor((Math.log10(n)/3)-1)))%1000 == 0) ? "" : ("-" + illionNames((n/(1000**Math.floor((Math.log10(n)/3)-1)))%1000,(Math.log10(n)/3)-1))) + ((Math.floor(n/(1000**Math.floor((Math.log10(n)/3)-2)))%1000 == 0) ? "" : ("-" + illionNames(Math.floor(n/(1000**Math.floor((Math.log10(n)/3)-2)))%1000,(Math.log10(n)/3)-2)))
	}
	else if (n >= 1_000)
	{
		return illionNames(n/(1000**Math.floor(Math.log10(n)/3)),Math.log10(n)/3) + ((Math.floor(n/(1000**Math.floor((Math.log10(n)/3)-1)))%1000 == 0) ? "" : ("-" + illionNames((n/(1000**Math.floor((Math.log10(n)/3)-1)))%1000,(Math.log10(n)/3)-1)))
	}
	else if (n >= 0)
	{
		return illionNames(n,0)
	}
	else
	{
		return undefined
	}
}
class powAbbrev
{
	constructor(base,pow)
	{
		this.result = 0;
		this.base = base;
		this.pow = pow;
		let n = Math.log10(base)*pow;
		if (n >= 3_000_000_003)
		{
			this.result = illion((n/3)-1)
		}
		else if (n >= 3)
		{
			this.result = Math.pow(10,n%3).toFixed(3) + illion((n/3)-1)
		}
		else if (n > -3)
		{
			this.result = Math.pow(10,n).toFixed(3)
		}
		else if (n > -3_000_000_003)
		{
			this.result = "1/" + Math.pow(10,(-n)%3).toFixed(3) + illion((-n/3)-1)
		}
		else
		{
			this.result = "1/" + illion((-n/3)-1)
		}
		return this.result
	}
}
