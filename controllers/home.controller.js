let listsv = [];
let ds = [];
module.exports.home = (req, res) =>{
	res.render("index");
	
}

module.exports.them = (req, res) =>{
	listsv.push(req.body);
	let item = req.body;
		let diemtb = ((parseInt(item.toan) + parseInt(item.ly) + parseInt(item.hoa))/3);
		let xeploai;
		    if(diemtb < 5){
		        xeploai = "Yếu";
		    }else if(diemtb >= 5 && diemtb < 6.5){
		        xeploai = "Trung Bình";
		    }else if(diemtb >=6.5 && diemtb <8){
		        xeploai = "Khá";
		    }else{
		        xeploai = "Giỏi";
		    }
		 let sv = {
		 	ten : item.ten,
		 	mssv : item.mssv,
		 	diemtb : diemtb,
		 	xeploai : xeploai
		 };
		ds.push(sv);
	

	res.render("danhsachsv",{danhsachsv : listsv});

}
module.exports.xuatdanhsach = (req, res) =>{
	


	res.render("xuatdanhsach",{danhsach : ds});

}

module.exports.diemcao = (req, res) =>{
	let diemcao = ds.sort((a,b) =>{
		return a.diemtb - b.diemtb;
	});
	let diem = diemcao[diemcao.length - 1];
	console.log(diem);
	res.render("diemcao",{diemcao : diem});
}
module.exports.topdiemcao = (req, res) =>{
	console.log(1);
	let topdiemcao = ds.sort((a,b) =>{
		return b.diemtb - a.diemtb;
	});
	console.log(topdiemcao);
	let dstop = topdiemcao.slice(0,2);
	res.render("topdiemcao",{dstop : dstop});
}
module.exports.timkiem = (req, res) =>{
	let key = req.body.timkiem;
	let dstimkiem = ds.filter(item => {
		return item.ten === key || item.mssv === key;
	});
	res.render("dstimkiem",{dstimkiem : dstimkiem});
}