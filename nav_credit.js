var Navicon = Navicon || {}

Navicon.nav_credit = (function()
{
    
    //приватные функции
    var checkPeriod = function(context) {
        let formContext = context.getFormContext();
        let startdate = formContext.getAttribute("nav_datestart").getValue();
        let enddate = formContext.getAttribute("nav_dateend").getValue();
        let minEndDate = new Date(startdate);
        minEndDate.setFullYear(minEndDate.getFullYear()+1);
        console.log("debug nav");
        console.log(minEndDate-startdate);
        console.log(enddate-startdate);

       
        if (startdate !== null 
            && enddate !== null 
            && minEndDate-startdate>=enddate-startdate
            )
        {
            alert("Дата завершения договора должна быть не менее, чем через год от даты начала!")
            formContext.getAttribute("nav_dateend").setValue(null);
        }

    }




   

    //публичные функции
    return {
        onLoad : function(context)
        {
            console.log('init nav');
            let formContext = context.getFormContext();
         
            //init


            //listeners
            formContext.getAttribute("nav_datestart").addOnChange(checkPeriod);
            formContext.getAttribute("nav_dateend").addOnChange(checkPeriod);
        }
    }
}
)();