abbrev = {
	ones: ["K", "M", "B", "T", "Qd", "Qn", "Sx", "Sp", "Ot", "No"],
	onesaboveten: ["", "U", "D", "T", "Qd", "Qn", "Sx", "Sp", "Ot", "No"],
	tens: ["", "De", "Vg", "Tg", "Qdg", "Qng", "Sxg", "Spg", "Otg", "Nog"],
	hundreds: ["", "Ce", "Dc", "Tc", "Qdc", "Qnc", "Sxc", "Spc", "Otc", "Noc"],
	tier2ones: ["", "Mil", "Mic", "Nan", "Pic", "Fmt", "Att", "Zep", "Yoc", "Xon"],
	tier2onesaboveten: ["", "Me", "Due", "Tre", "Tte", "Pnt", "Hxe", "Hpe", "Oce", "Ene"],
	tier2tens: ["", "Vec", "Ico", "Tic", "Ttc", "Ptc", "Hxc", "Hpc", "Occ", "Enc"],
	tier2hundreds: ["", "Hct", "Dhc", "Trh", "Tth", "Pnh", "Hxh", "Hph", "Och", "Enh"],
	tier3ones: ["", "Kil", "Meg", "Gig", "Ter", "Pet", "Exa", "Zet", "Yot", "Xen"],
	tier3tens: ["", "Dak", "Ika", "Trk", "Tek", "Pek", "Exk", "Zak", "Yok", "Nek"],
	tier3hundreds: ["", "Hot", "Bot", "Trt", "Tot", "Pot", "Ext", "Zot", "Yoot", "Not"],
}
function illionNames(n,layer,tier=2)
{
	n = Math.floor(n)
	layer = Math.floor(layer)
	tier = Math.floor(tier)
	if (layer >= 1 && tier == 3)
	{
		return ((n == 1) ? "" : (
			(n >= 100) ?
			(
				(
					((n%100) > 10 && (n%100) < 20) ?
					(abbrev.tier2onesaboveten[Math.floor(n/10)%10] + "c") :
					((n%100) < 10) ?
					abbrev.tier2ones[Math.floor(n/10)%10] :
					(abbrev.tier2onesaboveten[Math.floor(n/10)%10] + abbrev.tier2tens[Math.floor(Math.floor(n/10)/10)])
				) + abbrev.tier2hundreds[Math.floor(n/100)]
			) :
				(n >= 10) ?
				((n > 10 && n < 20) ? (abbrev.tier2onesaboveten[n%10] + "c") : (abbrev.tier2ones[n%10] + abbrev.tier2tens[Math.floor(n/10)])) :
					abbrev.tier2ones[n]
		)) + abbrev.tier3ones[layer%10] + abbrev.tier3tens[Math.floor(layer/10)%10] + abbrev.tier3hundreds[Math.floor(layer/100)]
	}
	else if (layer >= 100 && tier == 2)
	{
		return ((n == 1) ? "" : (abbrev.onesaboveten[n%10] + abbrev.tens[Math.floor(n/10)%10] + abbrev.hundreds[Math.floor(n/100)]))
			+ "(" + (
					((layer%100) > 10 && (layer%100) < 20) ?
					(abbrev.tier2onesaboveten[Math.floor(layer/10)%10] + "c") :
					((layer%100) < 10) ?
					abbrev.tier2ones[Math.floor(layer/10)%10] :
					(abbrev.tier2onesaboveten[Math.floor(layer/10)%10] + abbrev.tier2tens[Math.floor(Math.floor(layer/10)/10)])
					) + abbrev.tier2hundreds[Math.floor(layer/100)] + ")"
	}
	else if (layer >= 10 && tier == 2)
	{
		return ((n == 1) ? "" : (abbrev.onesaboveten[n%10] + abbrev.tens[Math.floor(n/10)%10] + abbrev.hundreds[Math.floor(n/100)]))
			+ ((layer > 10 && layer < 20) ? (abbrev.tier2onesaboveten[layer%10] + "c") : (abbrev.tier2ones[layer%10] + abbrev.tier2tens[Math.floor(layer/10)]))
	}
	else if (layer >= 1 && tier == 2)
	{
		return ((n == 1) ? "" : (abbrev.onesaboveten[n%10] + abbrev.tens[Math.floor(n/10)%10] + abbrev.hundreds[Math.floor(n/100)])) + abbrev.tier2ones[layer]
	}
	else if (n >= 100)
	{
		return abbrev.onesaboveten[n%10] + abbrev.tens[Math.floor(n/10)%10] + abbrev.hundreds[Math.floor(n/100)]
	}
	else if (n >= 10)
	{
		return abbrev.onesaboveten[n%10] + abbrev.tens[Math.floor(n/10)%10]
	}
	else if (n >= 0)
	{
		return abbrev.ones[n]
	}
	else
	{
		return undefined
	}
}
function illion(n,tier=1)
{
	unfloored = n
	n = Math.floor(n)
	tier = Math.floor(tier)
	if (tier == 1) {
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
	} else {
		if (n >= 1_000_000)
		{
			return illionNames(n/(1000**Math.floor(Math.log10(n)/3)),Math.log10(n)/3,3)
				+ ((Math.floor(n/(1000**Math.floor((Math.log10(n)/3)-1)))%1000 == 0) ? "" : ("-" + illionNames(Math.floor(n/(1000**Math.floor((Math.log10(n)/3)-1)))%1000,(Math.log10(n)/3)-1,3)))
				+ ((Math.floor(n/(1000**Math.floor((Math.log10(n)/3)-2)))%1000 == 0) ? "" : ("-" + illionNames(Math.floor(n/(1000**Math.floor((Math.log10(n)/3)-2)))%1000,(Math.log10(n)/3)-2,3)))
		}
		else if (n >= 1_000)
		{
			return illionNames(n/(1000**Math.floor(Math.log10(n)/3)),Math.log10(n)/3,3)
				+ ((Math.floor(n/(1000**Math.floor((Math.log10(n)/3)-1)))%1000 == 0) ? "" : ("-" + illionNames((n/(1000**Math.floor((Math.log10(n)/3)-1)))%1000,(Math.log10(n)/3)-1,3)))
		}
		else if (n >= 300)
		{
			return illionNames(1000**Math.floor((unfloored%3)/3),unfloored/3)
				+ (((1000**(Math.floor((unfloored%3)/3)+1))%1000 == 0) ? "" : ("-" + illionNames(1000**(Math.floor((unfloored%3)/3)+1)%1000,(unfloored/3)-1)))
				+ (((1000**(Math.floor((unfloored%3)/3)+2))%1000 == 0) ? "" : ("-" + illionNames(1000**(Math.floor((unfloored%3)/3)+2)%1000,(unfloored/3)-2)))
		}
		else if (n >= 0)
		{
			return illion(10**unfloored,1)
		}
	}
}
class IllionLayers
{
	constructor(opts)
	{
		this.result = 0;
		this.mantissa = ((opts.mantissa > 10) ? 10 : Math.max(1,opts.mantissa)) ?? 1;
		this.exp = opts.exponent ?? 1;
		this.layer = opts.layer ?? 0;
		this.sign = opts.sign ?? 1;
		let log = this.exp+Math.log10(this.mantissa)
		switch (this.layer) {
			case 0:
				if (this.sign == 0) {
					this.result = "0.000"
				} else {
					this.result = new IllionLayers({mantissa: 10**(Math.log10(this.exp)%1),exponent: Math.floor(Math.log10(this.exp)),layer: 1}).result
				}
				break;
			case 1:
				if (this.sign == 0) {
					this.result = "0.000"
				} else {
					if (log == Infinity)
					{
						this.result = ((this.sign == -1) ? "-" : "") + "inf"
					}
					else if (log >= 3_000_000_003 && isFinite(log))
					{
						this.result = ((this.sign == -1) ? "-" : "") + illion((log/3)-1)
					}
					else if (log >= 3)
					{
						this.result = ((this.sign == -1) ? "-" : "") + (10**Math.floor(log%3)).toPrecision(3) + illion((log/3)-1)
					}
					else if (log > -3)
					{
						this.result = ((this.sign == -1) ? "-" : "") + (10**Math.floor(log%3)).toPrecision(3)
					}
					else if (log > -3_000_000_003)
					{
						this.result = ((this.sign == -1) ? "-" : "") + "1/" + (10**Math.floor(log%3)).toPrecision(3) + illion((-log/3)-1)
					}
					else if (isFinite(log))
					{
						this.result = ((this.sign == -1) ? "-" : "") + "1/" + illion((-log/3)-1)
					}
					else if (log == -Infinity)
					{
						this.result = "0.000"
					}
				}
				break;

			case 2:
				if (this.sign == 0) {
					this.result = "0.000"
				} else {
					if (log == Infinity)
					{
						this.result = ((this.sign == -1) ? "-" : "") + "inf"
					}
					else if (log >= (3000+Math.log10(3)) && isFinite(log))
					{
						this.result = ((this.sign == -1) ? "-" : "") + illion(log/3,2)
					}
					else if (log < (3000+Math.log10(3)))
					{
						this.result = ((this.sign == -1) ? "-" : "") + illion(10**(log/3)-1)
					}
					else if (log < 300+Math.log10(3) && log > -(300+Math.log10(3)))
					{
						this.result = new IllionLayers(10**((10**log)%1),Math.floor(10**log),1).result
					}
					else if (log > -(3000+Math.log10(3)))
					{
						this.result = ((this.sign == -1) ? "-" : "") + "1/" + illion(10**(-log/3)-1)
					}
					else if (log <= -(3000+Math.log10(3)) && isFinite(log))
					{
						this.result = ((this.sign == -1) ? "-" : "") + "1/" + illion(-log/3,2)
					}
					else if (log == -Infinity)
					{
						this.result = "0.000"
					}
				}
				break;
			default:
				this.result = new IllionLayers({mantissa: this.mantissa,exponent: this.exp,layer: 1}).result
		}
	}
}
