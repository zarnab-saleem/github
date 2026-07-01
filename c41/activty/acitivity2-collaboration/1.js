let maincontainer = document.createElement('div');
document.body.appendChild(maincontainer);
maincontainer.className = 'bg-[pink] w-[100%] h-[650px] flex justify-center items-center bg-[url("sitting-area.jfif")] bg-cover bg-center bg-no-repeat '

let maincontainer2 = document.createElement('div');
maincontainer.appendChild(maincontainer2);
maincontainer2.className = ' w-[79%] h-[590px] bg-white/10  border border-white/20 flex justify-end items-center backdrop-blur-md rounded-[50px] '

let maindiv = document.createElement('div');
maincontainer2.appendChild(maindiv);
maindiv.className = ' w-[70%] h-[570px]  gap-2 flex justify-center flex-col items-center  rounded-[50px]'

let maindivc1 = document.createElement('div');
maindiv.appendChild(maindivc1);
maindivc1.className = 'w-[97%] h-[270px] flex justify-center items-center backdrop-blur-lg rounded-[20px]'

let maindivc2 = document.createElement('div');
maindiv.appendChild(maindivc2);
maindivc2.className = 'w-[97%] h-[270px] gap-2 flex justify-center items-center  rounded-[20px]'

let maindivc2_leftside = document.createElement('div');
maindivc2.appendChild(maindivc2_leftside);
maindivc2_leftside.className = 'w-[41%] h-[270px] gap-2 flex flex-col justify-center items-center  rounded-[20px]'

leftside_c1 = document.createElement('div');
maindivc2_leftside.appendChild(leftside_c1);
leftside_c1.className = 'w-[100%] h-[115px]  gap-2 backdrop-blur-xl  bg-black/10 shadow-lg border border-gray-200 flex flex-col justify-center items-center backdrop-blur-lg rounded-[20px]'

leftside_c1_c1 = document.createElement('div');
leftside_c1.appendChild(leftside_c1_c1);
leftside_c1_c1.className = 'w-[95%] h-[42px] flex  justify-start items-center '

let tvicon = document.createElement('div')
leftside_c1_c1.appendChild(tvicon);
tvicon.className = 'w-[14%] h-[25px] ml-[3%] flex bg-[url("monitor.png")]  bg-center bg-no-repeat flex-col justify-center items-start '

let tvtextr1 = document.createElement('div')
leftside_c1_c1.appendChild(tvtextr1);
tvtextr1.className = 'w-[49%] h-[39px]  ml-[3%] gap-1 flex flex-col justify-start items-start '

let tvtext = document.createElement('div')
tvtextr1.appendChild(tvtext);
tvtext.textContent = 'TV'
tvtext.className = 'w-[21%] h-[20px] text-[13px]  flex text-white font-semibold flex-col justify-center items-start '

let tvtext2 = document.createElement('div')
tvtextr1.appendChild(tvtext2);
tvtext2.textContent = 'Smsung SmartTV'
tvtext2.className = 'w-[81%] h-[12px] text-[11px]  flex text-white  flex-col justify-center items-start '

let key = document.createElement('div')
leftside_c1_c1.appendChild(key);
key.className = 'w-[14%] h-[29px] ml-[17%] flex bg-[url("on-off.png")]  bg-center bg-no-repeat flex-col justify-center items-start '

leftside_c1_c2 = document.createElement('div');
leftside_c1.appendChild(leftside_c1_c2);
leftside_c1_c2.className = 'w-[93%] h-[40px] flex ml-[2%] justify-start items-center '

let icons = ['netflix.png', 'disnep.jpg', 'max.jfif', 'video.png'];
icons.forEach(element => {

    let boxlogo = document.createElement('div')
    leftside_c1_c2.appendChild(boxlogo)
boxlogo.className = `w-[15%] h-[35px]  bg-[url('${element}')] bg-cover bg-center bg-no-repeat rounded-lg mx-1`;    
});
let boxlogoplus = document.createElement('div')
    leftside_c1_c2.appendChild(boxlogoplus)
boxlogoplus.className = 'w-[15%] h-[35px] border border-gray-300 bg-[url("smallplus.png")] p-1 bg-center bg-no-repeat rounded-lg mx-1';    


leftside_c2 = document.createElement('div');
maindivc2_leftside.appendChild(leftside_c2);
leftside_c2.className = 'w-[100%] h-[142px]  flex flex-col bg-black/15  shadow-lg border border-gray-200 justify-center items-center backdrop-blur-lg rounded-[20px]'

leftside_c2.className = 'relative w-full h-[140px] p-4 border border-white/10 backdrop-blur-lg rounded-[20px] bg-white/5';

let leftGroup = document.createElement('div');
leftGroup.className = 'flex items-center gap-2';
leftside_c2.appendChild(leftGroup);

let icon = document.createElement('div');
icon.className = 'text-white text-xl w-[30px] h-[28px] bg-[url("check.png")] p-1 bg-center bg-no-repeat';
leftGroup.appendChild(icon);

let textGroup = document.createElement('div');
textGroup.className = 'flex flex-col';
leftGroup.appendChild(textGroup);

let title = document.createElement('span');
title.className = 'text-white font-semibold text-[14px]';
title.textContent = 'Biometric Access';
textGroup.appendChild(title);

let subTitle = document.createElement('span');
subTitle.className = 'text-white/50 text-[10px]';
subTitle.textContent = 'Security';
textGroup.appendChild(subTitle);

// Bottom Left: Avatars + Last entry
let bottomGroup = document.createElement('div');
bottomGroup.className = 'absolute bottom-4 left-4 flex flex-col gap-1';
leftside_c2.appendChild(bottomGroup);

let avatarRow = document.createElement('div');
avatarRow.className = 'flex -space-x-2';
bottomGroup.appendChild(avatarRow);


for(let i = 0; i < 3; i++) {
    let img = document.createElement('div');
    img.style.backgroundImage = "url('girl.jpg')";
    img.className = 'w-7 h-7 rounded-full bg-gray-600  p-1 bg-center bg-no-repeat border-2 border-white/10';
    avatarRow.appendChild(img);
}

let lastEntry = document.createElement('span');
lastEntry.className = 'text-white/40 text-[9px]';
lastEntry.textContent = 'Last entry 07:34 AM';
bottomGroup.appendChild(lastEntry);

let lockBtn = document.createElement('div');
    lockBtn.style.backgroundImage = "url('lo.png')";

lockBtn.className = 'absolute top-4 right-4 w-6 h-6 bg-[red] bg-center bg-no-repeat rounded-full bg-white/5 flex items-center justify-center text-green-500 border border-white/10';
leftside_c2.appendChild(lockBtn);

let plusBtn = document.createElement('div');
plusBtn.className = 'absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 border border-white/10';
plusBtn.textContent = '+';
leftside_c2.appendChild(plusBtn);

let rightSideMainBox = document.createElement('div');
rightSideMainBox.className = 'w-[58%] h-[260px] p-5 border border-white/10 backdrop-blur-lg rounded-[24px] bg-white/5 flex flex-col justify-between';
maindivc2.appendChild(rightSideMainBox);

let headerTopRow = document.createElement('div');
headerTopRow.className = 'flex justify-between items-center';
rightSideMainBox.appendChild(headerTopRow);

let headerLeftArea = document.createElement('div');
headerLeftArea.className = 'flex items-center gap-2';
headerTopRow.appendChild(headerLeftArea);

let iconSlotArea = document.createElement('div');
iconSlotArea.className = 'w-8 h-8 rounded-full bg-white/10 bg-[url("lamp.png")] bg-cover bg-center  rounded-[40px] bg-white/5 flex items-center justify-center';
headerLeftArea.appendChild(iconSlotArea);

let textInfoBox = document.createElement('div');
textInfoBox.className = 'flex flex-col';
headerLeftArea.appendChild(textInfoBox);

let labelPrimary = document.createElement('span');
labelPrimary.className = 'text-white font-medium text-[12px]';
labelPrimary.textContent = 'Ambient LED';
textInfoBox.appendChild(labelPrimary);

let labelSecondary = document.createElement('span');
labelSecondary.className = 'text-gray-100 text-[10px]';
labelSecondary.textContent = 'Focal 1';
textInfoBox.appendChild(labelSecondary);

let toggleSwitch = document.createElement('div');
toggleSwitch.className = 'w-6 h-6 rounded-full bg-white';
headerTopRow.appendChild(toggleSwitch);

let colorContainerBox = document.createElement('div');
colorContainerBox.className = 'flex flex-col gap-1';
rightSideMainBox.appendChild(colorContainerBox);

let colorHeadRow = document.createElement('div');
colorHeadRow.className = 'flex items-center gap-2 text-white font-bold text-[11px]';
colorContainerBox.appendChild(colorHeadRow);

let colorIconSlot = document.createElement('div');
colorIconSlot.className = 'w-6 h-6 bg-white/10 bg-[url("art.png")] bg-cover bg-center  rounded-[40px]';
colorHeadRow.appendChild(colorIconSlot);

let colorTitleText = document.createElement('span');
colorTitleText.textContent = 'Color';
colorHeadRow.appendChild(colorTitleText);

let colorSliderBar = document.createElement('div');
colorSliderBar.className = 'w-full h-3 bg-white/5 border border-white/5 rounded-full';
colorContainerBox.appendChild(colorSliderBar);

let intensityContainerBox = document.createElement('div');
intensityContainerBox.className = 'flex flex-col gap-1';
rightSideMainBox.appendChild(intensityContainerBox);

let intensityHeadRow = document.createElement('div');
intensityHeadRow.className = 'flex justify-between items-center';
intensityContainerBox.appendChild(intensityHeadRow);

let intensityLeftGroup = document.createElement('div');
intensityLeftGroup.className = 'flex items-center gap-2';
intensityHeadRow.appendChild(intensityLeftGroup);

let intensityIconSlot = document.createElement('div');
intensityIconSlot.className = 'w-6 h-6 bg-white/10 bg-[url("brightness.png")] bg-cover bg-center  rounded-[40px]';
intensityLeftGroup.appendChild(intensityIconSlot);

let intensityTitleText = document.createElement('span');
intensityTitleText.className = 'text-white font-bold text-[11px]';
intensityTitleText.textContent = 'Intensity';
intensityLeftGroup.appendChild(intensityTitleText);

let intensityPercentText = document.createElement('span');
intensityPercentText.className = 'text-white font-bold text-[11px]';
intensityPercentText.textContent = '79%';
intensityHeadRow.appendChild(intensityPercentText);
 
let intensitySliderBar = document.createElement('div');
intensitySliderBar.className = 'w-full h-3  border   bg-cover bg-center border-white/5 rounded-full';
intensityContainerBox.appendChild(intensitySliderBar);

let scheduleContainerBox = document.createElement('div');
scheduleContainerBox.className = 'flex flex-col gap-2';
rightSideMainBox.appendChild(scheduleContainerBox);

let scheduleHeadRow = document.createElement('div');
scheduleHeadRow.className = 'flex items-center gap-2 text-white font-bold text-[11px]';
scheduleContainerBox.appendChild(scheduleHeadRow);

let scheduleIconSlot = document.createElement('div');
scheduleIconSlot.className = 'w-6 h-6 bg-white/10 bg-[url("time-management.png")] bg-cover bg-center  rounded-[40px]';
scheduleHeadRow.appendChild(scheduleIconSlot);

let scheduleTitleText = document.createElement('span');
scheduleTitleText.className = 'text-white font-bold text-[11px]';
scheduleTitleText.textContent = 'Schedule';
scheduleHeadRow.appendChild(scheduleTitleText);

let scheduleItemsRow = document.createElement('div');
scheduleItemsRow.className = 'flex gap-2';
scheduleContainerBox.appendChild(scheduleItemsRow);

let boxOn = document.createElement('div');
boxOn.className = 'flex-1 bg-white/5 border border-white/10 rounded-[30px] flex items-stretch text-white overflow-hidden';
scheduleItemsRow.appendChild(boxOn);

let labelOn = document.createElement('span');
labelOn.className = 'text-[10px] flex-1 ml-[7%] flex items-center justify-start'; 
labelOn.textContent = 'On at';
boxOn.appendChild(labelOn);

let timeOn = document.createElement('div');
timeOn.className = 'bg-white/10 rounded-[20px] flex-1 flex items-center justify-center text-[10px]';
timeOn.textContent = '05:00 PM';
boxOn.appendChild(timeOn);

let boxOff = document.createElement('div');
boxOff.className = 'flex-1 bg-white/5 border border-white/10 rounded-[30px] flex items-stretch text-white overflow-hidden';
scheduleItemsRow.appendChild(boxOff);

let labelOff = document.createElement('span');
labelOff.className = 'text-[10px] flex-1 flex ml-[7%] items-center justify-start';
labelOff.textContent = 'Off at';
boxOff.appendChild(labelOff);

let timeOff = document.createElement('div');
timeOff.className = 'bg-white/10 rounded-[20px] h-[30px] mr-[1%] flex-1 flex items-center justify-center text-[10px]';
timeOff.textContent = '12:00 PM';
boxOff.appendChild(timeOff);