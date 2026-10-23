#!/usr/bin/env node
/**
 * Arthiva Money — Fresh New-User Seed & Reset Script (Dev / QA)
 *
 * Usage:
 *   1. Browser Console:
 *      window.seedFreshNewUser()
 *
 *   2. URL Query Trigger:
 *      Open index.html?reset=new-user in any browser.
 *
 *   3. In-App UI:
 *      Click "↺ Reset to new user" in the top Workbench bar, or
 *      Profile -> Developer / QA Tools -> "Reset to new user".
 */

if (typeof window !== "undefined" && typeof window.localStorage !== "undefined") {
  window.seedFreshNewUser = function () {
    if (typeof confirmResetToNewUser === "function") {
      confirmResetToNewUser();
      return;
    }
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.location.href = window.location.pathname + "?reset=new-user";
  };
}
