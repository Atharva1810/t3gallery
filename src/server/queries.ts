import "server-only";
import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

export const getMyImages = async () => {
  const user = await auth();

  if (!user.userId) {
    throw new Error("Unauthorized user");
  }

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
};
