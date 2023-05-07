
import { LocalService } from './../services/local.service';

export default class Utils {
   
   
    
    constructor(private localStore: LocalService) {
    
    }
     getOrginfo(val: string) { return val; }
     getOrgdomain() { this.localStore.getData('user')?.customer?.orgId?.clientMainDomain?.domainName; }
}