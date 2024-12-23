function toggleLanguage() {
    const langIcon = document.getElementById('langIcon');
    const langLabel = document.getElementById('langLabel');
    const langStatus = document.getElementById('langStatus');
    const langContent = document.getElementById('langContent');


     // Navbar items
    const home = document.getElementById('navHome');
    const about = document.getElementById('navAbout');
    const services = document.getElementById('navServices');
    const pages = document.getElementById('navPages');
    const booking = document.getElementById('navBooking');
    const team = document.getElementById('navTeam');
    const errorPage = document.getElementById('nav404');
    const contact = document.getElementById('navContact');

    // Add fade-out class for smooth transition
    langContent.classList.remove('fade-in');
    langContent.classList.add('fade-out');

    // Wait for the fade-out effect to complete before changing the text
    setTimeout(() => {
        if (langStatus.textContent === 'إلى العربية') {
            langStatus.textContent = 'To English';
            langLabel.textContent = 'Change Language';

            // Translate navbar items to Arabic and apply Arabic font
            home.textContent = 'الرئيسية';
            about.textContent = 'من نحن';
            services.textContent = 'خدماتنا';
            pages.textContent = 'الصفحات';
            booking.textContent = 'الحجز';
            team.textContent = 'الفنيون';
            errorPage.textContent = 'صفحة 404';
            contact.textContent = 'اتصل بنا';
            // document.body.classList.add('arabic-font');
           

        } else {
            langStatus.textContent = 'إلى العربية';
            langLabel.textContent = 'تغيير اللغة';

        // Translate navbar items to English and remove Arabic font
            home.textContent = 'Home';
            about.textContent = 'About';
            services.textContent = 'Services';
            pages.textContent = 'Pages';
            booking.textContent = 'Booking';
            team.textContent = 'Technicians';
            errorPage.textContent = '404 Page';
            contact.textContent = 'Contact';

            
        }

        // Add fade-in class after text changes
        langContent.classList.remove('fade-out');
        langContent.classList.add('fade-in');
    }, 300); // Adjust the delay to match the CSS transition time
}






// function toggleLanguage() {
//     const langIcon = document.getElementById('langIcon');
//     const langLabel = document.getElementById('langLabel');
//     const langStatus = document.getElementById('langStatus');
//     const langContent = document.getElementById('langContent');
    
//    
    
//     // Add fade-out class for smooth transition
//     langContent.classList.remove('fade-in');
//     langContent.classList.add('fade-out');

//     setTimeout(() => {
//         if (langStatus.textContent === 'إلى العربية') {
//             // Switch to English
//             langStatus.textContent = 'To English';
//             langLabel.textContent = 'Change Language';
            


//             document.body.classList.remove('arabic-font');
//         } else {
//             // Switch to Arabic
//             langStatus.textContent = 'إلى العربية';
//             langLabel.textContent = 'تغيير اللغة';
            

//         }

//         // Add fade-in class after text changes
//         langContent.classList.remove('fade-out');
//         langContent.classList.add('fade-in');
//     }, 300); // Adjust the delay to match the CSS transition time
// }




