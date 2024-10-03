const colors = require('tailwindcss/colors')
module.exports = {
content: [
'./components/**/*.{html,js,jsx,ts,tsx}',
  './pages/**/*.{html,js,jsx,ts,tsx}',
  './login.html',
  './index.html',
  './verification.html',
  './signup.html',
  './signup-screen-2.html',
  './signup-screen-3.html',
  './signup-screen-4.html',
  './sourcefunding.html',
  './verification.html',
  './verification4.html',
  './verification5.html',
  './resetpassword.html',
  './Reset-password-details.html',
  './connectbank.html',
  './connect-funding-resource.html',
  './connect-funding.html',
  './activity.html',
  './Reset-password-details.html',
  './cardmanagement.html',
  './activity-details.html',
  './card-category.html',
  './card-category-2.html',
  './card-details.html',
  './card-screen-2.html',
  './check-email.html',
  './confirmation-charge.html',
  './hamburger-menu.html',
  './plans.html',
  './change-preffered-name.html',
  './funding-source.html',
  './landing.html',
  './landing-2.html',
  './create-card.html',
  './transaction-cap-physical-card.html',
  './vanisher-card.html',
  './subscription-trail.html',
  './subscription-card.html',
  './traveler-card.html',
  './merchant-lock-card.html',
  './card-creation.html',
],
  
  theme: {
    extend: {
      
       backgroundImage: {
        'custom-gradient': 'linear-gradient(90.3deg, #4849F0 0.16%, #363231 101.62%)',
        'custom-gradient-2': 'linear-gradient(180deg, rgba(72, 73, 240, 0.79) 0%, #292A8A 100%)',
      },
      
      screens: {
      },
      dropShadow: {
        'custom': '0 4px 10px rgba(0, 0, 0, 0.25)',  
      },
      colors: {

        "gray-c-400":"#f4f3fe",
        "gray-c-600":"#A4A4A4",
        "gray-c-500":"#161617",
        "neutral-750":"#333",
        "purple-750":"#480480",
        "teal-650":"#1aaaaa",
        "Neutral-150":"#f7f7f7",
        "Neutral-350":"#DCE4EC",
        "neutral-175":"#f3f3f3",
        "gray-c-750":"#353333",
        "neutral-275":"#a7babe",
        "danger-e7":"#e74c3c",
        "blue": '#4849F0',
        "green-14": '#14A11A',
        "border-color": '#7474F4',
        'gray': '#f8f8fe',
        "gray-c-1000":"#9795A0",
        'gray': '#f8f8fe',
        'green':'#14A11A',
        'lightgreen':'#21DFB1',
        'lightblue':'rgba(72, 73, 240, 0.61)',
        'teal':'#00DEFF',
        
      
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      container: {
      },
      width: {
        'w-6':'1.5rem',
        '92':'5.75rem',
        'custom-620':'38.75rem',
        'custom-25.93':'1.621rem',
        'custom-7.75':'0.484rem',
        '341':'21.313rem',
        '26.23':'1.639rem',
        '133':'8.313rem',
        
        
      },
      letterSpacing: {
      },
      lineHeight: {
      },
      boxShadow: {
        'inner-custom': 'inset 0 4px 4px 0 rgba(0, 0, 0, 0.25)', // Adjust the color and opacity as needed
      },
      fontSize: {
        'xs': '.75rem',      
        'sm': '.875rem',     
        'base': '1rem',      
        'lg': '2.521rem',    
        'xl': '1.25rem',     
        '2xl': '1.5rem',     
        '3xl': '1.875rem',   
        '4xl': '2.25rem',    
        '5xl': '3rem',       
        '6xl': '4rem',       
        '18xl':'1.125rem',
        'custom': '2.75rem', 
        'custom-font-forgot-pass': '0.833rem', 
        '14.33': '0.896rem', 
        '14':'0.875rem',
        '33':'2.063rem',
        '17':'1.12rem',
        '26':'1.625rem',
        '11':'0.688rem',
        '8':'0.5rem',
        '25':'1.563rem',
        '18':'1.125rem',
        '13.92':'0.87rem',
        '10':'0.625rem',
        '33':'2.063rem',
        '17.92':'1.12rem',
        '15': '0.938rem',  
        '22': '1.375rem',  
        '24': '1.5rem',  
        
        
        
     
      },
     
      borderRadius: {  
        'custom': '15px',  
        'custom-8px': '8px',  
        'custom': '8px',  
          // Custom radius value
        'large': '32px',     // Another custom radius
        'xl': '1.5rem',   
        '59':'59px' ,  // Extend existing sizes
        '15': '0.938rem',  
        '10': '0.625rem',  
       
      },
      borderWidth: {
         '0.3':'0.019rem',
      },
      maxWidth: {
        '640': '640px',
       
      },
      height: {
        'custom-button-height':'3.26rem',
        'custom-619':'38.688rem',
        'custom-620':'38.75rem',
        'custom-320':'20rem',
        'custom-289':'18.063rem',
        
      },
      minHeight: {
      },
     
      spacing: {

        '20': "100px",
         '134':"8.314rem",
         '50':"3.125rem",
         '15':"0.938rem",
         '25':"1.563rem",
         '26':"1.625rem",
         '118':'7.375rem',
         '123':'7.688rem',
         '32':'2rem',
         '18':'1.125rem',
         '29':'1.813rem',
         '116':'7.25rem',
         '35':'2.188rem',
         '13':'0.813rem',
        '61':'3.813rem',
        '42':'2.625rem',
        '120':'7.5rem',
        '39':'2.438rem',
        '30':'1.875rem',
        '0.82':'0.051rem',
        'custom-3':'0.188rem',
        '14.33':'0.896rem',
       'custom-5':'0.313rem',
        '27':'1.688rem',
        '31.4':'1.963rem',
        '72':'4.5rem',
        '15.58':'0.974rem', 
        '66':'4.125rem', 
        '5.64':'0.353rem', 
        '21':'1.313rem', 
        '11':'0.688rem', 
        '17':'1.063rem', 
        '133':'8.313rem', 
        '75':'4.688rem', 
        '46':'2.875rem', 
        '87':'5.438rem', 
        '38':'2.375rem', 
        '63':'3.938rem', 
        '73':'4.563rem', 
        '188':'11.75rem', 
        '82':'5.125rem', 
        '24': '1.5rem',  
        '91': '5.688rem',
        '52': '3.25rem',    
        '76': '4.75rem',    
        '22': '1.375rem',    
         
         
      },
      dropShadow: {
        "btn-shadow": "inset 0 0.1em 0 rgba(255,255,255,0.1), inset 0 -0.15em 0 rgba(0,0,0,0.2), 0 0.15em 0 rgba(0,0,0,0.075)",
        'custom': '0 4px 4px rgba(0, 0, 0, 0.25)', 
        'button-shadow': '1px 1px 4px rgba(0, 0, 0, 0.25)',
        'button-shadow-2': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      textShadow: {
       'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
      }
    },
    variants: {
      extend: {
        // backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      },
    },
  },


}