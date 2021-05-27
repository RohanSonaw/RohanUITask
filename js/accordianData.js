// alert("test");

let acorData = [
	{
		acorTitle: "Who should undergo Kidney Transplant?",
		acorContent: "One has to undergo kidney transplantation when the kidneys have completely failed and are dependent on dialysis for survival and there is no possibility of recovery from the kidney failure. This stage of kidney failure is called end stage kidney disease or CKD Stage 5 D+. Kidney transplant is a procedure where in a kidney from a suitable healthy living donor or a deceased (cadaver) donor is transplanted to a patient with end stage kidney failure."
	},
	{
		acorTitle: "Am I a right Candidate for Kidney transplant?",
		acorContent: "One has to undergo kidney transplantation when the kidneys have completely failed and are dependent on dialysis for survival and there is no possibility of recovery from the kidney failure. This stage of kidney failure is called end stage kidney disease or CKD Stage 5 D+. Kidney transplant is a procedure where in a kidney from a suitable healthy living donor or a deceased (cadaver) donor is transplanted to a patient with end stage kidney failure."
	},
	{
		acorTitle: "What is the Criteria for Donor Selection?",
		acorContent: "One has to undergo kidney transplantation when the kidneys have completely failed and are dependent on dialysis for survival and there is no possibility of recovery from the kidney failure. This stage of kidney failure is called end stage kidney disease or CKD Stage 5 D+. Kidney transplant is a procedure where in a kidney from a suitable healthy living donor or a deceased (cadaver) donor is transplanted to a patient with end stage kidney failure."
	},
	{
		acorTitle: "What are the Types of donors",
		acorContent: "One has to undergo kidney transplantation when the kidneys have completely failed and are dependent on dialysis for survival and there is no possibility of recovery from the kidney failure. This stage of kidney failure is called end stage kidney disease or CKD Stage 5 D+. Kidney transplant is a procedure where in a kidney from a suitable healthy living donor or a deceased (cadaver) donor is transplanted to a patient with end stage kidney failure."
	},
	{
		acorTitle: "How to register patients for Deceased donor transplant?",
		acorContent: "One has to undergo kidney transplantation when the kidneys have completely failed and are dependent on dialysis for survival and there is no possibility of recovery from the kidney failure. This stage of kidney failure is called end stage kidney disease or CKD Stage 5 D+. Kidney transplant is a procedure where in a kidney from a suitable healthy living donor or a deceased (cadaver) donor is transplanted to a patient with end stage kidney failure."
	},
	{
		acorTitle: "What are the Advantages of a successful Kidney  transplant ? ",
		acorContent: "One has to undergo kidney transplantation when the kidneys have completely failed and are dependent on dialysis for survival and there is no possibility of recovery from the kidney failure. This stage of kidney failure is called end stage kidney disease or CKD Stage 5 D+. Kidney transplant is a procedure where in a kidney from a suitable healthy living donor or a deceased (cadaver) donor is transplanted to a patient with end stage kidney failure."
	},
	{
		acorTitle: "What is the Outcome of kidney transplant surgery",
		acorContent: "One has to undergo kidney transplantation when the kidneys have completely failed and are dependent on dialysis for survival and there is no possibility of recovery from the kidney failure. This stage of kidney failure is called end stage kidney disease or CKD Stage 5 D+. Kidney transplant is a procedure where in a kidney from a suitable healthy living donor or a deceased (cadaver) donor is transplanted to a patient with end stage kidney failure."
	},
]


let loadAcorData = (aData) =>{
	let heading = document.querySelector("#headingOne button").innerText = aData.acorTitle;
	let content = document.querySelector(".collapse .card-body").innerText = aData.acorContent;
}

// console.log(loadAcorData());

let loadAcor = () => {
	for (let j = 0; j < acorData.length; j++) {
		loadAcorData(acorData[j]);
	}
}

loadAcor();
