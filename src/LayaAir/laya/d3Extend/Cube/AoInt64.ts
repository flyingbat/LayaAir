/**
	 * ...
	 * @author laoxie
	 */
	export class AoInt64 
	{
		private static _DEF:any[] =  /*[STATIC SAFE]*/[0,0x1,0x2,0x3,0,0x4,0x8,0xc,
		0,0x10,0x20,0x30,0,0x40,0x80,0xc0,
		0,0x100,0x200,0x300,0,0x400,0x800,0xc00,
		0,0x1000,0x2000,0x3000,0,0x4000,0x8000,0xc000,
		0,0x10000,0x20000,0x30000,0,0x40000,0x80000,0xc0000,
		0,0x100000,0x200000,0x300000,0,0x400000,0x800000,0xc00000,
		0,0x1000000,0x2000000,0x3000000,0,0x4000000,0x8000000,0xc000000,
		0,0x10000000,0x20000000,0x30000000,0,0x40000000,0x80000000,0xc0000000,
		0,0x100000000,0x200000000,0x300000000,0,0x400000000,0x800000000,0xc00000000,
		0,0x1000000000,0x2000000000,0x3000000000,0,0x4000000000,0x8000000000,0xc000000000,
		0,0x10000000000,0x20000000000,0x30000000000,0,0x40000000000,0x80000000000,0xc0000000000,
		0, 0x100000000000, 0x200000000000, 0x300000000000, 0, 0x400000000000, 0x800000000000, 0xc00000000000];
		
		private static _LEFT:any[] =  /*[STATIC SAFE]*/[0x1,0x4,0x10,0x40,
		0x100,0x400,0x1000,0x4000,
		0x10000,0x40000,0x100000,0x400000,
		0x1000000,0x4000000,0x10000000,0x40000000,
		0x100000000,0x400000000,0x1000000000,0x4000000000,
		0x10000000000, 0x40000000000, 0x100000000000, 0x400000000000];	
		
		//group 0-24   	value poinrt 	 index  0,1,2,3值
		 static addAO(value:number,group:number,index:number):number
		{
			return value+AoInt64._DEF[group*4+index];
		}
		
		 static getColor(value:number, group:number):number
		{
			return (value / AoInt64._LEFT[group]|0)&0x3;
		}
		
		//public static function getColor2(value:int, group:int):int
		//{
			//return (value / (1>>(group*2))|0)&0x3;
		//}
		
	}


