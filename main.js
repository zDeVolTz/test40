let nameBrowser = document.querySelector(".titleBrowser") 
let verBrowser = document.querySelector(".verBrowser")

fnBrowserDetect()


function fnBrowserDetect(){
                 
    let userAgent = navigator.userAgent;
    let browserName;
    let browserVersion;
    const brouwserList = {
        opera : {
                value : "Opera",
                reg : /opr|opera|mac.*opt/i,
                regVersion : /opr\/([0-9.]+)|opera\/([0-9.]+)/i           
                },
        edge :  {
                value :"Microsoft Edge",
                reg : /edg/i,
                regVersion : /edg\/([0-9.]+)/i
                },
        firefox : {
                value : "Firefox",
                reg : /firefox|mac.*fxios/i,
                regVersion : /firefox\/([0-9.]+)/i
                },
        chrome : {
                value : "Google Chrome",
                reg : /chrome|mac.*gsa|mac.*crios/i,
                regVersion : /chrome\/([0-9.]+)/i
                },
        safari : {
                value : "Safari",
                reg : /safari/i,
                regVersion : /safari\/([0-9.]+)/i
                },
        default : "Хто ти монстр ?:)"
    }

    
        if(brouwserList.opera.reg.test(userAgent)){
        browserName = brouwserList.opera.value;
        } else if(brouwserList.edge.reg.test(userAgent)){
        browserName = brouwserList.edge.value;
        } else if(brouwserList.firefox.reg.test(userAgent)){
        browserName = brouwserList.firefox.value;
        } else if(brouwserList.chrome.reg.test(userAgent)){
        browserName = brouwserList.chrome.value;
        } else if(brouwserList.safari.reg.test(userAgent)){
        browserName = brouwserList.safari.value;
        } else {
        browserName= brouwserList.default;
        }

        let foundEntry = Object.entries(brouwserList).find(([key, value]) => value.value === browserName);
        browserVersion = getVersionBrowser(userAgent,foundEntry);
        nameBrowser.textContent = `Ваш браузер : ${browserName}`;
        verBrowser.textContent = `Ваша версія : ${browserVersion}`;
}

function getVersionBrowser(userAgent,foundEntry){
    let result = userAgent.match(foundEntry[1].regVersion);
    return result[1];
}

