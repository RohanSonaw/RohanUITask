let drDetails = [ 
	{
		imgUrl: "images/drVidyashankar.png",
		name: "Dr. Vidyashankar P",
		designation: "MBBS | DCH | DNB | DM (Nephrology)",
		profile: "Lead Consultant- Nephrology",
		dec: "Dr. Vidyashankar P. is the Lead Consultant Nephrologist. Underwent Nephrology training from prestigious Seth GS Medical College and King Edward Memorial Hospital, Mumbai.",
		url: ""
	},

	{
		imgUrl: "images/drRavish.png",
		name: "Dr. Ravish I R",
		designation: "MBBS | MS | MCh | Fellowship in Paediatric Urology",
		profile: "Sr. Consultant- Urology",
		dec: "Dr. Ravish I.R is the lead consultant- urologist at Aster CMI Hospital. He has phenomenal experience of 20 years.",
		url: ""
	}

]


let loadDrDetails = (dData) => {
	
	let ulTag = document.createElement("ul");
	let liTag = document.createElement("li");
	liTag.setAttribute("class","drList");

	let img = document.createElement("img");
	img.setAttribute("src",dData.imgUrl);
	liTag.append(img);

	let drName = document.createElement("h4");
	drName.innerText = dData.name;
	liTag.append(drName);

	let drDesignation = document.createElement("div");
	drDesignation.innerText = dData.designation;
	liTag.append(drDesignation);

	let drProfile = document.createElement("div");
	drProfile.innerText = dData.profile;
	liTag.append(drProfile);

	let drDescription = document.createElement("p");
	drDescription.innerText = dData.dec;
	liTag.append(drDescription);

	let drUrl = document.createElement("a");
	drUrl.setAttribute("href",dData.url);
	drUrl.setAttribute("class","bgGradient btn");
	drUrl.innerText = "Know More";
	liTag.append(drUrl);

	ulTag.append(liTag);
	document.querySelector("#drList").append(ulTag);
}

let loadData = () => {
	for (let i = 0; i < drDetails.length; i++) {
		loadDrDetails(drDetails[i]);
	}
}

loadData();