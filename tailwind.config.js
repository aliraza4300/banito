const colors = require('tailwindcss/colors')
module.exports = {
content: [
'./components/**/*.{html,js,jsx,ts,tsx}',
  './pages/**/*.{html,js,jsx,ts,tsx}',
  // './index.html',
  './login.html',
  './signup.html',
  './signup-screen-2.html',
  './signup-screen-3.html',
  './signup-screen-4.html',
  './sourcefunding.html',
  './verification.html',
  './resetpassword.html',
  './connectbank.html',
  './activity.html',
],
  
  theme: {
    extend: {
      
       backgroundImage: {
        'custom-gradient': 'linear-gradient(90.3deg, #4849F0 0.16%, #363231 101.62%)',
        'custom-gradient-2': 'linear-gradient(180deg, rgba(72, 73, 240, 0.79) 0%, #292A8A 100%)',
      },
      
      screens: {
      },
      colors: {
       "gray-c-400":"#f4f3fe",
       "gray-c-600":"#A4A4A4",
       "neutral-750":"#333",
       "purple-750":"#480480",
       "teal-650":"#1aaaaa",
       "Neutral-150":"#f7f7f7",
       "Neutral-350":"#DCE4EC",
       "neutral-175":"#f3f3f3",
       "neutral-275":"#a7babe",
       "danger-e7":"#e74c3c",
       "blue": '#4849F0',
       "green-14": '#14A11A',
       "border-color": '#7474F4',
      'gray': '#f8f8fe',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      container: {
      },
      width: {
        'w-6':'1.5rem',
        '92':'5.75rem',
        'custom-620':'38.75rem',
        
      },
      letterSpacing: {
      },
      lineHeight: {
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
        
     
      },
      borderRadius: {
        'custom': '15px',  
        'custom-8px': '8px',  
          // Custom radius value
        'large': '32px',     // Another custom radius
        'xl': '1.5rem',   
        '59':'59px' ,  // Extend existing sizes
      },
      maxWidth: {
        '640': '640px',
       
      },
      height: {
        'custom-button-height':'3.26rem',
        'custom-619':'38.688rem',
        'custom-620':'38.75rem',
        'custom-320':'20rem',
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
         
         
         
      },
      dropShadow: {
        "btn-shadow": "inset 0 0.1em 0 rgba(255,255,255,0.1), inset 0 -0.15em 0 rgba(0,0,0,0.2), 0 0.15em 0 rgba(0,0,0,0.075)"
      }
    },
    variants: {
      extend: {
        // backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      },
    },
  },


}