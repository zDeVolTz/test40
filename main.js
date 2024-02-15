function fnBrowserDetect(){
                 
    let userAgent = navigator.userAgent;
    let browserName;
    let browserVersion;


    
        if(/opr|opera|mac.*opt/i.test(userAgent)){
        browserName = "Opera";
        } else if(/edg/i.test(userAgent)){
        browserName = "Microsoft Edge";
        } else if(/firefox|mac.*fxios/i.test(userAgent)){
        browserName = "Firefox";
        } else if(/chrome|mac.*gsa|mac.*crios/i.test(userAgent)){
        browserName = "Google Chrome";
        } else if(/safari/i.test(userAgent)){
        browserName = "Safari";
        } else {
        browserName="Хто ти монстр ?:)";
        }
  
     document.querySelector(".h1").innerText="Ви використовуєте" + browserName + " браузер"; 
     document.querySelector(".h2").innerText= "" + userAgent + "";
}

fnBrowserDetect()