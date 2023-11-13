interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Business Owner', 'Project Manager'],
  tenantName: 'Company',
  applicationName: 'upwork clone',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage applications', 'View jobs', 'Edit personal user information', 'View company information'],
  ownerAbilities: ['Manage applications', 'Manage jobs', 'Manage user', 'Manage company'],
  getQuoteUrl: 'https://app.roq.ai/proposal/1e9966c2-2fb8-466c-a935-ba933c3d98c1',
};
