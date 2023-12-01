import { FreshContext } from "$fresh/server.ts";

import es from "../utils/i18n/es.json" assert { type: "json" };
import en from "../utils/i18n/en.json" assert { type: "json" };
import ca from "../utils/i18n/ca.json" assert { type: "json" };

import SecurityHeaders from "../utils/securityHeaders.ts";
import { State } from "../utils/types.ts";

export const handler = [
  async function setLanguage(
    req: Request,
    ctx: FreshContext<State>,
  ) {
    const cookie = req.headers.get("cookie");
    if (cookie && cookie.includes("lang")) {
      ctx.state.lang = cookie.split("=")[1] as "en" | "es" | "ca";
      ctx.state.translation = ctx.state.lang === "en" ? en : ctx.state.lang === "es" ? es : ca;
      return await ctx.next();
    } else {
      ctx.state.lang = req.headers.get("accept-language")?.includes("es")
        ? "es"
        : req.headers.get("accept-language")?.includes("ca")
        ? "ca"
        : "en";
      ctx.state.translation = ctx.state.lang === "en" ? en : ctx.state.lang === "es" ? es : ca;
      const res = await ctx.next();
      res.headers.set("Set-Cookie", `lang=${ctx.state.lang}`);
      return res;
    }
  },
  async function setSecurityHeaders(
    _req: Request,
    ctx: FreshContext<State>,
  ) {
    const resp = await ctx.next();
    SecurityHeaders.map((header) => {
      resp.headers.set(header.key, header.value);
    });
    return resp;
  },
];