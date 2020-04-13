const myFunctions = require("../customFunctions");
const faqsList = myFunctions.jsonParser("./data/faqs.json");
const faqsCount = faqsList.faqs.length;

//titulos
const faqRoute = '(Preguntas Frecuentes)';
const faqTitle = '🆘Preguntas Frecuentes: ';

//lisado de sucursales
const listFaq = faqsList.faqs.map(faq => ' ✼ ' + faq.faq_title + myFunctions.lb1 + ' → ' + faq.faq_answer);
const listFaqSorted = listFaq.sort().join(myFunctions.lb2);

//response data
const resFaqs = (myFunctions.appName + faqRoute + myFunctions.lb2 + faqTitle + myFunctions.lb2 + listFaqSorted);

module.exports = resFaqs;