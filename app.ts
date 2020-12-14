import { EmailBuilder } from './EmailBuilder';

const newMail = new EmailBuilder('Some stuff')
.setFrom('Ssdsad@adssd.pl')
.setTo("sddasd@sdsad.pl", "sdsad@fdffd.pl", "sdsasd", "sdassad@asdsd.sd")
.setCc("sdad@sda.od")
.build()
console.log(newMail)