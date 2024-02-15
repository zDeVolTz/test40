function fnBrowserDetect(){
                 
    let userAgent = navigator.userAgent;
    let browserName;
    


    if(/mac/i.test(userAgent)){
        if(/opera|opt|opr/i.test(userAgent)){
            browserName = "Opera";
        } else if (/firefox|fxios/i.test(userAgent)){
            browserName = "Firefox I";
        } else if (/chrome|gsa/i.test(userAgent)){
            browserName = "Google Chrome";
        } else if(/safari/i.test(userAgent)){
            browserName = "Safari";
        } else {
            browserName="Кто ты монстр ?:)";
        }
    } else {
        if(/chrome.*opr|opera/i.test(userAgent)){
        browserName = "Opera";
      } else if(/chrome.*edg/i.test(userAgent)){
        browserName = "Microsoft Edge";
      } else if(/firefox/i.test(userAgent)){
        browserName = "Firefox";
      } else if(/chrome/i.test(userAgent)){
        browserName = "Google Chrome";
      } else {
        browserName="Кто ты монстр ?:)";
      }
    }
     document.querySelector(".h1").innerText="You are using "+ browserName +" browser"; 
     document.querySelector(".h2").innerText= "" + userAgent + "";
}

fnBrowserDetect()