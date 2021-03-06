var settings = {}

settings.ldap = {}
settings.ldap.basedn = "dc=yoursite, dc=org", // "cn=root" another alternative
settings.ldap.SUFFIX = 'dc=yoursite, dc=org'; //base search. If not defined basedn
settings.ldap.company = "Your site",
settings.ldap.port = 1389, // 389 is the ldap port, but needs to run as root (priviledged port 
settings.ldap.password="you need to override it"
settings.ldap.enabled=false // you need to remove that line on your copy

settings.civicrm = {}
settings.civicrm.server ="http://www.example.org"
settings.civicrm.path = "/sites/all/modules/civicrm/extern/rest.php",
settings.civicrm.api_key="your api key"
settings.civicrm.key="your site key"

settings.civicrm.action="getttpquick"
//settings.civicrm.action="get" you can use get if you don't install the extension eu.tttp.qlookup 

module.exports = settings;
