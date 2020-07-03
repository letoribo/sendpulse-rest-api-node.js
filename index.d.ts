/** Declaration file generated by dts-gen */

export function activateSender(callback: any, senderEmail: any, code: any): any;

export function addEmails(callback: any, id: any, emails: any): any;

export function addSender(callback: any, senderName: any, senderEmail: any): any;

export function addToBlackList(callback: any, emails: any, comment: any): any;

export function campaignCost(callback: any, id: any): any;

export function campaignStatByCountries(callback: any, id: any): any;

export function campaignStatByReferrals(callback: any, id: any): any;

export function cancelCampaign(callback: any, id: any): any;

export function createAddressBook(callback: any, bookName: any): any;

export function createCampaign(callback: any, senderName: any, senderEmail: any, subject: any, body: any, bookId: any, name: any, attachments: any): any;

export function editAddressBook(callback: any, id: any, bookName: any): any;

export function emailStatByCampaigns(callback: any, email: any): any;

export function getBalance(callback: any, currency: any): void;

export function getBlackList(callback: any): void;

export function getBookInfo(callback: any, id: any): any;

export function getCampaignInfo(callback: any, id: any): any;

export function getEmailGlobalInfo(callback: any, email: any): any;

export function getEmailInfo(callback: any, id: any, email: any): any;

export function getEmailTemplate(callback: any, id: any): any;

export function getEmailsFromBook(callback: any, id: any): any;

export function getSenderActivationMail(callback: any, senderEmail: any): any;

export function getToken(callback: any): void;

export function init(user_id: any, secret: any, storage: any, callback: any): void;

export function listAddressBooks(callback: any, limit: any, offset: any): void;

export function listCampaigns(callback: any, limit: any, offset: any): void;

export function listEmailTemplates(callback: any): void;

export function listSenders(callback: any): void;

export function removeAddressBook(callback: any, id: any): any;

export function removeEmailFromAllBooks(callback: any, email: any): any;

export function removeEmails(callback: any, id: any, emails: any): any;

export function removeFromBlackList(callback: any, emails: any): any;

export function removeSender(callback: any, senderEmail: any): any;

export function smsAddCampaign(callback: any, sender_name: any, addressbook_id: any, body: any, date: any, transliterate: any): any;

export function smsAddPhones(callback: any, addressbook_id: any, phones: any): any;

export function smsAddPhonesToBlacklist(callback: any, phones: any, comment: any): any;

export function smsAddPhonesWithVariables(callback: any, addressbook_id: any, phones: any): any;

export function smsCancelCampaign(callback: any, campaign_id: any): any;

export function smsDeleteCampaign(callback: any, campaign_id: any): any;

export function smsDeletePhonesFromBlacklist(callback: any, phones: any): any;

export function smsGetBlackList(callback: any): void;

export function smsGetCampaignCost(callback: any, sender_name: any, body: any, addressbook_id: any, phones: any): any;

export function smsGetCampaignInfo(callback: any, campaign_id: any): any;

export function smsGetListCampaigns(callback: any, date_from: any, date_to: any): void;

export function smsGetPhoneInfo(callback: any, addressbook_id: any, phone: any): any;

export function smsGetPhonesInfoFromBlacklist(callback: any, phones: any): any;

export function smsRemovePhones(callback: any, addressbook_id: any, phones: any): any;

export function smsSend(callback: any, sender_name: any, phones: any, body: any, date: any, transliterate: any, route: any): any;

export function smsUpdatePhonesVariables(callback: any, addressbook_id: any, phones: any, variables: any): any;

export function smtpAddDomain(callback: any, email: any): any;

export function smtpGetEmailInfoById(callback: any, id: any): any;

export function smtpListAllowedDomains(callback: any): void;

export function smtpListEmails(callback: any, limit: any, offset: any, fromDate: any, toDate: any, sender: any, recipient: any): void;

export function smtpListIP(callback: any): void;

export function smtpRemoveFromUnsubscribe(callback: any, emails: any): any;

export function smtpSendMail(callback: any, email: any): any;

export function smtpUnsubscribeEmails(callback: any, emails: any): any;

export function smtpVerifyDomain(callback: any, email: any): any;

export function updateEmailVariables(callback: any, id: any, email: any, variables: any): any;

