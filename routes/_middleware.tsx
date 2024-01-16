import { FreshContext } from "$fresh/server.ts";

import es from "../utils/i18n/es.json" with { type: "json" };
import en from "../utils/i18n/en.json" with { type: "json" };
import ca from "../utils/i18n/ca.json" with { type: "json" };

import SecurityHeaders from "../utils/securityHeaders.ts";
import { State } from "../utils/types.ts";

const languages = ["es", "ca", "en"];

function getLanguageSetViaURL(url: string) : string {
  const lang = url.split("/")[3].toLowerCase();
  return lang;
}

function isLanguageSetViaURL(url: string) : boolean {
  const lang = url.split("/")[3].toLowerCase();
  if (languages.includes(lang as "es" | "ca" | "en")) return true;
  return false;
}

function setLanguageViaURL(req: Request, ctx: FreshContext<State>) : Response {
  const lang = getLanguageSetViaURL(req.url);
  ctx.state.lang = lang as "es" | "ca" | "en";
  ctx.state.translation = lang === "en" ? en : lang === "es" ? es : ca;
  return new Response(null, {
    headers: {
      "location": req.url.replace(`/${lang}`, ""),
      "Set-Cookie": `lang=${lang}; HttpOnly; Secure; SameSite=Strict`,
    },
    status: 302,
  });
}


function getLanguage(req: Request) : string {
  const cookies = req.headers.get("cookie");
  const cookiesArray = cookies?.split("; ");
  let lang = "";
  cookiesArray?.map((cookie) => {
    if (cookie.includes("lang")) {
      lang = cookie.split("=")[1];
    }
  });
  if (!languages.includes(lang as "es" | "ca" | "en")) {
    lang = req.headers.get("accept-language")?.includes("es")
      ? "es"
      : req.headers.get("accept-language")?.includes("ca")
      ? "ca"
      : "en";
  }
  return lang;
}

export const handler = [
  async function setLanguage(
    req: Request,
    ctx: FreshContext<State>,
  ) {
    if(isLanguageSetViaURL(req.url)) {
      return setLanguageViaURL(req, ctx);
    }
    const lang = getLanguage(req);
    ctx.state.lang = lang as "es" | "ca" | "en";
    ctx.state.translation = lang === "en" ? en : lang === "es" ? es : ca;
    const res = await ctx.next();
    return res;
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
  async function setCookies(
    req: Request,
    ctx: FreshContext<State>,
  ) {
    const resp = await ctx.next();
    resp.headers.set("Set-Cookie", `lang=${ctx.state.lang}; HttpOnly; Secure; SameSite=Strict`);
    return resp;
  }
];