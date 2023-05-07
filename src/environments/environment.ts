export const environment = {
  production: false,
  BaseUrl: "http://20.231.227.211:8089",
  sentryUrl:"https://e76ba6cc0d034f54bc7f349d457215b6@o4504518512148480.ingest.sentry.io/4504529733615616",
  newsFeedUrl:"https://prod-darkeye-function.azurewebsites.net",
  newsApikey:"lVPdNMbRPuGXxX_KRnVsUgtICh0RNQ2rRDkLvm-E-NHoAzFuUY4xhQ",
  endpoints: {
    /*Vendors*/
    LOGIN_API_URL: "authenticate",
    LOGOUT_API_URL: "invalidate",
    GET_ORG_DETAILS_API_URL: "user",
    GET_SCAN_DETAILS_API_URL: "scandetails/latest/all",
    GET_VENDROR_LIST_API_URL: "customer",
    ADD_ASSOCIATED_DOMAINS_API_URL: "org",

    FILEUPLOAD_API_URL: "file",
    GET_INDUSTRYTYPES_API_URL: "org/industryTypes",
    GET_SERVICETYPES_API_URL: "org/serviceTypes",
    POST_VENDOR_API_URL: "org",
    ASSIGN_VENDOR_API_URL: "customer",
    GET_VEDNORSBYID_API_URL: "vendorUser/vend",
    ASSIGN_ASSES_API_URL: "assess",
    CREATE_USER_VENDOR_API_URL: "vendorUser/cust",
    CREATE_VENDOR_DETAILS_BY_DOMAIN_API_URL: "org/primaryDomain",

    QUESTIONNAIRES_v1_API_URL: "questionnaire",
    QUESTIONNAIRES_STATUS_LIST_API_URL: "assess/list/status",

    CREATE_TEMPLATE_API_URL: "questionnaire",

    QUESTIONNAIRES_DETAILS_v1_API_URL: "questionnaire",
    QUESTIONNAIRES_DETAILS: "questionnaire/display",
    FORGETPASSWORD_API_URL: "forgotPassword",
    CONTACT_API_URL: "contactUs",

    DNS_THREATS: "query/getResults/DNS_THREATS",
    DASHBOARD_API_URL: "dashboard",

    REPUTATION: "reputation",
    ALLDOMAINSLIST: "customer/",
    ALLDOMAINSLISTBYORG: "org/",
    SCANNEDDOMAINSLISTBYORG: "users/scanDetailsByOrg",

    SELECTEDDOMAINAME: "scandetails/latest/all",
    SCANNEDDOMAINSLIST: "users/scanDetailsByClient",
    TOTALSCANSCOUNT: "users/scanCountByClient",
    TOTALSCANSCOUNTBYORG: "users/scanCountByOrg",
    SELFASSMENTAPI: "scan/latestScanResults",
    SELFASSMENT_VA_API: "scan/va/latestScanResults",
    SELFASSMENT_SA_API: "scan/sa/latestScanResults",
    INITIATESCAN: "scan/initScan?domains=",

    //---------------- UserMng------------------------------------------//


    GET_USERS_LIST_API_URL:"user/list/cust",
    GROUPS_URL:"groups/customer",
    GROUPS_MAIN_URL:"groups",
    CREATE_USER_API_URL:"user/add",
    UPDATE_USER_API_URL:"user/update",
    USERROLES_URL:"user/roles",
    GET_ROLES_API_URL: "user/roles",
    GET_GROUP_DEATAILS_API_URL:"groups/roles",
    UPDATE_ROLE_GROUP_API_URL:"groups/updateRoles",

    VENDORS_LIST:"customer/vendor/list",
    // ---------------------------------------------------- Vendor-mode---------------------------------
    CLIENT_LIST_API_URL: "assess/vend",
    ASSESMENT_LIST_API_URL: "assess/cust",
    ASSESMENT_BASE_API_URL: "assess",
    //------------------------------------------------ News Feed ------------------------------------------------

    //
    // api/feedspot
    FEEDSPOT_API_URL:'api/feedspot',

    //remediation

    REMEDIATION_THREATS_API_URL: 'remediation/threats',
    REMEDIATION_BASE_API_URL:"remediation/customer",
    REMEDIATION_VENDOR_API_URL:"remediation/vendor",
    REMEDIATION_STATUS_API_URL:'remediation',
    REMEDIATION_TARGET_API_URL:"remediation/target",
    REMEDIATION_ADDCOMMENT_API_URL:"remediation/addComment/target",
    REMEDIATION_VENDOR_ADDCOMMENT_API_URL:"remediation/vendor/addComment/target",
    REMEDIATION_VENDOR_WORK_API_URL:"remediation-vendor",

    // notifications
NOTIFICATION_BASE_API_URL:'notifications',
NOTIFICATION_UNREAD_API_URL:'notifications/unread',


    // -------------------------DemoUm------>
    //'vrm/v1.0/vrmSignin',
    QUESTIONNAIRES_API_URL: "user/list/cust/1",
    BRISPEDIAT_API_URL: "vrm/v1.0/vrm/brispedia",
    VENDORS_API_URL: "vrm/v1.0/getVendors",
    QUESTIONNAIRES_DETAILS_API_URL: "vrm/v1.0/getQuetionaryDetails",
    UPDATEQUESTIONAIRES_API_URL: "vrm/v1.0/updateQuetionaries",
    RESET_API_URL: "vrm/v1.0/verReset",
    CREATE_ROLE_API_URL: "vrm/roles/v1.0/roles/create",

    UPDATE_ROLE_API_URL: "vrm/roles/v1.0/roles/update",

    GET_USER_DETAILS_API_URL: "vrm/v1.0/vrm/usermanagementDetails",


  },
  keylock:{
    redirectUri: window.location.origin,
    // clientId: 'darkeye-angular-pkce-client',
    // redirectUri: "http://20.231.227.211:5200/login",
     clientId: 'darkeye-angular-pkce-client',
    //  realm:"http://40.76.78.36:8080/auth/realms/Culinda"
    realm:"http://20.120.6.16:8080/auth/realms/culinda-vrm-uat"
    //  clientId: 'darkeye-angular-pkce-client-qa',
  },
  webSocket:{
    topic:"/users/topic/darkeye-qa",
    Url:'http://20.231.227.211:9090/notifications'
  }
};
