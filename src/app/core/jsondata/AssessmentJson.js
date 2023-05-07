const assetsInventory = [
  {
    title: "Open Ports & Services",
    checked: false,
    description:
      "The IPv4 addresses corresponding to the target domain's DNS records (A, MX, NS records) along with the open ports & services, subnet and geolocation on them are displayed.",
    count: 0,
  },
  {
    title: "Main Infrastructure Servers",
    checked: false,
    count: 0,
    description:
      "A list of DNS records (A,MX,NS records) and their corresponding IP addresses are provided.",
  },
  {
    title: "Other Domains on the same IP",
    checked: false,
    count: 0,
    description:
      "The domain name(s)  which are resolved to the same IP address.",
  },
  {
    title: "Known Subdomains",
    checked: false,
    count: 0,
    description:
      "A list of known subdomains found on the surface web and corresponding IPv4 addresses are discovered which are prone to cyber attacks.",
  },
  {
    title: "Open Cloud Storage",
    checked: false,
    count: 0,
    description:
      "Finds Cloud storages for the domain which are open to the public and may contain sensitive information.",
  },
  {
    title: "Assets Config Check",
    checked: false,
    count: 0,
    description:
      "A check is performed against all open ports of DNS records found for the target to see if they are part of most vulnerable open ports.",
  },
];
const whois = [
  {
    title: "General Information",
    checked: false,
    count: 0,
    description:
      "Retrieve and analyse domain name's owner General Information.",
  },
  {
    title: "Domain Owner",
    checked: false,
    count: 0,
    description:
      "All the available contact information regarding the domain's owner.",
  },
  {
    title: "Admin Contact Info",
    checked: false,
    count: 0,
    description:
      "All the available contact information regarding the domain's administrative contact.",
  },
  {
    title: "Technical Contact Info",
    checked: false,
    count: 0,
    description:
      "All the available contact information regarding the domain's technical contact.",
  },
  {
    title: "Domain Check",
    checked: false,
    count: 5,
    description:
      "It gives Points on possibly suspicious information in the domain name registration record.",
  },
  {
    title: "WHOIS & DNS Name servers match",
    checked: false,
    count: 3,
    description:
      "A test is performed if the Name servers for the target provided by whois matches with the ones received by ns lookup.",
  },
  {
    title: "Reverse WHOIS",
    checked: false,
    count: 0,
    description:
      "Reverse whois helps in retrieving the list of all linked domains along with their created date and Registrar Name.",
  },
  {
    title: "Domain Status",
    checked: false,
    count: 4,
    description:
      "Domain name status codes, indicate the status of a domain name registration. They help in understanding why domain stopped working, is it protected from hijacking, domain expiry, etc.",
  },
];

const Websites = [
  {
    title: "Web Analysis - Pages Parsed",
    checked: false,
    count: 1,
    description:
      "The target domain's website content is parsed and statistics are given.",
  },
  {
    title: "Technology & CMS",
    checked: false,
    count: 4,
    description:
      "The technologies which are used to develop the websites and the cms plug-in(s) if any ( for example Word press,php etc) are discovered.",
  },
  {
    title: "Social Network",
    checked: false,
    count: 2,
    description:
      "Links to Social Networking sites for handles relevant to target domain are discovered through website pages parsing.",
  },
  {
    title: "3rd Party Services",
    checked: false,
    count: 4,
    description:
      "The website content of target domain is parsed and service indicators and their description are given.",
  },
  {
    title: "3rd Party Domains",
    checked: false,
    count: 6,
    description:
      "The domains other than main target domain which are integrated in the website are displayed.",
  },
  {
    title: "Web Analysis Config Check",
    checked: false,
    count: 6,
    description:
      "Website's content analysis, relations to the other domains and host configuration issues.",
  },
  {
    title: "Connected Domains",
    checked: false,
    count: 56,
    description:
      "A list of domains which are reference from the target domain's website, considering subdomains as separate domain names are shown.",
  },
  {
    title: "Host Configuration Issues",
    checked: false,
    count: 2,
    description:
      "It checks if the target host contains possible vulnerabilities or configuration issues.",
  },
  {
    title: "Website Category",
    checked: false,
    count: 0,
    description:
      "It lookups the categories that a particular website is categorized based on site & content as per Interactive Advertising Bureau(IAB) along with confidence values (probability of relevancy of website category to its content) for Tier 1 (reflects Top-level category & points to general topic content) and Tier 2 (reflects IAB’s Tier 2, 3 & 4 , describe content more specifically). For more information, see https://iabtechlab.com/standards/content-taxonomy/",
  },
  {
    title: "Website Contacts - Telephone Numbers",
    checked: false,
    count: 2,
    description:
      "List of telephone numbers available on the domain's website page.",
  },
  {
    title: "Website Contacts - Email ID(s)",
    checked: false,
    count: 1,
    description:
      "List of Email addresses available on the domain's website page.",
  },
  {
    title: "Miscellaneous Vulnerabilities",
    checked: false,
    count: 3,
    description:
      "Check if the site is vulnerable to Host Injection, Click Jacking and Cross-Origin Resource Sharing (CORS).",
  },
  {
    title: "Malware Databases Check",
    checked: false,
    count: 1,
    description:
      "Check if the domain is considered dangerous in various malware data feeds across the Internet.",
  },
];
const Dns = [
  {
    title: "Mail Exchanger (MX) Records",
    checked: false,
    count: 0,
    description:
      "Mail exchanger (MX) records of the target domain are discovered and displayed.",
  },
  {
    title: "Mail Servers Reverse IP Addresses Match",
    checked: false,
    count: 0,
    description:
      "A Comparison is done for Mail server's IPs received though reverse DNS and the ones provided in the initial Main Infrastructure records.",
  },
  {
    title: "Name Server (NS) Records",
    checked: false,
    count: 0,
    description:
      "Nameserver(NS) record gives information that which server is authoritative for the domain.",
  },
  {
    title: "Name Servers Respond",
    checked: false,
    count: 0,
    description:
      "A test is performed if all the Name servers associated with the target domain are responding.",
  },
  {
    title: "SOA Records",
    checked: false,
    count: 7,
    description:
      "Start of Authority or SOA records for the domain which are an important part of Zone transfer file and contains useful zone management information  are shown.",
  },
  {
    title: "Mail Servers Response",
    checked: false,
    count: 1,
    description:
      "A check is done if the mail servers for the target domain are responding or not.",
  },
  {
    title: "Real-Time Blackhole Check",
    checked: false,
    count: 1,
    description:
      "A test is performed against the domain's Mail servers if they have been blacklisted in Reputed Blacklists or not.",
  },
  {
    title: "MX Configuration Check",
    checked: false,
    count: 11,
    description: "It perfoms tests on Mail servers and their configuration.",
  },
  {
    title: "NS Configuration Check",
    checked: false,
    count: 8,
    description:
      "Check NS records and the corresponding Name Server's configurations for the target domain.",
  },
  {
    title: "SOA Configuration Check",
    checked: false,
    count: 7,
    description:
      "Different tests are performed if the SOA records are configured appropriately or not.",
  },
];

const Ssl = [
  {
    title: "SSL List",
    checked: false,
    count: 0,
    description:
      "A list of SSL certificates (Root, Intermediates and end-user) for the target domain alongwith important details and corresponding certificate validity information is  displayed.",
  },
  {
    title: "SSL Config Check",
    checked: false,
    count: 0,
    description:
      "Check for the common SSL certificate's and the host's SSL configuration vulnerabilities.",
  },
];
const DomainSquatting = [
  {
    title: "Domain Squatting",
    checked: false,
    count: 6,
    description:
      "Squatting register domain names that are a slight variation of the target domain name are displayed.",
  },
  {
    title: "Doppelganger Domains",
    checked: false,
    count: 0,
    description:
      "List of domains spelled identical to a legitimate fully qualified domain and bifurcated into Existing if its A is present, otherwise NonExisting.",
  },
];
const Threats = [
  {
    title: "Assets Inventory",
    checked: false,
    count: 10,
    description:
      "All the warnings related to the critical assets of the target domain are displayed.",
  },
  {
    title: "WHOIS",
    checked: false,
    count: 1,
    description:
      "All the warnings related to whois records of the target domain are displayed.",
  },
  {
    title: "Websites",
    checked: false,
    count: 3,
    description:
      "All the warnings related to the target's website are displayed.",
  },
  {
    title: "SSL",
    checked: false,
    count: 3,
    description:
      "All the warnings related to the SSL lists and the SSL configuration are displayed.",
  },
  {
    title: "DNS",
    checked: false,
    count: 1,
    description:
      "All the warnings related to DNS records and their configurations are displayed.",
  },
];

const Breaches = [
  {
    title: "Employee Leaks",
    checked: false,
    count: 0,
    description:
      "Critical information about leaked emails, pawn count, data classes, etc.  of employees associated with target domain are found and displayed.",
  },
  {
    title: "Github Secrets",
    checked: false,
    count: 0,
    description:
      "Secrets exposed in code commits of open Github repositories whose names contains the target domain name without TLD are discovered.",
  },
];
const Charts = [
  {
    title: "Assets Inventory",
    count: 0,
    show: true,
    description:
      "Assets Inventory  comprises of target organization's digital assets like main infrastructure servers, open cloud storages, subdomains, etc.",
  },
  {
    title: "WHOIS",
    count: 0,
    show: false,
    description: "Retrieve and analyse domain name's WHOIS records.",
  },
  {
    title: "Websites",
    count: 0,
    show: false,
    description:
      "Website's content analysis, relations to the other domains and host configuration issues.",
  },
  {
    title: "DNS",
    count: 0,
    show: false,
    description:
      "DNS module comprises of all the A records, Sub domains, MX records, NS records, SOA records, etc. and their respective config checks.",
  },
  {
    title: "SSL",
    count: 0,
    show: false,
    description:
      "Analyse domain's SSL (HTTPS) certificates and test host's SSL connection and configuration and find if there are any vulnerabilities.",
  },
  {
    title: "Domain Squatting",
    count: 0,
    show: false,
    description:
      "Squatting registered domain names that are a slight variation of the target domain name are displayed.",
  },
  {
    title: "Breaches",
    count: 0,
    description:
      "Critical information about leaked emails and open Github repositories.",
  },
  {
    title: "Threats",
    count: 0,
    show: false,
    description:
      "If any module has vulnerable status or warning status then the record of the respective module are displayed under Threats.",
  },
];

const AssessmentJson = {
  assetsInventoryJsonData: assetsInventory,
  whoisJsonData: whois,
  WebsitesJsonData: Websites,
  DnsJsonData: Dns,
  SslJsonData: Ssl,
  DomainSquattingJsonData: DomainSquatting,
  ThreatsJsonData: Threats,
  BreachesJsonData: Breaches,
  ChartsJsonData: Charts,
};

export default AssessmentJson;
