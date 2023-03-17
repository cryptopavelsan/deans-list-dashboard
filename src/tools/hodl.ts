import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

import { RPC_URL } from "../constants";

import { Holder } from "@/types";

export const Hodl = async ({
  userPubkey,
  tokenPubkey,
}: {
  userPubkey: PublicKey;
  tokenPubkey: PublicKey;
}): Promise<Holder> => {
  const connection = new Connection(RPC_URL, "confirmed");
  const ownerPublicKey = new PublicKey(userPubkey);

  const balance = await connection.getParsedTokenAccountsByOwner(
    ownerPublicKey,
    {
      mint: tokenPubkey,
    }
  );

  // console.log(balance);

  // if user holds >= 1 token, Yay!
  if (balance.value.length == 1) {
    return Holder.Yay;
    // else, Nay.
  } else return Holder.Nay;
};
