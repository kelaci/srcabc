/* global Response, URL */

const SOURCE_HOSTS = new Set(["srcabc.com", "www.srcabc.com"]);
const HUNGARIAN_HOST = "hu.srcabc.com";
const LANGUAGE_REDIRECT_STATUS = 302;

export function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);

  if (!shouldRedirectToHungarianSite(request, url)) {
    return context.next();
  }

  url.protocol = "https:";
  url.hostname = HUNGARIAN_HOST;
  url.port = "";

  return Response.redirect(url.toString(), LANGUAGE_REDIRECT_STATUS);
}

export function shouldRedirectToHungarianSite(request, url) {
  return (
    SOURCE_HOSTS.has(url.hostname.toLowerCase()) &&
    isPageNavigation(request) &&
    prefersHungarian(request.headers.get("Accept-Language"))
  );
}

function isPageNavigation(request) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return false;
  }

  const accept = request.headers.get("Accept");
  return accept === null || accept.toLowerCase().includes("text/html");
}

export function prefersHungarian(acceptLanguage) {
  const preferredLanguage = parseAcceptedLanguages(acceptLanguage)[0];
  return preferredLanguage?.tag.toLowerCase().startsWith("hu") === true;
}

function parseAcceptedLanguages(acceptLanguage) {
  if (acceptLanguage === null || acceptLanguage.trim() === "") {
    return [];
  }

  return acceptLanguage
    .split(",")
    .map((entry, index) => {
      const [rawTag, ...parameters] = entry.trim().split(";");
      const quality = parameters.reduce((currentQuality, parameter) => {
        const [key, rawValue] = parameter.trim().split("=");

        if (key.toLowerCase() !== "q") {
          return currentQuality;
        }

        const parsedQuality = Number.parseFloat(rawValue);
        return Number.isNaN(parsedQuality) ? currentQuality : parsedQuality;
      }, 1);

      return {
        tag: rawTag.trim(),
        quality,
        index,
      };
    })
    .filter((language) => language.tag !== "" && language.quality > 0)
    .sort((left, right) => right.quality - left.quality || left.index - right.index);
}
