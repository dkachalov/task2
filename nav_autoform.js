var Navicon = Navicon || {}

Navicon.nav_communications = (function()
{
    
    //приватные функции
    var checkType = function(context) {
        let formContext = context.getFormContext();
        formContext.getControl("nav_email").setVisible(false);
        formContext.getControl("nav_phone").setVisible(false);
        console.log(formContext.getAttribute("nav_type").getValue());

        if (formContext.getAttribute("nav_type").getValue()==1)
        {
            formContext.getControl("nav_phone").setVisible(true);
        }

        if (formContext.getAttribute("nav_type").getValue()==2)
        {
            formContext.getControl("nav_email").setVisible(true);
        }

    }

    //публичные функции
    return {
        onLoad : function(context)
        {
            console.log('init nav');
            let formContext = context.getFormContext();
         
            //init
            formContext.getControl("nav_email").setVisible(false);
            formContext.getControl("nav_phone").setVisible(false);


            //listeners
            formContext.getAttribute("nav_type").addOnChange(checkType);
        }
    }
}
)();