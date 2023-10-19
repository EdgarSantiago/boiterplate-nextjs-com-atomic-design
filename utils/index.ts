export const getPath = (path: string = ""): string => (path ? `/${path}` : "");

export const createUrlParamFromObj = (
  params: Record<string, any> | null = null
): string => {
  if (!params) return "";
  const result: string[] = [];
  Object.keys(params).map((key) => result.push(`${key}=${params[key]}`));
  return `?${result.join("&")}`;
};

export const getCustomUrl = (url: string = ""): string => url;

export const getContentType = (type: string = ""): string => {
  switch (type) {
    case "form-data":
      return "multipart/form-data";
    default:
      return "application/json";
  }
};

export const createHeader = (
  value: Record<string, any> = {},
  base: Record<string, any> = {}
): Record<string, any> => ({
  ...base,
  ...value,
});
