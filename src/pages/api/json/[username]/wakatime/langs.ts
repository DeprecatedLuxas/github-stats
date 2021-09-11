import type { NextApiRequest, NextApiResponse } from "next";
import LanguageCard from "@cards/Wakatime/LanguageCard";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "public, max-age=7200");

    res.status(200).send(await new LanguageCard(req.query).renderJSON());
}
