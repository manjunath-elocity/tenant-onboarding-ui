export enum ROLE {
  AD = "AD",
  SU = "SU",
}

export interface TenantEntry {
  partyId: string;
  countryCode: string;
  name: string;
  logoImageUrl?: string;
  primaryColorCode?: string;
  senderEmailId?: string;
  androidAppUrl?: string;
  iosAppUrl?: string;
}

export interface UserEntry {
  first_name: string;
  last_name: string;
  email: string;
  country_calling_code: string;
  contact_number: string;
  role: ROLE;
  is_tenant_admin?: boolean;
  disable2FA?: boolean;
}

export interface BusinessDetailEntry {
  name: string;
  websiteUrl?: string;
  email: string;
  contactNumber: string;
  countryCallingCode: string;
  brandColor?: string;
}

export interface SettingsEntry {
  key: string;
  value: string;
}

export interface OnboardTenantDto {
  tenant: TenantEntry;
  users: UserEntry[];
  businessDetail: BusinessDetailEntry;
  settings?: SettingsEntry[];
}
