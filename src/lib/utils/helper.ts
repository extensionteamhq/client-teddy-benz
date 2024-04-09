import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function disableScroll() {
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  document.body.style.overflow = "auto";
}

function toTitleCase(input:string) {
  return input.replace(/\w\S*/g, function (text) {
      return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  });
}

function validateUrl(value: string) {
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.[^\s/$.?#]+/i;
  if (!urlPattern.test(value)) {
    return {
      isValid: false,
      errorMessage: "The URL is not valid (e.g., https://domain.com/)",
    };
  }
  return {
    isValid: true,
    errorMessage: "",
  };
}

function validateUSPhoneNumber(phoneNumber:string) {
  const regex = /^\+1 \(\d{3}\) \d{3}-\d{4}$/;
  return regex.test(phoneNumber);
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateObject(datas: any[]) {
  if (!Array.isArray(datas)) {
    return false;
  }
  return datas.some(
    (data) => data.firstName && data.lastName && data.email  && data.phoneNumber
  );
}

const slugify = (str: string = "") =>
  str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");

export {
  cn,
  disableScroll,
  enableScroll,
  toTitleCase,
  validateUrl,
  validateUSPhoneNumber,
  validateEmail,
  validateObject,
  slugify,
};
