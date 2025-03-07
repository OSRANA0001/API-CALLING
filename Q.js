const inp = document.getElementById("cityinp");
const src=document.getElementById("tofind");
const naamcitynu=document.getElementById("noc");
const timecityno=document.getElementById("timeoc");
const tempcity=document.getElementById("toc");
async function work(cn){  

    const ret = await fetch(`http://api.weatherapi.com/v1/current.json?key=15f3739693794b668fd173307242112&q=${cn}&aqi=yes`);
    return await ret.json();
}
src.addEventListener("click",async function toS(){
    const info = inp.value;
    const parinam = await work(info);
    naamcitynu.innerText=`${parinam.location.name},${parinam.location.region} - ${parinam.location.country}`;
    timecityno.innerText=parinam.location.localtime;
    tempcity.innerText=parinam.current.temp_c;

});
   