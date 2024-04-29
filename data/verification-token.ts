import { db } from "@/lib/db";

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificatioToken = await db.verificationToken.findUnique({
      where: { token},
    });

    return verificatioToken
  } catch {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
    try {
      const verificatioToken = await db.verificationToken.findFirst({
        where: { email},
      });
  
      return verificatioToken
    } catch {
      return null;
    }
  };
