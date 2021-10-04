var Navicon = Navicon || {}

Navicon.nav_auto = (function()
{
    
    //приватные функции
    var enableCreditTab = function(context) {
        let formContext = context.getFormContext();
       
        if (formContext.getAttribute("nav_autoid").getValue() !== null && formContext.getAttribute("nav_contact").getValue() !== null )
        {
            formContext.ui.tabs.get("tab_2").setVisible(true);
        }
        else
        {
            formContext.ui.tabs.get("tab_2").setVisible(false);
        }
    }

    var enableCreditFields = function(context) {
        let formContext = context.getFormContext();
       
        if (formContext.getAttribute("nav_creditid").getValue() !== null)
        {
            setCreditFieldsAvailability(context, true);
        }
        else
        {
            setCreditFieldsAvailability(context, false);
        }
    }

    var setCreditFieldsAvailability = function(context, isAble) {
        let formContext = context.getFormContext();

        formContext.getControl("nav_creditperiod").setDisabled(!isAble);
        formContext.getControl("nav_creditamount").setDisabled(!isAble);
        formContext.getControl("nav_fullcreditamount").setDisabled(!isAble);
        formContext.getControl("nav_initialfee").setDisabled(!isAble);
        formContext.getControl("nav_paymentplandate").setDisabled(!isAble);
    }

    var checkName = function (context) {
        let formContext = context.getFormContext();
        const regex = new RegExp(/[^\d-]/,'\g');

        if (formContext.getAttribute("nav_name").getValue() !==null )
        {
            formContext.getAttribute("nav_name").setValue(
                formContext.getAttribute("nav_name").getValue()
                                                        .replaceAll(regex,'')
            );
        }
    }
   

    //публичные функции
    return {
        onLoad : function(context)
        {
            console.log('nav hello11');
            let formContext = context.getFormContext();
         
            //init
            formContext.getControl("ownerid").setVisible(false);
            formContext.getControl("nav_fact").setVisible(false);
            formContext.getControl("nav_factsumma").setVisible(false);
            //formContext.getControl("nav_creditid").setVisible(false); -- сначала скрывал, потом перенес на вкладку кредит
            formContext.getControl("nav_summa").setVisible(false);
            formContext.ui.tabs.get("tab_2").setVisible(false);
            setCreditFieldsAvailability(context, false);

            //listeners
            formContext.getAttribute("nav_autoid").addOnChange(enableCreditTab);
            formContext.getAttribute("nav_contact").addOnChange(enableCreditTab);
            formContext.getAttribute("nav_creditid").addOnChange(enableCreditFields);
            formContext.getAttribute("nav_name").addOnChange(checkName);
        }
    }
}
)();