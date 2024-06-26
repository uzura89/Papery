export type UserSchemaType = {
  userParmId: string;
  googleId: string;
  email: string;
  password: string;
  salt: string;
  activated: boolean;
  // premium
  customerId: string | null;
  purchaseId: string | null;
  purchasePlan: string | null;
  subscriptionId: string | null;
  subscriptionCurrentPeriodEnd: number | null;
  subscriptionCancelAtPeriodEnd: boolean | null;
  // created
  created?: Date;
};
