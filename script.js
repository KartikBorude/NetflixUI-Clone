var hindi = document.querySelector("#page1 nav #nav1 button#hindi")
var fi = document.querySelector("#page2 h1")
var fi2 = document.querySelector("#page2 h1#f2")
var h4 = document.querySelector("#page2 h4")
var h5 = document.querySelector("#page2 h5")
var tre = document.querySelector("#cur #curve h1")
var mor = document.querySelector("#more h1")
var en = document.querySelector("#page4 #enjoy h1")
var en1 = document.querySelector("#page4 #enjoy h4")
var dow = document.querySelector("#page4 #download h1")
var do1 = document.querySelector("#page4 #download h4")
var wa = document.querySelector("#page4 #watch h1")
var wa1 = document.querySelector("#page4 #watch h4")
var cr = document.querySelector("#page4 #create h1")
var cr1 = document.querySelector("#page4 #create h4")
var inf = document.querySelector("#info h1")
var q1 = document.querySelector("#faqs #q1 h1")
var q2 = document.querySelector("#faqs #q2 h1")
var q3 = document.querySelector("#faqs #q3 h1")
var q4 = document.querySelector("#faqs #q4 h1")
var q5 = document.querySelector("#faqs #q5 h1")
var q6 = document.querySelector("#faqs #q6 h1")
a = 0
hindi.addEventListener("click", function () {

    if (a == 0) {
        fi.innerHTML = "अनलिमिटेड फ़िल्में, टीवी"
        fi2.innerHTML = "शो, और बहुत कुछ"
        h4.innerHTML = "₹149 से शुरू होता है. कभी भी कैंसल करें."
        h5.innerHTML = "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें"
        tre.innerHTML = "ट्रेंडिंग नाव"
        mor.innerHTML = "शामिल होने की ज़्यादा वजहें"
        en.innerHTML = "अपने टीवी पर आनंद लें"
        en1.innerHTML = "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें."
        dow.innerHTML = "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें"
        do1.innerHTML = "अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें."
        wa.innerHTML = "हर जगह देखें"
        wa1.innerHTML = "बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें."
        cr.innerHTML = "बच्चों के लिए प्रोफ़ाइल"
        cr1.innerHTML = "बच्चों को अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जाने दें जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री."
        inf.innerHTML = "अक्सर पूछे जाने वाले सवाल"
        q1.innerHTML="नेटफ्लिक्स क्या है?"
        q2.innerHTML="नेटफ्लिक्स की लागत कितनी है?"
        q3.innerHTML="मैं कहाँ देख सकता हूँ?"
        q4.innerHTML="मैं कैसे रद्द करूं?"
        q5.innerHTML="मैं नेटफ्लिक्स पर क्या देख सकता हूं"
        q6.innerHTML="नेटफ्लिक्स बचोंको अजिबात वापरने मत दो"
        hindi.innerHTML = "English"
        a = 1
    }
    else {
        fi.innerHTML = "Unlimited movies,"
        fi2.innerHTML = "TV shows and more"
        h4.innerHTML = "Starts at ₹149. Cancel at any time."
        h5.innerHTML = "Ready to watch? Enter your email to create or restart your membership."
        tre.innerHTML = "Trending Name"
        mor.innerHTML = "More reasons to join"
        en.innerHTML = "Enjoy on your TV"
        en1.innerHTML = "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        dow.innerHTML = "Download your shows to watch offline"
 do1.innerHTML = "Save your favourites easily and always have something to watch."
 wa.innerHTML = "Watch everywhere"
        wa1.innerHTML = "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
        cr.innerHTML = "Create profiles for kids"
        cr1.innerHTML = "Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
        inf.innerHTML = "Frequently Asked Questions"
        q1.innerHTML="What is Netflix ?"
        q2.innerHTML="How much does Netflix cost?"
        q3.innerHTML="Where can I watch ?"
        q4.innerHTML="How do I Cancel ?"
        q5.innerHTML="What can I watch on Netflix ?"
        q6.innerHTML="is Netflix good for kids ?"
        hindi.innerHTML = "Hindi"
        a = 0
    }



})