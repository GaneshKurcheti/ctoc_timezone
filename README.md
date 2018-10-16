#CtoC


CtoC(Convert to client timezone) is a simple yet useful JS that is used to convert the time to the client side timezone by employing minimum changes  in your application. c2c_timezone is capable to convert the  date-time to both local and any other timezone you want it to. 

This package has **javascript handle** that can be fetched into your code to handle the date objects. The primary purpose of this package is to eliminate the mundane code that user  uses to handle timezones and necessary formats.

The package could be used for following cases:
- **Convert the date from server to local (host or browser) time.**
- **Convert the date from server to ANY standard timezone(IANA) offset you want it to be.**



## Usage

 - **Convert a date by using a data attribute**
    
   Return the date in the following format :
     
   `<div data-ctoc-timezone   data-ctoc-time="" data-ctoc-req-zone="" data-ctoc-req-format=""</div>`
   
   Here **data-ctoc-timezone** is the identifier for attribute,  gets removed once the date is conversion is complete.
   
   **data-ctoc-time** is the time to be converted , should be given in a valid JS date-string  format . **[View Date String formats]**  (https://pages.github.com/).
   
   **data-ctoc-req-zone** is the timezone to convert the given date-time object.The field accepts all IANA timezones and variety of other timezone offsets. You can also give the offset in form of **"+hh:mm" or "-hh:mm" or simply an integer**.The Timezone offsets are available in the **[View Time Zones]**  (https://pages.github.com/).
   
   **data-ctoc-format** is the format specifier for the date-time object. You can construct your own format using the following rules       **[View Formats](https://pages.github.com/)**. Not defining the format gives a Date with Datestring format.
   
   **Example** :
   
   `<div data-ctoc-timezone  data-ctoc-time="Mar 01 2013 05:30:00 +5:30" data-ctoc-req-zone="" data-ctoc-req-format=""></div>`
    
   Output:
   
    `Fri Mar 01 2013 05:30:00 GMT+0530 (India Standard Time)`
   
   **For Changing Timezone :**(Default Format : "ddd MMM dd YYYY hh:mm:ss")
    Using IANA format:
   
   `<div data-ctoc-timezone  data-ctoc-time="Mar 01 2013 05:30:00 +5:30" data-ctoc-req-zone="America/Lima" data-ctoc-req-format=""></div>`
    
  Output :
  
  `Thu Feb 28 2013 19:00:00`
   
    Using offset in hh:mm format:
   
   `<div data-ctoc-timezone  data-ctoc-time="Mar 01 2013 05:30:00 +5:30" data-ctoc-req-zone="-5:00" data-ctoc-req-format=""</div>`
Output :
  `Thu Feb 28 2013 19:00:00`
  
  Using Integer :
  
  `<div data-ctoc-timezone  data-ctoc-time="Mar 01 2013 05:30:00 +5:30" data-ctoc-req-zone=-5 data-ctoc-req-format=""></div>`
  
  Output :
  
  `Thu Feb 28 2013 19:00:00`
                                
  **Changing Format:** 
   
   `<div data-ctoc-timezone  data-ctoc-time="Mar 01 2013 05:30:00 +5:30" data-ctoc-req-zone="America/Lima" data-ctoc-req-format=" ddd Do MMM YYYY hh:mm:ss #{America}"></div>`
   
   Output:
   
   `Thu 28th Feb 2013 19:00:00 America`
  
  
  
- **Convert using method call :**

  
   Use the  `toTimeZone` method in CtoC.
        `CtoC.toTimeZone(dateobject,timeZone,format);`
        
   Here the **dateobject** is must paramater for the method to work while both timeZone and format considered optional.It is Date object type of JS (Date()).
   
   In **timeZone** , you can pass any IANA or offset values specified in  **[View Time Zones]**  (https://pages.github.com/). Not passing or giving empty string converts to local time.  
   
   In **format** sepcify any of the format types in **[View Formats](https://pages.github.com/)**. Not passing a format or giving empty returns in default format.
   Example:
          
          `CtoC.toTimeZone(new Date(),"EST");`
          
   Output:
         
         `Fri Mar 1 2013 05:30:00`
    
    Changing format in toTimeZone:
        `CtoC.toTimeZone(new Date(),"EST","Do MMM YYYY hh:mm:ss #{EST}");`
        
    Output :
        
        `28th Feb 2013 19:00:00 EST`
    
   **Changing Format:**
         
  Use the 'toFormat' method in CtoC.
     
     `CtoC.toFormat(dateobject,format)`
  Format accepts two parameters - dateobject the date passed in date type and an optional format in string of specifies types.
  
  Example:
  
  `CtoC.toFormat(new Date(),"Do MMM YYYY hh:mm:ss #{EST}");`
  
  Output:
  
  `28th Feb 2013 19:00:00 EST`



This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


